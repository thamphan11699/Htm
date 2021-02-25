import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Grid, Button } from "@material-ui/core";
import {feedBack} from "./FeedBackService";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

class FeedBack extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    content: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = () => {
    feedBack({...this.state}).then(() => {
      toast.success("Gửi thành công");
      window.location.reload();
    }).catch(() => {
      toast.error("Gửi thất bại");
    })
  };
  render() {
    let { name, email, phone, content } = this.state;
    return (
      <div>
        <div className="extra-info" style={{ marginTop: 170,  }}>
          <div className="extra-info-container" style={{ height: "390px", borderRadius: 4 }}>
            <Grid container spacing={3} style={{ padding: "10px" }}>
              <Grid item md={6} sm={6} xs={12}>
                <h3 className="intro-title">Liên hệ</h3>
                <h3>Khách sạn Quốc Anh</h3>
                <p style={{ textAlign: "left" }}>
                  73 Hoàng Ngân, Quận Thanh Xuân, Hà Nội, Việt Nam
                </p>
                <p style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold" }}>Tel: </span>0858816730
                </p>
                <p style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  thamphan11699@gmail.com
                </p>
                <p style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold" }}>Facebook: </span>
                  https://www.facebook.com/anh1bestyasuo20pgg/
                </p>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} style={{marginTop: 10}}>
                  <Grid
                    // style={{ marginTop: 30, marginBottom: 30 }}
                    container
                    spacing={3}
                  >
                    <Grid item md={12} sm={12} xs={12}>
                      <TextValidator
                        style={{ width: "100%" }}
                        label="Tên"
                        onChange={this.handleChange}
                        type="text"
                        size="small"
                        variant="outlined"
                        name="name"
                        value={name}
                        validators={["required"]}
                        errorMessages={["Không thể để trống tên của bạn"]}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextValidator
                        style={{ width: "100%" }}
                        label="Email"
                        onChange={this.handleChange}
                        type="text"
                        size="small"
                        variant="outlined"
                        name="email"
                        value={email}
                        validators={["required"]}
                        errorMessages={["Không thể để trống tên của bạn"]}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextValidator
                        style={{ width: "100%" }}
                        label="Điện thoại"
                        onChange={this.handleChange}
                        type="text"
                        size="small"
                        variant="outlined"
                        name="phone"
                        value={phone}
                        validators={["required"]}
                        errorMessages={["Không thể để trống tên của bạn"]}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <TextValidator
                        style={{ width: "100%" }}
                        label="Ý kiến"
                        onChange={this.handleChange}
                        type="text"
                        size="small"
                        variant="outlined"
                        name="content"
                        value={content}
                        validators={["required"]}
                        errorMessages={["Không thể để trống tên của bạn"]}
                      />
                    </Grid>
                  </Grid>
                  <Grid style={{ marginTop: 15 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Gửi
                    </Button>
                  </Grid>
                </ValidatorForm>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedBack;
