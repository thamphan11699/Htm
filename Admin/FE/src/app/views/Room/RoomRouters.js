import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Room = EgretLoadable({
  loader: () => import("./Room")
});
const ViewComponent = withTranslation()(Room);
const RoomRouters = [
  {
    path: ConstantList.ROOT_PATH + "room",
    exact: true,
    component: ViewComponent
  }
];

export default RoomRouters;