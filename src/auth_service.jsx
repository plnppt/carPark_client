import axios from "axios";
import {API_URL_ENDPOINTS} from "./API_URLS";
import authHeader from "./auth_header";

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
            }).then(value => {
                return this.setRole();
            })
    }

    setRole() {
        return axios.get(API_URL_ENDPOINTS.ROLE, {headers: authHeader()}
        )
            .then((value => {
                if (value.data.role) {
                    localStorage.setItem("role", value.data.role);
                }
                return value.data.role
            }))
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