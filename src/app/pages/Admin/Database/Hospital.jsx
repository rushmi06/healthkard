import React, { useEffect, useState } from 'react'
import Graph from '../../../components/Graph'
import { formatHospitalGraph } from './graphFormat'
import httpService from '../../../api/httpService'
import withTheme from '../../../theme/Theme'
import Button from '../../../components/Button'
import { downloadJSON } from '../../../utils/exportCSV'

function Hospital({ theme }) {
    const [dataPoints, setDataPoints] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const hospitals = await httpService.get('hospitals', '?limit=100000');
                const formattedDataPoints = formatHospitalGraph(hospitals.hospitals);
                setDataPoints(formattedDataPoints);
                setHospitals(hospitals.hospitals);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            <Graph dataPoints={ dataPoints } loading={ loading } />
            <div style={ { color: theme.text } } className='flex justify-between'>
                <div>Total hospitals: { hospitals.length }</div>
            </div>
            <div style={ { color: theme.text } } className='flex justify-between'>
                <Button label='Export CSV' onClick={ () => { downloadJSON(hospitals, 'hospitals') } } disabled={ loading } />
            </div>
        </div>
    )
}

export default withTheme(Hospital)
