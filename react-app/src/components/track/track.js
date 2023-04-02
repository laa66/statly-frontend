import Image from '../image/image';
import List from '../list/list';
import Export from '../export/export'
import { fetchTrackShort, fetchTrackMedium, fetchTrackLong } from './fetchTrack';
import { postTrackShort, postTrackMedium, postTrackLong } from '../track/postTrack';

import { useEffect, useState } from 'react';

function Track() {
    const [active, setActive] = useState('short');

    const [short, setShort] = useState([]);
    const [medium, setMedium] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        fetchTrackShort().then((data) => {
            setShort(data.items);
        }).catch((err) => {console.log(err.message)})}, []);

    useEffect(() => {
        fetchTrackMedium().then((data) => {
            setMedium(data.items);
       }).catch((err) => {console.log(err.message)})}, []);

    useEffect(() => {
        fetchTrackLong().then((data) => {
            setLong(data.items);
       }).catch((err) => {console.log(err.message)})}, []);
    
    return (
        <div className="panel animate-fade">
            <Image.ImageTrack list={long}/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{"font-size":"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{"font-size":"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{"font-size":"16px"}}>All time</li>
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