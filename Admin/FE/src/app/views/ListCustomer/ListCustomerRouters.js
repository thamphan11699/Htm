import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const ListCustomer = EgretLoadable({
  loader: () => import("./ListCustomer")
});
const ViewComponent = withTranslation()(ListCustomer);
const ListCustomerRouters = [
  {
    path: ConstantList.ROOT_PATH + "list-customer",
    exact: true,
    component: ViewComponent
  }
];

export default ListCustomerRouters;