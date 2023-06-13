import { getConfiguration } from "../../config";

const url = getConfiguration().apiUrl;

export const fetchLibraryAnalysis = () =>  fetch(url + '/api/analysis/library', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});

export const fetchUserPlaylists = () =>  fetch(url + '/api/playlist/all', {
    method: 'GET',
    credentials: 'include'
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});