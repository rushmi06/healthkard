import React, { useEffect, useState } from 'react'
import { mobileUserHeaders } from '../constants'
import { Outlet, useParams } from 'react-router-dom'
import TableContainer from '../../components/TableContainer'
import httpService from '../../../../api/httpService';
import FilterSlider from '../../components/FilterSlider';
import { formatDate, formatNumber } from '../../../../utils/format';

function Details() {
    const [data, setData] = useState([]);
    const [isFilterSliderOpen, setIsFilterSliderOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const { userId } = useParams();

    const [filterCategories] = useState({
        location: ['Guntur', 'Narasaraopet', 'Vijayawada'],
        category: ['Skin', 'Heart', 'Brain', 'Eye', 'Lungs', 'Kidney', 'Liver', 'Bone', 'Others'],
        sortByDate: false,
        sortByName: false
    });



    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await httpService.get(`mobile`);

                const formattedData = response.map((user) => ({
                    _id: user?._id,
                    name: user?.name,
                    email: user?.email,
                    phoneNumber: formatNumber(user?.number),
                    registeredIn: formatDate(user?.createdAt),
                }));
                setData(formattedData);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleApplyFilters = (filters) => {
        setIsFilterSliderOpen(false);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className='flex flex-col gap-4 w-full h-full'>
            { !userId ? <div className='flex flex-col gap-4 w-full h-full'>
                <FilterSlider open={ isFilterSliderOpen } onClose={ () => setIsFilterSliderOpen(false) } filterCategories={ filterCategories } onApplyFilters={ handleApplyFilters } />
                <TableContainer
                    title='Users'
                    headers={ mobileUserHeaders }
                    data={ data }
                    onApplyFilters={ (filters) => setIsFilterSliderOpen(true) }
                    onAdd={ () => console.log('Add') }
                    currentPage={ currentPage }
                    totalPages={ 1 }
                    onPageChange={ handlePageChange }
                    isLoading={ isLoading }
                    onAddButton={ { label: 'Add User', url: '/new-user' } }
                />
            </div> : <Outlet /> }
        </div>
    )
}

export default Details
