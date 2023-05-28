import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchGenreShort = () =>  fetch(url + '/api/top/genres?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchGenreMedium = () =>  fetch(url +'/api/top/genres?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchGenreLong = () =>  fetch(url + '/api/top/genres?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());