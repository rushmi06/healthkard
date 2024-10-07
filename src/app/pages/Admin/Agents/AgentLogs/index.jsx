import React, { useEffect, useState } from 'react'
import { agentHeaders } from '../constants'
import TableContainer from '../../components/TableContainer'
import httpService from '../../../../api/httpService';
import FilterSlider from '../../components/FilterSlider';
import { Outlet, useParams } from 'react-router-dom';
import { getAgentLogs } from './helper';

function AgentLogs() {
    const [data, setData] = useState([]);
    const [isFilterSliderOpen, setIsFilterSliderOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(1);
    const { agentId } = useParams();

    const [filterCategories] = useState({
        location: ['Guntur', 'Narasaraopet', 'Vijayawada'],
        category: ['Skin', 'Heart', 'Brain', 'Eye', 'Lungs', 'Kidney', 'Liver', 'Bone', 'Others'],
        sortByDate: false,
        sortByName: false
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await httpService.get(`agents`);
            const formattedData = data.agents.map((agent) => ({
                _id: agent._id,
                id: agent?.agentID,
                name: agent?.name,
                image: agent?.image,
                number: agent?.number,
                ...getAgentLogs(agent)
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
            { !agentId ?
                <div className='flex flex-col gap-4 w-full h-full'>
                    <FilterSlider open={ isFilterSliderOpen } onClose={ () => setIsFilterSliderOpen(false) } filterCategories={ filterCategories } onApplyFilters={ handleApplyFilters } />
                    <TableContainer
                        title='Agent Logs'
                        headers={ agentHeaders }
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

export default AgentLogs
