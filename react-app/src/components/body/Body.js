import HeaderState from '../header/header';

import '../panel/panel.css';
import Dashboard from '../dashboard/dashboard';
import Track from '../track/track';
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Mainstream from "../mainstream/mainstream";
import History from "../history/history";
import Account from "../account/account";
import Callback from '../callback/callback';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import { Home } from '../home/home';
import Beta from '../beta/beta';

import { Route, Routes } from "react-router-dom";

import './slider.css';
import './body.css';

function Body() {

    return (
        <div>
            <Routes>
                <Route index element={<div className="home"><HeaderState.Header/><Home/></div>}/>
                <Route path="/callback" element={<div><HeaderState.Header/><Callback/></div>}/>
                <Route path="/dashboard" element={<PrivateRoute><HeaderState.HeaderLogged/><Dashboard/></PrivateRoute>}/>
                <Route path="/track/top" element={<PrivateRoute><HeaderState.HeaderLogged/><Track/></PrivateRoute>}/>
                <Route path="/artist/top" element={<PrivateRoute><HeaderState.HeaderLogged/><Artist/></PrivateRoute>}/>
                <Route path="/user/history" element={<PrivateRoute><HeaderState.HeaderLogged/><History/></PrivateRoute>}/>
                <Route path="/genre/top" element={<PrivateRoute><HeaderState.HeaderLogged/><Genre/></PrivateRoute>}/>
                <Route path="/user/score" element={<PrivateRoute><HeaderState.HeaderLogged/><Mainstream/></PrivateRoute>}/>
                <Route path="/user/account" element={<PrivateRoute><HeaderState.HeaderLogged/><Account/></PrivateRoute>}/>
                <Route path="/admin/beta" element={<AdminRoute><HeaderState.HeaderLogged/><Beta/></AdminRoute>}/>
            </Routes>
        </div>
    );
}
export default Body;