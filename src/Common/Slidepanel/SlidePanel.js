import React from "react";
import SlidingPane from "react-sliding-pane";
import { Icon } from "@material-ui/core";
import './SlidePanel.module.css';

const SlidePopup = (props) => {

  const closIcon = (
    <Icon onClick={props.Closed}>close_circle</Icon>
  )

  return (
    <div>
      <SlidingPane
        width='50%'
        overlayClassName="some-custom-overlay-class"
        isOpen={props.isPaneOpen}
        title={props.jobTitle.CurrentRole}
        subtitle={props.jobTitle.Location}
        closeIcon={closIcon}>
        {props.children}
      </SlidingPane>
    </div>
  );
};

export default SlidePopup;