import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchProfile = (id) =>  fetch(url + '/user/profile?user_id=' + id, {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});
