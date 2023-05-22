import axios from "axios";
import { API_URL_ENDPOINTS } from "./API_URLS";

class AuthService {
    login(phone_number, password) {
        return axios
            .post(API_URL_ENDPOINTS.TOKEN,
                {
                    "phone_number": phone_number,
                    "password": password
                }
            )
            .then((response) => {
                if (response.data.access) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                }
                console.log(response.data)
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("token");
        window.location.href = '/'
    }

    isLoggedIn() {
        const token = JSON.parse(localStorage.getItem('token'));
        return token && this.getToken()
    }

    getToken() {
        return JSON.parse(localStorage.getItem('token'))?.access
    }

}
export default new AuthService();