import React from "react";
import { Card, Grid, Icon, Fab, withStyles } from "@material-ui/core";
import ConstantList from "../../appConfig";

const styles = theme => ({
  root: {
    background: `url("/assets/images/dots.png"),
    linear-gradient(90deg, ${theme.palette.primary.main} -19.83%, ${theme.palette.primary.light} 189.85%)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
  }
});



const DashboardWelcomeCard = ({ classes, t }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 2
  })
  
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card
          elevation={3}
          className={`p-16 py-28 text-center h-100 w-100 ${classes.root}`}
        >
          <a href={ConstantList.ROOT_PATH + "asset/list_asset"} >
            <div className="font-weight-300 flex flex-space-between">
              <div className="text-white margin-auto">
                <div className="font-size-32"><b>{t('Tổng số khách hàng')}</b></div>
                <p className="uppercase bold m-0 font-size-24"><b>10</b></p>
              </div>
            </div>
          </a>
        </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card
          elevation={3}
          className={`p-16 py-28 text-center h-100 w-100 ${classes.root}`}
        >
          <a href={ConstantList.ROOT_PATH + "asset/allocation_asset"} >
          <div className="font-weight-300 flex flex-space-between">
            <div className="text-white margin-auto">
              <div className="font-size-32"><b>{t('Doanh thu')}</b></div>
              <p className="uppercase m-0 font-size-24"><b>{formatter.format(10000000)}</b></p>
            </div>
          </div>
          </a>
        </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card
          elevation={3}
          className={`p-16 py-28 text-center h-100 w-100 ${classes.root}`}
        >
          <a href={ConstantList.ROOT_PATH + "asset/transfer_asset"} >
          <div className="font-weight-300  flex flex-space-between">
            <div className="text-white margin-auto">
              <div className="font-size-32"><b>{t('Khách hàng hiện tại')}</b></div>
              <p className="uppercase m-0 font-size-24"><b>2</b></p>
            </div>
          </div>
          </a>
        </Card>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card
          elevation={3}
          className={`p-16 py-28 text-center h-100 w-100 ${classes.root}`}
        >
          <a href={ConstantList.ROOT_PATH + "asset/maintain_request"} >
          <div className="font-weight-300 flex flex-space-between">
            <div className="text-white margin-auto">
              <div className="font-size-32"><b>{t('Số phòng còn trống')}</b></div>
              <p className="uppercase m-0 font-size-24"><b>10</b></p>
            </div>
          </div>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(DashboardWelcomeCard);
