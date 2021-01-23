import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Promotion = EgretLoadable({
  loader: () => import("./Promotion")
});
const ViewComponent = withTranslation()(Promotion);
const PromotionRouters = [
  {
    path: ConstantList.ROOT_PATH + "promotion",
    exact: true,
    component: ViewComponent
  }
];

export default PromotionRouters;