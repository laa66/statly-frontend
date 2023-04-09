import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;


export const postTrackShort = () => fetch(url + '/api/playlist/create?range=short', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());

export const postTrackMedium = () =>  fetch(url + '/api/playlist/create?range=medium', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());

export const postTrackLong = () =>  fetch(url + '/api/playlist/create?range=long', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());