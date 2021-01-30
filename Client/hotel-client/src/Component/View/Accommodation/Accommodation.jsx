import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Banner from "../../Banner/Banner";
import PreviewPage from "../../PreviewPage/PreviewPage";
import {getTypeById} from "./AccommodationService";
import "./Accommodation.css";

class Accommodation extends Component {
  state = {
    type: {}
  }
  componentWillMount() {
    let id = this.props.match.params.type;
    getTypeById(id).then(({data}) => {
      this.setState({type: data});
      // window.location.reload();
    });
  }

  render() {
    let {type} = this.state;
    return (
      <div>
        <Header />
        <Banner />
        <div
          className="intro-type"
          style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 0"}}
        >
          <h3 className="intro-title">{type.name + " room"}</h3>
          <p className="intro-content" style={{}}>
              {type != null ? type.description : ""}
          </p>
        </div>
        <div className="info">
            <div className="info-content">
                <p style={{marginTop: 100}}><span style={{fontWeight: 'bold'}}>Số người tối đa</span>:{type.adults + ' người lớn' + '(' + type.children + ' trẻ em' + ')'}</p>
                <h3 className="intro-title">Tiện nghi</h3>
                <ul className="list-amenities">
                    {type.amenities != null && type.amenities.length > 0 && type.amenities.map((amenities, index) => {
                      return (
                        <li key={index} className="amenities-item">
                          -{amenities.name}
                        </li>
                      )
                    })}

                    {/* <li className="amenities-item">
                        -Free wifi
                    </li>
                    <li className="amenities-item">
                        -Minibar
                    </li>
                    <li className="amenities-item">
                        -Có phòng không hút thuốc
                    </li>
                    <li className="amenities-item">
                        -Kênh phim cáp
                    </li>
                    <li className="amenities-item">
                        -Pha trà và cà phê
                    </li>
                    <li className="amenities-item">
                        -Két an toàn
                    </li> */}
                </ul>
            </div>
        </div>
        <div style={{width: '100%', height: '520px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <PreviewPage/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Accommodation;
