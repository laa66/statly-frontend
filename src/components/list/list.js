import './list.css';
import React from 'react';
import dot from '../../resources/icon-dot.png';
import triangleUp from '../../resources/icon-triangle-up.png';
import triangleDown from '../../resources/icon-triangle-down.png';
import test from '../../resources/testuserimage.jpg';

function TrackList({list}) {
    return (
        <div className="container">
            <div className="list-container">
                <table className="list">
                    {list.map((data, index) => {
                        return(
                        <tbody key={data + index} onClick={() => {window.open(data.external_urls.spotify, "_blank", "noreferrer")}}>
                            <tr className="track-row" title={'rank ' + (data.difference === null ? 'not available' : data.difference)}>
                                <th className="col-first" style={{width:"3%"}}>{index+1}</th>
                                <td><div className="col-second"><img className="track-img" src={data.album.images[2].url} alt={"test"}/><b>{data.name}</b></div></td>
                                <td className="col-third" style={{width:"50%"}}>{data.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</td>
                                <td className="col-number">
                                    <span className="compare-number">{
                                        (() => {
                                            if (data.difference > 0) {
                                                return (<div>{'+' + data.difference}</div>)
                                            }
                                            else if (data.difference < 0) {
                                                return (<div>{data.difference}</div>)
                                            }
                                        })()
                                    }</span>
                                </td>
                                <td className="col-fourth" style={{width:"3%"}}>{
                                        (() => {
                                            if (data.difference === null) {
                                                return (<img src={dot} className="compare-icon" alt='dot' width={'15px'} height={'15px'}/>)
                                            }
                                            else if (data.difference === 0) {
                                                return (
                                                    <img src={dot} className="compare-icon" alt='dot' width={'15px'} height={'15px'}/>
                                                )
                                            } else if (data.difference > 0) {
                                                return (
                                                    <img src={triangleUp} className="compare-icon" alt='up' width={'15px'} height={'15px'} />
                                                )
                                            } else {
                                                return (
                                                    <img src={triangleDown} className="compare-icon" alt='down' width={'15px'} height={'15px'}></img>
                                                )
                                            }
                                        })()
                                    }
                                </td>
                            </tr>
                    </tbody>)})}
                </table>
            </div>
        </div>
    );
}

function ArtistList({list}) {
    return (
        <div className="container artist-container">
            <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
                {list.map((data, index) => {
                  return(
                    <div title={'rank ' + (data.difference === null ? 'not available' : data.difference)} className="col list-row" onClick={() => {window.open(data.external_urls.spotify, "_blank", "noreferrer")}}>
                        <img className="artist-img" src={data.images[1].url} alt={"test"}/>
                        <div className="artist-text">{index+1}</div>
                          <div className="artist-description"><b>{
                              (() => {
                                  if (data.difference === null) {
                                      return (<div>{data.name + ' '}<img src={dot} alt='dot' width={'15px'} height={'15px'} /></div>)
                                  }
                                  else if (data.difference === 0) {
                                      return (
                                          <div>{data.name + ' '}<img src={dot} alt='dot' width={'15px'} height={'15px'} /></div>
                                      )
                                  } else if (data.difference > 0) {
                                      return (
                                          <div>{data.name + ' '}<img src={triangleUp} alt='dot' width={'15px'} height={'15px'} /></div>
                                      )
                                  } else {
                                      return (
                                          <div>{data.name + ' '}<img src={triangleDown} alt='dot' width={'15px'} height={'15px'} /></div>
                                      )
                                  }
                              })()
                          }</b></div>
                      </div>
                  )})}
            </div>
        </div>
    );
}

function GenreList({list}) {
    return (
        <div className="genre-bar-chart container">
            <div className="row row-cols-md-1 row-cols-md-2 row-cols-md-3 row-cols-md-4 row-cols-md-5">
            {list.map((item, i) => (
                <div title={'rank ' + (item.difference === null ? 'not available' : item.difference)} className="col genre-col">
                    <div className="genre-container">
                        <div className="genre-compare">{
                                        (() => {
                                            if (item.difference === null) {
                                                return (<div />)
                                            }
                                            else if (item.difference === 0) {
                                                return (
                                                    <img src={dot} alt='dot' width={'15px'} height={'15px'} />
                                                )
                                            } else if (item.difference > 0) {
                                                return (
                                                    <img src={triangleUp} alt='up' width={'15px'} height={'15px'} />
                                                )
                                            } else {
                                                return (
                                                    <img src={triangleDown} alt='down' width={'15px'} height={'15px'}></img>
                                                )
                                            }
                                        })()
                                    }</div>
                        <div className="genre-percentage">{item.score + "%"}</div>
                        <div className="genre-bar" style={{"--percentage": String(item.score + "%")}}/>
                        <div className="genre-label">{item.genre}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

function Analysis() {
    return (
        <div className="container analysis-container">
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                    <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                            <span style={{fontSize:"40px"}}>Indicator 1</span>
                            <p style={{fontSize:"40px"}}>78%</p>
                        </div>
                    </div>
                    <div className="col-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <p>
                        Random section
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p>
                    Random section
                    </p>
                    </div>
                    <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                            <span style={{fontSize:"40px"}}>Indicator 2</span>
                            <p style={{fontSize:"40px"}}>78%</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                    <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                            <span style={{fontSize:"40px"}}>Mainstream</span>
                            <p style={{fontSize:"40px"}}>78%</p>
                        </div>
                    </div>
                    <div className="col-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <p>
                        Random section
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p>
                    Random section
                    </p>
                    </div>
                    <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                            <span style={{fontSize:"40px"}}>Boringness</span>
                            <p style={{fontSize:"40px"}}>78%</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                    <div className="col-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                            <span style={{fontSize:"40px"}}>Tempo</span>
                            <p style={{fontSize:"40px"}}>78%</p>
                        </div>
                    </div>
                    <div className="col-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <p>
                        Random section
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HistoryList({list}) {
    return (
        <div className="container">
            <div className="list-container">
                <table class="list">
                    {list.map((data, index) => {
                        return(
                        <tbody key={data + index} onClick={() => {window.open(data.track.external_urls.spotify, "_blank", "noreferrer")}}>
                            <tr className="track-row">
                                <th className="col-first">{index+1}</th>
                                <td style={{width:"42%"}}><div className="col-second"><img className="track-img" src={data.track.album.images[2].url} alt={"test"}/><b>{data.track.name}</b></div></td>
                                <td className="col-third">{data.track.artists.map((artist, i, arr) => {
                                    return (i + 1 === arr.length ? artist.name : artist.name + ", ")
                                })}</td>
                                <td className="col-fourth" id="time-col">{new Intl.DateTimeFormat('en-US', 
                                {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                                .format(Date.parse(new Date(data.played_at).toLocaleString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone})))}</td>
                            </tr>
                    </tbody>)})}
                </table>
            </div>
        </div>
    );
}

const exportedObject = {
    TrackList, ArtistList, GenreList, HistoryList, Analysis
}

export default exportedObject;