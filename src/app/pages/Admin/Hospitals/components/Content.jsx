import React, { useEffect, useState } from 'react'
import Statistic from '../../components/Statistic'
import { hospitalHeaders, statistics } from './constants'

import TableContainer from '../../components/TableContainer'
import httpService from '../../../../api/httpService';
import FilterSlider from '../../components/FilterSlider';

function Content() {
    const [data, setData] = useState([]);
    const [isFilterSliderOpen, setIsFilterSliderOpen] = useState(false);

    const [filterCategories] = useState({
        location: ['Guntur', 'Narasaraopet', 'Vijayawada'],
        category: ['Skin', 'Heart', 'Brain', 'Eye', 'Lungs', 'Kidney', 'Liver', 'Bone', 'Others'],
        sortByDate: false,
        sortByName: false
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await httpService.get('hospitals');
            console.log(data.hospitals.length);
            const formattedData = data.hospitals.map((hospital) => ({
                id: hospital.hospitalId,
                name: hospital?.hospitalDetails?.hospitalLegalName,
                image: hospital?.mediaDetails?.logoURL,
                number: hospital?.hospitalDetails?.hospitalNumber,
                ownerName: hospital?.hospitalDetails?.hospitalOwnerFullName,
                category: hospital?.hospitalDetails?.typeOfHospital,
                availableDays: hospital?.hospitalDetails?.daysAvailabilty?.map((day) => day ? 1 : 0).join('-'),
            }));
            setData(formattedData);
        };
        fetchData();
        return () => {
        };
    }, []);

    const handleApplyFilters = (filters) => {
        setIsFilterSliderOpen(false);
    }

    return (
        <div className='flex flex-col gap-4  w-full'>
            <FilterSlider open={ isFilterSliderOpen } onClose={ () => setIsFilterSliderOpen(false) } filterCategories={ filterCategories } onApplyFilters={ handleApplyFilters } />
            <div className='flex h-20  justify-between gap-4 w-full'>
                {
                    statistics.hospitals.map((statistic, index) => (
                        <Statistic key={ index } label={ statistic.label } value={ statistic.value } color={ statistic.color } style={ { width: '30%' } } />
                    ))
                }
            </div>
            <div style={ { flexGrow: 1 } } className='flex flex-col gap-4'>
                <TableContainer title='Approved Hospitals' headers={ hospitalHeaders } data={ data } onApplyFilters={ (filters) => setIsFilterSliderOpen(true) } onAdd={ () => console.log('Add') } />
            </div>
        </div>
    )
}

export default Content
