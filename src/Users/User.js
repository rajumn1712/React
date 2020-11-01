import { Checkbox, Icon } from '@material-ui/core';
import React, { Component, createRef } from 'react';
import { Table } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle, FormControl, TextField, DialogActions, Button } from '@material-ui/core';
import { SnackBar } from '../Common/Snackbar/SnackBar';
import Aux from '../hoc/Auxillary';
import FormComponent from '../components/FormsFolder/FormsComponent';
import axios from '../axios-app';
import CircularIndeterminate from '../Common/loader';

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
    HeaderAccess : {
        display: 'flex',
        alignItems: 'center',
        flex: 'auto'
      },
      Padd : {
        padding: '16px !important',
        cursor:'pointer'
      }
});

class UserComponent extends Component {
    snackbarRef  = createRef();
    state = {
        persons:[],
        open: false,
        user:{Id: '', FirstName: '', LastName: '', UserName: ''},
        selection:[],
        loader:false
    }

    componentDidMount = ()=>{
        const persons = [...this.state.persons];
        axios.get('/users.json')
        .then(response=>{
            persons.push(response.data['-MKyjmFAtlGb9om5gZ2v'].users);
            this.setState({persons:persons,loader:true});
        })
    }
    handleAdd = () => {
        const showDialog = this.state.open;
        this.setState({ open: !showDialog })
    }
    handleEdit = (e)=>{
        e.preventDefault();
        const checkSelection = [...this.state.selection];
        if(checkSelection.length === 0 || checkSelection.length > 1){
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
        if(checkSelection.length === 0 || checkSelection.length > 1){
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
            <Aux>
                {!this.state.loader ? <CircularIndeterminate /> : null}
                <FormComponent/>
            <div>
                <div className={classes.HeaderAccess}>
                    <div><SnackBar ref = {this.snackbarRef }/></div>
                    <h4>Users List</h4>
                    <div className={classes.Padd}>
                        <Icon onClick={this.handleAdd}>add_circle</Icon>
                        <Icon onClick={this.handleEdit}>edit_circle</Icon>
                        <Icon onClick={this.handleDelete}>delete_circle</Icon>
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
            </Aux>
        )
    }
}

export default withStyles(useDialogStyles)(UserComponent)