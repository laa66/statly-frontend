import Image from '../image/image';
import List from '../list/list';
import { useEffect, useState } from 'react';

import { fetchMainstreamShort, fetchMainstreamMedium, fetchMainstreamLong } from './fetchMainstream';

function Mainstream() {
    const [active, setActive] = useState('short');

    const [short, setShort] = useState([]);
    const [medium, setMedium] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        fetchMainstreamShort().then((data) => {
            setShort(data);
        }).catch((err) => {console.log(err.message)})}, []);

    useEffect(() => {
        fetchMainstreamMedium().then((data) => {
            setMedium(data);
       }).catch((err) => {console.log(err.message)})}, []);

    useEffect(() => {
        fetchMainstreamLong().then((data) => {
            setLong(data);
       }).catch((err) => {console.log(err.message)})}, []);

    return (
        <div>
            <Image.ImageMainstream/>
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-range-item" onClick={() => setActive('short')} style={{"font-size":"16px"}}>4 weeks</li>
                    <li className="nav-range-item" onClick={() => setActive('medium')} style={{"font-size":"16px"}}>6 months</li>
                    <li className="nav-range-item" onClick={() => setActive('long')} style={{"font-size":"16px"}}>All time</li>
                </ul>
            </nav>
            {active === 'short' && <List.Mainstream score={short}/>}
            {active === 'medium' && <List.Mainstream score={medium}/>}
            {active === 'long' && <List.Mainstream score={long}/>}
        </div>
    );
}

export default Mainstream;