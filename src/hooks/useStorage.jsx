import { useState, useEffect } from "react";

const useStorage = (initialValue, key) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key) != null) {
      return JSON.parse(localStorage.getItem(key));
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
