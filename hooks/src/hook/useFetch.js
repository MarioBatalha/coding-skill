import { useEffect } from "react";

export const useFetch = (url) => {
  useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((y) => {
        console.log(y);
      });
  }, [url]);
};
