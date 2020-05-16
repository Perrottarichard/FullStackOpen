import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/Search';
import DisplayCountry from './components/DisplayCountry';


const App = () => {

  const [country, setCountry] = useState([])
  const [searchName, setSearchName] = useState('')

  const handleSearchCountry = (event) => {
    setSearchName(event.target.value);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(Response => {
        setCountry(Response.data)
      })
  }, [])

  return (
    <div>
      <SearchBar
        country={country}
        setCountry={setCountry}
        searchName={searchName}
        setSearchName={setSearchName}
        handleSearchCountry={handleSearchCountry} />
      <DisplayCountry
        searchName={searchName}
        setSearchName={setSearchName}
        country={country}
      />
    </div>
  );
}

export default App;
