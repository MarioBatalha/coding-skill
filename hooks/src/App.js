import React from "react";

import { StateComponent } from "./components/useState";
import { ReducerComponent } from "./hook/useReducer";

import "./App.css";

const App = () => {

  /* const handleRemoveAll = () => {
    user.filter((item, id) => {
      item.id !== id
    })
  } */

  return (
    <div>
      <StateComponent />
      <ReducerComponent />
    </div>
  );
};

export default App;