import { useState } from "react";
import './header.css';
import logo from '../../resources/logo.png';
import userImage from '../../resources/testuserimage.jpg';

function Header() {

    const [active] = useState("logged");

    return (
        <div>
            {active === "loggedOut" &&
            <div className="container header">
                <img src={logo} alt="logo" width="150px" height="49px"/>
            </div>
            }
            {active === "logged" && 
            <div className="container header-logged">
                <div className="row">
                    <div className="col-sm">
                        <img src={logo} alt="logo" width="150px" height="49px"/>
                    </div>
                    <div className="col-sm header-content">
                        Hello, max.sclz94
                    </div>
                        <div className="col-sm">
                            <div class="dropdown">
                            <img className="user-image" src={userImage} alt="userImage" width={'40px'} height={'40px'} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"/>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                <li><h6 class="dropdown-header">Username</h6></li>
                                <li><a class="dropdown-item" href="localhost:3000">Account</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="localhost:3000">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default Header;