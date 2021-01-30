import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import materialRoutes from "./views/material-kit/MaterialRoutes";   
import formsRoutes from "./views/forms/FormsRoutes";  
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";  
import datatablePageRootes from "./views/MDBDataTable/DatatablePageRootes";
import tablePageRoutes from "./views/MDBDataTable/TablePageRoutes";
import homeRoutes from "./views/home/HomeRoutes";
import otherRoutes from "./views/others/OtherRoutes"; 
import scrumBoardRoutes from "./views/scrum-board/ScrumBoardRoutes";  
import RedirectToLandingPageRoutes from "./views/HomePage/RedirectToLandingPageRoutes"; 
import ProductRoutes from "./views/Product/ProductRoutes";   
import CategoriesRoutes from "./views/Categories/CategoriesRoutes";
import roleRoutes from "./views/Role/RoleRoutes";
import EmployeeRouters from "./views/Employee/EmployeeRouters";
import NewsRouters from "./views/News/NewsRouters";
import PriceRouters from "./views/Price/PriceRouters";
import TypeRouters from "./views/Type/TypeRouters";
import PromotionRouters from "./views/Promotion/PromotionRouters";
import AdvertisementRouters from "./views/Advertisement/AdvertisementRouters";
import ShiftRouters from "./views/Shift/ShiftRouters";
import RoomRouters from "./views/Room/RoomRouters";
import UserBookRouters from "./views/UserBook/UserBookRouters";
import WaitCheckInRouters from "./views/WaitCheckIn/WaitCheckInRouters";
import ExistingCustomersRouters from "./views/ExistingCustomers/ExistingCustomersRouters";
import CustomerRejectRouters from "./views/CustomerReject/CustomerRejectRouters";
import CheckOutRouters from "./views/CheckOut/CheckOutRouters";
import CheckInRouters from "./views/CheckIn/CheckInRouters";
import ListCustomerRouters from "./views/ListCustomer/ListCustomerRouters";
import CustomerUsedRouters from "./views/CustomerUsed/CustomerUsedRouters";
import AmenitiRouters from "./views/Ameniti/AmenitiRouters";
import ConstantList from "./appConfig";  
const redirectRoute = [
  {
    path: ConstantList.ROOT_PATH,
    exact: true,
    component: () => <Redirect to={ConstantList.HOME_PAGE} />, //Luôn trỏ về HomePage được khai báo trong appConfig
  },
];

const errorRoute = [
  {
    component: () => <Redirect to={ConstantList.ROOT_PATH + "session/404"} />,
  },
];

const routes = [
  ...homeRoutes,
  ...sessionRoutes,
  ...dashboardRoutes, 
  ...datatablePageRootes,
  ...RedirectToLandingPageRoutes, 
  ...tablePageRoutes,  
  ...materialRoutes, 
  ...CategoriesRoutes,
  ...utilitiesRoutes,    
  ...ProductRoutes,
  ...formsRoutes,   
  ...scrumBoardRoutes, 
  ...pageLayoutRoutes,
  ...otherRoutes,
  ...roleRoutes,
  ...EmployeeRouters,
  ...NewsRouters,
  ...PriceRouters,
  ...TypeRouters,
  ...PromotionRouters,
  ...AdvertisementRouters,
  ...ShiftRouters,
  ...RoomRouters,
  ...UserBookRouters,
  ...WaitCheckInRouters,
  ...ExistingCustomersRouters,
  ...CustomerRejectRouters,
  ...CheckOutRouters,
  ...CheckInRouters,
  ...ListCustomerRouters,
  ...CustomerUsedRouters,
  ...AmenitiRouters,
  ...redirectRoute, 
  ...errorRoute,

];

export default routes;
