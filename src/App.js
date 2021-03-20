import {Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";

function App() {
  return (
    <Switch>
      <Route exact path="/"/>
      <Route exact path="/palette/:id" render={() => <Palette palette={generatePalette(seedColors[1])}/>} />
    </Switch>
  );
}

export default App;
