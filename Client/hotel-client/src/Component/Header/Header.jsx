import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Header.css";
import BookingDialog from "../Booking/BookingDialog";
import {Link} from "react-router-dom"

class Header extends Component {
  state = {
    closeLogo: false,
    background: "rgba(0, 0, 0, 0.1)",
    shouldOpenDialog: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;
      if (scrolled > 200) {
        this.setState({
          closeLogo: true,
          background: "#f8f8f8",
        });
      } else {
        this.setState({
          closeLogo: false,
          background: "rgba(0, 0, 0, 0.1)",
        });
      }
    });
  }
  openBookingDialog = () => {
    this.setState({
      shouldOpenDialog: true,
    });
  };
  handleDialogClose = () => {
    this.setState({
      shouldOpenDialog: false,
    });
  };
  handleOKEditClose = () => {
    this.setState({
      shouldOpenDialog: false,
    });
  };

  render() {
    return (
      <header className="header">
        {this.state.closeLogo === false && (
          <Grid container className="header-top" justify="center">
            <img
              className="img-logo"
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/09/Logo-Hanoihotel.png" alt="log"
            />
          </Grid>
        )}

        <Grid
          className="full-width"
          style={{ background: this.state.background }}
        >
          <Grid container spacing={3} className="header-bottom">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Trang chủ
                </Link>
              </li>
              <a className="nav-item">
                <Link to="/accommodation/2" className="nav-link">
                  Chỗ ở
                </Link>
              </a>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Dịch vụ ăn uống
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Ưu đãi
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Họp và sự kiện
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Liên hệ với chúng tôi
                </Link>
              </li>
              <li className="nav-item">
                <a
                  // href="#"
                  className="nav-link"
                  onClick={this.openBookingDialog}
                >
                  Đăt phòng
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        {this.state.shouldOpenDialog && (
          <BookingDialog
            handleClose={this.handleDialogClose}
            open={this.state.shouldOpenDialog}
            handleOKEditClose={this.handleOKEditClose}
          />
        )}
      </header>
    );
  }
}

export default Header;
