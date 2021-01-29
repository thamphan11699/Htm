import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/View/Home/Home";
import Accommodation from "./Component/View/Accommodation/Accommodation";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/accommodation/:type" component={Accommodation} />
          {/* <Route path="/" component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;
