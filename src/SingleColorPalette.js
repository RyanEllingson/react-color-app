import React, {Component} from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades();
        this.state = {
            copying: false
        };
        this.setCopying = this.setCopying.bind(this);
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

    render() {
        const colorBoxes = this._shades.map(chosenColor => {
            const color = chosenColor[0];
            return <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} setCopying={this.setCopying} /> 
        });

        return (
            <div className="Palette">
                <h1>Single color palette!</h1>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;