import React, { PureComponent } from "react";
import classes from './SnackBar.css';

export class SnackBar extends PureComponent {
    message = '';

    state = {
      isActive:false
    }

    openSnackBar = (message) => {
        this.message = message;
        this.setState({ isActive: true }, () => {
          setTimeout(() => {
            this.setState({ isActive: false });
          }, 3000);
        });
      }

      render(){
          const {isActive} = this.state;
          const snackbar = [classes.Snackbar,classes.show];
          return (
            <div className = {isActive ? snackbar.join(' ') : classes.Snackbar}>
            {this.message}
          </div>
          )
      }
}