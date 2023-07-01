import './search.css';

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchResults } from './fetchResults.js';
import Error from '../error/error';

function Search() {
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();
    const [results, setResults] = useState([]);
    const { state } = useLocation();
    const { username } = state;
    const location = useLocation();

    useEffect(() => {
        fetchResults(username).then((data) => {
            setResults(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        // eslint-disable-next-line
        })}, [location]);

    if (hasError) return (<div><Error code={status}/></div>);

    return (
        <div className="container search-section">
            <h1 className="search-title">Search results for "{username}"</h1>
            <div className="row row-cols-xl-1 row-cols-xl-2 row-cols-xl-3 row-cols-xl-4 row-cols-xl-5">
            {results?.map((data, i) => {
                  return(
                    <div key={i} className="search-item">
                        <img className="search-image" src={data?.images[0]?.url} alt="test" width={'60px'} height={'60px'}/>
                        <Link to="/track/top" className="link-item">{data?.display_name}</Link>
                    </div>
                  )})}
            </div>
        </div>
    );
}

export default Search;