import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { Box } from '@material-ui/core';

export const Form = ({ setCity }) => {

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        onSubmit: values => {
            setCity(values.city);
        },
    });

    const { handleSubmit, handleChange, values } = formik;

    return (
        <Box py={1}>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <Box my={2}>
                    <TextField
                        label="City"
                        variant="filled"
                        type="text"
                        name="city"
                        onChange={handleChange}
                        value={values.city}
                    />
                </Box>
                <Box my={2}>
                    <Button variant="contained" color="primary" type="submit" disabled={!values.city}>
                        Get Weather
                    </Button>
                </Box>
            </form>
        </Box>
    )
}