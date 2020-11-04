import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Responsibilities from './Responsibilities';
import { Button } from '@material-ui/core';
import styles from './PostJob.css';
import Requirements from './Requirements';
import axios from '../../axios-app';
import CircularIndeterminate from '../../Common/loader';

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
        },
        '& .MuiFormHelperText-contained':{
            color:'red'
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
        Description:'',
        CreatedDate:new Date()
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

    const [errors,setErrors] = useState('');
    const [error,setError] = useState({});
    const [loader,setLoader] = useState(false);
    const [open,setOpen] = useState(false);


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

    const handleValidation = ()=>{
        const fields = {...allFields};
        const error1 = {...error};
        let validate = false;
        let errors = '';
        for(let key in fields){
            if(!fields[key]){
                validate = true;
                errors = 'is required';
                error1['error'] = 'error'
                setError(error1)
            }
        }
        setErrors(errors);
        return validate;
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
        const response = [...addRequire.requirements];
        response[indx][input.name] = input.value;
        setRequire({requirements:response});
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        const finalObject = {...fields,...addState,...addRequire};
        if(handleValidation()){
            return
        }else{
            setOpen(true);
            axios.post('createjobs.json',finalObject)
            .then(response =>{
                setFields({JobTitle:'',
                CurrentRole:'',
                Industry:'',
                Company:'',
                Location:'',
                Country:'',
                Description:''})
                setAddState({responsibilities:[{ Description: '' }]})
                setRequire({requirements:[{ Description: '' }]})
                setLoader(false);
                setOpen(false);
            })
        }
    }

    return (
        <Fragment>
            {!loader ? <CircularIndeterminate open={open} /> : null}
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <div><h3>Create a Job</h3></div>
                <div>
                    <TextField className="textfields" id="outlined-role" label="Job Role" type="role" variant="outlined" name="JobTitle" helperText={errors} value={allFields.JobTitle} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-current" label="Current Role" type="current" variant="outlined" name="CurrentRole" helperText={errors} value={allFields.CurrentRole} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-industry" label="Industry" type="industry" variant="outlined" name="Industry" helperText={errors} value={allFields.Industry} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-company" label="Company" type="company" variant="outlined" name="Company" helperText={errors} value={allFields.Company} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-location" label="Location" type="location" variant="outlined" name="Location" helperText={errors} value={allFields.Location} onChange={handleChange}/>
                    <TextField className="textfields" id="outlined-error-country" label="Country" type="country" variant="outlined" helperText={errors} name="Country" value={allFields.Country} onChange={handleChange}/>
                </div>
                <div>
                    <TextField className="textarea" id="outlined-description" label="Job Description" rows={10} type="description" helperText={errors} multiline variant="outlined" name="Description" value={allFields.Description} onChange={handleChange}/>
                </div>
                <Responsibilities records={records} responsible='responsible' clicked={handleAddResponsibles} changed={handleOtherChange}/>
                <Requirements records={requireRecords} responsible='responsible' clicked={handleAddRequirements} changed={handlerequirementChange}/>
                <div className={styles.Right}>
                <Button variant="contained" color="primary" type="submit">Create Job</Button>
            </div>
            </form>
        </Fragment>
    );
}

// http://careers.whatastory.agency/front-end-developer-30540/?utm_source=neuvoo
// git init
// git add
// git commit -m message
// git branch -M main
// git remote add origin url
// git push -u origin main