import React, { useEffect, useState } from 'react'
import withTheme from '../../../theme/Theme'
import Button from '../../../components/Button'
import { stats } from '../../constants'
import missionImage from '../../../assets/about/mission.jpg'
import visionImage from '../../../assets/about/vision.jpg'
function About({ theme }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div style={ { backgroundColor: theme.senary, color: theme.primary } } className="h-full w-full overflow-y-auto">
            <div className="flex flex-col gap-6 lg:gap-12 w-full mx-auto p-12">
                <section className="">
                    <p className="mb-6 font-bold text-center text-2xl lg:text-5xl">We're changing the way you experience Doctor visits at Hospitals.</p>
                </section>
                <section className='flex gap-6 lg:gap-12'>
                    <div style={ { border: `2px solid ${theme.primary}` } } className='hidden lg:block w-1/2 relative'>
                        <div style={ { backgroundColor: theme.primary } } className='absolute -bottom-4 -left-4 w-2/3 h-2/3 rounded-lg z-0'></div>
                        <div className='absolute top-0 left-0 z-10 h-full w-full'>
                            <img src={ missionImage } alt='about' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-10'>
                        <Button label='Our Mission' style={ { width: isMobile ? "100%" : "40%", fontSize: "1.5rem", height: "3rem" } } />
                        <div style={ { color: theme.text } } className='text-lg flex flex-col gap-4'>
                            <div style={ { color: theme.primary } } className='text-xl font-bold'>Getting the access to visit a well qualified Doctor without breaking your pocket.</div>
                            <div className=''>We believe visiting a doctor shouldn’t come with a large bill. That’s why we created a
                                subscription service that eliminates doctor consultation fees at our network of trusted
                                hospitals.</div>
                            <div className=''>We're working towards a future where healthcare is available to everyone.</div>
                            <div className='flex justify-between'>
                                {
                                    stats.map((item, index) => (
                                        <div key={ index } className='flex flex-col items-center w-1/5'>
                                            <div className='border-b-2 border-primary pb-2 w-full text-center text-xl font-bold'>{ item.value } </div>
                                            <div className='font-thin'>{ item.label }</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-row-reverse gap-6 lg:gap-12'>
                    <div style={ { border: `2px solid ${theme.primary}` } } className='hidden lg:block w-1/2 relative'>
                        <div style={ { backgroundColor: theme.primary } } className='absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-lg z-0'></div>
                        <div className='absolute top-0 left-0 z-10 h-full w-full'>
                            <img src={ visionImage } alt='about' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-10'>
                        <Button label='Our Vision' style={ { width: isMobile ? "100%" : "40%", fontSize: "1.5rem", height: "3rem" } } />
                        <div style={ { color: theme.text } } className='text-lg flex flex-col gap-4'>
                            <div style={ { color: theme.primary } } className='text-xl font-bold'>We all has access to affordable and High quality healthcare whenever we need it.</div>
                            <div className=''>
                                With HEALTHKARD, We will be in your every step of high doctor fees. Whether you
                                need a checkup or expert advice, We got you covered with our unique service.
                                Subscribe today and join our growing family, where your doctor fees are on us -without
                                breaking your pocket!
                            </div>
                            <div className=''>We're working towards a future where healthcare is available to everyone.</div>
                        </div>
                    </div>
                </section>
                <div style={ { color: theme.text } } className='text-lg lg:text-2xl font-bold'>
                    Founded in March 2024 and launched in June 2024, Healthkard is already making a
                    difference in Narasaraopet and Guntur, helping over 2,000 users get the care they
                    deserve. With partnerships across 25+ hospitals and 75+ doctors, we're growing fast,
                    but our goal is clear—to make sure that everyone, everywhere, can access quality
                </div>
            </div>
        </div>
    )
}

export default withTheme(About)
