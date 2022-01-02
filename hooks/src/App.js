import React from "react";

import { StateComponent } from "./components/useState";
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
    </div>
  );
};

export default App;
