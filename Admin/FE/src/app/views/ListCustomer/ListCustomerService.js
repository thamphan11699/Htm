import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/customer";

export const searchByPage = (searchObject) => {
    var url = API_PATH + "/searchByPage";
    return axios.post(url, searchObject);
}