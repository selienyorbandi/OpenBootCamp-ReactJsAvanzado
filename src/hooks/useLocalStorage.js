import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue = null) {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            if (item) {
                return JSON.parse(item);
            }
            return defaultValue;
        } catch (err) {
            return defaultValue;
        }
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, setValue]);

    return [value, setValue];
}

export default useLocalStorage;
