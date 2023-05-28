import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchArtistShort = () =>  fetch(url + '/api/top/artists?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchArtistMedium = () =>  fetch(url + '/api/top/artists?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchArtistLong = () =>  fetch(url + '/api/top/artists?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());