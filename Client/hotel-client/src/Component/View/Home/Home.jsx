import React, { Component } from "react";
import Slides from "../../Slide/Slide";
import Intro from "../../Intro/Intro";
import PreviewPage from "../../PreviewPage/PreviewPage";
import Offer from "../../Offer/Offer";
import Map from "../../Maps/Map";

class Home extends Component {
  render() {
    
    return (
      <div>
        <Slides />
        <Intro />
        <PreviewPage />
        <Offer />
        <Map />
      </div>
    );
  }
}

export default Home;
