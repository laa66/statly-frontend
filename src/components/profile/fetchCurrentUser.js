import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchCurrentUser = () =>  fetch(url + '/user/me', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});
