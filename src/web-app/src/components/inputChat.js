import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/chatField'
import Button from '@mui/material/Button';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '40em',
  textAlign: 'center',
}));

const mapStateToProps = (state) => {
  console.log(state)
  return {
      quote : state.chatReducer.quote,
  };
}

const sendText = (state) =>{
  // store.dispatch({type: "ADD_QUOTE", text: "testetee"});
}

function InputChat(props) {
  
  const [messageToSend, setMessageToSend] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.addTodo(messageToSend)
      setMessageToSend("")
    }
  }

  return (
    <Grid item container md={12}>
      <Grid item md={11}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{
          }}
        >
          <div>
            <TextField
              label="Digite sua dúvida"
              multiline
              value={messageToSend}
              onChange={(e) => {
                setMessageToSend(e.target.value);
              }}
              style={{
                width: `100%`
              }}
              onKeyDown={handleKeyDown}
              maxRows={1}
            />
          </div>
        </Box>
      </Grid>
      <Grid item md={1}>
          <Button variant="text" onClick={() => props.addTodo(messageToSend)}>Enviar</Button>
      </Grid>
    </Grid>
  );
}

export default connect(mapStateToProps, { addTodo })(InputChat)