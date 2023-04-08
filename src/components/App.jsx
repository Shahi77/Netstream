import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, NavBar, Profile } from './';

const App = () => {
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <main>
                <Routes>


                    <Route path="/actors/:id" element={<Actors />} />
                    <Route path="/movieinformation/:id" element={<movieInformation />} />
                    <Route path="/profile/:id" element={<Profile />} />
                </Routes>
            </main>

        </div>
    )
}

export default App