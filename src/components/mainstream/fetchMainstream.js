import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchMainstreamShort = () =>  fetch(url + '/api/score?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchMainstreamMedium = () =>  fetch(url + '/api/score?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchMainstreamLong = () =>  fetch(url + '/api/score?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());