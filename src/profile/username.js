import "./profile.css"

function Username({ username, role }) {
    if (role == "ADMIN") {
        return (
            <div className="d-flex mb-0">
                <h1 className="mb-0 ms-0 me-2">{`@${username}`}</h1>
                <p className="role mb-0">ADMIN</p>
            </div>
        );
    } else {
        return (
            <h1 className="mb-0 ms-0 me-2">{`@${username}`}</h1>
        );
    }
}

export default Username;