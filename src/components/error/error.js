import { AuthRequest } from '../request/apiUrl';
import './error.css';

function Error(status) {

    const refresh = () => {
        sessionStorage.clear();
        window.location.href = AuthRequest.Auth;
    }

    return (
        <div className="container error-section">
            <p>Ooops...</p>
            <p>Error! Status code: {status['code']}</p>
            <p>Refresh and try again.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={refresh} type="submit" className="button-link mt-3">Refresh</button>
            </div>
        </div>
    )
}

export default Error;