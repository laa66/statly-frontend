import { getConfiguration } from "../../config";

//eslint-disable-next-line
const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
const url = getConfiguration().apiUrl;

export const makePlaylistBattle = (id, playlist, playlistBattle) => fetch(url + '/api/analysis/battle?user_id=' + id, {
    method: 'POST',
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': csrfToken,
    }, 
    body: JSON.stringify({
        playlist: playlist,
        playlistBattle: playlistBattle
    })
}).then((response) => {
    if (response.status !== 200) throw new Error(response.status);
    return response.json();
});