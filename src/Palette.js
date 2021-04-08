import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const styles = {
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

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: "hex", copying: false};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
        this.setCopying = this.setCopying.bind(this);
    }

    changeLevel(level) {
        this.setState({level});
    }

    changeFormat(format) {
        this.setState({format});
    }

    setCopying(value) {
        this.setState({copying: value});
    }
    
    render() {
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props;
        const {level, format, copying} = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox key={color.id} id={color.id} paletteId={id} background={color[format]} name={color.name} setCopying={this.setCopying} showingFullPalette={true} />;
        });
        return (
            <div className={`${classes.Palette} ${copying && classes.copying}`}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);