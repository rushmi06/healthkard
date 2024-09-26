import React, { useState, useEffect } from 'react'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Search from '../../../../components/Search'
import Table from '../../../../components/Table'
import { IoFilter } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";

function TableContainer({ title, headers = [], data = [], onApplyFilters = () => { }, onAdd = () => { }, theme, currentPage, totalPages, onPageChange, isLoading }) {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const filterData = (value) => {
        setFilteredData(data.filter((item) => item.id.toLowerCase().includes(value.toLowerCase()) || item.name.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div style={ { backgroundColor: theme.secondary } } className='flex flex-col flex-grow rounded overflow-y-scroll h-full'>
            <div style={ { borderBottom: `1px solid ${theme.primary}`, color: theme.primary } } className='flex justify-between items-center p-2 h-11 '>
                <div className='text-sm font-semibold'>{ title }</div>
                <div className='flex gap-2'>
                    <Button label='Filter' type='btn-secondary' icon={ IoFilter } onClick={ onApplyFilters } />
                    <Button label='Add Hospital' icon={ IoAdd } onClick={ onAdd } />
                </div>
            </div>
            <div className='flex flex-col justify-start items-start p-2 flex-grow w-full gap-2'>
                <div className='w-full flex items-center justify-start gap-2'>
                    <Search onChangeHandler={ (value) => filterData(value) } />
                    <Button label='Search' />
                </div>
                <div className='flex-grow max-h-[35rem] w-full rounded overflow-hidden'>
                    <Table
                        headers={ headers }
                        data={ filteredData }
                        currentPage={ currentPage }
                        totalPages={ totalPages }
                        onPageChange={ onPageChange }
                        isLoading={ isLoading }
                    // style={ { border: `1px solid ${theme.primary}`, height: '120%' } }
                    />
                </div>
            </div>
        </div>
    )
}

export default withTheme(TableContainer)