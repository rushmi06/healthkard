import React, { useState } from 'react'
import withTheme from '../../../../theme/Theme'
import { YOUTUBE_VIDEO_IDS } from './constants'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
function Youtube({ theme }) {
    const [youtubeVideos, setYoutubeVideos] = useState(YOUTUBE_VIDEO_IDS);
    const [videoId, setVideoId] = useState(null);

    const addVideo = () => {
        setYoutubeVideos([...youtubeVideos, {
            date: Date.now(),
            iFrameSrc: videoId || 'https://www.youtube.com/embed/FTFaQWZBqQ8?si=gkNGw9dRn8H9C1F1',
        }])
    }
    return (
        <div style={ { backgroundColor: theme.secondary } } className=' rounded h-full flex-grow overflow-y-scroll flex flex-col gap-2'>
            <div className='flex justify-between'>
                <div style={ { color: theme.primary } } className='text-2xl font-semibold p-4'>Youtube</div>
            </div>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex flex-col gap-2 w-full  py-2 px-4'>
                <div className='w-full justify-between flex'>
                    <Input onChange={ (value) => setVideoId(value) } placeholder='Search' label='Please enter the video id' style={ { width: '60%' } } />
                    <Button label='Add Video' onClick={ addVideo } disabled={ !videoId } />
                </div>
                <div style={ { color: theme.warning } } className='w-full text-[10px]   '>
                    Note: Please enter the video id in the format of "https://www.youtube.com/embed/VIDEO_ID", You can get the video id by clicking on the share button and copying the video id from the URL.
                </div>
            </div>
            <div style={ { color: theme.primary } } className='text-xl font-semibold px-4'>
                Our Youtube Videos
            </div>
            <div className='flex w-full flex-wrap gap-4 px-4'>
                { youtubeVideos.map((video, index) => (
                    <iframe key={ index } width="315" height="180" src={ video.iFrameSrc } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                )) }
            </div>
        </div>
    )
}

export default withTheme(Youtube)
