import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AddEntryForm from './components/AddEntryForm';
import FilterBox from './components/FilterBox';
import DisplayDirectory from './components/DisplayDirectory';

const App = () => {

  //CONST VARIABLES
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:5000/persons')
      .then(Response => {
        setPersons(Response.data)
      })
  }, [])

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