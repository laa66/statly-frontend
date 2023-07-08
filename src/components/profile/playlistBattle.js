import Error from "../error/error";

import { useState, useEffect } from "react";
import { fetchUserPlaylists, fetchUserPlaylistsWithId } from "../playlistInsight/fetchPlaylistInsight";
import { makePlaylistBattle } from "./makePlaylistBattle";
import Carousel from "./carousel";

function PlaylistBattle({ profile }) {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const [playlists, setPlaylists] = useState([]);
    const [battlePlaylists, setBattlePlaylists] = useState([]);
    const [battleResult, setBattleResult] = useState([]);

    let [firstPlaylistIndex, setFirstPlaylistIndex] = useState(0);
    let [secondPlaylistIndex, setSecondPlaylistIndex] = useState(0);

    useEffect(() => {
        fetchUserPlaylists().then((data) => {
            setPlaylists(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        })
        fetchUserPlaylistsWithId(profile.externalId).then((data) => {
            setBattlePlaylists(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        })
    }, [profile.externalId]);

    let incrementPlaylistIndex = (playlistType) => {
        playlistType === 'user' ? setFirstPlaylistIndex(firstPlaylistIndex+1) : setSecondPlaylistIndex(secondPlaylistIndex+1);
    }

    let decrementPlaylistIndex = (playlistType) => {
        playlistType === 'user' ? setFirstPlaylistIndex(firstPlaylistIndex-1) : setSecondPlaylistIndex(secondPlaylistIndex-1);
    }

    const handlePlaylistBattle = (playlist, playlistBattle) => {
        makePlaylistBattle(profile.id, playlist, playlistBattle).then((data) => {
            console.log(data);
            setBattleResult(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        })
    }
    
    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div>
            <div className="row playlist-battle-container">
            <div className="col-md-3 playlist-row">
                <h5 className="mb-3">Your playlists</h5>
                <Carousel playlist={playlists} callbackInc={incrementPlaylistIndex} callbackDec={decrementPlaylistIndex} playlistType={'user'}/>
            </div>
            <div className="col-md-3 playlist-mid">
                <button onClick={() => handlePlaylistBattle(playlists.items[firstPlaylistIndex], playlists.items[secondPlaylistIndex])} className="back-playlist-button" style={{border:"none"}}>Start</button>
            </div>
            <div className="col-md-3 playlist-row">
                <h5 className="mb-3">Opponent playlists</h5>
                <Carousel playlist={battlePlaylists} callbackInc={incrementPlaylistIndex} callbackDec={decrementPlaylistIndex} playlistType={'opponent'}/>
            </div>
        </div>
        </div>
    );
}

export default PlaylistBattle;