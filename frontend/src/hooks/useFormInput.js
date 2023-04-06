import { useState } from "react";


const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const inputValue = {
        value: value,
        onChange: handleChange
    }

    return inputValue;
}

export default useFormInput;