import React from 'react';

const DisplayDirectory = (props) => {

    const { persons, showAll, searchName } = props;
    const entriesToShow = showAll ? persons : persons.filter(p => p.name.toString().toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
    return (
        <div>
            {entriesToShow.map(p => <ul key={p.name}>ID: {p.id}<br></br> Name: {p.name}<br></br> Number: {p.number}</ul>)}
        </div>
    )
}
export default DisplayDirectory;