import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Aux from '../../hoc/Auxillary';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormComponent() {
  const classes = useStyles();

  const [useForm,SetUseForm] = useState({
    Id:'',FirstName:'',LastName:'',UserName:''
})

const handleChange = (event) =>{
    const input = event.target;
   const user = {...useForm};
   user[input.name] = input.value;
   SetUseForm(user);
}

  return (
      <Aux>
          <h5>User Form</h5>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Id" name="Id" onChange={(event)=>handleChange(event)}/>
      <TextField id="standard-basic" label="First Name" name="FirstName" onChange={(event)=>handleChange(event)}/>
      <TextField id="standard-basic" label="Last Name" name="LastName" onChange={(event)=>handleChange(event)}/>
      <TextField id="standard-basic" label="Email" name="UserName" onChange={(event)=>handleChange(event)}/>
      <Button color="primary">Submit</Button>
    </form>
      </Aux>
  );
}
