import Axios from 'axios';
import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CircularIndeterminate from '../../Common/loader';
import Aux from '../../hoc/Auxillary';

class FakeComponent extends Component {
    state = {
        posts: [],
        loader: false
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data,loader:true });
            })
    }
    render() {
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'title', headerName: 'Title', width: 300 },
            { field: 'body', headerName: 'Description', width: 800 },
        ];
        const rows = this.state.posts;
        return (
            <Aux>
                {!this.state.loader ? <CircularIndeterminate /> : null}
                <div style={{ height: 800, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={20} />
                </div>
            </Aux>
        )
    }
}

export default FakeComponent