import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchHistory = () =>  fetch(url + '/api/recently', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
});