import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { googleFitService } from '../services/googleFitService';
import Button from '../../../../components/Button';
import useCustomEffect from '../../../../hooks/customUseEffect';

function Dashboard() {
    const [stepsData, setStepsData] = useState([]);
    const [timeRange, setTimeRange] = useState('weekly');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        totalSteps: 0,
        currentStreak: 0,
        averageSteps: 0,
        progress: 0
    });
    const navigate = useNavigate();

    const calculateStats = (data) => {
        if (!data.length) return;

        const total = data.reduce((sum, day) => sum + day.steps, 0);
        const average = Math.round(total / data.length);
        let currentStreak = 0;

        // Calculate streak
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].steps >= 10000) {
                currentStreak++;
            } else {
                break;
            }
        }

        // Calculate progress (days completed / 30 days)
        const daysCompleted = data.filter(day => day.steps >= 10000).length;
        const progress = Math.min(Math.round((daysCompleted / 30) * 100), 100);

        setStats({
            totalSteps: total,
            currentStreak,
            averageSteps: average,
            progress
        });
    };

    const fetchStepsData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            let data;

            switch (timeRange) {
                case 'daily':
                    data = await googleFitService.getDailySteps();
                    if (data && data.length > 0) {
                        const todaySteps = data[data.length - 1].steps;
                        console.log('Steps taken today:', todaySteps);
                    }
                    break;
                case 'weekly':
                    data = await googleFitService.getWeeklySteps();
                    break;
                case 'monthly':
                    data = await googleFitService.getMonthlySteps();
                    break;
                default:
                    data = await googleFitService.getWeeklySteps();
            }

            const formattedData = data.map(item => ({
                date: item.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                steps: item.steps,
                goal: 10000
            }));

            setStepsData(formattedData);
            calculateStats(formattedData);
        } catch (err) {
            setError('Failed to fetch steps data. Please try again.');
            console.error('Error fetching steps data:', err);
        } finally {
            setLoading(false);
        }
    }, [timeRange]);

    useCustomEffect(() => {
        fetchStepsData();
    }, [fetchStepsData]);

    const StatCard = ({ icon, value, label, color }) => (
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
            <div className={ `p-3 rounded-lg ${color}` }>
                <span className="text-2xl text-white">{ icon }</span>
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{ value.toLocaleString() }</div>
                <div className="text-sm text-gray-500">{ label }</div>
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <p className="text-red-500">{ error }</p>
                <Button label="Try Again" onClick={ fetchStepsData } />
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            {/* Header */ }
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Steps Challenge Dashboard</h1>
                <Button
                    label="Back to Challenges"
                    onClick={ () => navigate('/challenges') }
                    className="!bg-gray-100 !text-gray-600 hover:!bg-gray-200"
                />
            </div>

            {/* Stats Grid */ }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon="👣"
                    value={ stats.totalSteps }
                    label="Total Steps"
                    color="bg-blue-500"
                />
                <StatCard
                    icon="🔥"
                    value={ stats.currentStreak }
                    label="Current Streak"
                    color="bg-green-500"
                />
                <StatCard
                    icon="📈"
                    value={ stats.averageSteps }
                    label="Average Steps"
                    color="bg-purple-500"
                />
                <StatCard
                    icon="🏆"
                    value={ stats.progress }
                    label="Progress"
                    color="bg-red-500"
                />
            </div>

            {/* Time Range Selector */ }
            <div className="flex gap-4 justify-center">
                <Button
                    label="Daily"
                    onClick={ () => setTimeRange('daily') }
                    className={ `${timeRange === 'daily' ? '!bg-blue-600' : '!bg-gray-100 !text-gray-600'}` }
                />
                <Button
                    label="Weekly"
                    onClick={ () => setTimeRange('weekly') }
                    className={ `${timeRange === 'weekly' ? '!bg-blue-600' : '!bg-gray-100 !text-gray-600'}` }
                />
                <Button
                    label="Monthly"
                    onClick={ () => setTimeRange('monthly') }
                    className={ `${timeRange === 'monthly' ? '!bg-blue-600' : '!bg-gray-100 !text-gray-600'}` }
                />
            </div>

            {/* Charts */ }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */ }
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Steps Overview</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ stepsData }>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="steps" fill="#3B82F6" radius={ [4, 4, 0, 0] } />
                                <Bar dataKey="goal" fill="#E5E7EB" radius={ [4, 4, 0, 0] } />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Line Chart */ }
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={ stepsData }>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="steps"
                                    stroke="#3B82F6"
                                    strokeWidth={ 2 }
                                    dot={ { fill: '#3B82F6', strokeWidth: 2 } }
                                />
                                <Line
                                    type="monotone"
                                    dataKey="goal"
                                    stroke="#E5E7EB"
                                    strokeDasharray="5 5"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;