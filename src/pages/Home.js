import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { getCharacters } from '../services/marvel';
import { fetchCharacters } from '../store/modules/characters/action';

export const Home = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(fetchCharacters());
    }, []);

    return (
        <React.Fragment>
            <Grid
                container
                sdirection="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {character.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    );
};
