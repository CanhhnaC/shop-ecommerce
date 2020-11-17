import { useEffect, useState } from "react";

export const useAutoToggle = (initialValue, ms = 3000) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => setValue((value) => value), ms);
  }, [initialValue, ms]);

  return value;
};
