import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import httpService from '../../api/httpService';
import SideNavigationBar from './components/SideNavigationBar';
import Navbar from './components/Navbar';
import withTheme from '../../theme/Theme';

function Hospital({ theme }) {
    const { hospitalId } = useParams();
    const [hospitalDetails, setHospitalDetails] = useState({});
    useEffect(() => {
        const fetchHospital = async () => {
            const response = await httpService.get(`/hospitals/hospital/${hospitalId}`);
            setHospitalDetails(response);
        }
        fetchHospital();
    }, [hospitalId])
    return (
        <div style={ { backgroundColor: theme.senary } } className='flex lg:justify-start justify-between h-screen lg:flex-row flex-col-reverse'>
            <SideNavigationBar />
            <div className='flex-1 h-full overflow-y-auto'>
                <Navbar name={ hospitalDetails?.hospitalDetails?.hospitalLegalName } id={ hospitalDetails?.hospitalId } logo={ hospitalDetails?.mediaDetails?.logoURL } />
                <Outlet />
            </div>
        </div>
    )
}

export default withTheme(Hospital)
