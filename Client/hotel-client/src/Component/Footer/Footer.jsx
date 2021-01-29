import React, { Component } from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends Component {
    render() {
        const iconStyle = {
            color: 'white',
            margin: "0 15px",
            cursor: "pointer",
        }
        return (
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-icon">
                        <FacebookIcon
                            style={iconStyle}
                        />
                        <TwitterIcon
                            style={iconStyle}
                        />
                        <YouTubeIcon
                            style={iconStyle}
                        />
                        <InstagramIcon
                            style={iconStyle}
                        />
                    </div>
                    <h6 className="address">D8 Giảng Võ, Quận Ba Đình, Hà Nội, Việt Nam</h6>
                    <h6 className="address">Điện thoại: 84 24 3845 2270 Fax: 84 24 3845 9209</h6>
                    <h6 className="address">sales@hanoihotel.com.vn</h6>
                    <p style={{fontSize: "12px", color: "#fff"}}>© Bản quyền Khách sạn Quốc Anh 2021</p>
                </div>
                <div className="footer-bottom">
                    <p style={{marginTop: "40px"}}>Chính sách - Tín dụng</p>
                </div>
            </div>
        );
    }
}

export default Footer;