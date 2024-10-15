import React from 'react'
import withTheme from '../../../../theme/Theme'
import { FaCircleUser } from "react-icons/fa6";
import { formatDate } from '../../../../utils/format';

function MobileKard({ user, theme }) {
    return (
        <div style={ { backgroundColor: theme.textSecondary, color: theme.text, border: `1px solid ${theme.primary}` } } className="max-w-sm mx-auto w-1/2 flex flex-col justify-between h-full shadow rounded overflow-hidden ">
            {/* Mobile-like header */ }
            <div style={ { backgroundColor: theme.secondary } } className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                    <span className="text-xs">{ formatDate(user?.createdAt) }</span>
                    <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    </svg>
                </div>
                <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                </div>
            </div>

            {/* Content */ }
            <div className='flex text-xs flex-col items-center flex-1 w-full p-2 relative'>
                <div clasName=''>
                    <FaCircleUser className='w-16 h-16' />
                </div>
                <div className='flex flex-col items-center justify-center w-full px-2 my-2'>
                    <div className='text-lg font-semibold'>{ user?.name }</div>
                    <div className='text-sm'>+91 { user?.number }</div>
                    <div className='text-sm'>{ user?.email }</div>
                    <div className='text-sm'>Password : { user?.password }</div>
                </div>
                <div className='flex flex-col w-full px-2 my-2 absolute bottom-0 text-center'>
                    Last Updated : { formatDate(user?.updatedAt) }
                </div>
            </div>

            {/* Mobile-like footer */ }
            <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className="px-4 py-3 flex justify-around">
                <div className=" hover:text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <div className=" hover:text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className=" hover:text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default withTheme(MobileKard)
