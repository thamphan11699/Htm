import React, { Component } from "react";
import Slider from "react-slick";
import { Grid } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PreviewPage.css";

class PreviewPage extends Component {
  render() {
    const settings = {
      //   dots: true,
      cssEase: "linear",
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="preview-page">
        <Slider {...settings} style={{width: "100%", height: "100%"}}>
          <Grid className="slides-item">
            <img
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/Fixx-Spa-1-1-400x400.jpg" className="img-slide" 
              alt=""
            />
            <h3 className="slide-title">Cơ sở vật chất</h3>
          </Grid>
          <Grid className="slides-item">
            <img
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/05/DSC_1293-400x400.jpg" className="img-slide"
              alt=""
            />
            <h3 className="slide-title">Liên hệ chúng tôi</h3>
          </Grid>
          <Grid className="slides-item">
            <img
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/DSC_3929-400x400.jpg" className="img-slide"
              alt=""
            />
            <h3 className="slide-title">Ưu đãi</h3>
          </Grid>
          <Grid className="slides-item">
            <img
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/hanoi-hotel18959-400x400.jpg" className="img-slide"
              alt=""
            />
            <h3 className="slide-title">Dịch vụ ăn uống</h3>
          </Grid>
          <Grid className="slides-item">
            <img
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/05/101-Ha-cao-Tom-tuoi-1920x1080-1-400x400.jpg" className="img-slide"
              alt=""
            />
            <h3 className="slide-title">Chỗ ở</h3>
          </Grid>
          <Grid className="slides-item">
            <img
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/DSC_3929-400x400.jpg" className="img-slide"
              alt=""
            />
            <h3 className="slide-title">Họp và sự kiện</h3>
          </Grid>
        </Slider>
      </div>
    );
  }
}

export default PreviewPage;
