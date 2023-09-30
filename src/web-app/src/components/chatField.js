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

import BallonAwnser from './ballonAwnser'
import BallonResponse from './ballonResponse'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/chatField'


const mapStateToProps = (state) => {
  console.log(state)
  return {
      quote : state.chatReducer.quote,
  };
}

function ChatField(props) {
  console.log(props.quote)
  return (
    <Container>
      <Grid 
        container 
        spacing={1}>
        {
          props.quote?.map(item => ( 
            item.type === 'awnser' 
            ? (<BallonAwnser messenger={item.message}/>)
            : (<BallonResponse messenger={item.message}/>)
          )
          )
        }
      </Grid>
    </Container>
  );
}

export default connect(mapStateToProps, { addTodo })(ChatField)