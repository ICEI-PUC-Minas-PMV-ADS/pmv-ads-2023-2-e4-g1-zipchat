import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const CardAwnser = styled(Card)(({ theme }) => ({
  backgroundColor: 'green',
}));

export default function BallonAwnser(props) {
  return (
        <Grid 
        item 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
          <CardAwnser item md={12}>
            <CardContent>
              <Typography variant="h5"
                style={{ fontSize: '1em' }} component="div">
                {props.messenger}
              </Typography>
            </CardContent>
          </CardAwnser>
        </Grid>
  );
}