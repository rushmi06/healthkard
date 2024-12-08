import React from 'react'
import { blogs } from '../constants'
import BlogCard from '../../../components/Blog'
import GridContainer from '../../../components/GridContainer'
function Blogs() {
    return (
        <div className='w-full flex flex-col gap-4 justify-center items-center p-4'>
            <GridContainer blur={ false } label='Please Login to view more blogs'>
                { blogs.map((blog) => (
                    <BlogCard blog={ blog } />
                )) }
            </GridContainer>
        </div>
    )
}

export default Blogs
