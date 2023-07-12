import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const postBetaUser = (username, email) => fetch(url + '/beta/join?name=' + username + '&email=' + email, {
    method: 'GET',
    credentials: 'include',
}).then((response) => {
    if (response.status !== 204) throw new Error(response.status);
});