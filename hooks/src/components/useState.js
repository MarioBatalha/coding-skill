import React, { useRef } from "react";

import { useForm } from "../hook/useForm";
import { useFetch } from "../hook/useFetch";

export const StateComponent = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  const url = "https://randomusers.com";
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
 */

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
    </div>
  );
};
