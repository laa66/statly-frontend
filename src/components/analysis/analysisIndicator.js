import test from '../../resources/testuserimage.jpg';
import './analysis.css'
import IndicatorText from './indicatorText';

function AnalysisIndicator({indicator1, indicator2, mainstream, boringness, tempo}) {
    return (
        <>
        <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">{indicator1}</span>
                            <p className="analysis-percentage">78%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={indicator1}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={indicator2}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">{indicator2}</span>
                            <p className="analysis-percentage">78%</p>
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
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Mainstream</span>
                            <p className="analysis-percentage">78%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={mainstream}/></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p><IndicatorText indicator={boringness}/></p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Boringness</span>
                            <p className="analysis-percentage">78%</p>
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
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Tempo</span>
                            <p className="analysis-percentage">78%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p><IndicatorText indicator={tempo}/></p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default AnalysisIndicator;