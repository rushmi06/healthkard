import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../theme/Theme';

const Input = ({ label, type, onChange = () => { }, style, inputStyle, placeholder = 'Enter value', theme, multiline, rows = 10, value }) => {
    const inputProps = {
        type: multiline ? undefined : type,
        onChange: onChange,
        placeholder: placeholder,
        style: {
            border: `2px solid ${theme.primary}`,
            backgroundColor: theme.secondary,
            color: theme.text,
            width: '50%',
            ...inputStyle
        },
        className: 'px-2 py-1 rounded focus:outline-none text-sm h-full'
    };

    return (
        <div style={ { ...style } } className={ `flex gap-2 ${multiline ? 'flex-col' : 'h-9 items-center'}  justify-between` }>
            <label style={ { color: theme.primary } } className='text-sm font-semibold'>{ label }</label>
            { multiline ? (
                <textarea { ...inputProps } rows={ rows } value={ value } onChange={ e => onChange(e) } />
            ) : (
                <input { ...inputProps } value={ value } onChange={ e => onChange(e) } />
            ) }
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    inputStyle: PropTypes.object,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
};

Input.defaultProps = {
    type: 'text',
    inputStyle: {},
    placeholder: '',
    multiline: false,
    rows: 3,
};

export default withTheme(Input);