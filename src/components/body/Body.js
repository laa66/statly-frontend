import HeaderState from '../header/header';

import '../wrapper/panel.css';
import Dashboard from '../dashboard/dashboard';
import Track from '../track/track';
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Analysis from "../analysis/analysis";
import History from "../history/history";
import Account from "../account/account";
import Callback from '../callback/callback';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import { Home } from '../home/home';
import Beta from '../beta/beta';
import Search from '../search/search';
import WrapperBody from '../wrapper/WrapperBody';

import { Route, Routes } from "react-router-dom";

import './slider.css';
import './body.css';
import PlaylistInsights from '../playlistInsight/playlistInsight';

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div className="home"><HeaderState.Header/><Home/></div>}/>
                <Route path="/callback" element={<div><HeaderState.Header/><Callback/></div>}/>
                <Route path="/dashboard" element={<PrivateRoute><WrapperBody component={<Dashboard/>}/></PrivateRoute>}/>
                <Route path="/track/top" element={<PrivateRoute><WrapperBody component={<Track/>}/></PrivateRoute>}/>
                <Route path="/artist/top" element={<PrivateRoute><WrapperBody component={<Artist/>}/></PrivateRoute>}/>
                <Route path="/user/history" element={<PrivateRoute><WrapperBody component={<History/>}/></PrivateRoute>}/>
                <Route path="/genre/top" element={<PrivateRoute><WrapperBody component={<Genre/>}/></PrivateRoute>}/>
                <Route path="/user/analysis" element={<PrivateRoute><WrapperBody component={<Analysis/>}/></PrivateRoute>}/>
                <Route path="/user/playlist" element={<PrivateRoute><WrapperBody component={<PlaylistInsights/>}/></PrivateRoute>}/>
                <Route path="/user/account" element={<PrivateRoute><HeaderState.HeaderLogged/><Account/></PrivateRoute>}/>
                <Route path="/user/search" element={<PrivateRoute><WrapperBody component={<Search/>}/></PrivateRoute>}/>
                <Route path="/user/profile" element={<PrivateRoute><WrapperBody withCallback={true}/></PrivateRoute>}/>
                <Route path="/admin/beta" element={<AdminRoute><HeaderState.HeaderLogged/><Beta/></AdminRoute>}/>
            </Routes>
        </div>
    );
}
export default Body;