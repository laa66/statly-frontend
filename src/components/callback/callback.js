import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Callback() {
    const params = new URLSearchParams(window.location.search)

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