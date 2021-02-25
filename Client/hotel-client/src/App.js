import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/View/Home/Home";
import Offer from "./Component/View/Offer/Offer";
import Facilities from "./Component/View/Facilities/Facilities";
import Accommodation from "./Component/View/Accommodation/Accommodation";
import MeetingRoom from "./Component/View/MeetingRoom/MeetingRoom";
import FeedBack from "./Component/View/FeedBack/FeedBack";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route path="/accommodation/:type" component={Accommodation} />
          <Route path="/offer" component={Offer}/>
          <Route path="/facilities" component={Facilities}/>
          <Route path="/meeting" component={MeetingRoom}/>
          <Route path="/contact" component={FeedBack}/>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
