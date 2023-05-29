import Image from '../image/image';
import List from '../list/list';
import Error from '../error/error';

import { useEffect, useState } from 'react';

import { fetchArtistShort, fetchArtistMedium, fetchArtistLong } from './fetchArtist';

function Artist() {
    const [active, setActive] = useState('short');

    const [short, setShort] = useState([]);
    const [medium, setMedium] = useState([]);
    const [long, setLong] = useState([]);
    const [date, setDate] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        fetchArtistShort().then((data) => {
            setShort(data.items);
            setDate(data.date);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    useEffect(() => {
        fetchArtistMedium().then((data) => {
            setMedium(data.items);
       }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
    })}, []);

    useEffect(() => {
        fetchArtistLong().then((data) => {
            setLong(data.items);
       }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
    })}, []);

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div className="panel animate-fade">
            <Image.ImageArtist list={long} date={date}/>
            <nav className="container">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{fontSize:"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{fontSize:"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{fontSize:"16px"}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.ArtistList list={short}/>}
            {active === 'medium' && <List.ArtistList list={medium}/>}
            {active === 'long' && <List.ArtistList list={long}/>}
        </div>
    );
}

export default Artist;