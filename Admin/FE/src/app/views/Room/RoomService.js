import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/room";

export const searchByPage = (searchObject) => {
  var url = API_PATH + "/searchByPage";
  return axios.post(url, searchObject);
};

export const getItemById = (id) => {
  var url = API_PATH + "/" + id;
  return axios.get(url);
};
export const deleteItem = (id) => {
  var url = API_PATH + "/" + id;
  return axios.delete(url);
};

export const addNewData = (room) => {
  var url = API_PATH;
  return axios.post(url, room);
};

export const updateData = (room, id) => {
  var url = API_PATH + "/" + id;
  return axios.put(url, room);
};

export const checkCode = (room) => {
  var url = API_PATH + "/" + "check-code";
  return axios.post(url, room);
};

export const checkName = (room) => {
  var url = API_PATH + "/" + "check-name";
  return axios.post(url, room);
};