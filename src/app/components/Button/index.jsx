import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../theme/colors';

const Button = ({ label, type, color, disabled, isLoading, style, onClick }) => {
    const baseStyle = {
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        fontWeight: '600',
        transition: 'background-color 0.2s',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: disabled || isLoading ? 0.5 : 1,
    };

    const typeStyles = {
        'btn-primary': {
            backgroundColor: colors.primary,
            color: 'white',
            ':hover': { backgroundColor: colors.primaryHover },
        },
        'btn-secondary': {
            backgroundColor: colors.secondary,
            color: colors.secondaryText,
            ':hover': { backgroundColor: colors.secondaryHover },
        },
        'btn-tertiary': {
            backgroundColor: 'transparent',
            color: colors.primary,
            ':hover': { backgroundColor: colors.tertiaryHover },
        },
        'btn-danger': {
            backgroundColor: colors.danger,
            color: 'white',
            ':hover': { backgroundColor: colors.dangerHover },
        },
    };

    const colorStyles = {
        blue: {
            backgroundColor: colors.blue,
            color: 'white',
            ':hover': { backgroundColor: colors.blueHover },
        },
        green: {
            backgroundColor: colors.green,
            color: 'white',
            ':hover': { backgroundColor: colors.greenHover },
        },
    };

    const buttonStyle = {
        ...baseStyle,
        ...(typeStyles[type] || {}),
        ...(color ? colorStyles[color] : {}),
        ...style,
    };

    return (
        <button
            style={ buttonStyle }
            disabled={ disabled || isLoading }
            onClick={ onClick }
        >
            { isLoading ? (
                <span style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Loading...
                </span>
            ) : (
                label
            ) }
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-danger']),
    color: PropTypes.oneOf(['blue', 'green']),
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'btn-primary',
    disabled: false,
    isLoading: false,
};

export default Button;
