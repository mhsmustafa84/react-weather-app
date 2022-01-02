import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { Box } from '@material-ui/core';

export const Form = ({ setValues }) => {

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        onSubmit: values => {
            setValues({ city: values.city });
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
                    <Button variant="contained" color="primary" type="submit">
                        Get Weather
                    </Button>
                </Box>
            </form>
        </Box>
    )
}