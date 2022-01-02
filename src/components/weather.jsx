import React from 'react'
import { Box } from '@material-ui/core';

export const Weather = ({ result }) => {
    if (result) {
        const { name, sys, main, weather } = result.data;
        return (
            <Box bgcolor={"rgb(255, 193, 58)"} py={3}>
                <h2>City: {name}</h2>
                <h3>Country: {sys.country}</h3>
                <Box mx={2} fontSize={30}>
                    Temp: {Math.floor(main.temp - 273.25)}&deg;
                </Box>
                <p>Status: {weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="icon" />
            </Box>
        )
    } else {
        return null;
    }
}
