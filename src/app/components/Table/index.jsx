import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { formatNumber } from '../../utils/format';
import withTheme from '../../theme/Theme';

function Table({ headers, data, theme, currentPage, totalPages, onPageChange, isLoading, style, onRowClick }) {
    return (
        <div id='table' className='w-full text-xs h-full' style={ style }>
            { isLoading ? (
                <div className="flex justify-center items-center h-full">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <table className='w-full border-collapse rounded'>
                        <thead>
                            <tr style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className=' h-9'>
                                { headers.map((header, index) => (
                                    <th key={ index } className='p-2 text-center' style={ { borderLeft: `1px solid ${theme.textSecondary}` } } >{ header }</th>
                                )) }
                            </tr>
                        </thead>
                        <tbody id='table-body' style={ { color: theme.primary } } className='rounded-b overflow--scroll'>
                            { data.map((row, rowIndex) => (
                                <tr key={ rowIndex } style={ { backgroundColor: rowIndex % 2 === 0 ? theme.secondary : '' } } className='text-center text-sm p-2 row'>
                                    <td className='p-2 text-left flex items-center gap-2'>
                                        <Link to={ `${row.id}` } style={ { textDecoration: 'none', color: 'inherit' } } className='p-2 text-left flex items-center gap-2'>
                                            { row.image && <div className=' h-10 w-10 rounded-full'>
                                                <img src={ row.image } alt={ row.name } className='object-cover h-10 w-10 rounded-full' />
                                            </div> }
                                            <div className='flex flex-col gap-1'>
                                                <div className='font-semibold'>{ row.name }</div>
                                                <div className='text-xs'>{ row.id }</div>
                                            </div>
                                        </Link>
                                    </td>
                                    { Object.keys(row).filter(key => key !== '_id' && key !== 'id' && key !== 'name' && key !== 'image').map((key, cellIndex) => (
                                        <td key={ cellIndex } style={ { borderLeft: `1px solid ${theme.primary}` } } className='p-2 capitalize'>{ key === 'number' ? formatNumber(row[key]) : row[key] }</td>
                                    )) }
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </>
            ) }
        </div>
    );
}

export default withTheme(Table);
