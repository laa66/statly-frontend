import './header.css';
import logo from '../../resources/logo.png';
import { Link } from 'react-router-dom';
import { logOut } from '../logOut/logOut';

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
    return (
        <div className="container header-logged">
                <div className="row">
                    <div className="col-sm">
                        <Link to="/dashboard" className="link-item">
                            <img src={logo} alt="logo" width="150px" height="49px"/>
                        </Link>
                    </div>
                    <div className="col-sm header-content">
                        Hello, {localStorage.getItem('username')}
                    </div>
                        <div className="col-sm">
                            <div class="dropdown">
                            <img className="user-image" src={localStorage.getItem('imageUrl')} alt="userImage" width={'40px'} height={'40px'} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"/>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                <li><h6 className="dropdown-header">{localStorage.getItem('username')}</h6></li>
                                <li className="dropdown-item"><Link to="/user/account" className="link-item">Account</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li className="dropdown-item" onClick={logOut}><Link to="/" className="link-item">Sign Out</Link></li>
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
    );
}

const exportedObject = {
    Header, HeaderLogged
}

export default exportedObject;