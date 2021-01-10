import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "home",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
  }, 
  {
    name: "Dashboard.title",
    icon: "web_asset",
    children: [
      {
        name: "News.title",
        path: ConstantList.ROOT_PATH + "news",
        icon: "category",
      },
      {
        name: "Price.title",
        path: ConstantList.ROOT_PATH + "price",
        icon: "category",
      },
      {
        name: "Type.title",
        path: ConstantList.ROOT_PATH + "type",
        icon: "category",
      },
      {
        name: "Promotion.title",
        path: ConstantList.ROOT_PATH + "promotion",
        icon: "category",
      },
      {
        name: "Advertisement.title",
        path: ConstantList.ROOT_PATH + "advertisement",
        icon: "category",
      },
      {
        name: "Shift.title",
        path: ConstantList.ROOT_PATH + "shift",
        icon: "category",
      },
    ],
  },

  {
    name: "Dashboard.manage",
    icon: "engineering",
    children: [
      {
        name: "manage.employee",
        path: ConstantList.ROOT_PATH + "manager/employee",
        icon: "keyboard_arrow_right",
      },
    ],
  },
];
