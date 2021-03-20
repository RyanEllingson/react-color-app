import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";


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
        const {colors, paletteName, emoji} = this.props.palette;
        const {level, format, copying} = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox key={color.id} background={color[format]} name={color.name} setCopying={this.setCopying} />;
        });
        return (
            <div className={`Palette ${copying && "copying"}`}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette;