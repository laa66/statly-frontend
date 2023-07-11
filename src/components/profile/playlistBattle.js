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

    const [result, setResult] = useState(false);

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
        }).then(() => setResult(true))
        .catch((err) => {
            setHasError(true);
            setStatus(err.message);
        })
    }
    
    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div>
            {!result && <div>
                {playlists.total === 0 || battlePlaylists.total === 0 ? <h4 className="mt-3" style={{color:"#7d7d7d"}}><center>There are no playlists on your or opponent account.</center></h4> : <div className="row playlist-battle-container">
                    <div className="col-md-4 playlist-row">
                        <h5 className="mb-3">Your playlists</h5>
                        <Carousel playlist={playlists} callbackInc={incrementPlaylistIndex} callbackDec={decrementPlaylistIndex} playlistType={'user'} />
                    </div>
                    <div className="col-md-4 playlist-mid">
                        <button onClick={() => handlePlaylistBattle(playlists.items[firstPlaylistIndex], battlePlaylists.items[secondPlaylistIndex])}
                            className="back-playlist-button" style={{ border: "none" }}>Start</button>
                    </div>
                    <div className="col-md-4 playlist-row">
                        <h5 className="mb-3">Opponent playlists</h5>
                        <Carousel playlist={battlePlaylists} callbackInc={incrementPlaylistIndex} callbackDec={decrementPlaylistIndex} playlistType={'opponent'} />
                    </div>
                </div>}
            </div>}
            {result && <div className="row playlist-row">
                {battleResult.result === 0 ? <div/> : <div className="col-md-4">
                    <div className="row row-cols-3 main-name" style={{ fontSize: "18px" }}>
                        <div className="col mb-4 w-100">
                            <div className="scale-text" style={{fontSize:"36px"}}>{battleResult.winner?.score} pts</div>
                        </div>
                        <div className="col mb-3">
                            <span>Mainstream</span>
                            <div className="scale-text">{battleResult.winner?.battlerAnalysis['mainstream']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Boringness</span>
                            <div className="scale-text">{battleResult.winner.battlerAnalysis?.['boringness']} pts</div>
                        </div>
                        <div className="col mb-3">
                            <span>Danceability</span>
                            <div className="scale-text">{battleResult.winner.battlerAnalysis?.['danceability']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Energy</span>
                            <div className="scale-text">{battleResult.winner.battlerAnalysis?.['energy']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Valence</span>
                            <div className="scale-text">{battleResult.winner.battlerAnalysis?.['valence']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Tempo</span>
                            <div className="scale-text">{battleResult.winner.battlerAnalysis?.['tempo']} BPM</div>
                        </div>
                    </div>
                    <h4 className="nick-text">{battleResult.winnerProfile?.username}</h4>
                </div>}
                {battleResult.result === 0 ? <div className="col-md-12">
                    <h2 className="mb-3">{battleResult.result === 0 ? <div>No contest!</div>: <div>{battleResult.winnerProfile?.username} wins!</div>}</h2>
                    <div className="row mt-3">
                    <div className="col-md-3"/>
                        <div className="col-md-3">
                            <div>Winner profile score</div>
                            <div>{battleResult.winnerProfile?.points}(+{battleResult.result})</div>
                        </div>
                        <div className="col-md-3">
                            <div>Loser profile score</div>
                            <div>{battleResult.loserProfile?.points}(-{battleResult.result})</div>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                </div> : <div className="col-md-4">
                    <h2 className="mb-3">{battleResult.result === 0 ? <div>No contest!</div>: <div>{battleResult.winnerProfile?.username} wins!</div>}</h2>
                    <img src={battleResult.winnerProfile?.imageUrl} alt={'battler'} height={"150px"} width={"150px"}/>
                    <div className="row mt-3">
                        <div className="col">
                            <div>Winner profile score</div>
                            <div>{battleResult.winnerProfile?.points}(+{battleResult.result})</div>
                        </div>
                        <div className="col">
                            <div>Loser profile score</div>
                            <div>{battleResult.loserProfile?.points}(-{battleResult.result})</div>
                        </div>
                    </div>
                </div>}
                {battleResult.result === 0 ? <div/> : <div className="col-md-4">
                    <div className="row row-cols-3 main-name" style={{ fontSize: "18px" }}>
                        <div className="col mb-4 w-100">
                            <div className="loser-text" style={{fontSize:"36px"}}>{battleResult.loser?.score} pts</div>
                        </div>
                        <div className="col mb-3">
                            <span>Mainstream</span>
                            <div className="loser-text">{battleResult.loser.battlerAnalysis?.['mainstream']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Boringness</span>
                            <div className="loser-text">{battleResult.loser.battlerAnalysis?.['boringness']} pts</div>
                        </div>
                        <div className="col mb-3">
                            <span>Danceability</span>
                            <div className="loser-text">{battleResult.loser.battlerAnalysis?.['danceability']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Energy</span>
                            <div className="loser-text">{battleResult.loser.battlerAnalysis?.['energy']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Valence</span>
                            <div className="loser-text">{battleResult.loser.battlerAnalysis?.['valence']}%</div>
                        </div>
                        <div className="col mb-3">
                            <span>Tempo</span>
                            <div className="loser-text">{battleResult.loser.battlerAnalysis?.['tempo']} BPM</div>
                        </div>
                    </div>
                    <h4 className="nick-text">{battleResult.loserProfile?.username}</h4>
                </div>}
            </div>}
        </div>
    );
}

export default PlaylistBattle;