import { postLogout } from "../request/postRequest";

export const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    postLogout();
}