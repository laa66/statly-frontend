import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchResults = (username) =>  fetch(url + '/user/search?username=' + username, {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});
