import { useState, useEffect } from 'react';
import './rank.css';
import Error from '../error/error';
import { fetchUserRanking } from './fetchUserRanking';
import { Link } from 'react-router-dom';

function Rank() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        fetchUserRanking().then((data) => {
            setRanking(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })
    }, []);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="rank-container container-sm">
            <center><h1>User ranking</h1></center>
            <div className="row mt-4 mb-2">
                <div className="col-sm-1">
                    <span className="rank-index title-rank">#</span>
                </div>
                <div className="col-sm-9">
                    <span style={{ marginLeft: "-7%" }} className="rank-index title-rank">User</span>
                </div>
                <div className="col-sm-2 rank-points">
                    <span>Points</span>
                </div>
            </div>
            {ranking?.map((data, index) => {
                return (
                    <Link to="/user/profile" state={{ id: data.id }} key={data + index} className="row mb-2 link-item">
                        <div className="col-sm-10">
                            <span className="rank-index">{index + 1}</span>
                            <img className="rank-image" src={data?.images[0].url} alt="profile" width="40px" height="40px" />
                            <span className="rank-user">{data.display_name}</span>
                        </div>
                        <div className="col-sm-2 rank-points">
                            <span>{data.points}</span>
                        </div>
                    </Link>)
            })}
        </div>
    );
}

export default Rank;