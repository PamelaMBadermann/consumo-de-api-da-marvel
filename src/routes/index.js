import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import { Home } from '../pages/Home';
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
};
