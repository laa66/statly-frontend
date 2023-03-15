import './footer.css'
import '../body/body.css';
import logo from '../../resources/logo.png';

function footer() {
    return (
        <div className="container-fluid footer">
        <div className="container section-description">
            <div className="container-fluid">
            <div class="row">
                <div className="col">
                    <ul>
                        <li className="footer-title">Statly</li>
                        <li>Home</li>
                        <li>Statly</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="footer-title">Socials</li>
                        <li>Instagram</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="footer-title">Legal</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="col">
                
                </div>
                <div className="col">
                    <img src={logo} alt={"logo"} width={"100px"} height={"33px"}/>
                </div>
                <div className="footer-copyright">
                    <p>All copyrighted content (i.e. album artwork) on Statly are owned by their respective owners. Data is provided by Spotify AB - Statly is in no way affiliated with Spotify AB.</p>
                    <p>&copy; 2023 Statly. All rights reserved.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default footer;