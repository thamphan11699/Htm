import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/news";

export const searchByPage = (searchObject) => {
    var url = API_PATH + "/searchByPage";
    return axios.post(url, searchObject);
  };
  
  export const getItemById = id => {  
    var url = API_PATH + "/" + id;
    return axios.get(url);
  };
  export const deleteItem = id => {
    var url = API_PATH + "/" + id;
    return axios.delete(url);
  };
  
  export const addNewData = (news) => {
      var url = API_PATH;
      return axios.post(url, news);
  }
  
  export const updateData = (news, id) => {
      var url = API_PATH + "/"  + id;
      return axios.put(url, news);
  }

  
  export const checkCode= (news) => {
      var url = API_PATH + "/" + "check-code";
      return axios.post(url, news);
  }
  
  export const checkName= (news) => {
      var url = API_PATH + "/" + "check-name";
      return axios.post(url, news);
  }