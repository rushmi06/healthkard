
import React from "react";
import StepsTimeline from "./StepsTimeline"
import stepsImage from "../../../../../assets/stepsImage.png"
import withTheme from "../../../../../theme/Theme";

const Steps = ({ theme }) => {
  return (
    <div style={ { backgroundColor: theme.senary } } className="w-full  my-7 flex justify-between md:px-16 bg-white relative" >
      <div className="flex flex-col w-full  md:w-50% gap-10  px-4">
        <div className=" w-full md:w-[70%] flex flex-col gap-2 text-center md:text-left">
          <h2 style={ { color: theme.primary } } className=" text-xl md:text-2xl font-semibold">Find the right Doctor right at your finger tips</h2>
          <p style={ { color: theme.text } } className="text-sm md:font-normal">Healthkard gives you tools and information you need </p>
        </div>
        <StepsTimeline />
      </div>

      <div className="absolute bottom-0 right-20 hidden md:block">
        <img src={ stepsImage } alt="" width={ 400 } height={ 400 } />
      </div>

    </div>
  )
};

export default withTheme(Steps);
