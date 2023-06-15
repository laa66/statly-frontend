import './header.css';
import logo from '../../resources/logo.png';
import { Link } from 'react-router-dom';
import { logOut } from '../logOut/logOut';
import { getConfiguration } from '../../config';

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
                    <div className="col-sm-6 col-md-4 header-logo">
                        <Link to="/dashboard" className="link-item">
                            <img src={logo} alt="logo" width="150px" height="49px"/>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 header-content">
                        Hello, {localStorage.getItem('username')}
                    </div>
                        <div className="col-sm-12 col-md-4 header-account">
                            <div className="dropdown">
                            <img className="user-image" src={localStorage.getItem('imageUrl')} alt="userImage" width={'40px'} height={'40px'} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"/>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                <li><h6 className="dropdown-header">{localStorage.getItem('username')}</h6></li>
                                {localStorage.getItem('username') === getConfiguration().roleUsername ? <li className="dropdown-item dropdown-link-item"><Link to="/admin/beta" className="link-item">Control panel</Link></li> : null}
                                <li className="dropdown-item dropdown-link-item"><Link to="/user/account" className="link-item">Account</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li className="dropdown-item dropdown-link-item" onClick={logOut}><Link to="/" className="link-item">Sign Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid justify-content-center">
                    <nav className="navbar navbar-dark navbar-expand-md">
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </nav>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
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
                                <Link to="/user/analysis" className="link-item">Library analysis</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/history" className="link-item">Recently played</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-brand" style={{color:"#535353", marginLeft:"3%"}}> Hello, {localStorage.getItem('username')}</div>
                </div>
            </nav>
            </div>
    );
}

const exportedObject = {
    Header, HeaderLogged
}

export default exportedObject;