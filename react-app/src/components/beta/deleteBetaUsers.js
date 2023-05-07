import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const deleteBetaUsers = () => fetch(url + '/user/beta/delete', {
    method: 'DELETE',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then(response => {
    if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
    }
    return response.json();
});