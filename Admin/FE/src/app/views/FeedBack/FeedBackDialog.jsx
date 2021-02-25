import React, { Component } from "react";
import {
  IconButton,
  Dialog,
  Button,
  Icon,
  Grid,
  FormControlLabel,
  TablePagination,
  Switch,
  DialogActions,
  Checkbox,
} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import {
//   addNewData,
//   updateData,
// } from "./FeedBackService";
import DialogContent from "@material-ui/core/DialogContent";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import { useTranslation, withTranslation, Trans } from "react-i18next";
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
function MaterialButton(props) {
  const { t, i18n } = useTranslation();
  const item = props.item;
  return (
    <div>
      <IconButton onClick={() => props.onSelect(item, 0)}>
        <Icon color="primary">edit</Icon>
      </IconButton>
      <IconButton onClick={() => props.onSelect(item, 1)}>
        <Icon color="error">delete</Icon>
      </IconButton>
    </div>
  );
}
class FeedBackDialog extends Component {
  state = {
    
    totalElements: 0,
    rowsPerPage: 25,
    page: 0,
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

  handleFormSubmit = () => {
    // let { id } = this.state;
    // let { t, i18n } = this.props;
    // this.setState({ disabled: true });
    // checkCode({ ...this.state }).then(({ data }) => {
    //   if (data) {
    //     toast.warn(t("Validation.code"));
    //     this.setState({ disabled: false });
    //   } else {
    //     if (!id) {
    //       addNewData({
    //         ...this.state,
    //       }).then(() => {
    //         toast.success(t("general.success"));
    //         this.props.handleOKEditClose();
    //       });
    //     } else {
    //       updateData(
    //         {
    //           ...this.state,
    //         },
    //         id
    //       ).then(() => {
    //         toast.success(t("general.success"));
    //         this.props.handleOKEditClose();
    //       });
    //     }
    //   }
    // });
  };

  componentWillMount() {
    this.setState({
      ...this.props.item,
    });
  }

  render() {
    let { id } = this.state;
    let { name, email, phone, content } = this.state;
    let { open, handleClose, handleOKEditClose, t, i18n } = this.props;
    return (
      <Dialog open={open} PaperComponent={PaperComponent} maxWidth="sm">
        <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
          <div
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className="flex flex-space-between flex-middle pl-16 pr-8 py-8 bg-primary"
          >
            <h4 className="m-0 text-white">
              {this.state.id ? t("general.edit") : t("general.add")}
            </h4>
            <IconButton onClick={this.props.handleClose}>
              <Icon className="text-white">clear</Icon>
            </IconButton>
          </div>
          <DialogContent>
            <Grid className="mb-10 mt-10" container spacing={3}>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("name")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="name"
                  value={name}
                  disabled={true}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("email")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="email"
                  value={email}
                  disabled={true}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  label={t("phone")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="phone"
                  value={phone}
                  disabled={true}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100"
                  variant="outlined"
                  label={t("content")}
                  onChange={this.handleChange}
                  type="text"
                  size="small"
                  variant="outlined"
                  name="content"
                  value={content}
                  disabled={true}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <div className="flex flex-space-between flex-middle mt-36">
              <Button
                variant="contained"
                color="secondary"
                className="mr-36"
                onClick={() => this.props.handleClose()}
              >
                {t("general.cancel")}
              </Button>
              {/* <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
              >
                {t("general.save")}
              </Button> */}
            </div>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default FeedBackDialog;
