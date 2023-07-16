import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const postLink = (ig, fb, twitter) => fetch(url + '/user/links', {
    method: 'PUT',
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': csrfToken,
    }, 
    body: JSON.stringify({
        ig: ig === '' ? null : ig,
        fb: fb === '' ? null : fb,
        twitter: twitter === '' ? null : twitter
    })
}).then((response) => {
    if (response.status !== 204) throw new Error(response.status);
});