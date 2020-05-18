import React, { useState, useEffect } from 'react'
import AddEntryForm from './components/AddEntryForm';
import FilterBox from './components/FilterBox';
import DisplayDirectory from './components/DisplayDirectory';
import services from './components/services'
import EditEntryForm from './components/EditEntryForm';

const App = () => {

  //CONST VARIABLES
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [editName, setEditName] = useState('')
  const [editNumber, setEditNumber] = useState('')
  const [toggleForm, setToggleForm] = useState(false);
  const [editById, setEditById] = useState('')

  useEffect(() => {
    services.getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])

  //EVENT HANDLERS
  const handlePersonInput = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }
  const handleNumberEdit = (event) => {
    setEditNumber(event.target.value);
  }
  const handleNameEdit = (event) => {
    setEditName(event.target.value);
  }
  const handleIdEdit = (event) => {
    setEditById(event.target.value);
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
  const showForm = () => setToggleForm(!toggleForm);

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
      <EditEntryForm
        persons={persons}
        setPersons={setPersons}
        editName={editName}
        setEditName={setEditName}
        handleNameEdit={handleNameEdit}
        handleNumberEdit={handleNumberEdit}
        editNumber={editNumber}
        setEditNumber={setEditNumber}
        toggleForm={toggleForm}
        setToggleForm={setToggleForm}
        showForm={showForm}
        editById={editById}
        setEditById={setEditById}
        handleIdEdit={handleIdEdit}
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