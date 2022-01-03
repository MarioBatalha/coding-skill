import React, { useRef, useState, useEffect } from "react";

import { useForm } from "../hook/useForm";
import { useFetch } from "../hook/useFetch";

export const StateComponent = () => {
  const [count, setCount] =  useState(() => JSON.parse(localStorage.getItem("count")));
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  //const url = "https://randomusers.com";
  const inputRef = useRef();


 /*  useEffect(() => {
      const onMouseMove = e => {
          console.log(e);
      }
      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      }
  }, [])
 */ useEffect(() => {
  localStorage.setItem("count", JSON.stringify(count));
  }, [count])
  return (
    <div>
      <h1>Use State</h1>
      <input
        ref={inputRef}
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
      <button onClick={() => {
          console.log(inputRef.current.focus())
      }}>Focus</button>

      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
