import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const postUserNotification = (name, mail, joinDate) => fetch(url + '/user/beta/notification', {
    method: 'POST',
    credentials: 'include',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-XSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
        fullName: name,
        email: mail,
        date: joinDate
    })
}).then((response) => {
    if (response.status !== 204) throw new Error(response.status);
});