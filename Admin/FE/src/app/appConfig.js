
const APPLICATION_PATH = "/";
module.exports = Object.freeze({
  NOTFOUND: APPLICATION_PATH + "session/404",
  ROOT_PATH: APPLICATION_PATH,
  ACTIVE_LAYOUT: "layout1",//layout1 = vertical, layout2=horizontal
  API_ENPOINT: "http://localhost:9999/htm",
  LOGIN_PAGE: APPLICATION_PATH + "session/signin",//Nếu là Spring
  HOME_PAGE: APPLICATION_PATH + "session/signin",//Nếu là Spring
  //HOME_PAGE:APPLICATION_PATH+"landing3",//Link trang landing khi bắt đầu
});