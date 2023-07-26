import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchCurrentUser } from "../profile/fetchCurrentUser";

function Callback() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('jwt') === null) {
            var token = params.get('jwt');
            sessionStorage.setItem('jwt', token);
        }
        fetchCurrentUser().then((data) => {
            sessionStorage.setItem('userLogged', true);
            sessionStorage.setItem('userId', data.id);
            sessionStorage.setItem('username', data.display_name);
            sessionStorage.setItem('imageUrl', data.images[0].url)
        }).then(() => navigate('/track/top', { state: {item: 'track'}}));
        //eslint-disable-next-line
    }, []);

    return(
        <div/>
    );
}

export default Callback;