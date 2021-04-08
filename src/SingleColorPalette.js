import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const styles = {
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        backgroundColor: "black"
    },
    backButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        textDecoration: "none"
    },
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90vh"
    },
    copying: {
        overflow: "hidden"
    }
}

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades();
        this.state = {
            format: "hex",
            copying: false
        };
        this.setCopying = this.setCopying.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades() {
        //return all shades of correct color
        const {palette, colorId} = this.props;
        const shades = [];
        const allColors = palette.colors;
        for (let key in allColors) {
            shades.push(allColors[key].filter(color => color.id === colorId));
        }
        return shades.slice(1);
    }

    setCopying(value) {
        this.setState({copying: value});
    }

    changeFormat(format) {
        this.setState({format});
    }

    render() {
        const {id, paletteName, emoji} = this.props.palette;
        const {classes} = this.props;
        const {format, copying} = this.state;
        const colorBoxes = this._shades.map(chosenColor => {
            const color = chosenColor[0];
            return <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} setCopying={this.setCopying} /> 
        });

        return (
            <div className={`${classes.Palette} ${copying && classes.copying}`}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                    {/* <div className="go-back"> */}
                        <Link className={classes.backButton} to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);