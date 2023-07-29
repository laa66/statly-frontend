import { getConfiguration } from "../../config"

const url = getConfiguration().apiUrl;
const clientUrl = getConfiguration().clientUrl;

export const AuthRequest = {
    Auth: url + '/oauth2/authorize/spotify?redirect_uri=' + encodeURIComponent(clientUrl + '/statly-frontend/#/callback')
}

export const GetRequest = {
    CurrentUser: url + '/user/me',
    LibraryAnalysis: url + '/api/analysis/library',
    Friends: url + '/user/me/following',
    Genre: url + '/api/top/genres?range=',
    Artist: url + '/api/top/artists?range=',
    Track: url + '/api/top/tracks?range=',
    History: url + '/api/recently',
    UserPlaylists: url + '/api/playlist/all',
    UserPlaylistsId: url + '/api/playlist/all?external_id=',
    Profile: url + '/user/profile?user_id=',
    Match: url + '/api/analysis/match?user_id=',
    UserRanking: url + '/user/rank',
    Search: url + '/user/search?username=',
    BetaUsers: url + '/beta/all',
    BetaJoin: url + '/beta/join?name='
}

export const PostRequest = {
    Notification: url + '/beta/notification',
    Logout: url + '/user/logout',
    PlaylistAnalysis: url + '/api/analysis/playlist',
    PlaylistBattle: url + '/api/analysis/battle?user_id=',
    PlaylistCreate: url + '/api/playlist/create?range=',

}

export const PutRequest = {
    SocialLink: url + '/user/links',
    Follow: url + '/user/follow?user_id=',
    Unfollow: url + '/user/unfollow?user_id='
}

export const DeleteRequest = {
    Account: url + '/user/me/delete',
    BetaUsers: url + '/beta/delete'

}