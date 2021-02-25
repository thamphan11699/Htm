import React, { Component } from "react";
import "./NewIntro.css";

class NewIntro extends Component {
  render() {
    return (
      <div style={{ margin: "20px 0" }}>
        <div className="new-intro">
          <div className="new-intro-img"></div>
          <div className="new-intro-text">
            <h3 className="intro-title">
              {this.props.title ? this.props.title : "Chưa có tiêu đề"}
            </h3>
            <div style={{ padding: "0 60px" }}>
              <p className="new-intro-content">
                Chúng tôi sẽ sẵn lòng hỗ trợ bạn bất cứ lúc nào để tận hưởng nét
                duyên dáng và bầu không khí độc đáo của khách sạn xinh xắn với
                sự cân bằng và hài hòa này. Chúng tôi mời bạn khám phá một loạt
                các tiện nghi và cơ sở vật chất cao cấp thú vị được thiết kế để
                nâng cao trải nghiệm của bạn. Hy vọng bạn sẽ thích khi bạn ở
                trong khách sạn của chúng tôi.
              </p>
            </div>
          </div>
          <div className="new-intro-img-seconds"></div>
        </div>
      </div>
    );
  }
}

export default NewIntro;
