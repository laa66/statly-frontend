import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const fetchUserPlaylists = () =>  fetch(url + '/api/playlist/all', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});

export const fetchUserPlaylistsWithId = (id) =>  fetch(url + '/api/playlist/all?external_id=' + id, {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});

export const fetchPlaylistAnalysis = (name, id) => fetch(url + '/api/analysis/playlist', {
    method: 'POST',
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': csrfToken,
    }, 
    body: JSON.stringify({
        name: name,
        id: id
    })
}).then((response) => {
    if (response.status !== 200) throw new Error(response.status);
    return response.json();
});