import { GetRequest } from "./apiUrl";

export const getRequest = (url) =>  fetch(url, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});

export const getRequestParam = (url, param) =>  fetch(url + param, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
    }
}).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json(); 
});


export const getBetaUser = (username, email) =>  fetch(GetRequest.BetaJoin + username + '&email=' + email, {
    method: 'GET'
}).then((response) => {
    if (response.status !== 204) throw new Error(response.status);
    return response.json(); 
});