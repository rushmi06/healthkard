import React, { useState, } from "react";
import withTheme from "../../theme/Theme";

const Search = ({ list = [], onChangeHandler = () => { }, placeholder = 'Search...', theme }) => {
    const [searchInput, setSearchInput] = useState('');
    // const [suggestions] = useState(list || []);
    const handleChange = (e) => {
        onChangeHandler(e.target.value);
        setSearchInput(e.target.value);
    }
    return (
        <div className="relative w-96 text-sm">

            <input
                type="search"
                value={ searchInput }
                onChange={ handleChange }
                placeholder={ placeholder }
                style={ { border: `1px solid ${theme.primary}`, color: theme.primary } }
                className="w-full h-9 px-2 py-1 rounded focus:outline-none bg-transparent"
            />

            {/* { suggestions.length > 0 && (
                <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                    { suggestions.map((suggestion, index) => (
                        <li
                            key={ index }
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={ () => handleSuggestionClick(suggestion) }
                        >
                            { suggestion }
                        </li>
                    )) }
                </ul>
            ) } */}
        </div>
    );
};

export default withTheme(Search);