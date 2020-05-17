import React from 'react';

const SearchBar = (props) => {

    const { searchName, handleSearchCountry } = props;

    return (
        <div>
            <h2>Search for Country: <input
                value={searchName}
                onChange={handleSearchCountry} />
            </h2>
        </div>
    )
}
export default SearchBar;