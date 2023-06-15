import Image from '../image/image';
import List from '../list/list';
import Export from '../export/export'
import Error from '../error/error';

import { fetchTrackShort, fetchTrackMedium, fetchTrackLong } from './fetchTrack';
import { postTrackShort, postTrackMedium, postTrackLong } from './postTrack';

import { useEffect, useState } from 'react';

function Track() {
    const [active, setActive] = useState('short');

    const [short, setShort] = useState([]);
    const [medium, setMedium] = useState([]);
    const [long, setLong] = useState([]);
    const [date, setDate] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        fetchTrackShort().then((data) => {
            setShort(data.items);
            setDate(data.date);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message)
            console.log(err);
        })}, []);

    useEffect(() => {
        fetchTrackMedium().then((data) => {
            setMedium(data.items);
       }).catch((err) => {
            setHasError(true);
            setStatus(err.message)
            console.log(err)
    })}, []);

    useEffect(() => {
        fetchTrackLong().then((data) => {
            setLong(data.items);
       }).catch((err) => {
            setHasError(true);
            setStatus(err.message)
            console.log(err)
    })}, []);

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div className="panel animate-fade">
            <Image.ImageTrack list={short} date={date}/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{fontSize:"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{fontSize:"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{fontSize:"16px"}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.TrackList list={short}/>}
            {active === 'medium' && <List.TrackList list={medium}/>}
            {active === 'long' && <List.TrackList list={long}/>}
            

            {active === 'short' && <Export postTrack={postTrackShort}/>}
            {active === 'medium' && <Export postTrack={postTrackMedium}/>}
            {active === 'long' && <Export postTrack={postTrackLong}/>}
            
        </div>
    );
}

export default Track;