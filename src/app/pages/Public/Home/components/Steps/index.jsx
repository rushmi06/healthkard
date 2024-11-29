
import React from "react";
import StepsTimeline from "./StepsTimeline"
import stepsImage from "../../../../../assets/stepsImage.png"
import withTheme from "../../../../../theme/Theme";
import Header from "../Header";

const Steps = ({ theme }) => {
  return (
    <div style={ { backgroundColor: theme.senary } } className="w-full  my-7 flex justify-between md:px-16 bg-white relative" >
      <div className="flex flex-col w-full  md:w-50% gap-10  px-4">
        <Header heading="Find the Best Hospital, Right away!" subHeading="We’ll be with you in every step of ZERO Doctor Fees" />
        <StepsTimeline />
      </div>

      <div className="absolute bottom-0 right-20 hidden md:block">
        <img src={ stepsImage } alt="" width={ 400 } height={ 400 } />
      </div>

    </div>
  )
};

export default withTheme(Steps);
