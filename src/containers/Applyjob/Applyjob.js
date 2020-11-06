import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';
import classes from './Applyjob.css';
import SlidePopup from '../../Common/Slidepanel/SlidePanel';
import JobForm from './JobForm';


class ApplyJobComponent extends Component {

    state = {
        isPaneOpen:false,
        buttonClicked:false
    }

    OpenSlide = ()=>{
        const openPopup = {...this.state};
        openPopup.isPaneOpen = true;
        openPopup.buttonClicked = true;
        this.setState(openPopup); 
    }

    render() {
        const job = { ...this.props.job }
        return (
            <Fragment>
                <div className={classes.Textpadding}>
                    <h1 className={classes.Textpadding}>{job.CurrentRole}</h1>
                    <div className={classes.Textpadding}>
                    <Button variant="contained" color="primary" onClick={this.OpenSlide}>Apply Now</Button>
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
                <SlidePopup isPaneOpen={this.state.isPaneOpen} jobTitle={job} Closed={()=>{this.setState({ isPaneOpen: false });}}>
            <JobForm close={()=>{this.setState({ isPaneOpen: false });}}/>
        </SlidePopup>
            </Fragment>
        )
    }
}

export default ApplyJobComponent;