import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const logOut = () => {
    localStorage.clear();
    fetch(url + '/logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
    }).then(response => {
        if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
        }
    });
}