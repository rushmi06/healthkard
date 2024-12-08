import React from 'react'
import { FEEDBACKS } from '../constants'
import FeedbackCard from '../../../components/Feedback'
import GridContainer from '../../../components/GridContainer'
function Testimonials() {
    return (
        <div className='w-full flex flex-col gap-4 justify-center items-center p-4'>
            <GridContainer label='Please Login to view more testimonials'>
                { FEEDBACKS.map((feedback) => (
                    <FeedbackCard feedback={ feedback } />
                )) }
            </GridContainer>
        </div>
    )
}

export default Testimonials
