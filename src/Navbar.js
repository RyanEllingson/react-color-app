import React, {Component} from "react";
import {Link} from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {withStyles} from "@material-ui/styles";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(event) {
        this.setState({format: event.target.value, open: true});
        this.props.handleChange(event.target.value);
    }

    closeSnackbar() {
        this.setState({open: false});
    }

    render() {
        const {format} = this.state;
        const {level, changeLevel, showingAllColors, classes} = this.props;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">React Color App</Link>
                </div>
                {showingAllColors && <div>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div>
                </div>}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format changed to {format.toUpperCase()}!</span>}
                    ContentProps={{"aria-describedby": "message-id"}}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    ]}
                    onClose={this.closeSnackbar}
                />
            </header>
        );
    }
}

export default withStyles(styles)(Navbar);