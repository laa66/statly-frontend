import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const postBetaUser = (username, email) => fetch(url + '/api/join', {
    method: 'POST',
    credentials: 'include',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-XSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
        username: username,
        email: email
    })
}).then((response) => response.json());