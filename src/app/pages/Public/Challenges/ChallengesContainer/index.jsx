import React from 'react'
import { challenges } from '../constants'
import Card from '../components/Card'

function ChallengesContainer() {
    return (
        <div className='w-full min-h-full flex flex-col justify-start items-start p-4'>
            <div className='w-full flex flex-col gap-4 justify-center items-start'>
                <div className='flex flex-col gap-4 justify-center items-center font-bold text-2xl'>Health Challenges</div>
                <div className=''>Join our challenges to improve your health and win exciting prizes!</div>
            </div>
            <div className='w-full flex flex-col gap-4 justify-center items-start'>
                { challenges.map((challenge) => (
                    <Card key={ challenge.id } challenge={ challenge } />
                )) }
            </div>
        </div>
    )
}

export default ChallengesContainer
