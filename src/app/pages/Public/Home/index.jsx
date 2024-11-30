import React from "react";
import Banner from "./components/Banner"
import Departments from "./components/Departments"
import ChooseUs from "./components/ChooseUs"
import TrustedBy from "./components/TrustedBy"
import Steps from "./components/Steps"
import Blogs from "./components/Blogs"
import Plans from "./components/Plans"
import Footer from "../../../components/Footer"
import withTheme from "../../../theme/Theme";
import { useEffect } from "react"
import { CITIES } from "../../../components/SelectCity/constants"

const Home = ({ theme }) => {
    useEffect(() => {
        const currentCity = localStorage.getItem('city')
        if (!currentCity) {
            localStorage.setItem('city', CITIES[0].name)
        }
    }, [])
    return (
        <div style={ { backgroundColor: theme.senary } } className="flex flex-col">
            <Banner />
            <Departments />
            <Steps />
            <ChooseUs />
            <Plans />
            <TrustedBy />
            <Blogs />
            <Footer />
        </div>

    )
};

export default withTheme(Home);
