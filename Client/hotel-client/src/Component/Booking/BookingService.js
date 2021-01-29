import axios from "axios";

export const booking = (customer) => {
    var url =  "http://localhost:9999/htm/api/customer/booking";
    return axios.post(url, customer);
}