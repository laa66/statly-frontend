//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

export const postTrackShort = () =>  fetch('http://localhost:8080/api/playlist/create?range=short', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());

export const postTrackMedium = () =>  fetch('http://localhost:8080/api/playlist/create?range=medium', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());

export const postTrackLong = () =>  fetch('http://localhost:8080/api/playlist/create?range=long', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
}).then((response) => response.json());