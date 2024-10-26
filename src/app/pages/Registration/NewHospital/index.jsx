import React, { useState } from 'react'
import withTheme from '../../../theme/Theme'
import Navbar from '../components/Navbar'
import Button from '../../../components/Button';
import { CARD_DATA } from './constants';
import Slider from '../../../components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';

function NewHospital({ theme }) {

    const [isSliderVisible, setIsSliderVisible] = useState(false);
    const [currentForm, setCurrentForm] = useState(null);

    const onClickGetStarted = (id) => {
        setIsSliderVisible(!isSliderVisible);
        setCurrentForm(CARD_DATA.find(card => card.id === id));
    }
    return (
        <div style={ { backgroundColor: theme.senary, backgroundImage: `linear-gradient(45deg, ${theme.secondary} , ${theme.senary}, ${theme.secondary})` } } className='flex flex-col w-full h-screen'>
            <Navbar />
            <div className='flex flex-col gap-5 flex-1 overflow-y-scroll relative   '>
                <Slider isVisible={ isSliderVisible } onClose={ () => setIsSliderVisible(false) }>
                    <Header title={ currentForm?.title } description={ currentForm?.sliderDescription } />
                    <div className='flex flex-col gap-5 flex-1 overflow-y-scroll'>
                        { currentForm && <currentForm.form /> }
                    </div>
                    <Footer />
                </Slider>
                <div className='flex flex-col gap-5 flex-1 py-4 px-5'>
                    <div className='h-48'>
                        <div style={ { backgroundColor: theme.secondary } } className="flex flex-col items-center justify-center h-full rounded-lg p-8 text-center">
                            <div className="lg:text-2xl text-xl font-bold mb-4" style={ { color: theme.primary } }>Join the HealthKard Network</div>
                            <div style={ { color: theme.text } } className="lg:text-lg text-sm mb-6">
                                "Empower your hospital with HealthKard's innovative platform. Together, we can revolutionize patient care and streamline healthcare management."
                            </div>
                            <div style={ { color: theme.text } } className="lg:text-sm text-xs">
                                Start your journey towards enhanced healthcare delivery today!
                            </div>
                        </div>
                    </div>
                    <div style={ { color: theme.text } } className='flex flex-col flex-1 gap-5'>
                        <div className='lg:text-lg text-base font-semibold'>Start your registration</div>
                        <div className='flex flex-col gap-2 flex-1 justify-between'>
                            <div className='flex flex-wrap lg:gap-4 gap-2'>
                                { CARD_DATA.map((card, index) => (
                                    <Card key={ index } theme={ theme } { ...card } onClickGetStarted={ onClickGetStarted } />
                                )) }
                            </div>
                            <div className='flex justify-between items-start w-full'>
                                <Button label='Discard Changes' type='btn-tertiary' />
                                <div className='flex gap-2'>
                                    <Button label='Draft' type='btn-secondary' />
                                    <Button label='Save & Next' type='btn-primary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(NewHospital)

function Card({ theme, title, description, icon: Icon, onClickGetStarted, id }) {
    return (
        <div style={ { backgroundColor: theme.secondary } } className='relative flex flex-col items-center justify-between lg:h-56 h-48 lg:w-48 w-[48%] rounded p-4 text-center'>
            { Icon && <Icon className='lg:text-6xl text-4xl' /> }
            <div className='flex flex-col gap-1 w-full'>
                <div className='lg:text-lg text-sm font-semibold text-left w-full'>{ title }</div>
                <div className='lg:text-xs text-[10px] leading-[12px] text-left w-full'>{ description }</div>
            </div>
            <div className='lg:text-sm text-xs flex justify-start items-start w-full'>
                <Button label='Get Started' style={ { width: '100%' } } onClick={ () => onClickGetStarted(id) } />
            </div>
        </div>
    )
}
