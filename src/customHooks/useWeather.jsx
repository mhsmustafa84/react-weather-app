import { useState, useEffect } from 'react';
import axios from 'axios';

export const useWeather = ({ city, apiKey }) => {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (city) {
            setLoading(true);
            setError(false);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                .then(response => {
                    console.log(response);
                    setResult(response);
                })
                .catch(error => {
                    console.log(error);
                    setError(true);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                })
        }
    }, [city, apiKey]);

    return [result, loading, error];
}