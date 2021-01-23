import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const CustomerReject = EgretLoadable({
  loader: () => import("./CustomerReject")
});
const ViewComponent = withTranslation()(CustomerReject);
const CustomerRejectRouters = [
  {
    path: ConstantList.ROOT_PATH + "customer-reject",
    exact: true,
    component: ViewComponent
  }
];

export default CustomerRejectRouters;