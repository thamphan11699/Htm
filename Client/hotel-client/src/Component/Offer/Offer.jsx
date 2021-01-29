import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import "./Offer.css";

class Offer extends Component {
  render() {
    return (
      <div className="full-with">
        <h3 className="intro-title">Offer</h3>
        <Grid container spacing={4} className="offers">
          <Grid item lg={4} md={4} sm={6} xs={12} className="offers-item">
            <div className="offers-container">
              <div className="offers-price">
                <p className="offers-price-text">Bắt đầu từ 1.000.9999 đ</p>
              </div>
              <div className="offers-image">
                <img
                  className="offers-img"
                  src="https://mediastore.hotelcontent.net/6efb4152f7e0c8491b2f8424864b271b/79521cdea3eff83/a73d3ee4c6fd7522fb1b2a93f7bb8513.jpg"
                  alt=""
                />
              </div>
              <div className="offers-title">
                <p className="offers-title-text">Hai ngày một đêm</p>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12} className="offers-item">
            <div className="offers-container">
              <div className="offers-price">
                <p className="offers-price-text">Bắt đầu từ 1.000.9999 đ</p>
              </div>
              <div className="offers-image">
                <img
                  className="offers-img"
                  src="https://mediastore.hotelcontent.net/6efb4152f7e0c8491b2f8424864b271b/79521cdea3eff83/a73d3ee4c6fd7522fb1b2a93f7bb8513.jpg"
                  alt=""
                />
              </div>
              <div className="offers-title">
                <p className="offers-title-text">Hai ngày một đêm</p>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12} className="offers-item">
            <div className="offers-container">
              <div className="offers-price">
                <p className="offers-price-text">Bắt đầu từ 1.000.9999 đ</p>
              </div>
              <div className="offers-image">
                <img
                  className="offers-img"
                  src="https://mediastore.hotelcontent.net/6efb4152f7e0c8491b2f8424864b271b/79521cdea3eff83/a73d3ee4c6fd7522fb1b2a93f7bb8513.jpg"
                  alt=""
                />
              </div>
              <div className="offers-title">
                <p className="offers-title-text">Hai ngày một đêm</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <a href="/" className="offer-link">Xem tất cả các offer</a>
      </div>
    );
  }
}

export default Offer;
