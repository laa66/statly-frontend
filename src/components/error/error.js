import './error.css';

function Error(status) {
    return (
        <div className="container error-section">
        <p>Ooops...</p>
        <p>Error! Status code: {status['code']}</p>
        <p>Try again.</p>
        </div>
    )
}

export default Error;