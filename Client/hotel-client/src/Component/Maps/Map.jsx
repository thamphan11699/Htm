import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "500px", marginTop: "50px" }}>
        <iframe
          style={{ height: "100%", width: "100%" }}
          title="My Hours"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.642644089527!2d105.80802281542307!3d21.006957193897104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9ed1c1c629%3A0x6e8e2330f4516673!2zNzMgUGjhu5EgSG_DoG5nIE5nw6JuLCBOaMOibiBDaMOtbmgsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1611737920530!5m2!1svi!2s"
        ></iframe>
      </div>
    );
  }
}

export default Map;
