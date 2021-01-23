import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const CheckOut = EgretLoadable({
  loader: () => import("./CheckOut")
});
const ViewComponent = withTranslation()(CheckOut);
const CheckOutRouters = [
  {
    path: ConstantList.ROOT_PATH + "check-out",
    exact: true,
    component: ViewComponent
  }
];

export default CheckOutRouters;