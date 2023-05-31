import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

function Callback() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        if (localStorage.getItem('username') === null && localStorage.getItem('imageUrl') === null) {
            if (params.has('ext')) {
                let url = params.get('url').split('profilepic/?asid=')[1];
                localStorage.setItem('imageUrl', 'https://graph.facebook.com/' + url + '/picture')
            } else localStorage.setItem('imageUrl', params.get('url'));
            
            localStorage.setItem('username', params.get('name'));
            localStorage.setItem('userLogged', true);
        }
    });

    return(
        <div>
            <Navigate to="/dashboard"/>
        </div>
    );
}

export default Callback;