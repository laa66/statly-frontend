//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

export const postBetaUser = (username, email) => fetch('http://localhost:8080/api/join', {
    method: 'POST',
    credentials: 'include',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-XSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
        username: username,
        email: email
    })
}).then((response) => response.json());