import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, DialogTitle, FormControl, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));

export default function FormDialogComponent(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const handleClose = ()=>{
        setOpen(false);
    }
    return (
        <React.Fragment>
            <Dialog onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open ? props.open : open}>
                <DialogTitle id="max-width-dialog-title">User Form</DialogTitle>
                <DialogContent>
                    <DialogContentText>Fill the user details</DialogContentText>
                </DialogContent>
                <form className={classes.form} noValidate>
                    <FormControl className={classes.formControl}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="fname"
                            label="First Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="lname"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </FormControl>
                </form>
            </Dialog>
        </React.Fragment>
    )
}