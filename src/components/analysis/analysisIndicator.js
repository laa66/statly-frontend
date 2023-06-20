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
                    <div className="col-lg-auto">
                        <center><img className="analysis-image" src={indicators.images?.[0].url} alt="test"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Acousticness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['acousticness']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'acousticness'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'danceability'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Danceability</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['danceability']}%</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[1].url} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[2].url} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Energy</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['energy']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'energy'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'instrumentalness'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Instrumentalness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['instrumentalness']}%</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[3].url} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[4].url} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Liveness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['liveness']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'liveness'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'loudness'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Loudness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['loudness']}dB</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[5].url} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[6].url} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Speechiness</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['speechiness']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'speechiness'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'valence'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Valence</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['valence']}%</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[7].url} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[8].url} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Mainstream</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['mainstream']}%</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'mainstream'}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col analysis-column">
                    <IndicatorText indicator={'boringness'}/>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Boringness score</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['boringness']} points</p>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[9].url} alt="test" className="analysis-image"/></center>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-lg-auto">
                        <center><img src={indicators.images?.[10].url} alt="test" className="analysis-image"/></center>
                    </div>
                    <div className="col analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Tempo</span>
                            <p className="analysis-percentage">{indicators.libraryAnalysis?.['tempo']} BPM</p>
                        </div>
                    </div>
                    <div className="col analysis-column">
                        <IndicatorText indicator={'tempo'}/>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default AnalysisIndicator;