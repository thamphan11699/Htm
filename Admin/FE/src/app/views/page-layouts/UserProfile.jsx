import React, { Component, Fragment } from "react";
import UploadForm from "./UploadForm";
import ConstantList from "../../appConfig";
import {
  Card,
  Icon,
  Avatar,
  Grid,
  Select,
  FormControl,
  Divider,
  IconButton,
  Button,
  withStyles,
  InputLabel,
  TextField
} from "@material-ui/core";
import DummyChart from "./DummyChart";
import ProfileBarChart from "./ProfileBarChart";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import localStorageService from "../../services/localStorageService";
import { useTranslation, withTranslation, Trans, t } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import { getCurrentUser } from './UserProfileService';
import UploadFormPopup from "../Component/UploadFormPopup/UploadFormPopup";
const API_PATH = ConstantList.API_ENPOINT + "/api/fileUpload/";
class UserProfile extends Component {
  state = { open: true, user: {},shouldOpenImageDialog:false };
  windowResizeListener;

  toggleSidenav = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleWindowResize = () => {
    return event => {
      if (event.target.innerWidth < 768) {
        this.setState({ mobile: true });
      } else this.setState({ mobile: false });
    };
  };

  componentDidMount() {
    getCurrentUser().then(({ data }) => {
      this.setState({ user: data });
    });
    //let user = localStorageService.getLoginUser();
    if (window.innerWidth < 768) {
      this.setState({ open: false });
    }
    if (window)
      this.windowResizeListener = window.addEventListener("resize", event => {
        if (event.target.innerWidth < 768) {
          this.setState({ open: false });
        } else this.setState({ open: true });
      });
  }

  componentWillUnmount() {
    let user = localStorageService.getLoginUser();
    getCurrentUser();
    this.setState({ user: user });
    if (window) window.removeEventListener("resize", this.windowResizeListener);
  }
  handleOpenUploadDialog = () => {
    this.setState({
      shouldOpenImageDialog: true
    });
  }
  handleDialogClose = () => {
    this.setState({
      shouldOpenImageDialog: false,
    })
  }
  render() {
    let { theme } = this.props;
    let { t, i18n } = this.props;

    const genders = [
      { id: 'M', name: 'Nam' },
      { id: 'F', name: 'Nữ' },
      { id: 'U', name: 'Không rõ' },
    ]
    let user = this.state.user;

    return (
      <div className="m-sm-30" t={t} i18n={i18n}>
          {this.state.shouldOpenImageDialog && (
            <UploadFormPopup t={t} i18n={i18n}
              handleClose={this.handleDialogClose}
              open={this.state.shouldOpenImageDialog}
              uploadUrl={API_PATH+"avatarUpload"}
              acceptType="png;jpg;gif;jpeg"
            />
          )}        
        <div>
          {t('user.person_info')}
        </div>
        <div className="user-profile__sidenav flex-column flex-middle">
          <Avatar
            className="avatar mb-20"
            src={ConstantList.ROOT_PATH + "assets/images/avatar.jpg"}
            onClick={
              this.handleOpenUploadDialog
            }
          />
          {user.displayName}
        </div>
        <Grid className="mb-10" container spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl fullWidth={true}>
              <TextField id="standard-basic" label={t('employee.displayName')} value={user.displayName != null ? user.displayName : ''} />
            </FormControl>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl fullWidth={true}>
              <TextField id="standard-basic" label={t('employee.email')} value={user.email != null ? user.email : ''} />
            </FormControl>
          </Grid>
        </Grid>

        <Grid className="mb-10" container spacing={3}>
          

          <Grid item md={6} sm={12} xs={12}>
            <FormControl fullWidth={true}>
              <TextField id="standard-basic" label={t('employee.username')} value={user.username != null ? user.username : ''} />
            </FormControl>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="gender-simple">
                {t('employee.gender')}
              </InputLabel>
              <Select
                value={user.person ? user.person.gender : ''}
                onChange={(gender) => this.handleChange(gender, 'gender')}
                inputProps={{
                  name: 'gender',
                  id: 'gender-simple',
                }}
              >
                {genders.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
       
        <Grid className="mb-10">
              <Button variant="contained" color="primary" type="submit">
                {t('general.update')}
              </Button>
       </Grid>           
       
      </div >
    );
  }
}

export default withStyles({}, { withTheme: true })(UserProfile);
