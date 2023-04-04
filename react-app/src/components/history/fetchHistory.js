import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchHistory = () =>  fetch(url + '/api/recently', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());