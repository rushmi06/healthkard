import React from 'react'
import withTheme from '../../theme/Theme'
import healthkardTop from '../../assets/healthkardTop.png'
import healthkardTopDark from '../../assets/healthkardTopDark.png'
import sign from '../../assets/sign.png'
import healthkardLogo from '../../../logo.svg'
import './style.css'
import { formatDate, formatNumber } from '../../utils/format'
import { checkValidation } from '../../utils/checkValidation'
import { GoStop } from "react-icons/go";


function Healthkard({ theme, user }) {
    if (!user) return null
    return (
        <div id='healthkard' style={ { backgroundColor: theme.secondary, color: theme.text, border: `1px solid ${theme.primary}` } } className='rounded text-[0.7rem]'>
            <div id='healthkard-top' style={ { backgroundImage: `url(${theme.text !== '#000' ? healthkardTopDark : healthkardTop})`, color: theme.textSecondary } } className=' bg-cover bg-center rounded p-2 flex justify-between items-start'>
                <div className='flex flex-col'>
                    <div className='font-semibold'>Healthkard</div>
                    <div className='font-light'>Powered by halekard pvt ltd</div>
                </div>
                <img src={ healthkardLogo } alt='healthkard' className='w-10 h-10' />
            </div>
            <div id='healthkard-bottom' style={ { color: theme.text } } className='flex justify-between p-2'>
                <div className='flex flex-col h-full justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-end gap-2'>
                            <div className='font-semibold'>{ user?.name }</div>
                            <div className='font-thin'>{ user?.gender === 'male' || user?.gender === 'Male' ? 'M' : 'F' }/{ user?.age || (new Date().getFullYear() - new Date(user?.dob).getFullYear()) } Yr</div>
                        </div>
                        <div className='flex flex-row items-end gap-2'>
                            <div className='font-semibold'>DOB</div>
                            <div className='font-thin'>{ formatDate(user?.dob) }</div>
                        </div>
                        <div className='flex flex-row items-end gap-2'>
                            { formatNumber(user?.number) } | { user?.email }
                        </div>
                        <div className=''>
                            { user?.address }, { user?.city }, { user?.pincode }
                        </div>
                    </div>
                    { checkValidation(user) ?
                        <div className='flex flex-col'>
                            <div className='font-semibold'>Valid till</div>
                            <div className=''>{ formatDate(user?.expireDate) }</div>
                        </div>
                        : <div style={ { color: theme.danger } } className='flex text-2xl gap-2 items-center'>
                            <GoStop />
                            <div className='font-semibold'>Not Valid</div>
                        </div> }
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col items-center gap-1'>
                        <img id='healthkard-image' src={ user?.image } alt={ user?.name } className='rounded-full' />
                        <div className='flex font-semibold'>{ user?.healthId }</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={ sign } alt='sign' className='w-10 h-10' />
                        <div className='flex font-semibold'>Founder Signature</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(Healthkard)
