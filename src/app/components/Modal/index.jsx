import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import withTheme from '../../theme/Theme';

function Modal({ children, open, onClose, position = 'center', style = { width: '50%', height: '50%' }, theme }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open, onClose]);

    const positionClasses = {
        center: 'items-center justify-center',
        top: 'items-start justify-center pt-20',
        bottom: 'items-end justify-center pb-20',
        left: 'items-center justify-start pl-20',
        right: 'items-center justify-end pr-20',
    };

    const slideVariants = {
        center: { y: -50 },
        top: { y: '-100%' },
        bottom: { y: '100%' },
        left: { x: '-100%' },
        right: { x: '100%' },
    };

    // Ensure style is always an object
    const mergedStyle = { width: '50%', height: '50%', ...style, backgroundColor: theme.senary, color: theme.text };

    return (
        <AnimatePresence>
            { open && (
                <div className={ `fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex ${positionClasses[position]}` }>
                    <motion.div
                        ref={ modalRef }
                        style={ mergedStyle }
                        className={ `bg-white rounded-lg shadow-xl` }
                        initial={ slideVariants[position] }
                        animate={ { x: 0, y: 0 } }
                        exit={ slideVariants[position] }
                        transition={ { type: 'spring', damping: 25, stiffness: 500 } }
                    >
                        <button
                            onClick={ onClose }
                            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        { children }
                    </motion.div>
                </div>
            ) }
        </AnimatePresence>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default withTheme(Modal);
