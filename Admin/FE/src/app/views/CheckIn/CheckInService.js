import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/customer";

export const checkIn = (dto) => {
  var url = API_PATH + "/check-in";
  return axios.post(url, dto);
};
export const getRoom = (searchObject) => {
    var url = ConstantList.API_ENPOINT + "/api/room/searchByPage";
    return axios.post(url, searchObject);
}