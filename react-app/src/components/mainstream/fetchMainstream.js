export const fetchMainstreamShort = () =>  fetch('http://localhost:8080/api/score?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchMainstreamMedium = () =>  fetch('http://localhost:8080/api/score?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchMainstreamLong = () =>  fetch('http://localhost:8080/api/score?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());