import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const postBetaUser = (username, email) => fetch(url + '/user/beta/join', {
    method: 'POST',
    credentials: 'include',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-XSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
        fullName: username,
        email: email
    })
}).then((response) => response.json());