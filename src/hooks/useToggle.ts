import { useState } from "react";

export default function useToggle(defaultValue: boolean) {
  const [valuee, setValue] = useState(defaultValue);

  function toggleValue(valuee: boolean) {
    setValue((currentValue) =>
      typeof valuee === "boolean" ? valuee : !currentValue
    );
  }

  return [valuee, toggleValue];
}
