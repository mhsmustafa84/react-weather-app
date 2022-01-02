import React, { useState } from 'react';
import { Form } from './components/form';
import { Weather } from './components/weather';
import { useWeather } from './customHooks/useWeather';
import { Loader } from './components/loader';
import { Error } from './components/error';
import './App.css';

const apiKey = "f7b8f95cae99a3ebda8f440ac2d1d983";

function App() {

    const [city, setCity] = useState(null);
    const [result, loading, error] = useWeather({ city, apiKey });

    return (
        <div className="App">
            <Form setValues={setCity} />
            {
                loading
                    ? <Loader />
                    : error
                        ? <Error />
                        : < Weather result={result} />
            }
        </div>
    );
}

export default App;
