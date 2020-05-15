import React, { useState } from 'react'
import AddEntryForm from './components/AddEntryForm';
import FilterBox from './components/FilterBox';
import DisplayDirectory from './components/DisplayDirectory';

const App = () => {

  //CONST VARIABLES
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

  //EVENT HANDLERS
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
      <FilterBox
        searchName={searchName}
        handleSearchName={handleSearchName} />
      <AddEntryForm persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        handlePersonInput={handlePersonInput}
        handleNumberInput={handleNumberInput}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <DisplayDirectory
        persons={persons}
        showAll={showAll}
        searchName={searchName} />
    </div>
  )
}

export default App