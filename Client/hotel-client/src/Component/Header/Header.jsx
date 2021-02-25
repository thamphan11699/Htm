import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Header.css";
import BookingDialog from "../Booking/BookingDialog";
import { Link } from "react-router-dom";
import { getType } from "./HeaderService";

class Header extends Component {
  state = {
    closeLogo: false,
    background: "rgba(0, 0, 0, 0.1)",
    shouldOpenDialog: false,
  };

  componentWillMount() {
    getType({ pageIndex: 0, pageSize: 10 }).then(({ data }) => {
      this.setState({
        listType: [...data.content],
      });
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;
      if (scrolled > 60) {
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
    let { listType } = this.state;
    return (
      <header className="header">
        {this.state.closeLogo === false && (
          <Grid container className="header-top" justify="center">
            <img
              className="img-logo"
              src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/09/Logo-Hanoihotel.png"
              alt="log"
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
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Chỗ ở
                </Link>
                <ul className="list-type">
                  {listType != null && listType.length > 0 && listType.map((type, index) => {
                    return (
                      <li key={type.id} className="list-type-item">
                        <a href={"/accommodation/" + type.id} className="list-type-link">
                          {type.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/facilities" className="nav-link">
                  Cơ sở vật chất
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offer" className="nav-link">
                  Ưu đãi
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/meeting" className="nav-link">
                  Họp và sự kiện
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Liên hệ với chúng tôi
                </Link>
              </li>
              <li className="nav-item">
                <p
                  // to="#"
                  className="nav-link"
                  onClick={this.openBookingDialog}
                >
                  Đăt phòng
                </p>
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
