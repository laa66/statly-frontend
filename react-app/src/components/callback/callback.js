import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Callback() {
    const params = new URLSearchParams(window.location.search)

    useEffect(() => {
        if (localStorage.getItem('username') === null && localStorage.getItem('imageUrl') === null) {
            localStorage.setItem('username', params.get('name'));
            localStorage.setItem('imageUrl', params.get('url'));
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