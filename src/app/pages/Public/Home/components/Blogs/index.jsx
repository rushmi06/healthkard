import React from 'react'
import Blog from '../../../../../components/Blog'
import Header from '../Header'
import { blogs } from '../../../constants'
// import ScrollContainer from '../../../../../components/ScrollContainer'

function Blogs({ theme }) {

    return (
        <div className='flex flex-col gap-4'>
            <Header heading="Latest Blogs" subHeading="Read our latest blogs to stay informed about the latest health trends and news." />
            <div className='flex flex-wrap gap-2 px-4 py-2'>
                { blogs.slice(0, 4).map((blog) => (
                    <Blog key={ blog.id } blog={ blog } theme={ theme } />
                )) }
            </div>
        </div >
    )
}

export default Blogs
