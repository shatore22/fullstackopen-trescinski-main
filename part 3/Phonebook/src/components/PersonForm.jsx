const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  };
  
  export default PersonForm;
  