import React from 'react';
import { Provider } from 'react-redux';
import { Grid, Typography } from '@mui/material';

import { Router } from './routes';
import { store } from './store';

function App() {
    return (
        <React.Fragment>
            <Grid
                container
                sdirection="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Typography variant="h4">Personagens Marvel</Typography>
                <Provider store={store}>
                    <Router></Router>
                </Provider>
            </Grid>
        </React.Fragment>
    );
}

export default App;
