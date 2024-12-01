import React from 'react'
import Blog from '../../../../../components/Blog'
import Header from '../Header'
import { blogs } from '../../../constants'
import ScrollContainer from '../../../../../components/ScrollContainer'

function Blogs({ theme }) {

    return (
        <div className='flex flex-col gap-4'>
            <Header heading="Our Blogs" subHeading="Expert advice for Healthy Life." />
            <ScrollContainer>
                <div className='flex flex-wrap lg:flex-nowrap pb-4 gap-4'>
                    { blogs.map((blog) => (
                        <Blog key={ blog.id } blog={ blog } theme={ theme } />
                    )) }
                </div>
            </ScrollContainer>
        </div >
    )
}

export default Blogs
