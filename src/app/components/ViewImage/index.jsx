import React, { useState } from 'react'
import imagePlaceholder from '../../assets/image_placeholder.jpg'
import './ViewImage.css'
import withTheme from '../../theme/Theme'
import { MdDelete } from "react-icons/md";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import viewImageTrigger from './viewImageTrigger';
import CloseOnOutsideClick from '../CloseOnOutsideClick';
import alertTrigger from '../Alert/alertTrigger';

function ViewImage({ theme }) {

    const [image, setImage] = useState({
        url: imagePlaceholder,
        name: 'Image name'
    })
    const [onHover, setOnHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    viewImageTrigger.subscribe(({ image, header }) => {
        setImage({
            url: image,
            name: header
        })
        setIsOpen(true)
    })

    const closeViewImage = () => {
        setIsOpen(false)
    }

    const openImageInTab = (url) => {
        window.open(url, '_blank')
    }

    const handleMouseEnter = () => {
        setOnHover(true)
    }
    const handleMouseLeave = () => {
        setOnHover(false)
    }

    const deleteImage = (url) => {
        alertTrigger.emit(
            'Confirm Deletion',
            `Are you sure you want to delete this image?`,
            () => {
                console.log('Deletion cancelled')
            },
            () => {
                console.log('Deleting image:', url)
            }
        )
    }

    if (!isOpen) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20'>

            <div onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } className='relative flex flex-col gap-4 view-image'>
                <CloseOnOutsideClick style={ { width: '100%', height: '100%' } } onClose={ closeViewImage }>
                    <div
                        style={ {
                            color: theme.primary,
                            backgroundColor: theme.secondary,
                            opacity: onHover ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        } }
                        className='absolute top-0 left-0 w-full px-2 py-1'
                    >
                        { image.name }
                    </div>
                    <img src={ image.url } alt='view-image' className='w-full h-full rounded' />
                    <div
                        style={ {
                            opacity: onHover ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        } }
                        className='absolute bottom-0 left-0 w-full flex justify-between'
                    >
                        <button type='button' onClick={ () => deleteImage(image.url) } style={ { color: theme.danger, backgroundColor: theme.secondary } } className='rounded-tr-full w-20 h-20 text-2xl flex justify-start p-2 items-end'>
                            <MdDelete />
                        </button>
                        <button onClick={ () => openImageInTab(image.url) } type='button' style={ { color: theme.primary, backgroundColor: theme.secondary } } className='rounded-tl-full w-20 h-20 text-2xl flex justify-end p-2 items-end'>
                            <HiOutlineArrowTopRightOnSquare />
                        </button>
                    </div>
                </CloseOnOutsideClick>
            </div>

        </div>
    )
}

export default withTheme(ViewImage)
