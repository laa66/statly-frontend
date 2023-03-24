export const fetchTrackShort = () =>  fetch('http://localhost:8080/api/top/tracks?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchTrackMedium = () =>  fetch('http://localhost:8080/api/top/tracks?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchTrackLong = () =>  fetch('http://localhost:8080/api/top/tracks?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());