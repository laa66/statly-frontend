import './analysis.css'

import IndicatorText from './indicatorText';
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { fetchLibraryAnalysis } from './fetchAnalysis';

function AnalysisIndicator() {

    const[indicators, setIndicators] = useState([]);

    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        fetchLibraryAnalysis().then((data) => {
            setIndicators(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <>
           <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={indicators.images?.[0].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Acousticness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['acousticness'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={'acousticness'}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={'danceability'}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Danceability</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['danceability'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={indicators.images?.[1].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={indicators.images?.[2].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Energy</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['energy'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={'energy'}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={'instrumentalness'}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Instrumentalness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['instrumentalness'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={indicators.images?.[3].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={indicators.images?.[4].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Liveness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['liveness'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={'liveness'}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={'loudness'}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Loudness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['loudness']}dB</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={indicators.images?.[5].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={indicators.images?.[6].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Speechiness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['speechiness'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={'speechiness'}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={'valence'}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Valence</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['valence'] * 100}%</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={indicators.images?.[7].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={indicators.images?.[8].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Mainstream</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['mainstream']}%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={'mainstream'}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={'boringness'}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Boringness score</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['boringness']}</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <center><img src={indicators.images?.[9].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={indicators.images?.[10].url} alt="test" width={'150px'} height={'150px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Tempo</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['tempo']} BPM</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={'tempo'}/></p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default AnalysisIndicator;