import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../theme/Theme';
const Input = ({ label, type, onChange, inputStyle, placeholder, theme }) => {

    return (
        <div>
            <label >{ label }</label>
            <input
                type={ type }
                onChange={ onChange }
                placeholder={ placeholder }
            />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    inputStyle: PropTypes.object,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    inputStyle: {},
    placeholder: '',
};

export default withTheme(Input);
