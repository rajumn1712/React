import React, { Fragment, useState } from 'react';
import classes from './Applyjob.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from '../../axios-app';
import CircularIndeterminate from '../../Common/loader';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(3),
            width: '32ch',
        },
        '& .textarea': {
            marginBottom: theme.spacing(3),
            width: '66ch'
        },
        '& .MuiFormHelperText-contained': {
            color: 'red'
        }
    },
}));


const JobForm = (props) => {
    const styles = useStyles();

    const [allFields, setAllFields] = useState({
        FirstName: '',
        LastName: '',
        UserName: '',
        Mobile: '',
        Description: ''
    })
    const [errors, setErrors] = useState('');
    const [loader, setLoader] = useState(false);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const input = event.target;
        const user = { ...allFields };
        user[input.name] = input.value;
        setAllFields(user);
    }

    const handleValidation = () => {
        const fields = { ...allFields };
        let validate = false;
        let errors = '';
        for (let key in fields) {
            if (!fields[key]) {
                validate = true;
                errors = 'is required';
            }
        }
        setErrors(errors);
        return validate;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const jobForm = { ...allFields };
        if (handleValidation()) {
            return;
        }
        else {
            setOpen(true);
            axios.post('jobform.json', jobForm)
                .then(res => {
                    props.close();
                    setLoader(false);
                    setOpen(false);
                })
        }
    }

    return (
        <Fragment>
            <div>
                {!loader ? <CircularIndeterminate open={open} /> : null}
                <form className={styles.root}>
                    <div className={classes.rowText}>
                        <TextField className={classes.marginText} InputLabelProps={{ required: true }} id="outlined-fn" label="First Name" type="text" variant="outlined" name="FirstName" helperText={errors} value={allFields.FirstName} onChange={handleChange} />
                        <TextField className={classes.marginText} InputLabelProps={{ required: true }} id="outlined-ln" label="Last Name" type="text" variant="outlined" name="LastName" helperText={errors} value={allFields.LastName} onChange={handleChange} />
                    </div>
                    <div className={classes.rowText}>
                        <TextField className={classes.marginText} InputLabelProps={{ required: true }} id="outlined-email" label="Email Address" type="email" variant="outlined" name="UserName" helperText={errors} value={allFields.UserName} onChange={handleChange} />
                        <TextField className={classes.marginText} InputLabelProps={{ required: true }} id="outlined-mobile" label="Mobile" type="text" variant="outlined" name="Mobile" helperText={errors} value={allFields.Mobile} onChange={handleChange} />
                    </div>
                    <div className={classes.rowText}>
                        <TextField className="textarea" id="outlined-description" label="About Yourself" rows={10} type="text" helperText="Tip: Short description that describes what you do, e.g. Ui Developer."
                            multiline variant="outlined" name="Description" value={allFields.Description} onChange={handleChange} />
                    </div>
                    <div className={classes.ButtonStick}>
                        <Button variant="contained" onClick={props.close}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default JobForm;