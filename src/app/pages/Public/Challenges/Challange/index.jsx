import React, { useEffect, useState } from 'react'
import Details from '../components/Details'
import { useParams } from 'react-router-dom'
import { challenges } from '../constants';
function Challenges() {
    const { challengeId } = useParams();
    const [challenge, setChallenge] = useState(null);
    useEffect(() => {
        const challenge = challenges.find((challenge) => challenge.id === parseInt(challengeId))
        setChallenge(challenge);
    }, [challengeId]);
    return (
        <div className='w-full p-2 flex flex-col gap-4 justify-center items-center'>
            <Details challenge={ challenge } />
        </div>
    )
}

export default Challenges
