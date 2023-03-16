import { useState } from "react";
import './header.css';
import logo from '../../resources/logo.png';
import userImage from '../../resources/testuserimage.jpg';
import { Link } from 'react-router-dom';

function Header() {

    const [active] = useState("logged");

    return (
        <div>
            {active === "loggedOut" &&
            <div className="container header">
                <Link to="/">
                    <img src={logo} alt="logo" width="150px" height="49px"/>
                </Link>
            </div>
            }
            {active === "logged" && 
            <div className="container header-logged">
                <div className="row">
                    <div className="col-sm">
                        <Link to="/dashboard" className="link-item">
                            <img src={logo} alt="logo" width="150px" height="49px"/>
                        </Link>
                    </div>
                    <div className="col-sm header-content">
                        Hello, max.sclz94
                    </div>
                        <div className="col-sm">
                            <div class="dropdown">
                            <img className="user-image" src={userImage} alt="userImage" width={'40px'} height={'40px'} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"/>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                <li><h6 class="dropdown-header">Username</h6></li>
                                <li className="dropdown-item"><Link to="/user/account" className="link-item">Account</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="localhost:3000">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="container section-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/track/top" className="link-item">Top tracks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/artist/top" className="link-item">Top artists</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/genre/top" className="link-item">Top genres</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user/score" className="link-item">Mainstream score</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user/history" className="link-item">Recently played</Link>
                    </li>
                </ul>
            </nav>
            </div>
            }
        </div>
    );
}

export default Header;