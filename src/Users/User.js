import { Checkbox, Icon } from '@material-ui/core';
import React, { Component, createRef } from 'react';
import { Table } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, DialogTitle, FormControl, TextField, DialogActions, Button } from '@material-ui/core';
import { SnackBar } from '../Common/Snackbar/SnackBar';
const useDialogStyles = theme => ({
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
});

class UserComponent extends Component {
    snackbarRef  = createRef();
    state = {
        persons:
            [
                { Id: 1, FirstName: 'Nagaraju', LastName: 'Mandadapu', UserName: 'nagaraju@gmail.com' },
                { Id: 2, FirstName: 'Sravanthi', LastName: 'Andru', UserName: 'sravanthi@gmail.com' },
                { Id: 3, FirstName: 'Sudhakiran', LastName: 'Kallagunta', UserName: 'sudhakiran@gmail.com' },
                { Id: 4, FirstName: 'Santhosh', LastName: 'Gunti', UserName: 'santhosh@gmail.com' },
                { Id: 5, FirstName: 'Sai', LastName: 'Kumari', UserName: 'sai@gmail.com' }
            ],
        open: false,
        user:{Id: '', FirstName: '', LastName: '', UserName: ''},
        selection:[]
    }

    handleAdd = () => {
        const showDialog = this.state.open;
        this.setState({ open: !showDialog })
    }
    handleEdit = (e)=>{
        e.preventDefault();
        const checkSelection = [...this.state.selection];
        if(checkSelection.length == 0 || checkSelection.length > 1){
            this.snackbarRef.current.openSnackBar('Please select one record to proceed.');
        }
        else {
            const user = {...this.state.user};
            user.Id = checkSelection[0].Id;
            user.FirstName = checkSelection[0].FirstName;
            user.LastName = checkSelection[0].LastName;
            user.UserName = checkSelection[0].UserName;
            this.setState({user:user,open:true});
        }

    }
    handleClose = () => {
        const closeDialog = this.state.open;
        this.setState({ open: !closeDialog })
    }
    handleChange = (event) =>{
        const input = event.target;
       const user = this.state.user;
       user[input.name] = input.value;
       this.setState({user:user});
    }
    handleSave = () =>{
       const personsList = [...this.state.persons];
       const user = this.state.user;
       personsList.push(user);
       this.setState({persons:personsList,open:false});
    }
    handleSelection = (event,item,index)=>{
        const selection = [...this.state.selection];
        if(event.target.checked){
            selection.push(item);
        }
        else{
            selection.splice(item,index);
        }
        this.setState({selection:selection});
    }
    handleDelete = ()=>{
        const allPersons = [...this.state.persons];
        let checkSelection = [...this.state.selection];
        const indx = allPersons.indexOf(checkSelection[0]);
        if(checkSelection.length == 0 || checkSelection.length > 1){
            this.snackbarRef.current.openSnackBar('Please select one record to proceed.');
        }else{
            checkSelection = [];
            allPersons.splice(indx,1);
            this.setState({persons:allPersons,selection:checkSelection});
        }
    }
    render() {
        const { classes } = this.props;
        const list = [...this.state.persons];
        const user = this.state.user;
        return (

            <div>
                <div className="header-access">
                    <div><SnackBar ref = {this.snackbarRef }/></div>
                    <h4>Users List</h4>
                    <div className="pd">
                        <Icon className="cursor-p" onClick={this.handleAdd}>add_circle</Icon>
                        <Icon className="cursor-p" onClick={this.handleEdit}>edit_circle</Icon>
                        <Icon className="cursor-p" onClick={this.handleDelete}>delete_circle</Icon>
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((person,index) => {
                            return <tr key={index}>
                                <td><Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} onChange={(event)=>this.handleSelection(event,person,index)}/></td>
                                <td>{person.Id}</td>
                                <td>{person.FirstName}</td>
                                <td>{person.LastName}</td>
                                <td>{person.UserName}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                <Dialog onClose={this.handleClose} fullWidth="true" maxWidth="md"
                    aria-labelledby="max-width-dialog-title" open={this.state.open}>
                    <DialogTitle id="max-width-dialog-title">User Form</DialogTitle>
                    {/* <div>
                <DialogContent>
                    <DialogContentText>Fill the user details</DialogContentText>
                </DialogContent>
                </div> */}
                    <DialogContent>
                        <form className={classes.form} noValidate>
                            <FormControl className={classes.formControl}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="id"
                                            label="Id"
                                            type="text" name="Id" value={user.Id}
                                            fullWidth onChange={(event)=>this.handleChange(event)}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="fname"
                                            label="First Name"
                                            type="text" name="FirstName" value={user.FirstName}
                                            fullWidth onChange={(event)=>this.handleChange(event)}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="lname"
                                            label="Last Name" name="LastName" value={user.LastName}
                                            type="text"
                                            fullWidth onChange={(event)=>this.handleChange(event)}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="email"
                                            label="Email Address"
                                            type="email" name="UserName" value={user.UserName}
                                            fullWidth onChange={(event)=>this.handleChange(event)}
                                        />
                                    </div>
                                </div>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="success" onClick={this.handleSave}>Save</Button>
                        <Button onClick={this.handleClose} color="primary">
                            Close
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(useDialogStyles)(UserComponent)