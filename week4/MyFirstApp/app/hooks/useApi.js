import { useState } from 'react';


export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        // Loading and Receiving Data
        setLoading(true);        
        const response = await apiFunc(...args);
        setLoading(false);

        // Checking if response was ok
        if(!response.ok) return setError(true);

        // Doing something with the data
        setError(false);
        setData(response.data);

    }

    return { data, error, loading, request };
}