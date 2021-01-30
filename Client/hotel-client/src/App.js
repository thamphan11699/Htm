import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/View/Home/Home";
import Accommodation from "./Component/View/Accommodation/Accommodation";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/accommodation/:type" component={Accommodation} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
