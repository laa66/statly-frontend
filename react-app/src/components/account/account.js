import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default Account;