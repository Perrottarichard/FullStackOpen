import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already in the phonebook`)
    } else {

      const nameObject = {
        name: newName,
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }
  const handlePersonInput = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <ul key={p.name}>{p.name}</ul>)}
    </div>
  )
}

export default App