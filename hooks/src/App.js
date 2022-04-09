import React, {
   useState,
   useRef,
   useEffect
 } from "react";

import { StateComponent } from "./components/useState";
import { ReducerComponent } from "./hook/useReducer";

import "./App.css";

const App = ({users}) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <ul>
        <userSummary onSelect={(user) => setSelected(user)} />
      </ul>
      
    </div>
  );
};

export default App;