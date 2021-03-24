import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

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
        const {paletteName, emoji} = this.props.palette;
        const {format} = this.state;
        const colorBoxes = this._shades.map(chosenColor => {
            const color = chosenColor[0];
            return <ColorBox key={color.id} name={color.name} background={color[format]} showLink={false} setCopying={this.setCopying} /> 
        });

        return (
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;