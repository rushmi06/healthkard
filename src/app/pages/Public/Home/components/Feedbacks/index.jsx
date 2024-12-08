import React from 'react'
import Header from "../Header"
import withTheme from "../../../../../theme/Theme"
import Feedback from "../../../../../components/Feedback"
import ScrollContainer from "../../../../../components/ScrollContainer"
import { FEEDBACKS } from "../../../constants"

function Feedbacks({ theme }) {
    return (
        <div>
            <Header heading="What Our Patients Say" subHeading="We are proud to have helped thousands of patients find the best hospitals and doctors in their city." />
            <ScrollContainer>
                <div className="flex justify-center gap-4">
                    {
                        FEEDBACKS.map((feedback) => (
                            <Feedback key={ feedback.id } feedback={ feedback } theme={ theme } />
                        ))
                    }
                </div>
            </ScrollContainer>
        </div>
    )
}

export default withTheme(Feedbacks)
