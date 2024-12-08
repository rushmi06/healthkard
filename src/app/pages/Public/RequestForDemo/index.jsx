import React from 'react'
import withTheme from '../../../theme/Theme'
import clickHere from '../../../assets/clickhere.gif'

function RequestForDemo({ theme }) {
    const videos = [
        'https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/request-for-demo%2Fvideo1.mp4?alt=media&token=363281d5-4294-4678-b448-7dbc8433b249',
        'https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/request-for-demo%2Fvideo2.mp4?alt=media&token=62a9cedc-7c15-40b7-b9b5-36e79f6b64e6'
    ]
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='w-full h-full flex flex-col p-4'>
            <h1 style={ { color: theme.primary } } className='text-4xl font-bold mb-10'>Request for demo</h1>
            <div className='text-xl flex items-center'>
                <div className='mr-4 text-2xl font-semibold'>Want to know more about HealthKard?</div>
                <img src={ clickHere } alt='click here' className='w-20 h-20' />
                <a href={ videos[0] } target='_blank' rel='noreferrer' style={ { color: theme.primary, textDecoration: 'underline' } }>Click here</a>
            </div>
            <div className='text-xl flex items-center'>
                <div className='mr-4 text-2xl font-semibold'>Do you want to login to HealthKard?</div>
                <img src={ clickHere } alt='click here' className='w-20 h-20' />
                <a href={ videos[1] } target='_blank' rel='noreferrer' style={ { color: theme.primary, textDecoration: 'underline' } }>Click here</a>
            </div>
        </div>
    )
}

export default withTheme(RequestForDemo)    
