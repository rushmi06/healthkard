import React, { useEffect, useRef, useState } from 'react'
import './ScrollContainer.css';

function ScrollContainer({ children }) {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = containerRef.current;

        const scroll = () => {
            if (scrollContainer && !isPaused) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            }
        };

        const intervalId = setInterval(scroll, 5);

        return () => clearInterval(intervalId);
    }, [isPaused]);

    return (
        <div className="overflow-hidden  w-full">
            <div
                ref={ containerRef }
                className="inline-flex animate-scroll hover:pause-animation gap-4"
                onMouseEnter={ () => setIsPaused(true) }
                onMouseLeave={ () => setIsPaused(false) }
            >
                { children }
                { children }
            </div>
        </div>
    );
}

export default ScrollContainer  
