import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import withTheme from '../../../theme/Theme';
import httpService from '../../../api/httpService';
import { formateAddress, formatNumber } from '../../../utils/format';
import viewImageTrigger from '../../../components/ViewImage/viewImageTrigger';
import './Hospital.css'

function HospitalForPublic({ theme }) {
    const { hospitalId } = useParams();
    const [hospital, setHospital] = useState(null);
    useEffect(() => {
        const fetchHospital = async () => {
            const hospital = await httpService.get(`hospitals/hospital/${hospitalId}`);
            setHospital(hospital);
        }
        fetchHospital();
    }, [hospitalId]);
    return (
        <div style={ { color: theme.text } } className='w-full h-full overflow-y-scroll'>
            <div className='w-full h-72 relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-black/70'></div>
                <img src={ hospital?.mediaDetails?.hospitalImageURL } alt={ hospital?.hospitalDetails.hospitalLegalName } className='w-full h-full object-fit-cover ' />
                <div className='text-3xl font-bold absolute bottom-36 mx-auto w-full text-center text-white'> { hospital?.hospitalDetails.hospitalLegalName }</div>
                <div style={ { border: `2px solid ${theme.primary}`, backgroundColor: theme.secondary } } className='absolute lg:-bottom-16 lg:left-4 left-2 -bottom-12 w-fit h-fit p-1 rounded-full shadow'>
                    <img src={ hospital?.mediaDetails?.logoURL } alt={ hospital?.hospitalDetails.hospitalLegalName } className='lg:w-36 lg:h-36 w-24 h-24 object-contain rounded-full' />
                </div>
            </div>
            <HospitalDetails hospital={ hospital } theme={ theme } />
        </div>
    )
}

const HospitalDetails = ({ hospital, theme }) => {
    return (
        <div className='flex flex-col-reverse lg:flex-row relative top-12 gap-10 p-2 hospital-details'>
            <div className='flex flex-col gap-4 w-full lg:w-7/12'>
                <div className=''>{ hospital?.mediaDetails?.desc }</div>
                <div className=''>
                    <div className='text-2xl font-bold'>Contact Us</div>
                    <div className=''><span className='font-bold'>Address:</span> { formateAddress(hospital?.hospitalDetails?.address) }</div>
                    <div className=''><span className='font-bold'>Phone Number:</span> { formatNumber(hospital?.hospitalDetails?.hospitalNumber) }</div>
                </div>
                <Gallery hospital={ hospital } theme={ theme } />
            </div>
            <div className='flex flex-col gap-4 w-full lg:w-5/12'>
                <div className=''>
                    <div className='text-2xl font-bold'>Our Doctors</div>
                    <div className=''>
                        { hospital?.doctorList.map((doctor, index) => (
                            <div key={ index } className=''>
                                <div className='font-semibold'>{ doctor?.name }</div>
                                <div className='text-sm'>{ doctor?.qualification }</div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(HospitalForPublic)



function Gallery({ theme, hospital }) {
    const viewImage = (image, title) => {
        viewImageTrigger.emit(image, title)
    }
    return (
        <div className='flex flex-col gap-2 w-full'>
            <div className='font-semibold'>Gallery</div>
            <div className='w-full flex flex-wrap items-center justify-start gap-2 h-40'>
                <Image onClick={ () => viewImage(hospital?.mediaDetails?.logoURL, 'Logo') } theme={ theme } image={ hospital?.mediaDetails?.logoURL } title='Logo' />
                <Image onClick={ () => viewImage(hospital?.mediaDetails?.doctorImageURL, 'Doctor') } theme={ theme } image={ hospital?.mediaDetails?.doctorImageURL } title='Doctor' />
                <Image onClick={ () => viewImage(hospital?.mediaDetails?.hospitalImageURL, 'Hospital') } theme={ theme } image={ hospital?.mediaDetails?.hospitalImageURL } title='Hospital' />
                { hospital?.mediaDetails?.achivements?.length > 0 && <div style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className='flex flex-col items-center justify-center gap-2 p-2 rounded [writing-mode:vertical-rl] rotate-180 font-semibold h-full'>
                    Achivements
                </div> }
                {
                    hospital?.mediaDetails?.achivements?.map((image, index) => {
                        return (
                            <Image key={ index } image={ image } title={ `Achivement ${index + 1}` } />
                        )
                    })
                }
            </div>
        </div>
    )
}

function Image({ onClick, image, title }) {
    if (!image) return null
    return (
        <button type='button' onClick={ onClick } className=' flex flex-col items-center gap-2 shadow p-2 rounded'>
            <div className='lg:w-32 lg:h-32 w-24 h-24 rounded overflow-hidden'>
                <img src={ image } alt='Gallery' className='w-full h-full object-cover' />
            </div>
            <div className='w-full text-center font-medium'>{ title }</div>
        </button>
    )
}

