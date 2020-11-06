import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { Icon } from '@material-ui/core';
import styles from './PostJob.css';

const Requirements = (props) => {
    return (
        <Fragment>
            <div className={styles.HeaderAccess}>
                    <h4>Requirements</h4>
                    <div className={styles.Padd}>
                        <Icon className={styles.Iconcolor} onClick={props.clicked}>add_circle</Icon>
                    </div>
                </div>
            <div>
                {props.records.map((record, index) => {
                    return <TextField InputLabelProps={{ required: true }} key={index} className={props.responsible} 
                    id="outlined-requirements" placeholder="Add some content" type="responsibility" 
                    variant="outlined" name="Description" value={record.Description} onChange={props.changed}/>
                })}
            </div>
        </Fragment>
    )
}

export default Requirements;