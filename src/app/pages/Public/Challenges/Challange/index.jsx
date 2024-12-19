// src/app/pages/Public/Challenges/index.jsx
// or wherever your main Challenges component is located

import React from 'react';
import Card from '../components/Card'

function Challenges() {
    // Define your challenge data
    const challengeData = {
        id: 1,
        title: "30-Day Step Challenge",
        description: "Walk 10,000 steps every day for 30 days to improve your fitness and win exciting prizes!",
        duration: 30,
        prize: 10000,
        image: "/step-challenge.jpg"
    };

    return (
        <div className='w-full min-h-full'>
            {/* Pass the challenge data to the Card component */}
            <Card challenge={challengeData} />
        </div>
    );
}

export default Challenges;