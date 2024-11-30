import React from 'react'
import { DEPARTMENTS } from './constants'
import withTheme from '../../../../../theme/Theme'
import Header from '../Header'
import ScrollContainer from '../../../../../components/ScrollContainer'
import { useNavigate } from 'react-router-dom';

function Departments({ theme }) {
    const navigate = useNavigate();
    const onClickDepartment = (departmentName) => {
        navigate(`/hospitals?department=${departmentName}`)
    }
    return (
        <div style={ { backgroundColor: theme.senary } } className="w-full flex flex-col gap-4">
            <Header heading="Popular Searches on Healthkard" />
            <div className="flex justify-center px-6">
                <ScrollContainer>
                    <div className="flex gap-4 p-4 w-full">
                        { DEPARTMENTS.map((department) => (
                            <div onClick={ () => onClickDepartment(department.name) } key={ department.id } className="flex flex-col gap-2 items-center justify-start w-full hover:cursor-pointer">
                                <div style={ { backgroundColor: theme.secondary } } className='flex items-center justify-center w-16 h-16 border border-primary rounded-full overflow-hidden p-2'>
                                    <img src={ department.image } alt={ department.name } className="w-full h-full object-contain" />
                                </div>
                                <div style={ { color: theme.primary } } className='text-sm text-center'>{ department.name }</div>
                            </div>
                        )) }
                    </div>
                </ScrollContainer>
            </div>
        </div>
    )
}

export default withTheme(Departments)
