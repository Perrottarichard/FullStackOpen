import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/Search';
import DisplayCountry from './components/DisplayCountry';
import Loader from './components/Loader'

const App = () => {

  const [country, setCountry] = useState([])
  const [searchName, setSearchName] = useState('')
  const [weather, setWeather] = useState([])
  const [weatherLock, setWeatherLock] = useState(true)
  const [showWeather, setShowWeather] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const api_key = process.env.REACT_APP_API_KEY

  const handleSearchCountry = (event) => {
    setSearchName(event.target.value);
  }

  useEffect(() => {
    if (searchName.length > 1)
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(Response => {
          setCountry(Response.data)
        })
  }, [searchName])

  useEffect(() => {
    if (!weatherLock) {
      async function getWeather() {
        await axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${searchName}`)
          .then(Response => {
            console.log(Response.data)
            setWeather(Response.data)
            setWeatherLock(true)
          })
      }
      getWeather();
      console.log('getting weather useEffect')
    }
  }, [api_key, searchName, weatherLock, setWeatherLock])

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
        weather={weather}
        weatherLock={weatherLock}
        setWeatherLock={setWeatherLock}
        showWeather={showWeather}
        setShowWeather={setShowWeather}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {isLoading ? <Loader /> : <p></p>}
      {(showWeather) ? <div>
        <h3>Current temperature is {weather.current.temperature}</h3>
      </div> : <p></p>}
    </div>
  )
}

export default App;
