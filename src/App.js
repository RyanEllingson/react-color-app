import {Route, Switch} from "react-router-dom";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";

function App() {
  const findPalette = function(id) {
    return seedColors.find(palette => palette.id === id);
  };

  return (
    <Switch>
      <Route exact path="/" render={routeProps => <PaletteList {...routeProps} palettes={seedColors}/>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>} />
      <Route path="/palette/:paletteId/:colorId" render={() => <h1>Single color page!</h1>} />
    </Switch>
  );
}

export default App;
