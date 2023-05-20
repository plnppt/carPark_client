import AuthService from "./auth_service"

export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
    const access = AuthService.getToken();

    if (token && access) {
        return { Authorization: 'Bearer ' + access };
    } else {
        return {};
    }
}