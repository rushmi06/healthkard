import React, { useState, useRef } from 'react'
import { FaArrowsRotate as RotateIcon } from "react-icons/fa6";
import withTheme from '../../theme/Theme'
import { FiCameraOff as CloseIcon } from "react-icons/fi";
import Button from '../Button';

function Camera({ isCameraOpen = false, setIsCameraOpen, theme, getImage }) {
    const [facingMode, setFacingMode] = useState('environment');
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [image, setImage] = useState(null);

    const openCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode },
                width: 480,
                height: 640
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const rotateCamera = () => {
        setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
        if (isCameraOpen) {
            openCamera(); // Re-open camera with new facing mode
        }
    };

    const takeShot = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
            const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
            setImage(imageDataUrl);
        }
    };
    if (!isCameraOpen) return null;
    return (
        <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50'>
            { isCameraOpen && (
                <div style={ { backgroundColor: theme.senary, color: theme.primary } } className='flex flex-col gap-4 relative w-[640px] h-[480px] rounded'>
                    { image ? <img src={ image } alt='captured' className='w-full h-full' /> : <video ref={ videoRef } autoPlay playsInline className='w-full h-full' /> }
                    <div className=' absolute bottom-2 left-0 w-full flex justify-center items-center gap-4'>
                        { image ? <Button label='Retake' onClick={ () => setImage(null) } /> : <button onClick={ rotateCamera } className='h-12 w-12 rounded-full flex justify-center items-center'>
                            <RotateIcon className='text-xl' />
                        </button> }
                        { image ? <Button label='Proceed' onClick={ () => { getImage(image); setIsCameraOpen(false) } } /> : <div onClick={ takeShot } style={ { border: `2px solid ${theme.primary}` } } className='h-12 w-12 rounded-full flex justify-center items-center'>
                            <div style={ { backgroundColor: theme.primary } } className='h-10 w-10 rounded-full'></div>
                        </div> }
                        { !image && <button onClick={ () => setIsCameraOpen(false) } className='h-12 w-12 rounded-full flex justify-center items-center'>
                            <CloseIcon className='text-xl' />
                        </button> }
                    </div>
                    <canvas ref={ canvasRef } style={ { display: 'none' } } width="640" height="480" />
                </div>
            ) }
        </div>
    );
}

export default withTheme(Camera)
