import Image from '../image/image';
import List from '../list/list';
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { fetchGenreShort, fetchGenreMedium, fetchGenreLong } from './fetchGenre';

function Genre() {
    const [active, setActive] = useState('short');

    const [short, setShort] = useState([]);
    const [medium, setMedium] = useState([]);
    const [long, setLong] = useState([]);
    const [date, setDate] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        fetchGenreShort().then((data) => {
            setShort(data.genres);
            setDate(data.date);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    useEffect(() => {
        fetchGenreMedium().then((data) => {
            setMedium(data.genres);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    useEffect(() => {
        fetchGenreLong().then((data) => {
            setLong(data.genres);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    if (hasError) return (<div><Error code={status}/></div>);
    return (
        <div className="panel animate-fade">
            <Image.ImageGenre date={date}/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{fontSize:"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{fontSize:"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{fontSize:"16px"}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.GenreList list={short}/>}
            {active === 'medium' && <List.GenreList list={medium}/>}
            {active === 'long' && <List.GenreList list={long}/>}
        </div>
    );
}

export default Genre;