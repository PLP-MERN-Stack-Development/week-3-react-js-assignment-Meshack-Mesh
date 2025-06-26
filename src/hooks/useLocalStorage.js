import { useEffect, useState } from "react";

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      return stored ?? initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
