import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.goToPalette = this.goToPalette.bind(this);
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors!</h1>
                        <Link to="/palette/new">Create New Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => {
                            return <MiniPalette {...palette} handleClick={this.goToPalette} />;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);