import { useState, useEffect } from 'react'

const useLocalStorage = (defaultValue, key) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const stickyValue = window && window.localStorage.getItem(key);

        if (stickyValue !== null) {
            setValue(JSON.parse(stickyValue));
        }
    }, [key]);

    useEffect(() => {
       window && window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage