import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Id" name="Id" />
      <TextField id="standard-basic" label="First Name" name="FirstName" />
      <TextField id="standard-basic" label="Last Name" name="LastName" />
      <TextField id="standard-basic" label="Email" name="UserName" />
      <Button color="primary">Submit</Button>
    </form>
  );
}
