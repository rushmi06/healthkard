import React, { useState, useEffect, useRef } from 'react';
import withTheme from '../../theme/Theme';
import tooltipTrigger from './tooltipTrigger';

const Tooltip = ({ theme }) => {
    const [tooltipState, setTooltipState] = useState({ isVisible: false, content: '', x: 0, y: 0 });
    const tooltipRef = useRef(null);

    useEffect(() => {
        const handleTooltip = ({ content, x, y }) => {
            // Update to use clientX and clientY for cursor position
            setTooltipState(prevState => ({ ...prevState, isVisible: true, content, x: x + 20, y: y + 20 }));
        };
        tooltipTrigger.subscribe(handleTooltip);

        const hideTooltip = () => {
            setTooltipState(prevState => ({ ...prevState, isVisible: false }));
            tooltipTrigger.subscribe(hideTooltip);
        };


        return () => {
            tooltipTrigger.unsubscribe(handleTooltip);
            tooltipTrigger.unsubscribe(hideTooltip);
        };
    }, []);

    useEffect(() => {
        if (tooltipState.isVisible && tooltipRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let x = tooltipState.x;
            let y = tooltipState.y;

            // Adjust position if tooltip goes beyond viewport
            if (x + tooltipRect.width > viewportWidth) {
                x = x - tooltipRect.width - 20; // Move to left of cursor
            }

            if (y + tooltipRect.height > viewportHeight) {
                y = y - tooltipRect.height - 20; // Move above cursor
            }

            tooltipRef.current.style.left = `${x}px`;
            tooltipRef.current.style.top = `${y}px`;
        }
    }, [tooltipState]);

    const tooltipClasses = `
        fixed z-200 p-2 rounded text-xs w-64 h-20 items-center justify-center flex shadow
        text-black bg-white
        transition-opacity duration-300 opacity-100
    `;

    if (!tooltipState.isVisible) return null;

    return (
        <div
            ref={ tooltipRef }
            className={ tooltipClasses }
            style={ {
                left: `${tooltipState.x}px`,
                top: `${tooltipState.y}px`,

            } }
            onMouseLeave={ () => setTooltipState(prevState => ({ ...prevState, isVisible: false })) }
        >
            { tooltipState.content }
        </div>
    );
};

export default withTheme(Tooltip);

export const useTooltip = () => ({
    showTooltip: (content, x, y) => tooltipTrigger.emit(content, x, y),
    hideTooltip: () => tooltipTrigger.hide(),
});
