import Image from '../image/image';
import List from '../list/list';

import { useEffect, useState } from 'react';
import { fetchGenreShort, fetchGenreMedium, fetchGenreLong } from './fetchGenre';

function Genre() {
    const [active, setActive] = useState('short');

    const [short, setShort] = useState([]);
    const [medium, setMedium] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        fetchGenreShort().then((data) => {
            setShort(data.genres);
        }).catch((err) => {console.log(err.message)})}, []);

    useEffect(() => {
        fetchGenreMedium().then((data) => {
            setMedium(data.genres);
       }).catch((err) => {console.log(err.message)})}, []);

    useEffect(() => {
        fetchGenreLong().then((data) => {
            setLong(data.genres);
       }).catch((err) => {console.log(err.message)})}, []);

    return (
        <div>
            <Image.ImageGenre/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{"font-size":"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{"font-size":"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{"font-size":"16px"}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.GenreList list={short}/>}
            {active === 'medium' && <List.GenreList list={medium}/>}
            {active === 'long' && <List.GenreList list={long}/>}
        </div>
    );
}

export default Genre;