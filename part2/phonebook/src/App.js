import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const entriesToShow = showAll ? persons : persons.filter(p => p.name.toString().toLowerCase().indexOf(searchName.toLowerCase()) !== -1)

  const addEntry = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already in the phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }
  const handlePersonInput = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }
  const handleSearchName = (event) => {
    if (event.target.value.length > 0) {
      setShowAll(false)
      setSearchName(event.target.value);
    } else {
      setShowAll(true)
      setSearchName(event.target.value);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown: <input
          value={searchName}
          onChange={handleSearchName} />
      </div>
      <h2>Add New Entry</h2>
      <form onSubmit={addEntry}>
        <div>
          Name: <input
            value={newName}
            onChange={handlePersonInput} />
        </div>
        <div>Number: <input
          value={newNumber}
          onChange={handleNumberInput} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {entriesToShow.map(p => <ul key={p.name}>{p.name} : {p.number}</ul>)}
    </div>
  )
}

export default App