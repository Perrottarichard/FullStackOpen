import React from 'react';

const SearchBar = (props) => {

    const { searchCountry, handleSearchCountry } = props;

    return (
        <div>
            <h2>Search for Country: <input
                value={searchCountry}
                onChange={handleSearchCountry} />
            </h2>
        </div>
    )
}
export default SearchBar;