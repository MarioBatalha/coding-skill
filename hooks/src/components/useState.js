import React from "react";
import { useForm } from "../hook/useForm";

export const StateComponent = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });


  return (
    <div>
      <h1>Use State</h1>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />

      <button>Log in</button>
    </div>
  );
};
