import { useValidation } from "./useValidation";

const { useState } = require("react");

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);
  
    const onBlur = (e) => {
      setIsDirty(true, validations);
    };
  
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onBlur,
      onChange,
      isDirty,
      ...valid,
    };
  };