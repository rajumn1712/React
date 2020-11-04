import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import axios from '../../axios-app';
import CircularIndeterminate from '../../Common/loader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ApplyJobComponent from '../Applyjob/Applyjob';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '0.5rem',
        padding: '0.5rem'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    pull: {
        textAlign: 'right',
        margin: '0.5rem',
        padding: '0.5rem',
        outline: 'none'
    },
    noJObs: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        minWidth: 275,
    }
});

const MyJob = () => {

    const classes = useStyles();

    const [myJobs, setMyjobs] = useState([]);
    const [loader, setLoder] = useState(false);
    const [open, setOpen] = useState(false);
    const [toggleDom,setToggleDom] = useState(false);
    const [object,setObject] = useState({})


    useEffect(() => {
        setOpen(!open);
        axios.get('createjobs.json')
            .then(response => {
                for (let key in response.data) {
                    myJobs.push({
                        ...response.data[key],
                        Id: key
                    })
                }
                setMyjobs(myJobs);
                setLoder(true);
                setOpen(open);
            })
    }, []);
    const truncate = (source, size) => {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }
    const viewJob = (object) => {
        setToggleDom(true);
        setObject(object);
    }
    let myJobsHtml = 
        myJobs.map((job => {
            return <Card className={classes.root} variant="outlined" key={job.Id}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {job.CurrentRole}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {job.Company}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {job.Location}
                    </Typography>
                    <Typography style={{ textAlign: 'justify' }} variant="body2" component="p">
                        {truncate(job.Description, 250)}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {moment(job.CreatedDate).format('DD-MM-YYYY')}
                    </Typography>
                </CardContent>
                {/* <CardActions> */}
                <div className={classes.pull}>
                    <Button variant="contained" color="primary" onClick={() => viewJob(job)}>View Job Description</Button>
                </div>
                {/* </CardActions> */}
            </Card>
        }));

        const otherHtml = (
            (myJobs && myJobs.length > 0) ? myJobsHtml : <Card className={classes.noJObs}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        No Jobs Found
                    </Typography>
                </CardContent>
            </Card>
        )

    return (
        <Fragment>
            {!loader ? <CircularIndeterminate open={open} /> : null}
            <div><h3>Jobs for you</h3></div>
            {!toggleDom ? otherHtml : <ApplyJobComponent job={object}/>}
        </Fragment>
    )
}

export default MyJob;