import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "dashboard",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
  }, 
  {
    name: "Dashboard.title",
    icon: "web_asset",
    children: [
      // {
      //   name: "Product.title",
      //   path: ConstantList.ROOT_PATH + "product",
      //   icon: "redeem",
      // },
      // {
      //   name: "Category.title",
      //   path: ConstantList.ROOT_PATH + "categories",
      //   icon: "category",
      // },
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
