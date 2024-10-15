import React, { useEffect, useState } from 'react'
import { hospitalHeaders } from '../constants'
import TableContainer from '../../components/TableContainer'
import httpService from '../../../../api/httpService';
import FilterSlider from '../../components/FilterSlider';
import { Outlet, useParams } from 'react-router-dom';

function Pending() {
    const { hospitalId } = useParams()
    const [data, setData] = useState([]);
    const [isFilterSliderOpen, setIsFilterSliderOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(1);

    const [filterCategories] = useState({
        location: ['Guntur', 'Narasaraopet', 'Vijayawada'],
        category: ['Skin', 'Heart', 'Brain', 'Eye', 'Lungs', 'Kidney', 'Liver', 'Bone', 'Others'],
        sortByDate: false,
        sortByName: false
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await httpService.get('hospitals');
            const formattedData = data.hospitals.map((hospital) => ({
                _id: hospital._id,
                id: hospital.hospitalId,
                name: hospital?.hospitalDetails?.hospitalLegalName,
                image: hospital?.mediaDetails?.logoURL,
                number: hospital?.hospitalDetails?.hospitalNumber,
                ownerName: hospital?.hospitalDetails?.hospitalOwnerFullName,
                category: hospital?.hospitalDetails?.typeOfHospital,
                availableDays: hospital?.hospitalDetails?.daysAvailabilty?.map((day) => day ? 1 : 0).join('-'),
            }));
            setData(formattedData);
            setIsLoading(false);
        };
        fetchData();
        return () => {
        };
    }, []);

    const handleApplyFilters = (filters) => {
        setIsFilterSliderOpen(false);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className='flex flex-col gap-4 w-full h-full'>
            { !hospitalId ?
                <div className='flex flex-col gap-4 w-full h-full'>
                    <FilterSlider open={ isFilterSliderOpen } onClose={ () => setIsFilterSliderOpen(false) } filterCategories={ filterCategories } onApplyFilters={ handleApplyFilters } />
                    <TableContainer
                        title='Pending Hospitals'
                        headers={ hospitalHeaders }
                        data={ data }
                        onApplyFilters={ (filters) => setIsFilterSliderOpen(true) }
                        onAdd={ () => console.log('Add') }
                        currentPage={ currentPage }
                        totalPages={ totalPages }
                        onPageChange={ handlePageChange }
                        isLoading={ isLoading }
                        onRowClick={ (id) => console.log(id) }
                    />
                </div>
                : <Outlet /> }
        </div>
    )
}

export default Pending
