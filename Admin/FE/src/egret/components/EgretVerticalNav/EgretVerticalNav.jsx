import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase";
import EgretVerticalNavExpansionPanel from "./EgretVerticalNavExpansionPanel";
import { withStyles } from "@material-ui/styles";
import localStorageService from "../../../app/services/localStorageService";
import { role } from "../../../app/role";
import { withTranslation } from "react-i18next";
const ViewEgretVerticalNavExpansionPanel = withTranslation()(
  EgretVerticalNavExpansionPanel
);
const styles = (theme) => ({
  expandIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(90deg)",
  },
  collapseIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(0deg)",
  },
});

class EgretVerticalNav extends Component {
  state = {
    collapsed: true,
  };

  renderLevels = (data) => {
    let user = localStorageService.getItem("auth_user"); 
    const { t } = this.props;
    return data.map((item, index) => {
      if (
        item.children &&
        user != null &&
        role[user?.role]?.indexOf(item.name) >= 0
      ) {
        return (
          <ViewEgretVerticalNavExpansionPanel item={item} key={index}>
            {this.renderLevels(item.children)}
          </ViewEgretVerticalNavExpansionPanel>
        );
      } else if (user != null && role[user?.role]?.indexOf(item.name) >= 0) {
        return (
          <NavLink key={index} to={item.path} className="nav-item">
            <TouchRipple key={item.name} name="child" className="w-100">
              {(() => {
                if (item.icon) {
                  return (
                    <Icon className="item-icon text-middle">{item.icon}</Icon>
                  );
                } else {
                  return (
                    <span className="item-icon icon-text">{item.iconText}</span>
                  );
                }
              })()}
              <span className="text-middle pl-20 item-text">
                {t(item.name)}
              </span>
              <div className="mx-auto"></div>
              {item.badge && (
                <div className={`badge bg-${item.badge.color}`}>
                  {item.badge.value}
                </div>
              )}
            </TouchRipple>
          </NavLink>
        );
      }
    });
  };

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <div className="navigation">
        {this.renderLevels(this.props.navigation)}
      </div>
    );
  }
}

export default withStyles(styles)(EgretVerticalNav);
