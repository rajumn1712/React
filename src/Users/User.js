import { Icon } from '@material-ui/core';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UserComponent extends Component {
    state = 
        [
            {Id:1,FirstName:'Nagaraju',LastName:'Mandadapu',UserName:'nagaraju@gmail.com'},
            {Id:2,FirstName:'Sravanthi',LastName:'Andru',UserName:'sravanthi@gmail.com'},
            {Id:3,FirstName:'Sudhakiran',LastName:'Kallagunta',UserName:'sudhakiran@gmail.com'},
            {Id:4,FirstName:'Santhosh',LastName:'GUnti',UserName:'santhosh@gmail.com'},
            {Id:5,FirstName:'Sai',LastName:'Kumari',UserName:'sai@gmail.com'}
        ]
    
    render() {
        const list = [...this.state];
        return (
            
            <div>
                <div className="header-access">
                <h4>Users List</h4>
               <div className="pd">
               <Icon>add_circle</Icon>
               <Icon>edit_circle</Icon>
               <Icon>delete_circle</Icon>
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
            </div>
        )
    }
}

export default UserComponent