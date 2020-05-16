import React from 'react';

const DisplayCountry = (props) => {

    const { country, searchName, setSearchName } = props;

    const showClick = (c) => {
        setSearchName(c.name)
    }

    let countryToShow = country.filter(p => p.name.toString().toLowerCase().indexOf(searchName.toLowerCase()) !== -1)

    if (countryToShow.filter(c => c.name).length === 1) {
        return (
            <div>
                {countryToShow.map(c => <h1 key={c.name}>{c.name}</h1>)}
                {countryToShow.map(c => <h3 key={c.name}>Capital city: {c.capital}</h3>)}
                {countryToShow.map(c => <h3 key={c.name}>Population: {c.population}</h3>)}
                {countryToShow.map(c => <h3 key={c.name}>Languages: {c.languages.map(l => <p key={l.name}>{l.name}</p>)}</h3>)}
                <div >
                    {countryToShow.map(c => <img style={{ width: 350, height: 200, borderColor: 'black', borderStyle: 'solid', borderWidth: 2 }} key={c.name} src={c.flag} alt={`${c.name} flag`} />)}
                </div>
            </div>
        )
    }
    if (countryToShow.filter(c => c.name).length > 10) {
        return (
            <div>
                <h3>Results:</h3>
                <p>Too many results. Please narrow your search.</p>
            </div>
        )
    }
    if (countryToShow.filter(c => c.name).length <= 10 && countryToShow.filter(c => c.name).length !== 1) {
        return (
            <div>
                <h3>Results:</h3>
                {countryToShow.map(c => <h3 key={c.name}>{c.name}  <button onClick={() => showClick(c)} value={c}>show</button></h3>)}
            </div>
        )
    }
}
export default DisplayCountry;

