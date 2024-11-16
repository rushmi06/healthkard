import React, { useRef, useEffect } from 'react';
import { steps } from './constants';
import withTheme from '../../../../../theme/Theme';
import './StepsTimeline.css';

const StepsTimeline = ({ theme }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-timeline');
          } else {
            entry.target.classList.remove('animate-timeline');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ timelineRef } className="relative timeline-wrapper w-full md:ml-4 pl-6">
      <div className="timeline-line"></div>
      { steps.map((step, index) => (
        <li key={ index } className={ `timeline-item mb-10 flex items-start relative ${index === steps.length - 1 ? 'mb-0' : ''}` }>
          <span className="timeline-dot absolute flex items-center justify-center w-6 h-6 bg-[#303486] rounded-full -left-[1.4rem] ring-4 ring-white">            <span className="timeline-dot-inner w-2 h-2 bg-white rounded-full"></span>
          </span>
          <div className="ml-6 md:ml-10">
            <h3 style={ { color: theme.primary } } className="text-lg font-semibold">{ step.title }</h3>
            <p style={ { color: theme.text } } className="text-base font-normal opacity-70">{ step.description }</p>
          </div>
        </li>
      )) }
    </ol>
  );
};

export default withTheme(StepsTimeline);
