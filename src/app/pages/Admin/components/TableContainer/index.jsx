import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Search from '../../../../components/Search'
import Table from '../../../../components/Table'
import { IoFilter } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";

import './style.css'
function TableContainer({ title, headers = [], data = [], onApplyFilters = () => { }, onAdd = () => { }, theme, currentPage, totalPages, onPageChange, isLoading, onRowClick, onAddButton = { label: 'Add Hospital', url: '/new-hospital' } }) {
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const filterData = (value) => {
        setFilteredData(data.filter((item) => item.id.toLowerCase().includes(value.toLowerCase()) || item.name.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div id='table-container' style={ { backgroundColor: theme.secondary } } className='flex flex-col rounded'>
            <div style={ { borderBottom: `1px solid ${theme.primary}`, color: theme.primary } } className='flex justify-between items-center p-2 h-11 '>
                <div className='text-sm font-semibold'>{ title }</div>
                <div className='flex gap-2'>
                    <Button label='Filter' type='btn-secondary' icon={ IoFilter } onClick={ onApplyFilters } />
                    <Button label={ onAddButton.label } icon={ IoAdd } onClick={ () => window.open(onAddButton.url, '_blank') } />
                </div>
            </div>
            <div id='table-container-body' className='flex flex-col justify-start items-start p-2 w-full gap-2'>
                <div className='w-full flex items-center justify-start gap-2'>
                    <Search onChangeHandler={ (value) => filterData(value) } />
                    <Button label='Search' />
                </div>
                <div id='outer-table' className='w-full rounded overflow-y-scroll'>
                    <Table
                        headers={ headers }
                        data={ filteredData }
                        currentPage={ currentPage }
                        totalPages={ totalPages }
                        onPageChange={ onPageChange }
                        isLoading={ isLoading }
                        onRowClick={ onRowClick }
                    />
                </div>
            </div>
        </div>
    )
}

export default withTheme(TableContainer)
