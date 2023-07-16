import './header.css';
import logo from '../../resources/logo.png';
import search from '../../resources/icon-search.png';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../logOut/logOut';
import { getConfiguration } from '../../config';
import { useState } from 'react';

function Header() {
    return (
        <div>
            <div className="container header">
                <Link to="/">
                    <img src={logo} alt="logo" width="150px" height="49px"/>
                </Link>
            </div>
        </div>
    );
}

function HeaderLogged() {
    const [showBar, setShowBar] = useState(true);
    const navigate = useNavigate();
    const id = localStorage.getItem('userId');

    const handleSearch = (event) => {
        event.preventDefault();
        var username = event.target.username.value;
        navigate("/user/search", { state: { username }});
    }
    return (
        <div className="container-fluid header-logged" onMouseLeave={() => setShowBar(true)}>
            <div className="row g-0">
                <div className="col-sm header-logo">
                    <Link to="/dashboard" className="link-item">
                        <img src={logo} alt="logo" width="150px" height="49px" />
                    </Link>
                </div>
                <div className="col-sm-6 col-md-4 header-content">
                    Hello, {localStorage.getItem('username')}
                </div>
                <div className="col-sm header-account">
                    <div className="dropdown">
                        <img className="user-image" src={localStorage.getItem('imageUrl')} alt="userImage" width={'40px'} height={'40px'} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" />
                        <div className="user-search">
                            <div className="wrapper-form">
                                {showBar && <div className="search-bar-hidden">
                                    <input style={{ marginTop: "0" }} className="search-input-hidden form-control" id="username" name="username" aria-describedby="email-help"/>
                                    <button className="search-button-hidden" onMouseOver={() => setShowBar(false)}>
                                        <center>
                                            <img style={{ marginBottom: "8%", marginRight: "10%" }} width="25" height="25" src={search} alt="search--v1" />
                                        </center></button>
                                </div>}
                                {!showBar && <form onSubmit={handleSearch} autoComplete="off">
                                    <div className="search-bar animate-bar">
                                        <input type="text" style={{ marginTop: "0" }} className="search-input form-control" id="username" name="username" aria-describedby="email-help" placeholder="Search..." />
                                        <button className="search-button animate-bar" type="submit">
                                            <center>
                                                <img style={{ marginBottom: "8%", marginRight: "10%" }} width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                                            </center>
                                        </button>
                                    </div>
                                </form>}
                            </div>
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark animate-bar" aria-labelledby="dropdownMenuButton1">
                            <li><h6 className="dropdown-header">{localStorage.getItem('username')}</h6></li>
                            <li className="dropdown-item dropdown-link-item"><Link to="/user/profile" state={{ id: id }} className="link-item">Your profile</Link></li>
                            {localStorage.getItem('username') === getConfiguration().roleUsername ? <li className="dropdown-item dropdown-link-item"><Link to="/admin/beta" className="link-item">Control panel</Link></li> : null}
                            <li className="dropdown-item dropdown-link-item"><Link to="/user/account" className="link-item">Account</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item dropdown-link-item" onClick={logOut}><Link to="/" className="link-item">Sign Out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const exportedObject = {
    Header, HeaderLogged
}

export default exportedObject;