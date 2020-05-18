import React from 'react';
import services from './services'

const EditEntryForm = (props) => {

    const { persons, setPersons, editName, setEditName, editNumber, setEditNumber, handleNumberEdit, handleNameEdit, setToggleForm, toggleForm, showForm, editById, handleIdEdit, setEditById } = props;

    const editEntry = (event) => {
        event.preventDefault();
        const listing = {
            name: editName,
            number: editNumber,
        }
        services.update(editById, listing).then(listing => {
            setPersons(persons.map(person => person.id !== +editById ? person : listing)
            )
            setEditName('')
            setEditNumber('')
            setEditById('')
            setToggleForm(false)
            console.log(persons)
        })
    }

    return (
        <div>
            <h2>Update Existing Entry By ID:</h2>
            {!toggleForm ?
                <div>
                    <input value={editById} onChange={handleIdEdit} placeholder={'Enter ID'}></input><div>
                        <button onClick={showForm}>Submit ID</button></div></div> :
                <form onSubmit={editEntry}>
                    <div>
                        Name: <input
                            value={editName}
                            onChange={handleNameEdit} />
                    </div>
                    <div>
                        Number: <input
                            value={editNumber}
                            onChange={handleNumberEdit} /></div>
                    <div>
                        <button onClick={showForm}>Go Back</button>
                        <button type="submit">Submit Update</button>
                    </div>
                </form>}
        </div>

    )
}
export default EditEntryForm;
