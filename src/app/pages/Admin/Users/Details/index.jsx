import React, { useEffect, useState } from 'react'
import { userHeaders, statisticsTemplate } from '../constants'
import { Outlet, useParams } from 'react-router-dom'
import TableContainer from '../../components/TableContainer'
import httpService from '../../../../api/httpService';
import FilterSlider from '../../components/FilterSlider';

function Details() {
    const [data, setData] = useState([]);
    const [statistics, setStatistics] = useState(statisticsTemplate);
    const [isFilterSliderOpen, setIsFilterSliderOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 10;
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
                const response = await httpService.get(`users?page=${currentPage}&limit=${itemsPerPage}`);
                const { users, totalPages: total, totalUsers } = response;
                const formattedData = users.map((user) => ({
                    id: user?.healthId,
                    name: user?.name,
                    image: user?.image,
                    gender: user?.gender,
                    location: user?.city,
                    onBoardedBy: user?.agent,
                    number: user?.number,
                }));
                setData(formattedData);
                setStatistics(prev => ({
                    ...prev,
                    users: [
                        {
                            ...prev.users[0],
                            value: users.length
                        },
                        {
                            ...prev.users[1],
                            value: 10
                        },
                        {
                            ...prev.users[2],
                            value: totalUsers
                        }
                    ]
                }))
                setTotalPages(total);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [currentPage, totalPages]);

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
                    headers={ userHeaders }
                    data={ data }
                    onApplyFilters={ (filters) => setIsFilterSliderOpen(true) }
                    onAdd={ () => console.log('Add') }
                    currentPage={ currentPage }
                    totalPages={ totalPages }
                    onPageChange={ handlePageChange }
                    isLoading={ isLoading }
                />
            </div> : <Outlet /> }
        </div>
    )
}

export default Details
