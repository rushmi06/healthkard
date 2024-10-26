import React, { useRef, useEffect } from 'react'

function CloseOnOutsideClick({ children, onClose, style }) {
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                event.stopPropagation();
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={ containerRef } style={ style } className=''>
            { children }
        </div>
    )
}

export default CloseOnOutsideClick
