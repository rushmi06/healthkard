import React, { useEffect, useState } from 'react'
import withTheme from '../../../../theme/Theme';
import { formatData } from '../../../../utils/agentDataFormat';
import { formatCurrency } from '../../../../utils/format';

function UsersAdded({ users, theme }) {
    const [formattedUsers, setFormattedUsers] = useState([]);
    useEffect(() => {
        const formattedUsers = formatData(users, 'healthID');
        setFormattedUsers(formattedUsers.reverse());
    }, [users]);

    return (
        <div style={ { color: theme.text } } className='flex flex-col gap-2 p-2'>
            {
                formattedUsers?.map((date, index) => (
                    <div key={ index } className='flex flex-col gap-2'>
                        <div style={ { backgroundColor: theme.secondary } } className='w-full flex justify-between text-lg font-semibold p-2 rounded-md'>
                            <div className=''>{ date.date }</div>
                            <div className='flex text-sm items-center gap-4'>
                                <div className=''>Count : { date.healthID.length }</div>
                                <div className=''>Total : { formatCurrency(date.healthID.reduce((sum, user) => sum + user.amount, 0)) }</div>
                            </div>
                        </div>
                        { date.healthID.map((user, index) => (
                            <UserCard key={ index } user={ user } />
                        )) }
                    </div>
                ))
            }
        </div>
    )
}

export default withTheme(UsersAdded);

const UserCard = ({ user }) => {
    if (!user.name) return null;
    return (
        <div className='flex gap-2 w-full p-2 hover:cursor-pointer justify-between'>
            <div className='text-sm w-1/5'>
                <div className='flex font-semibold items-center gap-2'>{ user.name }</div>
                <div className='flex items-center gap-2 text-xs'>{ user.healthID }</div>
            </div>
            <div className='flex flex-col items-end gap-2'>
                <div className='text-sm'>{ formatCurrency(user.amount) }</div>
                <div className='text-xs'>{ user.type }</div>
            </div>
        </div>
    )
}

