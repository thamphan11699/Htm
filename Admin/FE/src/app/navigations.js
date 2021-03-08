import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "home",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
  }, 
  {
    name: "Customer",
    icon: "web_asset",
    children: [
      // {
      //   name: "CheckIn.title",
      //   path: ConstantList.ROOT_PATH + "check-in",
      //   icon: "category",
      // },
      {
        name: "UserBook.title",
        path: ConstantList.ROOT_PATH + "user-booking",
        icon: "keyboard_arrow_right",
      },
      {
        name: "CheckIn.title",
        path: ConstantList.ROOT_PATH + "wait-check-in",
        icon: "keyboard_arrow_right",
      },
      // {
      //   name: "ExistingCustomers.title",
      //   path: ConstantList.ROOT_PATH + "existing-customers",
      //   icon: "category",
      // },
      {
        name: "CheckOut.title",
        path: ConstantList.ROOT_PATH + "check-out",
        icon: "keyboard_arrow_right",
      },
      // {
      //   name: "CustomerReject.title",
      //   path: ConstantList.ROOT_PATH + "customer-reject",
      //   icon: "category",
      // },
      {
        name: "ListCustomer.title",
        path: ConstantList.ROOT_PATH + "list-customer",
        icon: "keyboard_arrow_right",
      },
      // {
      //   name: "CustomerUsed.title",
      //   path: ConstantList.ROOT_PATH + "customer-used",
      //   icon: "category",
      // },
      {
        name: "FeedBack.title",
        path: ConstantList.ROOT_PATH + "feed-back",
        icon: "keyboard_arrow_right",
      },
    ]
  }, 
  {
    name: "Dashboard.title",
    icon: "web_asset",
    children: [
      // {
      //   name: "News.title",
      //   path: ConstantList.ROOT_PATH + "news",
      //   icon: "keyboard_arrow_right",
      // },
      {
        name: "Price.title",
        path: ConstantList.ROOT_PATH + "price",
        icon: "keyboard_arrow_right",
      },
      {
        name: "Type.title",
        path: ConstantList.ROOT_PATH + "type",
        icon: "keyboard_arrow_right",
      },
      {
        name: "Ameniti.title",
        path: ConstantList.ROOT_PATH + "ameniti",
        icon: "keyboard_arrow_right",
      },
      {
        name: "Room.title",
        path: ConstantList.ROOT_PATH + "room",
        icon: "keyboard_arrow_right",
      },
      {
        name: "Promotion.title",
        path: ConstantList.ROOT_PATH + "promotion",
        icon: "keyboard_arrow_right",
      },
      // {
      //   name: "Advertisement.title",
      //   path: ConstantList.ROOT_PATH + "advertisement",
      //   icon: "keyboard_arrow_right",
      // },
      {
        name: "Shift.title",
        path: ConstantList.ROOT_PATH + "shift",
        icon: "keyboard_arrow_right",
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
