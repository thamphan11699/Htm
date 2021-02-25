import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const FeedBack = EgretLoadable({
  loader: () => import("./FeedBack")
});
const ViewComponent = withTranslation()(FeedBack);

const FeedBackRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"feed-back",
    exact: true,
    component: ViewComponent
  }
];

export default FeedBackRoutes;
