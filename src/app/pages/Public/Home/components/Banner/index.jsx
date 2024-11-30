import React, { useState, useEffect } from "react";
import bannerImage from "../../../../../assets/bannerImage.png"
import { BsGraphUpArrow } from "react-icons/bs";
import HospitalNameCard from "./HospitalNameCard";
import withTheme from "../../../../../theme/Theme";
import httpService from "../../../../../api/httpService";
import { Link } from "react-router-dom";
import ScrollContainer from "../../../../../components/ScrollContainer";
import SearchHospitals from "../../../../../components/SearchHospitals";

const Banner = ({ theme }) => {
  const [hospitals, setHospitals] = useState([]);
  const currentCity = localStorage.getItem('city')

  useEffect(() => {
    const fetchHospitals = async () => {
      const res = await httpService.get(`hospitals/?city=${currentCity}&&limit=20`);
      const hospitals = res.hospitals.map(hospital => ({
        _id: hospital._id,
        name: hospital.hospitalDetails.hospitalLegalName,
        image: hospital.mediaDetails.hospitalImageURL,
        desc: hospital.mediaDetails.desc,
        services: hospital.hospitalDetails.servicesOffered,
        logo: hospital.mediaDetails.logoURL
      }))
      setHospitals(hospitals)
    }
    fetchHospitals()
  }, [currentCity])

  return (
    <div style={ { color: theme.primary } } className="w-full lg:h-[700px] relative flex items-center flex-col  mb-5 ">
      <div style={ { backgroundColor: theme.secondary } } className="w-full h-[80%] absolute top-0 left-0"></div>
      <div className=" z-10 flex items-center flex-col lg:flex-row  justify-center lg:justify-around px-2 lg:px-10 w-full h-[80%]  gap-5 lg:gap-0">

        <div className="flex flex-col gap-5 w-full lg:w-[60%] mt-8 lg:-mt-24 " >

          <div className={ ` font-bold text-[1.5rem] lg:text-[3rem] text-center lg:text-left` }>
            Access to well Qualified Doctors with <span style={ { color: theme.success } } className="">ZERO</span> Fees.
          </div>
          <div className="flex items-center gap-8 justify-center lg:justify-start">

            <button style={ { backgroundColor: theme.primary, color: theme.senary } } className="w-40 h-11 rounded-sm  hover:bg-transparent hover:border-2 hover:border-[#303486] hover:text-[#303486]">Subscribe Now</button>
            <button style={ { border: `1px solid ${theme.primary}` } } className="w-40 h-11 bg-transparent border-2 border-[#303486] rounded-sm hover:bg-[#303486] hover:text-white">Request for demo</button>

          </div>
        </div>

        <div className="relative -left-8 lg:left-0">
          <img src={ bannerImage } alt="bannerImage" width={ 850 } height={ 850 } />
        </div>

      </div>
      <div style={ { backgroundColor: theme.senary, border: `1px solid ${theme.primary}` } } className="shadow-2xl w-[95%] px-5 lg:px-10 py-5 rounded-md flex flex-col gap-3 lg:absolute bottom-0 lg:mt-5 z-20">

        <SearchHospitals hospitals={ hospitals } />
        <div className="w-full">
          <div className="flex items-center gap-4">
            <BsGraphUpArrow />
            <p>Top Hospitals</p>
          </div>
          <div className="flex gap-2 lg:gap-10 pt-4 overflow-hidden items-center w-full">
            <ScrollContainer>
              <div className="flex gap-2 lg:gap-10 overflow-hidden items-center w-8/12">
                {
                  hospitals.map((hospital) => (
                    <HospitalNameCard key={ hospital._id } hospital={ hospital } />
                  ))
                }
              </div>
            </ScrollContainer>
            <Link to="/hospitals" className='text-center hover:underline cursor-pointer'>See All</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withTheme(Banner)  
