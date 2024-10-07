import React, { useRef, useEffect } from 'react'

function CloseOnOutsideClick({ children, onClose }) {
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={ containerRef }>
            { children }
        </div>
    )
}

export default CloseOnOutsideClick
