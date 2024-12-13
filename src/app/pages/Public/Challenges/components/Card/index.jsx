import React from 'react'
import withTheme from '../../../../../theme/Theme'
import { formatCurrency } from '../../../../../utils/format'
import { Link } from 'react-router-dom'

function Card({ challenge, theme }) {
    return (
        <Link to={ `/challenges/${challenge.id}` } style={ { border: `1px solid ${theme.tertiary}` } } className='w-80 h-80 flex flex-col gap-4 justify-center items-start rounded shadow overflow-hidden'>
            <div className='w-full h-1/2'>
                <img src={ challenge.image } alt={ challenge.name } className='w-full h-full object-cover' />
            </div>
            <div className='w-full h-1/2 flex flex-col gap-2 justify-between items-start px-2 py-4'>
                <div className='font-bold text-xl'>{ challenge.name }</div>
                <div style={ { color: theme.tertiary } } className='text-sm'>{ challenge.description }</div>
                <div className='flex justify-between items-start w-full'>
                    <div className=''>{ formatCurrency(challenge.prize) }</div>
                    <div style={ { color: theme.tertiary } } className=''>{ challenge.duration } days</div>
                </div>
            </div>
        </Link>
    )
}

export default withTheme(Card)
