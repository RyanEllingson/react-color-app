import React from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px"
    }
    
}

const DraggableColorBox = function(props) {
    return (
        <div className={props.classes.root} style={{backgroundColor: props.color}}>
            {props.name}
        </div>
    );
};

export default withStyles(styles)(DraggableColorBox);