import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

alert(url);

export const fetchTrackShort = () =>  fetch(url + '/api/top/tracks?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchTrackMedium = () =>  fetch(url + '/api/top/tracks?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchTrackLong = () => fetch(url + '/api/top/tracks?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());