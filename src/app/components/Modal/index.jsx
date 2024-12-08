import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import withTheme from '../../theme/Theme';
import ReactDOM from 'react-dom'; // Add this import

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
    const width = window.innerWidth < 768 ? '95%' : '50%';
    // Ensure style is always an object
    const mergedStyle = { ...style, backgroundColor: theme.senary, color: theme.text, border: theme.text === '#fff' ? `2px solid ${theme.text}` : 'none', width };

    const modalContent = open ? (
        <div className={ `fixed inset-0 z-50 border-2 overflow-auto bg-black bg-opacity-50 flex ${positionClasses[position]}` }>
            <motion.div
                ref={ modalRef }
                style={ mergedStyle }
                className={ `bg-white rounded shadow-xl` }
                initial={ slideVariants[position] }
                animate={ { x: 0, y: 0 } }
                exit={ slideVariants[position] }
                transition={ { type: 'spring', damping: 25, stiffness: 500 } }
            >
                { children }
            </motion.div>
        </div>
    ) : null;

    // Use ReactDOM.createPortal to render the modal outside of its current DOM hierarchy
    return ReactDOM.createPortal(
        <AnimatePresence>
            { modalContent }
        </AnimatePresence>,
        document.body
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
