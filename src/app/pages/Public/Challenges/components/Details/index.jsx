import React, { useEffect, useState } from 'react'
import withTheme from '../../../../../theme/Theme'
import { PiArrowElbowRightFill } from "react-icons/pi";
import Button from '../../../../../components/Button'
import { HiOutlineTrophy } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FiTarget } from "react-icons/fi";
import { formatCurrency, formateInteger } from '../../../../../utils/format'

function Details({ challenge, theme }) {
    const [conditions, setConditions] = useState([]);
    useEffect(() => {
        if (!challenge) return;
        setConditions([
            { label: 'Prize', value: formatCurrency(challenge?.prize), icon: <HiOutlineTrophy size={ 24 } color={ 'gold' } /> },
            { label: 'Duration', value: formateInteger(challenge?.duration), icon: <SlCalender size={ 24 } color={ 'blue' } /> },
            { label: 'Target', value: formateInteger(challenge?.target), icon: <FiTarget size={ 24 } color={ 'red' } /> },
        ]);
    }, [challenge]);
    if (!challenge) return null;

    return (
        <div style={ { border: `1px solid ${theme.tertiary}` } } className='w-full lg:w-2/3 rounded-lg shadow-lg overflow-hidden'>
            <div className='w-full h-80'>
                <img src={ challenge.image } alt={ challenge.name } className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-4 p-4'>
                <div className='text-2xl font-bold'>{ challenge?.name }</div>
                <div className='flex justify-between items-center'>
                    {
                        conditions.map((condition, index) => (
                            <ConditionCard condition={ condition } theme={ theme } key={ index } />
                        ))
                    }
                </div>
                <div className='flex flex-col gap-2'>
                    <div style={ { color: theme.primary } } className='text-xl font-semibold'>Description</div>
                    <div style={ { color: theme.tertiary } } className='text-sm lg:text-lg'>{ challenge.description }</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div style={ { color: theme.primary } } className='text-xl font-semibold'>Terms & Conditions</div>
                    <div style={ { color: theme.tertiary } } className='text-sm gap-2 flex flex-col'>
                        {
                            challenge.termsandconditions.map((term, index) => (
                                <div key={ index } className='flex gap-1 items-center text-sm lg:text-lg'>
                                    <PiArrowElbowRightFill style={ { color: theme.success } } />
                                    <div style={ { color: theme.tertiary } } className=' '>{ term }</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Button label={ challenge.button.label } onClick={ challenge.button.onClick } theme={ theme } />
                </div>
            </div>
        </div>
    )
}
const ConditionCard = ({ condition, theme }) => {
    return (
        <div className='flex items-center gap-2'>
            { condition.icon }
            <div className='flex flex-col '>
                <p style={ { color: theme.tertiary } } className='text-xs lg:text-sm'>{ condition.label }</p>
                <p style={ { color: theme.primary } } className='text-sm lg:text-lg font-bold'>{ condition.value }</p>
            </div>
        </div>
    )
}
export default withTheme(Details)
