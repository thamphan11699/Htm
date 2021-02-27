import React, { Component } from "react";
import {
  Dialog,
  Button,
  Grid,
  DialogActions,
  DialogContent ,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import "./BookingDialog.css"
import ClearIcon from '@material-ui/icons/Clear';
import { booking, checkRoom } from "./BookingService";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}


class BookingDialog  extends Component {
  state = {
    name: "",
    identityCard: "",
    email: "",
    phone: "",
    checkInDate: new Date(),
    checkOutDate: null,
    promotionCode: "",
    description: "",
    adults: "",
    children: "",
  };

  handleChange = (event, source) => {
    event.persist();
    if (source === "switch") {
      this.setState({ isActive: event.target.checked });
      return;
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleDateChange = (date, source) => {
    if (source === "checkInDate") {
      this.setState({
        checkInDate: date,
      });
      return;
    }
    if (source === "checkOutDate") {
      this.setState({
        checkOutDate: date,
      });
      return;
    }
  };

  handleFormSubmit = () => {
    checkRoom().then(({data}) => {
      if (data) {
        booking(this.state).then(({data}) => {
          toast.success("Đã đặt phòng thành công");
          this.props.handleOKEditClose();
        })
      } else {
        toast.error("Đã hêt phòng");
      }
    })
    
  }
  render() {
    let {
      name,
      identityCard,
      email,
      phone,
      checkInDate,
      checkOutDate,
      promotionCode,
      adults,
      description,
      children
    } = this.state;

    return (
      <div>
        <Dialog open={this.props.open} PaperComponent={PaperComponent} maxWidth="md">
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
            <div
              style={{ cursor: "move" }}
              id="draggable-dialog-title"
              className="dialog-title"
            >
              <h4 style={{fontSize: 24, fontWeight: 400, margin: "15px 0", color: "white"}}>Đặt phòng</h4>
              <Button onClick={this.props.handleClose} >
                <ClearIcon/>
              </Button>
            </div>
            <DialogContent>
              <Grid style={{marginTop: 30, marginBottom: 30}} container spacing={3}>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
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
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Số CMND"
                    onChange={this.handleChange}
                    type="text"
                    size="small"
                    variant="outlined"
                    name="identityCard"
                    value={identityCard}
                    validators={["required"]}
                    errorMessages={["Bạn cần có CMND để thực hiện"]}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Email"
                    onChange={this.handleChange}
                    type="text"
                    size="small"
                    variant="outlined"
                    name="email"
                    value={email}
                    validators={["required", "isEmail"]}
                    errorMessages={["Không thể để trống email", "Đây không phải email"]}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Số điện thoại"
                    onChange={this.handleChange}
                    type="text"
                    size="small"
                    variant="outlined"
                    name="phone"
                    value={phone}
                    validators={["required"]}
                    errorMessages={["Không thể để trống số điện thoại"]}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: 0,
                        padding: "0px !important",
                      }}
                      disableToolbar
                      inputVariant="outlined"
                      size="small"
                      format="dd/MM/yyyy"
                      margin="normal"
                      minDate={new Date()}
                      id="date-picker-inline"
                      label={
                        <span>
                          <span style={{ color: "red" }}>*</span>
                          Ngày check in
                        </span>
                      }
                      value={checkInDate}
                      onChange={(date) =>
                        this.handleDateChange(date, "checkInDate")
                      }
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: 0,
                        padding: "0px !important",
                      }}
                      disableToolbar
                      inputVariant="outlined"
                      size="small"
                      format="dd/MM/yyyy"
                      minDate={checkInDate}
                      margin="normal"
                      id="date-picker-inline"
                      label={
                        <span>
                          <span style={{ color: "red" }}>*</span>
                          Ngày check out
                        </span>
                      }
                      value={checkOutDate}
                      onChange={(date) =>
                        this.handleDateChange(date, "checkOutDate")
                      }
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Số người lớn"
                    onChange={this.handleChange}
                    type="number"
                    size="small"
                    variant="outlined"
                    name="adults"
                    value={adults}
                    validators={["required"]}
                    errorMessages={["Không thể để trống số người lớn"]}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Số trẻ em"
                    onChange={this.handleChange}
                    type="number"
                    size="small"
                    variant="outlined"
                    name="children"
                    value={children}
                    validators={["required"]}
                    errorMessages={["Không thể để trống số trẻ em"]}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Mã khuyến mãi"
                    onChange={this.handleChange}
                    type="text"
                    size="small"
                    variant="outlined"
                    name="promotionCode"
                    value={promotionCode}
                    // validators={["required"]}
                    // errorMessages={["this field is required"]}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextValidator
                    style={{width: '100%'}}
                    label="Mô tả"
                    multiLine
                    rowsMax={4}
                    onChange={this.handleChange}
                    type="text"
                    size="small"
                    variant="outlined"
                    name="description"
                    value={description}
                    // validators={["required"]}
                    // errorMessages={["this field is required"]}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <div className="flex flex-space-between flex-middle mt-36">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{marginRight: 30}}
                  onClick={() => this.props.handleClose()}

                >
                  Hủy
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Đăt phòng
                </Button>
              </div>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default BookingDialog;
