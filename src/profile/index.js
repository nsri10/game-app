import NavigationBar from "../nav";

import "./profile.css";

function Profile() {
    return (
        <div className="d-flex profile-page">
            <NavigationBar />
            <div>
                <input type="text" className="search-bar mt-3 ms-3" placeholder="Search for Games"/>

            </div>
        </div>
    )
}

export default Profile;