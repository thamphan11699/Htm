import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const CustomerUsed = EgretLoadable({
  loader: () => import("./CustomerUsed")
});
const ViewComponent = withTranslation()(CustomerUsed);
const CustomerUsedRouters = [
  {
    path: ConstantList.ROOT_PATH + "customer-used",
    exact: true,
    component: ViewComponent
  }
];

export default CustomerUsedRouters;