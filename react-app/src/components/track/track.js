import Image from '../image/image';
import List from '../list/list';
import Export from '../export/export'
import { useState } from 'react';

function Track() {
    const [active, setActive] = useState('short');

    return (
        <div>
            <Image.ImageTrack/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{"font-size":"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{"font-size":"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{"font-size":"16px"}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.TrackList/>}
            {active === 'medium' && <List.TrackList/>}
            {active === 'long' && <List.TrackList/>}

            {active === 'short' && <Export/>}
            {active === 'medium' && <Export/>}
            {active === 'long' && <Export/>}
        </div>
    );
}

export default Track;