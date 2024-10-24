import React, { useState } from 'react'
import withTheme from '../../../theme/Theme'
import Panel from '../../../components/Panel'
import { DATABASE_PANEL_HEADER } from './constants'
import User from './User'
import Hospital from './Hospital'

function Database({ theme }) {

    const [selected, setSelected] = useState(DATABASE_PANEL_HEADER[0])
    return (
        <div style={ { backgroundColor: theme.secondary } } className=' rounded h-full flex-grow overflow-y-scroll flex flex-col gap-2'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex justify-between'>
                <div style={ { color: theme.primary } } className='text-xl font-semibold p-4'>Data storage</div>
            </div>
            <Panel header={ DATABASE_PANEL_HEADER } onSelect={ (selected) => { setSelected(selected) } } body={ <Tab selected={ selected } /> } />
        </div>
    )
}

function Tab({ selected }) {
    return (
        <div className='w-full h-full p-4'>
            { selected === DATABASE_PANEL_HEADER[0] && <User /> }
            { selected === DATABASE_PANEL_HEADER[1] && <Hospital /> }
        </div>
    )
}



export default withTheme(Database)
