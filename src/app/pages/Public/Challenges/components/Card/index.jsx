import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleFitService } from '../../services/googleFitService';
import Button from '../../../../../components/Button';
import { ArrowRight, Award, Clock } from 'lucide-react';
import withTheme from '../../../../../theme/Theme';
import { isUserLoggedIn } from '../../../../../utils/auth';
const Card = ({ challenge, theme }) => {
    const [isConnecting, setIsConnecting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleGoogleFitConnect = async () => {
        setIsConnecting(true);
        try {
            console.log('Starting Google Fit connection...');

            if (!window.gapi) {
                console.error('Google API client not loaded');
                throw new Error('Google API client not loaded. Please refresh the page.');
            }

            console.log('Initializing Google Fit...');
            await googleFitService.init();
            console.log('Google Fit initialized');

            console.log('Attempting to connect...');
            const isConnected = await googleFitService.connect();
            console.log('Connection result:', isConnected);

            if (isConnected) {
                setShowModal(false);
                setShowSuccessModal(true);
                setTimeout(() => {
                    setShowSuccessModal(false);
                    navigate('/challenges/dashboard');
                }, 2000);
            } else {
                throw new Error('Failed to connect to Google Fit');
            }
        } catch (error) {
            console.error('Google Fit connection error:', error);
            setErrorMessage(error.message || 'Failed to connect to Google Fit');
            setShowErrorModal(true);
        } finally {
            setIsConnecting(false);
        }
    };

    const handleViewDetails = () => {
        if (!isUserLoggedIn()) {
            navigate('/auth/user/login')
            return;
        }
        setShowModal(true);
    };

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.text } } className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img
                    src={ challenge.image }
                    alt={ challenge.title }
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Ready for Challenge
                </div>
            </div>

            <div className="px-6 py-4 space-y-4">
                <div className="space-y-2">
                    <h3 style={ { color: theme.primary } } className="text-xl font-bold ">{ challenge.title }</h3>
                    <p className="text-sm">
                        { challenge.description }
                    </p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <Clock size={ 16 } />
                        <span>{ challenge.duration } days</span>
                    </div>
                    <div style={ { color: theme.primary } } className="flex items-center gap-1 font-semibold">
                        <Award size={ 16 } />
                        <span>₹ { challenge.prize }</span>
                    </div>
                </div>

                <Button
                    label={
                        <div className="flex items-center justify-center gap-2">
                            { isConnecting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    <span>Connecting...</span>
                                </>
                            ) : (
                                <>
                                    <span>View Challenge Details</span>
                                    <ArrowRight size={ 16 } />
                                </>
                            ) }
                        </div>
                    }
                    onClick={ handleViewDetails }
                    disabled={ isConnecting }
                    className="w-full !bg-blue-600 hover:!bg-blue-700 transition-colors duration-300"
                />
            </div>

            { showModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div
                            className="fixed inset-0 bg-black opacity-50"
                            onClick={ () => setShowModal(false) }
                        ></div>

                        <div style={ { backgroundColor: theme.senary, border: `1px solid ${theme.primary}` } } className="relative rounded-lg w-full max-w-2xl p-6">
                            <h2 className="text-xl font-bold text-blue-600 mb-4">
                                Ready for Challenge
                            </h2>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700">{ challenge.description }</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="text-lg font-semibold text-gray-700">{ challenge.duration } Days</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-500">Prize Pool</p>
                                        <p className="text-lg font-semibold text-gray-700">₹{ challenge.prize }</p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-yellow-800">
                                        🎯 Complete 10,000 steps daily to win exciting prizes!
                                    </p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-yellow-800">
                                        Note: For now, we are working on the Google Fit integration. We will update you once it is ready.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end space-x-3">
                                <Button label="Maybe Later" onClick={ () => setShowModal(false) } type="btn-secondary" />
                                <Button label={ isConnecting ? 'Connecting...' : 'Register for Challenge' } onClick={ handleGoogleFitConnect } type="btn-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            ) }

            { showSuccessModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="relative bg-white rounded-lg w-full max-w-md p-6 text-center">
                            <div className="mb-4">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Successfully Connected!</h3>
                            <p className="text-sm text-gray-500">
                                You have successfully connected to Google Fit. Redirecting to dashboard...
                            </p>
                        </div>
                    </div>
                </div>
            ) }

            { showErrorModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div
                            className="fixed inset-0 bg-black opacity-50"
                            onClick={ () => setShowErrorModal(false) }
                        ></div>
                        <div className="relative bg-white rounded-lg w-full max-w-md p-6 text-center">
                            <div className="mb-4">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Connection Failed</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                { errorMessage }
                            </p>
                            <Button label="Close" onClick={ () => setShowErrorModal(false) } type="btn-danger" style={ { width: '100%' } } />
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default withTheme(Card);