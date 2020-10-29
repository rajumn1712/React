import React, { PureComponent } from "react";
import './SnackBar.css';

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
          return (
            <div className = {isActive ? 'snackbar show' : 'snackbar'}>
            {this.message}
          </div>
          )
      }
}