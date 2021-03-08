import React, { Component } from "react";
import "./Facilities.css";
import Banner from "../../Banner/Banner";
import NewIntro from "../../NewIntro/NewIntro";
import { Grid, } from "@material-ui/core";

class Facilities extends Component {
  render() {
    return (
      <div>
        <Banner />
        <NewIntro title="Cơ sở vật chất" />
        <div className="extra-info">
          <div className="extra-info-container">
            <p className="extra-info-content">
              Là khách của Hanoi Hotel, bạn có thể tận hưởng sự tiện lợi của các
              tiện nghi hiện đại như truy cập Internet băng thông rộng không
              dây, dịch vụ giặt thường và giặt hấp, v.v. Du khách nghỉ tại Khách
              sạn Hà Nội sẽ hài lòng với một loạt các dịch vụ và tiện nghi của
              khách sạn.
            </p>
          </div>
        </div>
        <div className="preview-children">
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={6} xs={12} className="news-item">
              <div className="news-item-container">
                <div
                  className="news-item-img"
                  style={{
                    backgroundImage:
                      'url("https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/Hanoi-Night-Club-3-1000x563.jpg")',
                  }}
                ></div>

                <div className="news-item-content">
                  <h3 className="intro-title">Câu lạc bộ đêm hà nội</h3>
                  <p className="news-item-content-text">
                    Hanoi Night Club, một trong những địa điểm vui chơi nổi
                    tiếng nhất ở Thủ đô, là…
                  </p>
                  <button className="news-item-btn">Đọc thêm</button>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} className="news-item">
              <div className="news-item-container">
                <div
                  className="news-item-img"
                  style={{
                    backgroundImage:
                      'url("https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/Hanoi-Night-Club-3-1000x563.jpg")',
                  }}
                ></div>

                <div className="news-item-content">
                  <h3 className="intro-title">Câu lạc bộ đêm hà nội</h3>
                  <p className="news-item-content-text">
                    Hanoi Night Club, một trong những địa điểm vui chơi nổi
                    tiếng nhất ở Thủ đô, là…
                  </p>
                  <button className="news-item-btn">Đọc thêm</button>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} className="news-item">
              <div className="news-item-container">
                <div
                  className="news-item-img"
                  style={{
                    backgroundImage:
                      'url("https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/Hanoi-Night-Club-3-1000x563.jpg")',
                  }}
                ></div>

                <div className="news-item-content">
                  <h3 className="intro-title">Câu lạc bộ đêm hà nội</h3>
                  <p className="news-item-content-text">
                    Hanoi Night Club, một trong những địa điểm vui chơi nổi
                    tiếng nhất ở Thủ đô, là…
                  </p>
                  <button className="news-item-btn">Đọc thêm</button>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} className="news-item">
              <div className="news-item-container">
                <div
                  className="news-item-img"
                  style={{
                    backgroundImage:
                      'url("https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/Hanoi-Night-Club-3-1000x563.jpg")',
                  }}
                ></div>

                <div className="news-item-content">
                  <h3 className="intro-title">Câu lạc bộ đêm hà nội</h3>
                  <p className="news-item-content-text">
                    Hanoi Night Club, một trong những địa điểm vui chơi nổi
                    tiếng nhất ở Thủ đô, là…
                  </p>
                  <button className="news-item-btn">Đọc thêm</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Facilities;
