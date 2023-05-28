import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchBetaUsers = () =>  fetch(url + '/user/beta/all', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());