import { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState('');

  const handleAddUser = e => {
    e.preventDefault();

    setUser(() => {
      {name, age}
    })
  }

  return (
    <div>
      <form>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <input type='number' value={age} onChange={e => setAge(e.target.value)}/>
        <button onSubmit={handleAddUser}>Add user</button>
      </form>
      <label>Name: {name}</label>
      <label>Age: {age}</label>
    </div>
  );
}

export default App;
