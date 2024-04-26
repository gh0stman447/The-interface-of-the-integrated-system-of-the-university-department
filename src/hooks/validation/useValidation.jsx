const { useEffect, useState } = require("react");

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);
  
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          case 'maxLength':
            value.length > validations[validation]
              ? setMaxLengthError(true)
              : setMaxLengthError(false);
            break;
          case 'isEmpty':
            value ? setIsEmpty(false) : setIsEmpty(true);
            break;
          default:
        }
      }
    }, [value]);
  
    useEffect(() => {
      if (isEmpty || minLengthError || maxLengthError) {
        setIsInputValid(false);
      } else {
        setIsInputValid(true);
      }
    }, [isEmpty, minLengthError, maxLengthError]);
  
    return {
      isEmpty,
      minLengthError,
      maxLengthError,
      isInputValid,
    };
  };
  