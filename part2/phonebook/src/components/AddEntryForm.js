import React from 'react';

const AddEntryForm = (props) => {

    const { persons, newName, newNumber, setPersons, setNewName, setNewNumber, handleNumberInput, handlePersonInput } = props

    const addEntry = (event) => {
        event.preventDefault()
        if (persons.filter(p => p.name === newName).length > 0) {
            alert(`${newName} is already in the phonebook`)
        } else {
            const listing = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(listing))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <h2>Add New Entry</h2>
            <form onSubmit={addEntry}>
                <div>
                    Name: <input
                        value={newName}
                        onChange={handlePersonInput} />
                </div>
                <div>
                    Number: <input
                        value={newNumber}
                        onChange={handleNumberInput} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
export default AddEntryForm;
