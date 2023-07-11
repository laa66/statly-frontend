import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchUserRanking = () =>  fetch(url + '/user/rank', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
});