import React, { useEffect, useState } from 'react'
import Graph from '../../../components/Graph'
import { formatUserGraph } from './graphFormat'
import httpService from '../../../api/httpService'
import withTheme from '../../../theme/Theme'
import Button from '../../../components/Button'
import { downloadJSON } from '../../../utils/exportCSV'

function User({ theme }) {
    const [dataPoints, setDataPoints] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await httpService.get('users');
                const formattedDataPoints = formatUserGraph(users.users);
                setDataPoints(formattedDataPoints);
                setUsers(users.users);
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
                <div>Total users: { users.length }</div>
                <div>Total active users: { users.filter(user => user.expireDate > new Date()).length }</div>
            </div>
            <div style={ { color: theme.text } } className='flex justify-between'>
                <Button label='Export CSV' onClick={ () => { downloadJSON(users, 'users') } } disabled={ loading } />
            </div>
        </div>
    )
}

export default withTheme(User)
