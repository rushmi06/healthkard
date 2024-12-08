import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import withTheme from '../../../theme/Theme'
import GridContainer from '../../../components/GridContainer'
import httpService from '../../../api/httpService';
import ScrollContainer from '../../../components/ScrollContainer';
import SearchHospitals from '../../../components/SearchHospitals';
import './Hospitals.css'
function Hospitals({ theme }) {
    const [hospitals, setHospitals] = useState([]);
    const currentCity = localStorage.getItem('city');
    const [departmentName, setDepartmentName] = useState('');
    const { search } = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(search);
        setDepartmentName(params.get('department'));
    }, [search]);


    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                setLoading(true);
                const response = await httpService.get(`hospitals/?city=${currentCity}&&department=${departmentName}`);
                const hospitals = response.hospitals.map(hospital => ({
                    _id: hospital._id,
                    name: hospital.hospitalDetails.hospitalLegalName,
                    image: hospital.mediaDetails.hospitalImageURL,
                    desc: hospital.mediaDetails.desc,
                    services: hospital.hospitalDetails.servicesOffered,
                    logo: hospital.mediaDetails.logoURL
                }))
                setHospitals(hospitals);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchHospitals();
    }, [currentCity, departmentName])
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='w-full h-full p-4'>
            <Header hospitals={ hospitals } />
            {
                loading ? <div>Loading...</div> :
                    <div className='w-full h-full grid-container'>
                        <GridContainer label='Please Login to view more hospitals' blur={ true }>
                            {
                                hospitals.length > 0 ? hospitals.map((hospital, index) => {
                                    return <HospitalCard key={ index } hospital={ hospital } theme={ theme } />
                                }) : <div>No hospitals found</div>
                            }
                        </GridContainer>
                    </div>
            }
        </div>
    )
}


const Header = ({ hospitals }) => {
    return (
        <div className='p-2'>
            <SearchHospitals hospitals={ hospitals } />
        </div>
    )
}

const HospitalCard = ({ hospital, theme }) => {
    return (
        <Link to={ `/hospital/${hospital._id}` } style={ { border: `1px solid ${theme.tertiary}`, backgroundColor: theme.secondary } } className='lg:h-64 lg:w-48 w-44 h-48 border rounded  overflow-hidden'>
            <img src={ hospital.image } alt={ hospital.name } className='w-full h-3/6 object-cover' />
            <div className='h-3/6 p-2 relative'>
                <div className='text-lg flex items-center gap-2 font-semibold'>
                    <img src={ hospital.logo } alt={ hospital.name } className='w-6 h-6 object-contain rounded-full' />
                    <div className='text-ellipsis overflow-hidden text-nowrap'>
                        { hospital.name }
                    </div>
                </div>
                <div className='text-xs font-semibold opacity-50 capitalize'>
                    { hospital.desc.split(' ').slice(0, 10).join(' ') + (hospital.desc.split(' ').length > 10 ? '...' : '') }
                </div>
                <div className='w-full absolute bottom-1'>
                    <ScrollContainer>
                        <div className='flex w-fit px-2 py-1'>
                            {
                                hospital.services.map((service, index) => <div style={ { border: `1px solid ${theme.primary}`, backgroundColor: theme.senary, color: theme.text } } key={ index } className='text-xs font-semibold capitalize text-nowrap px-2 py-1 rounded mx-1 hover:cursor-pointer'>{ service }</div>)
                            }
                        </div>
                    </ScrollContainer>
                </div>
            </div>
        </Link>
    )
}

export default withTheme(Hospitals)
