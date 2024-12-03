
import React from "react";
import StepsTimeline from "./StepsTimeline"
import withTheme from "../../../../../theme/Theme";
import Header from "../Header";
// import stepsImage from "../../../../../assets/home/image2.png"
import stepsImage from "../../../../../assets/home/stepsImage.png"

const Steps = ({ theme }) => {
  return (
    <div style={ { backgroundColor: theme.senary } } className="w-full flex justify-between items-end  lg:px-4 bg-white relative" >
      <div className="flex flex-col w-full  md:w-50% gap-10  px-4">
        <Header heading="Find the Best Hospital, Right away!" subHeading="We’ll be with you in every step of ZERO Doctor Fees" />
        <StepsTimeline />
      </div>

      <div className="absolute bottom-0 right-0 hidden md:block">
        <img src={ stepsImage } alt="" width={ 500 } height={ 500 } style={ { objectFit: "contain" } } />
      </div>

    </div>
  )
};

export default withTheme(Steps);
