import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';

const movies = () => {
    const { data } = useGetMoviesQuery();
    console.log(data);
    return (
        <div>
            movies
        </div>
    )
}

export default movies;