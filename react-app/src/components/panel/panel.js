import './panel.css';
import Dashboard from '../dashboard/dashboard';
import Track from '../track/track';
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Mainstream from "../mainstream/mainstream";
import History from "../history/history";
import Account from "../account/account";

import { Route, Routes } from "react-router-dom";

function Panel() {
    return (
        <div className="panel">
            <Routes>
                <Route index element={<Dashboard/>}/>
                <Route path="/track/top" element={<Track/>}/>
                <Route path="/artist/top" element={<Artist/>}/>
                <Route path="/user/history" element={<History/>}/>
                <Route path="/genre/top" element={<Genre/>}/>
                <Route path="/user/score" element={<Mainstream/>}/>
                <Route path="/user/account" element={<Account/>}/>
            </Routes>
        </div>
    );
}

export default Panel;