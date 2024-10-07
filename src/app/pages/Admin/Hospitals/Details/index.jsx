import React, { useEffect, useState } from 'react'
import withTheme from '../../../../theme/Theme'
import { useParams } from 'react-router-dom'
import httpService from '../../../../api/httpService'
import { formateAddress, formatNumber } from '../../../../utils/format'
import { IoIosAdd, IoIosClose, IoMdCall, IoIosSend, IoMdTrash, IoIosMail } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { days } from '../constants'
import alertTrigger from '../../../../components/Alert/alertTrigger';
import emailBoxTrigger from '../../../../components/EmailBox/emailBoxTrigger'
import EditHome from './EditHome'
import GeneralEditModal from './GeneralEditModal'
import AddressEditModal from './AddressEditModal'
import OwnerEditModal from './OwnerEditModal'
import DoctorsEditModal from './DoctorsEditModal'
import GalleryEditModal from './GalleryEditModal'
import CloseOnOutsideClick from '../../../../components/CloseOnOutsideClick'

function Details({ theme }) {
    const { hospitalId } = useParams()
    const [hospital, setHospital] = useState(null);
    const [isEditHomeOpen, setIsEditHomeOpen] = useState(false);
    const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
    const [isDoctorsModalOpen, setIsDoctorsModalOpen] = useState(false);
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await httpService.get('hospitals', `?hospitalId=${hospitalId}`);
            setHospital(response.hospitals[0])
        }
        fetchData()
    }, [hospitalId])

    const onChooseCategory = (category) => {
        switch (category) {
            case 'general':
                setIsGeneralModalOpen(true);
                break;
            case 'address':
                setIsAddressModalOpen(true);
                break;
            case 'owner':
                setIsOwnerModalOpen(true);
                break;
            case 'doctors':
                setIsDoctorsModalOpen(true);
                break;
            case 'gallery':
                setIsGalleryModalOpen(true);
                break;
            default:
                setIsEditHomeOpen(true);
                break;
        }
        setIsEditHomeOpen(false)
    }

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='relative flex items-center text-sm flex-col gap-4 w-full h-full rounded '>
            { isEditHomeOpen && <EditHome isOpen={ isEditHomeOpen } setIsOpen={ setIsEditHomeOpen } onChooseCategory={ onChooseCategory } /> }
            { isGeneralModalOpen && <GeneralEditModal isOpen={ isGeneralModalOpen } setIsOpen={ setIsGeneralModalOpen } /> }
            { isAddressModalOpen && <AddressEditModal isOpen={ isAddressModalOpen } setIsOpen={ setIsAddressModalOpen } /> }
            { isOwnerModalOpen && <OwnerEditModal isOpen={ isOwnerModalOpen } setIsOpen={ setIsOwnerModalOpen } /> }
            { isDoctorsModalOpen && <DoctorsEditModal isOpen={ isDoctorsModalOpen } setIsOpen={ setIsDoctorsModalOpen } /> }
            { isGalleryModalOpen && <GalleryEditModal isOpen={ isGalleryModalOpen } setIsOpen={ setIsGalleryModalOpen } /> }
            <DetailsHeader theme={ theme } hospital={ hospital } />
            <Content theme={ theme } hospital={ hospital } />
            <MoreOptions theme={ theme } hospital={ hospital } setIsEditHomeOpen={ setIsEditHomeOpen } />
            <OnBoardedBy theme={ theme } agentID={ hospital?.agentID } />
        </div>
    )
}

export default withTheme(Details)


function DetailsHeader({ theme, hospital }) {
    return (
        <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex justify-between items-center p-2 w-full'>
            <div className=' flex items-center justify-center gap-2 h-10'>
                <img src={ hospital?.mediaDetails?.logoURL } alt='logo' className='h-10 w-10 rounded-full' />
                <div className='flex flex-col h-full'>
                    <div className='flex items-center gap-2'>
                        <div style={ { color: theme.text } } className='flex itece font-semibold'>{ hospital?.hospitalDetails?.hospitalLegalName }</div>
                        <div style={ { color: theme.textTertiary } } className='text-xs'>( { hospital?.hospitalDetails?.typeOfHospital } )</div>
                    </div>
                    <div style={ { color: theme.textTertiary } } className='flex items-center text-xs gap-1'>
                        <IoLocation />
                        <div className=''>{ formateAddress(hospital?.hospitalDetails?.address) }</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end gap-1'>
                <div className='flex items-center gap-2'>
                    <div className=''>{ formatNumber(hospital?.hospitalDetails?.hospitalNumber) }</div>
                    <IoMdCall />
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''>{ hospital?.email }</div>
                    <IoIosMail />
                </div>
            </div>
        </div>
    )
}

function Content({ theme, hospital }) {
    return (
        <div className='flex flex-col gap-4 p-2 overflow-scroll w-full'>
            <div className='font-regular'>{ hospital?.mediaDetails?.desc }</div>
            <div className='font-regular flex items-center gap-2'>
                <div className='font-semibold'>Services Offered : </div>
                <div className='flex flex-col gap-2'>{ hospital?.hospitalDetails?.servicesOffered.join(', ') }</div>
            </div>
            <div className=' font-regular flex items-center gap-2'>
                <div className='font-semibold'>Timings : </div>
                <div className='flex flex-col gap-2'>{ hospital?.hospitalDetails?.from } AM - { hospital?.hospitalDetails?.to } PM</div>
                <div className='flex gap-2'>(
                    {
                        hospital?.hospitalDetails?.daysAvailabilty.map((day, index) => {
                            return (
                                <div style={ { color: day ? theme.success : theme.danger } } key={ index } className='flex items-center gap-2'>
                                    <div className='font-semibold'>{ days[index] } </div>
                                </div>
                            )
                        })
                    }
                    )
                </div>
            </div>
            {/* License Number */ }
            <div className='flex items-center gap-2'>
                <div className='font-semibold'>License Number : </div>
                <div className='font-regular'>{ hospital?.hospitalDetails?.licenseNumber }</div>
                <div onClick={ () => window.open(hospital?.hospitalDetails?.hospitalLicense, '_blank') } style={ { border: `1px solid ${theme.primary}` } } className='font-regular px-2 py-0.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer'>View document</div>
            </div>
            <div className='flex items-center gap-2 w-full h-32'>
                {/* Owner Details */ }
                <div style={ { border: `1px solid ${theme.primary}` } } className='flex flex-col items-start gap-2 p-2 rounded h-full min-w-64'>
                    <div className='font-semibold'>Owner Details : </div>
                    <div className='font-regular'>{ hospital?.hospitalDetails?.hospitalOwnerFullName }</div>
                    <div className='font-regular'>{ formatNumber(hospital?.hospitalDetails?.hospitalOwnerContactNumber) }</div>
                    <div className='font-regular'>{ hospital?.hospitalDetails?.hospitalOwnerEmail }</div>
                </div>
                {/* Doctor Details */ }
                <div style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className='flex flex-col items-center justify-center gap-2 p-2 rounded [writing-mode:vertical-rl] rotate-180 font-semibold h-full'>
                    Doctors
                </div>
                <div className='flex items-start gap-2 overflow-x-scroll h-full'>
                    {
                        hospital?.doctorList?.map((doctor, index) => {
                            return (
                                <div key={ index } style={ { border: `1px solid ${theme.primary}` } } className='flex flex-col items-start gap-2 p-2 rounded h-full min-w-64'>
                                    <div className='font-semibold'>Doctor { index + 1 } : </div>
                                    <div className='font-regular'>{ doctor?.name }</div>
                                    <div className='font-regular'>{ formatNumber(doctor?.number) }</div>
                                    <div className='font-regular'>{ doctor.email }</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Gallery theme={ theme } hospital={ hospital } />
        </div>
    )
}

function MoreOptions({ theme, hospital, setIsEditHomeOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const onEdit = (e) => {
        e.stopPropagation()
        setIsEditHomeOpen(prev => !prev)
    }
    const onDelete = (e) => {
        e.stopPropagation()
        alertTrigger.emit(
            'Confirm Deletion',
            `Are you sure you want to delete ${hospital?.hospitalDetails?.hospitalLegalName}? This action cannot be undone.`,
            () => {
                console.log('Deletion cancelled')
                setIsOpen(false)
            },
            () => {
                console.log('Deleting hospital:', hospital?.hospitalId)
                // Implement actual delete logic here
                setIsOpen(false)
            }
        )
    }
    const onSendMessage = (e) => {
        e.stopPropagation()
        console.log('Send Message')
        emailBoxTrigger.emit(
            hospital?.email,
            `Message from ${hospital?.hospitalDetails?.hospitalLegalName}`,
            () => {
                console.log('Message cancelled')
                setIsOpen(false)
            },
            () => { console.log('Message sent') }
        )
    }
    const optionStyle = `flex items-center gap-2 px-2 py-1 hover:cursor-pointer hover:bg-gray-600 hover:text-white`
    return (
        <CloseOnOutsideClick onClose={ () => setIsOpen(false) }>

            <div className='absolute bottom-10 right-10'>
                <div onClick={ () => setIsOpen(!isOpen) } style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className='rounded-full w-10 h-10 flex items-center justify-center text-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-quaternary hover:cursor-pointer '>
                    { isOpen ? <IoIosClose /> : <IoIosAdd /> }
                </div>
                { isOpen && <div style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className='absolute bottom-10 right-10 w-52 rounded'>
                    <div className='flex flex-col font-regular text-sm'>
                        <div onClick={ onEdit } className={ optionStyle }> <MdEdit /> Edit Hospital</div>
                        <div onClick={ onDelete } style={ { color: theme.danger } } className={ optionStyle }> <IoMdTrash /> Delete Hospital</div>
                        <div onClick={ onSendMessage } className={ optionStyle }> <IoIosSend /> Send Message</div>
                    </div>
                </div> }
            </div>
        </CloseOnOutsideClick>
    )
}

function OnBoardedBy({ theme, agentID }) {
    if (!agentID) return null
    return (
        <div style={ { backgroundColor: theme.warning, color: theme.textSecondary } } className='flex items-center gap-2 absolute bottom-0 right-0 rounded-l-full px-4 py-1 font-semibold text-sm'>
            OnBoarded By : { agentID }
        </div>
    )
}

function Gallery({ theme, hospital }) {
    return (
        <div className='flex flex-col gap-2'>
            <div className='font-semibold'>Gallery</div>
            <div className='w-full flex items-center justify-start gap-2 h-40'>
                <Image theme={ theme } image={ hospital?.mediaDetails?.logoURL } title='Logo' />
                <Image theme={ theme } image={ hospital?.mediaDetails?.doctorImageURL } title='Doctor' />
                <Image theme={ theme } image={ hospital?.mediaDetails?.hospitalImageURL } title='Hospital' />
                { hospital?.mediaDetails?.achivements?.length > 0 && <div style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className='flex flex-col items-center justify-center gap-2 p-2 rounded [writing-mode:vertical-rl] rotate-180 font-semibold h-full'>
                    Achivements
                </div> }
                {
                    hospital?.mediaDetails?.achivements?.map((image, index) => {
                        return (
                            <Image image={ image } title={ `Achivement ${index + 1}` } />
                        )
                    })
                }
            </div>
        </div>
    )
}

function Image({ image, title }) {
    if (!image) return null
    return (
        <div className=' flex flex-col items-center gap-2 shadow p-2 rounded'>
            <div className='w-32 h-32 rounded overflow-hidden'>
                <img src={ image } alt='Gallery' className='w-full h-full object-cover' />
            </div>
            <div className='w-full text-center font-medium'>{ title }</div>
        </div>
    )
}

