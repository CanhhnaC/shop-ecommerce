import { useCallback, useState } from "react";

export default function useSelect(defaultValue) {
  const [value, setValue] = useState(defaultValue || "");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  });
  return [value, onChange, setValue];
}
