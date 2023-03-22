export const fetchArtistShort = () =>  fetch('http://localhost:8080/api/top/artists?range=short', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchArtistMedium = () =>  fetch('http://localhost:8080/api/top/artists?range=medium', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());

export const fetchArtistLong = () =>  fetch('http://localhost:8080/api/top/artists?range=long', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());