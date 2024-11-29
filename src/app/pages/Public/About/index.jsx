import React from 'react'
import withTheme from '../../../theme/Theme'

function About({ theme }) {
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.primary } } className="h-full w-full overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <section className="mb-12">
                    <h1 className="text-3xl font-bold mb-4">At Healthkard</h1>
                    <p className="text-lg mb-6">We're changing the way you experience Doctor visits at Hospitals.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="mb-6">Getting the access to visit a well qualified Doctor without breaking your pocket.</p>
                    <p className="mb-6">
                        We believe visiting a doctor shouldn't come with a large bill. That's why we created a
                        subscription service that eliminates doctor consultation fees at our network of trusted
                        hospitals.
                    </p>
                    <p className="mb-6">
                        Founded in March 2024 and launched in June 2024, Healthkard is already making a
                        difference in Narasaraopet and Guntur, helping over 2,000 users get the care they
                        deserve. With partnerships across 25+ hospitals and 75+ doctors, we're growing fast,
                        but our goal is clear—to make sure that everyone, everywhere, can access quality
                        healthcare providers without the financial burden.
                    </p>
                    <p className="mb-6">
                        We're working towards a future where healthcare is available to everyone.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="mb-6">
                        Where, We all has access to affordable and High quality healthcare whenever we need
                        it.
                    </p>
                    <p className="mb-6">
                        With HEALTHKARD, We will be in your every step of high doctor fees. Whether you
                        need a checkup or expert advice, We got you covered with our unique service.
                        Subscribe today and join our growing family, where your doctor fees are on us -without
                        breaking your pocket!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default withTheme(About)
