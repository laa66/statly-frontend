import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchTrackShort = () =>  fetch(url + '/api/top/tracks?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
});

export const fetchTrackMedium = () =>  fetch(url + '/api/top/tracks?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
});

export const fetchTrackLong = () => fetch(url + '/api/top/tracks?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
});