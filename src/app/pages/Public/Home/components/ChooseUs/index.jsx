import React, { useEffect, useRef } from "react";
import chooseUsImage from "../../../../../assets/chooseUs.png";
import { benefits } from "./constants";
import withTheme from "../../../../../theme/Theme";
import "./ChooseUs.css";
import Header from "../Header";

const ChooseUs = ({ theme }) => {
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const benefits = entry.target.querySelectorAll('.benefit-item');
          benefits.forEach((benefit, index) => {
            if (entry.isIntersecting) {
              benefit.style.animation = `slideIn 0.5s ease-out ${index * 0.2}s forwards`;
            } else {
              benefit.style.animation = `slideOut 0.5s ease-out forwards`;
            }
          });
        });
      },
      { threshold: 0.2 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={ { backgroundColor: theme.secondary } } className="w-full">
      <div className="flex w-full h-full">
        <div className="hidden md:flex w-[50%] items-center justify-center mt-auto">
          <img src={ chooseUsImage } alt="" width={ 500 } height={ 500 } />
        </div>
        <div className="md:w-[50%] flex flex-col gap-4 py-5 px-4 md:px-6 w-full">
          <Header heading="Why choose Healthkard?" subHeading="Changing the way, You visit a Doctor" />
          <div ref={ benefitsRef } className="flex flex-col gap-5 items-center md:items-start">
            { benefits.map((benefit, index) => (
              <div
                key={ index }
                className="benefit-item flex gap-4 items-center w-full max-w-md min-h-14 rounded-2xl px-5 py-2 shadow-xl"
                style={ {
                  backgroundColor: theme.senary,
                  color: theme.primary,
                  opacity: 0,
                  transform: 'translateX(-50px)'
                } }
              >
                <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className="flex items-center text-2xl justify-center rounded-full w-12 h-12">
                  { benefit.icon }
                </div>
                <p className="flex items-center font-medium w-[80%]">
                  { benefit.description }
                </p>
              </div>
            )) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTheme(ChooseUs);
