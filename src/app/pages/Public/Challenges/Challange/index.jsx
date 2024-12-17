import React, { useEffect, useState } from 'react'
import Details from '../components/Details'
import { useParams, useNavigate } from 'react-router-dom'
import { challenges } from '../constants';
import Button from '../../../../components/Button';
function Challenges() {
    const { challengeId } = useParams();
    const [challenge, setChallenge] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const challenge = challenges.find((challenge) => challenge.id === parseInt(challengeId))
        setChallenge(challenge);
    }, [challengeId]);
    return (
        <div className='w-full p-2 flex flex-col gap-4 justify-center items-center relative'>
            <Details challenge={ challenge } />
            <div className='fixed bottom-4 right-4 shadow-lg'>
                <Button label='Go to Dashboard' onClick={ () => { navigate('/challenges/dashboard') } } />
            </div>
        </div>
    )
}

export default Challenges
