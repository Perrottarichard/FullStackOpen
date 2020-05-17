import React from 'react';

const DisplayCountry = (props) => {

    const { country, searchName, setSearchName, setWeatherLock, weather, showWeather, setShowWeather, setIsLoading } = props;

    const showClick = (c) => {
        setSearchName(c.name);
        setWeatherLock(false);
    }
    const clickShowWeather = () => {
        setWeatherLock(false)
        setTimeout(() => {
            setIsLoading(true);
        }, 500);
        setTimeout(() => {
            setShowWeather(true);
            setIsLoading(false)
        }, 5000);
    }
    const renderAll = (c) => {
        return (
            <div>
                <h1>{c.name}</h1>
                <h3>Capital city: {c.capital}</h3>
                <h3>Population: {c.population}</h3>
                <h3>Languages: {c.languages.map(l => <li key={l.name}>{l.name}</li>)}</h3>
                <img style={{ width: 350, height: 200, }} src={c.flag} alt={`${c.name} flag`} />
                <h3>Weather: <button onClick={clickShowWeather}>show</button></h3>
                {(showWeather) ? <div>
                    <h3>City: {weather.location.name}</h3>
                    <h3>Current Temperature: {weather.current.temperature} degrees celsius</h3>
                    <h3>Description: {weather.current.weather_descriptions[0]}</h3>
                    <h3>UV-Index: {weather.current.uv_index}</h3>
                    <h3>Wind-speed: {weather.current.wind_speed}</h3>
                </div> : <p></p>}
            </div>
        )
    }
    const renderButtons = (c) => {
        return (
            <div>
                <h3>Results:</h3>
                {c.map(c => <h3 key={c.name}>{c.name}  <button onClick={() => showClick(c)} value={c}>show</button></h3>)}
            </div>
        )
    }
    const renderNone = (c) => {
        return (
            <div>
                <h3>Results:</h3>
                <p>Too many results. Please narrow your search.</p>
            </div>
        )
    }

    const countryToShow = country.filter(p => p.name.toString().toLowerCase().indexOf(searchName.toLowerCase()) !== -1)

    //render conditions
    if (countryToShow.filter(c => c.name).length === 1) {
        return renderAll(countryToShow[0])
    }
    if (countryToShow.filter(c => c.name).length > 10) {
        return renderNone()
    }
    if (countryToShow.filter(c => c.name).length <= 10 && countryToShow.filter(c => c.name).length !== 1) {
        return renderButtons(countryToShow)
    }
}

export default DisplayCountry;

