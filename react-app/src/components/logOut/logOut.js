//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

export const logOut = () => {
    localStorage.clear();
    fetch('http://localhost:8080/logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'X-XSRF-TOKEN': csrfToken
    }
    }).then((response) => response.json());
   
}