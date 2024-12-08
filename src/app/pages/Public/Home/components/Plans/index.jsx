import React from 'react'
import Header from '../Header'
import withTheme from '../../../../../theme/Theme'
import { plans } from '../../../../../pages/constants'
import { FaCrown } from "react-icons/fa";
import { formatCurrency } from '../../../../../utils/format'

function Plans({ theme }) {

    const benefits = [{ label: 'Price', key: 'price' }, { label: 'Hospital Visits', key: 'hospitalVisits' }, { label: 'Doctor Consultations', key: 'doctorConsultations' }, { label: 'OP Fee', key: 'opFee' }, { label: 'Hidden Charges', key: 'hiddenCharges' }, { label: 'Valid Upto', key: 'validUpto' }]
    const headers = plans.map((plan) => ({ label: plan.name, key: plan.id, recommended: plan.recommended }))

    return (
        <div className='py-2 text-[10px] lg:text-lg'>
            <Header heading='Our Plans' subHeading='Get More, Pay Less' />
            <div className='px-4'>
                <table className='w-full rounded-lg' style={ { color: theme.text, border: `1px solid ${theme.tertiary}` } } >
                    <thead className='' style={ { backgroundColor: theme.primary, color: theme.textSecondary } }>
                        <tr className=''>
                            <th className='py-2 px-1 text-left'>Benefits</th>
                            { headers.map((header, index) => (
                                <th className='py-2 px-1 text-left' key={ index }>
                                    <div className='flex items-center gap-1'>
                                        { header.recommended && <span className='text-xs text-yellow-500'><FaCrown /></span> }
                                        { header.label }
                                    </div>
                                </th>
                            )) }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            benefits.map((benefit, index) => (
                                <tr key={ index } style={ { backgroundColor: index % 2 === 0 ? '' : theme.secondary } } className='lg:hover:scale-105 lg:hover:translate-x-10 hover:cursor-pointer hover:shadow transition-all duration-300'>
                                    <td className='py-2 px-1 text-left'>{ benefit.label }</td>
                                    {
                                        headers.map((_, index) => (
                                            benefit.key === 'price' ?
                                                <td className='py-2 px-1 text-left text-sm lg:text-2xl font-semibold' key={ index }> { formatCurrency(plans[index][benefit.key]) }</td>
                                                :
                                                <td className='py-2 px-1 text-left' key={ index }>{ plans[index][benefit.key] }</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default withTheme(Plans)
