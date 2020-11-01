import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 100 },
    { field: 'body', headerName: 'Description', width: 150 },
];



const DummyData = (props)=>{
    const rows = [props.data];
    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5}/>
        </div>
    )
}

export default DummyData