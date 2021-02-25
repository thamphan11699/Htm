import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/feed-back";

export const feedBack = (feedBack) => {
    var url = API_PATH;
    return axios.post(url, feedBack);
}