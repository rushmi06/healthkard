import React from 'react'
import withTheme from '../../theme/Theme'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../../utils/scrollToTop'

function Blog({ blog, theme }) {
    const navigate = useNavigate()

    const onBlogClick = async () => {
        await scrollToTop();
        navigate(`/blog/${blog?.id}`,);
    }

    return (
        <div style={ { backgroundColor: theme.secondary } } className='flex flex-col justify-between items-start gap-2 w-40 h-48 lg:w-64 lg:h-80 border-2 border-gray-300 rounded shadow-md overflow-hidden'>
            <img src={ blog?.image } alt={ blog?.title } className='h-1/2 w-full object-fit-cover' />
            <div style={ { color: theme.text } } className='text-left p-2 flex-grow justify-between flex flex-col w-full'>
                <div className='flex flex-col gap-0.5 lg:gap-2'>
                    <div className='text-[10px] lg:text-sm font-semibold'>{ blog?.title }</div>
                    <div className='text-[8px] lg:text-xs text-ellipsis line-clamp-2 lg:line-clamp-5  w-full'>{ blog?.description }</div>
                </div>
                <div className='w-full flex justify-end'>
                    <Button label="Read More" type="btn-tertiary" onClick={ onBlogClick } />
                </div>
            </div>
        </div>
    )
}

export default withTheme(Blog)
