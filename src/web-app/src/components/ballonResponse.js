import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { TypeAnimation } from 'react-type-animation';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const CardAwnser = styled(Card)(({ theme }) => ({
  backgroundColor: 'red',
}));

export default function BallonAwnser(props) {
  return (
        <Grid 
        item 
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center">
          <CardAwnser item md={12}>
            <CardContent>
              <TypeAnimation
                sequence={[
                  props.messenger,
                  1000
                ]}
                cursor="false"
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
              />
            </CardContent>
          </CardAwnser>
        </Grid>
  );
}