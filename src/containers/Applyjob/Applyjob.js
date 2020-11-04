import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';
import classes from './Applyjob.css';
import SlidePopup from '../../Common/Slidepanel/SlidePanel';


class ApplyJobComponent extends Component {

    render() {
        const job = { ...this.props.job }
        return (
            <Fragment>
                <div className={classes.Textpadding}>
                    <h1 className={classes.Textpadding}>{job.CurrentRole}</h1>
                    <div className={classes.Textpadding}>
                    <Button variant="contained" color="primary" type="submit">Apply Now</Button>
                    </div>
                    <p className={classes.Textpadding}>{job.Location}</p>
                    <div className={classes.Textpadding}>
                        {job.Description}
                    </div>
                    <div className={classes.Textpadding}>
                        <h5>Responsibilities</h5>
                        <ul>
                            {job.responsibilities.map((r, index) => {
                                return <li key={index}>{r.Description}</li>
                            })}
                        </ul>
                    </div>
                    <div className={classes.Textpadding}>
                        <h5>Requirements</h5>
                        <ul>
                            {job.requirements.map((r, index) => {
                                return <li key={index}>{r.Description}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <SlidePopup/>

            </Fragment>
        )
    }
}

export default ApplyJobComponent;