import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const deleteAccount = () =>  fetch(url + '/api/delete', {
    method: 'DELETE',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());