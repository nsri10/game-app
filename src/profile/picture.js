import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ProfilePicture({ pfp }) {
    if (pfp) {
        return (
            <img src={`/imgs/placeholders/${pfp}`} className="profile-picture me-3"/>
        );
    } else {
        return (
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon me-3"/>
        );
    }
}

export default ProfilePicture;