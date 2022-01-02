import React from 'react'
import { Box } from '@material-ui/core';

export const Weather = ({ result }) => {
    if (result) {
        const { name, sys, main, weather } = result.data;
        return (
            <Box bgcolor={"rgb(255, 193, 58)"} py={3}>
                <h2>City: {name}, Country: {sys.country}</h2>
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="icon" />
                <Box mx={2} fontSize={40}>
                    Temp: {Math.floor(main.temp - 273.25)}&deg;
                </Box>
                <p>Status: {weather[0].description}</p>
            </Box>
        )
    } else {
        return null;
    }
}
