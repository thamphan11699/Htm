import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Advertisement = EgretLoadable({
  loader: () => import("./Advertisement")
});
const ViewComponent = withTranslation()(Advertisement);
const AdvertisementRouters = [
  {
    path: ConstantList.ROOT_PATH + "advertisement",
    exact: true,
    component: ViewComponent
  }
];

export default AdvertisementRouters;