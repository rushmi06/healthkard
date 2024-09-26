import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../theme/Theme';
const Button = ({ label, type, color, disabled, isLoading, style, onClick, icon: Icon, iconPosition, theme }) => {
    const baseStyle = {
        borderRadius: '0.25rem',
        transition: 'background-color 0.2s',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: disabled || isLoading ? 0.5 : 1,
    };

    const typeStyles = {
        'btn-primary': {
            backgroundColor: theme.primary,
            color: theme.senary,
            ':hover': { backgroundColor: theme.primaryHover },
        },
        'btn-secondary': {
            backgroundColor: theme.secondary,
            color: theme.primary,
            ':hover': { backgroundColor: theme.secondaryHover },
            border: `1px solid ${theme.primary}`,
        },
        'btn-tertiary': {
            backgroundColor: 'transparent',
            color: theme.primary,
            ':hover': { backgroundColor: theme.tertiaryHover },
        },
        'btn-danger': {
            backgroundColor: theme.danger,
            color: 'white',
            ':hover': { backgroundColor: theme.dangerHover },
        },
    };

    const colorStyles = {
        blue: {
            backgroundColor: theme.blue,
            color: 'white',
            ':hover': { backgroundColor: theme.blueHover },
        },
        green: {
            backgroundColor: theme.green,
            color: 'white',
            ':hover': { backgroundColor: theme.greenHover },
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
            className='flex items-center gap-2 h-9 text-sm min-w-32 justify-center rounded'
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
                <>
                    { Icon && iconPosition === 'left' && <Icon className="w-5 h-5" /> }
                    { label }
                    { Icon && iconPosition === 'right' && <Icon className="w-5 h-5" /> }
                </>
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
    icon: PropTypes.elementType,
    iconPosition: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
    type: 'btn-primary',
    disabled: false,
    isLoading: false,
    iconPosition: 'left',
};

export default withTheme(Button);
