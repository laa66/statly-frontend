import test from '../../resources/testuserimage.jpg';
import './analysis.css'

function AnalysisIndicator() {
    return (
        <>
        <div className="container analysis-section">
                <div className="row">
                    <div className="col-2">
                        <center><img src={test} alt="test" width={'200px'} height={'200px'}/></center>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Indicator 1</span>
                            <p className="analysis-percentage">78%</p>
                        </div>
                    </div>
                    <div className="col-6 analysis-column">
                        <p>
                        Random section
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p>
                    Random section
                    </p>
                    </div>
                    <div className="col-4 analysis-column">
                    <div style={{textAlign:"center"}}>
                            <span className="analysis-name">Indicator 2</span>
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
                        <p>
                        Random section
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container analysis-section">
                <div className="row">
                    <div className="col-6 analysis-column">
                    <p>
                    Random section
                    </p>
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
                        <p>
                        Random section
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default AnalysisIndicator;