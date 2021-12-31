import { useState } from "react";

import { StateComponent } from "./components/useState";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState([]);

  const handleAddUser = () => {
    setUser([...user, { name, age}]);
  };

  return (
    <div>
        <input 
        value={name}
        onChange={e => setName(e.target.value)} />
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <button onClick={handleAddUser}>Add user</button>

      <span>
        {user.map((item, index) => {
          return (
           <label key={index}>
             <h1>{item.name}</h1>
             <h1>{item.age}</h1>
           </label> 
          )
        })}
      </span>
      <StateComponent />
    </div>
  );
};

export default App;
