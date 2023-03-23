export const fetchGenreShort = () =>  fetch('http://localhost:8080/api/top/genres?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchGenreMedium = () =>  fetch('http://localhost:8080/api/top/genres?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchGenreLong = () =>  fetch('http://localhost:8080/api/top/genres?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());