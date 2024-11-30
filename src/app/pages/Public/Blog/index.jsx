import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../constants'
import withTheme from '../../../theme/Theme'
import { RxDotFilled } from "react-icons/rx";
import BlogCard from '../../../components/Blog'

function Blog({ theme }) {
    const { blogId } = useParams()
    const blog = blogs.find((blog) => blog.id === parseInt(blogId))

    return (
        <div className='flex flex-col gap-4 h-full overflow-y-auto'>
            <div className='flex flex-col lg:flex-row p-4 gap-4'>
                <div className='h-full w-full lg:w-1/3'>
                    <img src={ blog?.image } alt={ blog?.title } className='w-full h-full object-cover' />
                </div>
                <div className='w-full lg:w-2/3'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold' style={ { color: theme.primary } }>{ blog?.question }</h2>
                        <div style={ { color: theme.text } } className=''>
                            { blog?.answer }
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold' style={ { color: theme.primary } }>Symptoms</h2>
                        <div style={ { color: theme.text } } className=''>
                            { blog?.symptoms.join(', ') }
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold' style={ { color: theme.primary } }>First Aid</h2>
                        <ul style={ { color: theme.text } } className=''>
                            { blog?.firstAid?.map((step) => (
                                <li className='flex flex-row gap-2 items-center'>
                                    <RxDotFilled />
                                    { step }
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold' style={ { color: theme.primary } }>Preventions</h2>
                        <ul style={ { color: theme.text } } className=''>
                            { blog?.preventions?.map((prevention) => (
                                <li className='flex flex-row gap-2 items-center'>
                                    { prevention.heading } : { prevention.description }
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold' style={ { color: theme.primary } }>{ blog?.title }</h1>
                        <p style={ { color: theme.text } } className='text-sm'>{ blog?.description }</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-4'>
                <h2 className='text-xl font-bold' style={ { color: theme.primary } }>Related Blogs</h2>
                <div className='flex flex-row flex-wrap gap-4 p-2'>
                    { blogs.map((blog) => (
                        <BlogCard blog={ blog } />
                    )) }
                </div>
            </div>
        </div>
    )
}

export default withTheme(Blog)
