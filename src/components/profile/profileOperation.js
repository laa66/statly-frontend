import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const followUser = (id) => fetch(url + '/user/follow?user_id=' + id, {
    method: 'PUT',
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

export const unfollowUser = (id) => fetch(url + '/user/unfollow?user_id=' + id, {
    method: 'PUT',
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

