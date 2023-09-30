import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ChatField from '../components/chatField'
import InputChat from '../components/inputChat'

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '35em',
  textAlign: 'center',
}));

export default function MultilineTextFields() {
  return (
    <Container fixed>
      <Grid 
        container 
        spacing={2}>
        <Grid item md={12}>
          <Typography variant="h2" gutterBottom>
            Chat Medicina
          </Typography>
        </Grid>
        <Grid item md={12}>
          <DemoPaper square elevation={4}>
            <ChatField />
          </DemoPaper>
        </Grid>

        <InputChat />

      </Grid>
    </Container>
  );
}