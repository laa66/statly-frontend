export const fetchHistory = () =>  fetch('http://localhost:8080/api/recently', {
    method: 'GET',
    credentials: 'include'
}).then((response) => response.json());