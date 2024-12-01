import React from 'react'
import Modal from '../Modal'
import { CITIES } from './constants'
import withTheme from '../../theme/Theme'

function SelectCity({ showSelectCity, setShowSelectCity, theme }) {
    const currentCity = localStorage.getItem('city')

    const handleCityClick = (city) => {
        if (city.active) {
            localStorage.setItem('city', city.name)
            setShowSelectCity(false)
            window.location.reload()
        }
    }

    return (
        <Modal open={ showSelectCity } onClose={ () => { setShowSelectCity(false) } }>
            <div className='flex flex-col gap-4 p-2 justify-between h-full'>
                <div className='flex flex-col gap-6'>
                    <div className='text-2xl font-semibold'>Select City</div>
                    <div className='flex flex-wrap gap-2'>
                        { CITIES.map((city, index) => (
                            <div
                                key={ index }
                                style={
                                    {
                                        backgroundColor: currentCity === city.name ? theme.primary : theme.secondary,
                                        color: currentCity === city.name ? theme.textSecondary : theme.text
                                    }
                                }
                                onClick={ () => { handleCityClick(city) } }
                                className={ `p-2 rounded-md ${city.active ? 'hover:cursor-pointer' : 'opacity-50 hover:cursor-not-allowed'} ` }
                            >
                                { city.name }
                            </div>
                        )) }
                    </div>
                </div>
                <div className='text-sm text-gray-500'>Note: We are currently operating in the selected city.</div>
            </div>
        </Modal>
    )
}

export default withTheme(SelectCity)
