import React, { useState, useEffect } from 'react'
import withTheme from '../../theme/Theme'
import { Link } from 'react-router-dom'
import CloseOnOutsideClick from '../CloseOnOutsideClick'
import SelectCity from '../SelectCity'
import { BiTargetLock } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";

function SearchHospitals({ hospitals, theme }) {
    const [showSelectCity, setShowSelectCity] = useState(false);
    const [search, setSearch] = useState('')
    const [showList, setShowList] = useState(false);
    const [filteredHospitals, setFilteredHospitals] = useState([])
    const currentCity = localStorage.getItem('city')

    useEffect(() => {
        setFilteredHospitals(hospitals.filter((hospital) => hospital?.name.toLowerCase().includes(search.toLowerCase())))
    }, [hospitals, search])
    const onFocus = () => {
        setShowList(true);
        setFilteredHospitals(hospitals);
    }
    return (
        <div className="flex justify-center flex-col w-full gap-4">
            <SelectCity showSelectCity={ showSelectCity } setShowSelectCity={ setShowSelectCity } />
            <h2 className="text-[1.3rem] font-semibold">Find Best Hospitals, Near you!</h2>
            <div className="h-14  flex items-center gap-1 ">

                <div className="h-full w-[40%] border  flex items-center gap-1 md:gap-4 px-2 rounded ">

                    <BiTargetLock className="text-2xl" />
                    <input readOnly={ true } onClick={ () => { setShowSelectCity(true) } } style={ { color: theme.text, backgroundColor: theme.senary } } value={ currentCity } type="text" placeholder="Location" className="h-full w-full outline-none hover:cursor-pointer" />

                </div>
                <div className="h-full w-full border flex items-center gap-4 px-2 rounded">
                    <CgSearch className="text-2xl" />
                    <div className='relative w-full'>
                        <input onChange={ (e) => { setSearch(e.target.value) } } onFocus={ onFocus } style={ { color: theme.text, backgroundColor: theme.senary } } type="text" placeholder="Search Hospital" className="h-full w-full outline-none" />
                        { showList && filteredHospitals.length > 0 &&
                            <CloseOnOutsideClick onClose={ () => { setShowList(false) } }>
                                <div style={ { backgroundColor: theme.senary } } className='absolute top-11 right-0 w-full z-10 border rounded max-h-64 h-fit overflow-y-auto'>
                                    { filteredHospitals.map((hospital) => (
                                        <Link to={ `/hospital/${hospital._id}` } key={ hospital._id } className='p-2 flex items-center gap-2 hover:bg-black/10 rounded'>
                                            <img src={ hospital?.image } alt="" className='w-10 h-10 rounded-full object-cover' />
                                            { hospital?.name }
                                        </Link>
                                    )) }
                                </div>
                            </CloseOnOutsideClick>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(SearchHospitals)
