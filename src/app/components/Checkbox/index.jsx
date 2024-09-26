import React from 'react';
import withTheme from '../../theme/Theme';
const Checkbox = ({ label, checked, onChange, theme }) => {
    return (
        <label style={ { color: theme.primary } } className="inline-flex items-center cursor-pointer select-none">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={ checked }
                    onChange={ onChange }
                    className="sr-only"
                />
                <div
                    className={ `w-5 h-5 border-2 rounded-md transition-all duration-200 ${checked
                        ? 'border-[#303486] bg-[#303486]'
                        : 'border-gray-300 '
                        }` }
                    style={ { borderColor: checked ? theme.primary : undefined, backgroundColor: checked ? theme.primary : undefined } }
                >
                    { checked && (
                        <svg
                            className="w-3 h-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={ { color: theme.senary } }
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    ) }
                </div>
            </div>
            <span className="ml-2">{ label }</span>
        </label>
    );
};

export default withTheme(Checkbox);
