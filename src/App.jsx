import React, { useState } from 'react';
import { Form } from './components/form';
import { Weather } from './components/weather';
import { useWeather } from './customHooks/useWeather';
import { Loader } from './components/loader';
import { Error } from './components/error';
import './App.css';

const API_KEY = "f7b8f95cae99a3ebda8f440ac2d1d983";

function App() {

    const [getValues, setValues] = useState(null);
    const [result, loading, error] = useWeather({ ...getValues, apiKey: API_KEY });

    return (
        <div className="App">
            <Form setValues={setValues} />
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
