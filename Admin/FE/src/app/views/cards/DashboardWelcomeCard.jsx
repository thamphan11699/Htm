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



const DashboardWelcomeCard = ({ classes, t, analytics, totalRoom }) => {
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
                <div className="font-size-32"><b>{analytics.totalCustomer}</b></div>
                <p className="uppercase bold m-0"><b>{t('Tổng số khách hàng')}</b></p>
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
              <div className="font-size-32"><b>{formatter.format(analytics.revenue)}</b></div>
              <p className="uppercase m-0"><b>{t('Doanh thu')}</b></p>
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
              <div className="font-size-32"><b>{totalRoom}</b></div>
              <p className="uppercase m-0"><b>{t('Tổng số phòng')}</b></p>
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
              <div className="font-size-32"><b>{analytics.roomNotUsed}</b></div>
              <p className="uppercase m-0"><b>{t('Phòng còn trống')}</b></p>
            </div>
          </div>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(DashboardWelcomeCard);
