import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Responsibilities from './Responsibilities';
import { Button } from '@material-ui/core';
import styles from './PostJob.css';
import Requirements from './Requirements';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .textfields': {
            margin: theme.spacing(1),
            width: '40ch',
        },
        '& .textarea': {
            margin: theme.spacing(1),
            width: '124ch'
        },
        '& .responsible': {
            margin: theme.spacing(1),
            width: '61ch'
        }
    },
}));

export default function PostAJob() {
    const classes = useStyles();

    const [fields,setFields] = useState({
        JobTitle:'',
        CurrentRole:'',
        Industry:'',
        Company:'',
        Location:'',
        Country:'',
        Description:''
    })

    const [addState, setAddState] = useState({
        responsibilities: [
            { Description: '' }
        ]
    })
    const [addRequire,setRequire] = useState({
        requirements:[
            { Description: '' }
        ]
    });

    const allFields = {...fields};
    const records = [...addState.responsibilities];
    const requireRecords = [...addRequire.requirements];

    const handleAddResponsibles = () => {
        const newAdded = { Description: '' };
        const records = [...addState.responsibilities];
        records.push(newAdded);
        setAddState({ responsibilities: records });
    }

    const handleAddRequirements = ()=>{
        const newAdded = { Description: '' };
        const requireRecords = [...addRequire.requirements];
        requireRecords.push(newAdded);
        setRequire({ requirements: requireRecords });
    }

    const handleChange = (event) =>{
        const input = event.target;
       const user = {...fields};
       user[input.name] = input.value;
       setFields(user);
    }

    const handleOtherChange = (event) =>{
        const checks = document.querySelectorAll('#outlined-responsibility');
        const indx = Array.from(checks).indexOf(event.target);
        const input = event.target;
        const response = [...addState.responsibilities];
        response[indx][input.name] = input.value;
        setAddState({responsibilities:response});
    }

    const handlerequirementChange = (event) =>{
        const checks = document.querySelectorAll('#outlined-requirements');
        const indx = Array.from(checks).indexOf(event.target);
        const input = event.target;
        const response = [...addState.responsibilities];
        response[indx][input.name] = input.value;
        setAddState({requirements:response});
    }

    return (
        <Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <div><h3>Create a Job</h3></div>
                <div>
                    <TextField className="textfields" id="outlined-role" label="Job Role" type="role" variant="outlined" name="JobTitle" value={allFields.JobTitle} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-current" label="Current Role" type="current" variant="outlined" name="CurrentRole" value={allFields.CurrentRole} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-industry" label="Industry" type="industry" variant="outlined" name="Industry" value={allFields.Industry} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-company" label="Company" type="company" variant="outlined" name="Company" value={allFields.Company} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-location" label="Location" type="location" variant="outlined" name="Location" value={allFields.Location} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-country" label="Country" type="country" variant="outlined" name="Country" value={allFields.Country} onChange={handleChange}/>
                </div>
                <div>
                    <TextField className="textarea" id="outlined-description" label="Job Description" rows={10} type="description" multiline variant="outlined" name="Description" value={allFields.Description} onChange={handleChange}/>
                </div>
                <Responsibilities records={records} responsible='responsible' clicked={handleAddResponsibles} changed={handleOtherChange}/>
                <Requirements records={requireRecords} responsible='responsible' clicked={handleAddRequirements} changed={handlerequirementChange}/>
            </form>
            <div className={styles.Right}>
                <Button variant="contained" color="primary">Create Job</Button>
            </div>
        </Fragment>
    );
}

// http://careers.whatastory.agency/front-end-developer-30540/?utm_source=neuvoo