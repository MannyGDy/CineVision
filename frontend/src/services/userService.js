import axios from "axios";

export class UserService {

    apiUrl =  `{process.env.REACT_APP_API_GATEWAY}/api/user/users/`

    addCustomer(customer) {
        return axios.post(this.apiUrl + "add", customer);
    }

    login(loginDto) {
        return axios.post( `{process.env.REACT_APP_API_GATEWAY}/api/user/auth/login`, loginDto);
    }
}
