import './error.css';

function Error(status) {
    return (
        <div className="container error-section">
        <p>Ooops...</p>
        <p>Error! Status code: {status['code']}</p>
        <p>Refresh and try again.</p>
        </div>
    )
}

export default Error;