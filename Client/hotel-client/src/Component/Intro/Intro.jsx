import React, { Component } from 'react';
import "./Intro.css";

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <h3 className="intro-title">Chào mừng bạn đến với khách sạn Hà Nội</h3>
                <p className="intro-content">
                Khách sạn Hà Nội là khách sạn quốc tế đầu tiên tại Hà Nội. Với 218 Phòng Deluxe và Suite nhìn ra Hồ Giảng Võ tuyệt đẹp, 
                khách sạn tọa lạc ngay trung tâm là nơi hoàn hảo cho kỳ nghỉ công tác hoặc nghỉ dưỡng. Các phòng nghỉ sang trọng được bài trí trang nhã 
                và được trang bị một loạt các tiện nghi cao cấp. Khách sạn Hà Nội nổi tiếng với các hoạt động giải trí buổi tối 
                và ẩm thực Trung Hoa hảo hạng nhất trong thành phố. Kỳ nghỉ của bạn với chúng tôi được đảm bảo sẽ là một kỳ nghỉ thú vị và đáng nhớ nhất.
                </p>
            </div>
        );
    }
}

export default Intro;
