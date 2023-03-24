export const postTrackShort = () =>  fetch('http://localhost:8080/api/playlist/create?range=short', {
    method: 'POST',
    credentials: 'include'
}).then((response) => response.json());

export const postTrackMedium = () =>  fetch('http://localhost:8080/api/playlist/create?range=medium', {
    method: 'POST',
    credentials: 'include'
}).then((response) => response.json());

export const postTrackLong = () =>  fetch('http://localhost:8080/api/playlist/create?range=long', {
    method: 'POST',
    credentials: 'include'
}).then((response) => response.json());