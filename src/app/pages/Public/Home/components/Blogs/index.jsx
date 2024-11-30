import React from 'react'
import Blog from '../../../../../components/Blog'
import Header from '../Header'
import { blogs } from '../../../constants'
// import ScrollContainer from '../../../../../components/ScrollContainer'

function Blogs({ theme }) {

    return (
        <div className='flex flex-col gap-4'>
            <Header heading="Our Blogs" subHeading="Expert advice for Healthy Life." />
            <div className='flex gap-2 flex-wrap lg:flex-nowrap px-4 py-2'>
                { blogs.map((blog) => (
                    <Blog key={ blog.id } blog={ blog } theme={ theme } />
                )) }
            </div>
        </div >
    )
}

export default Blogs
