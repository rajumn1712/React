import React, { useEffect, useState } from 'react';
import axios from '../../axios-app';
import CircularIndeterminate from '../../Common/loader';
import { Table } from 'react-bootstrap';

const columns = [
    { field: 'Id', hide:true },
    { field: 'FirstName', headerName: 'First Name', width: 300 },
    { field: 'LastName', headerName: 'Last Name', width: 300 },
    { field: 'UserName', headerName: 'Email', width: 300 },
    { field: 'Mobile', headerName: 'Mobile', width: 300 },
    { field: 'Description', headerName: 'Description', width: 300 }
];

const Applications = () => {

    const [rows, setApplicants] = useState([]);
    const [loader, setLoder] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        setOpen(!open);
        axios.get('jobform.json')
            .then(res => {
                for (let key in res.data) {
                    rows.push({
                        ...res.data[key],
                        Id: key
                    });
                    setApplicants(rows);
                    setLoder(true);
                    setOpen(open);
                }
            })
    },[])
    return (
        <div>
            {!loader ? <CircularIndeterminate open={open} /> : null}
            <div><h3>Total Applicants</h3></div>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Mobile</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((person) => {
                            return <tr key={person.Id}>
                                <td>{person.FirstName}</td>
                                <td>{person.LastName}</td>
                                <td>{person.UserName}</td>
                                <td>{person.Mobile}</td>
                                <td>{person.Description}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
        </div>
    )
}

export default Applications;