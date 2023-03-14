import Image from '../image/image';
import List from '../list/list';
import { useState } from 'react';

function Mainstream() {
    const [active, setActive] = useState('short');

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
            {active === 'short' && <List.Mainstream/>}
            {active === 'medium' && <List.Mainstream/>}
            {active === 'long' && <List.Mainstream/>}
        </div>
    );
}

export default Mainstream;