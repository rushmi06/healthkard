import React, { useEffect, useRef, useState } from "react";
import { stats } from "./constants";
import withTheme from "../../../../../theme/Theme";
import Header from "../Header";

const TrustedBY = ({ theme }) => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    stats.forEach((stat, index) => {
      const target = parseInt(stat.value);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, duration / steps);
    });
  };

  return (
    <div ref={ sectionRef } style={ { backgroundColor: theme.secondary } } className="w-full md:h-96 my-2">
      <Header heading="Trusted By" subHeading="We have lots of support from our Healthkard family" />
      <div className="md:h-[85%] flex justify-evenly items-center flex-wrap md:px-12 py-5 gap-4">
        { stats.map((stat, index) => (
          <div key={ index } className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex item-center justify-center flex-col gap-2 text-center">
            <div style={ { backgroundColor: theme.primary } } className="w-[80%] h-[80%] rounded-full flex items-center justify-center">
              <div style={ { backgroundColor: theme.senary, color: theme.primary } } className="w-[80%] h-[80%] rounded-full flex items-center justify-center text-6xl">
                { stat.icon }
              </div>
            </div>
            <p style={ { color: theme.primary } } className="font-semibold text-sm lg:text-xl -ml-5">{ counters[index] } { stat.label }</p>
          </div>
        )) }
      </div>
    </div>
  );
};

export default withTheme(TrustedBY);
