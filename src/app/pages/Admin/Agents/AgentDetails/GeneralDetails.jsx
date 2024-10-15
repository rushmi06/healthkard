import React from 'react';
import withTheme from '../../../../theme/Theme';
import { formatCurrency, formatDate, formatNumber } from '../../../../utils/format';

function GeneralDetails({ agent, theme }) {

    const details = [
        { label: 'Agent ID', value: agent?.agentID },
        { label: 'Name', value: agent?.name },
        { label: 'Email', value: agent?.email },
        { label: 'Number', value: formatNumber(agent?.number) },
        { label: 'Password', value: agent?.password },
        { label: 'Create Date', value: formatDate(agent?.createDate) },
        { label: 'Users Added', value: agent?.usersAdded?.length || 0 },
        { label: 'Hospitals Added', value: agent?.hospitalsAdded?.length || 0 },
        { label: 'Healthkards Target', value: formatCurrency(agent?.healthkardsTarget) },
        { label: 'Hospitals Target', value: agent?.hospitalsTarget },
    ]

    return (
        <div className='flex justify-between w-full p-2'>
            <div style={ { color: theme.text } } className='flex flex-col gap-2 w-1/2'>
                {
                    details.map((detail, index) => (
                        <div key={ index } className='flex gap-2 w-full p-2 hover:cursor-pointer'>
                            <div className='text-sm font-semibold w-2/5'>{ detail.label } </div>
                            <div className='text-sm w-3/5'> : { detail.value }</div>
                        </div>
                    ))
                }
            </div>
            <div className='w-1/2 px-4'>
                <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='h-24 w-24 rounded flex flex-col items-center justify-center'>
                    <div className='text-sm font-semibold'> { formatCurrency(12000) }</div>
                    <div style={ { backgroundColor: theme.primary, color: theme.text } } className='w-full h-[1px]'></div>
                    <div className='text-sm font-semibold'> { formatCurrency(agent?.healthkardsTarget) }</div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(GeneralDetails);
