import { Icon } from '@material-ui/core';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, DialogTitle, FormControl, TextField, DialogActions, Button } from '@material-ui/core';
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
    state = {
        persons:
        [
            {Id:1,FirstName:'Nagaraju',LastName:'Mandadapu',UserName:'nagaraju@gmail.com'},
            {Id:2,FirstName:'Sravanthi',LastName:'Andru',UserName:'sravanthi@gmail.com'},
            {Id:3,FirstName:'Sudhakiran',LastName:'Kallagunta',UserName:'sudhakiran@gmail.com'},
            {Id:4,FirstName:'Santhosh',LastName:'Gunti',UserName:'santhosh@gmail.com'},
            {Id:5,FirstName:'Sai',LastName:'Kumari',UserName:'sai@gmail.com'}
        ],
        open:false
    }
    
        handleAdd = ()=>{
            const showDialog = this.state.open;
            this.setState({open:!showDialog})
        }
        handleClose = ()=>{
            const closeDialog = this.state.open;
            this.setState({open:!closeDialog})
        }
    render() {
        const {classes} = this.props;
        const list = [...this.state.persons];
        return (
            
            <div>
                <div className="header-access">
                <h4>Users List</h4>
               <div className="pd">
               <Icon className="cursor-p" onClick={this.handleAdd}>add_circle</Icon>
               <Icon className="cursor-p">edit_circle</Icon>
               <Icon className="cursor-p">delete_circle</Icon>
               </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {list[0].Id}
                            </td>
                            <td>{list[0].FirstName}</td>
                            <td>{list[0].LastName}</td>
                            <td>{list[0].UserName}</td>
                        </tr>
                        <tr>
                            <td>
                                {list[1].Id}
                            </td>
                            <td>{list[1].FirstName}</td>
                            <td>{list[1].LastName}</td>
                            <td>{list[1].UserName}</td>
                        </tr>
                        <tr>
                            <td>
                                {list[2].Id}
                            </td>
                            <td>{list[2].FirstName}</td>
                            <td>{list[2].LastName}</td>
                            <td>{list[2].UserName}</td>
                        </tr>
                        <tr>
                            <td>
                                {list[3].Id}
                            </td>
                            <td>{list[3].FirstName}</td>
                            <td>{list[3].LastName}</td>
                            <td>{list[3].UserName}</td>
                        </tr>
                        <tr>
                            <td>
                                {list[4].Id}
                            </td>
                            <td>{list[4].FirstName}</td>
                            <td>{list[4].LastName}</td>
                            <td>{list[4].UserName}</td>
                        </tr>
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
                            id="fname"
                            label="First Name"
                            type="text"
                            fullWidth
                        />
                        </div>
                        <div className="col-md-4">
                        <TextField
                            autoFocus
                            margin="dense"
                            id="lname"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
                        </div>
                        <div className="col-md-4">
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        </div>
                        </div>
                    </FormControl>
                </form>
                </DialogContent>
                <DialogActions>
                    <Button color="success">Save</Button>
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