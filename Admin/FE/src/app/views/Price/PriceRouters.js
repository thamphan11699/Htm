import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Price = EgretLoadable({
  loader: () => import("./Price")
});
const ViewComponent = withTranslation()(Price);
const PriceRouters = [
  {
    path: ConstantList.ROOT_PATH + "price",
    exact: true,
    component: ViewComponent
  }
];

export default PriceRouters;