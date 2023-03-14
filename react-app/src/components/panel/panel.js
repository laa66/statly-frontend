import { useState } from "react";
import './panel.css';
import Dashboard from '../dashboard/dashboard';
import Track from '../track/track';
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Mainstream from "../mainstream/mainstream";
import History from "../history/history";

function Panel() {
    const [active, setActive] = useState("dashboard");
    return (
        <div className="panel">
            <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-item" onClick={() => setActive("topTrack")}>Top tracks</li>
                    <li className="nav-item" onClick={() => setActive("topArtist")}>Top artists</li>
                    <li className="nav-item" onClick={() => setActive("topGenre")}>Top genres</li>
                    <li className="nav-item" onClick={() => setActive("mainstream")}>Mainsteram score</li>
                    <li className="nav-item" onClick={() => setActive("history")}>Recently played</li>
                </ul>
            </nav>
            {active === "dashboard" && <Dashboard/>}
            {active === "topTrack" && <Track/>}
            {active === "topArtist" && <Artist/>}
            {active === "history" && <History/>}
            {active === "topGenre" && <Genre/>}
            {active === "mainstream" && <Mainstream/>}
        </div>
    );
}

export default Panel;