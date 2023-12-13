import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

<<<<<<< Updated upstream
=======
function ProfileStatus({ account, id, isLoggedIn }) {
    console.log(isLoggedIn);
    console.log(account);
    if (id) {
        return (
            <div>
                {account && (
                <div>
                    <h1>{account.username}</h1>
                </div>
                )}
            </div>
        );
    } else if (isLoggedIn) {
        return (
            <div>
                {account && (
                <div>
                    <h1>{account.username}</h1>
                    <p>
                        {account.email}<br/>
                        {account.dob}<br/>
                    </p>
                </div>
                )}
            </div>
        );
    } else {
        return (
            <h1>Anonymous User</h1>
        );
    }
}

>>>>>>> Stashed changes
function Profile() {
    // const [account, setAccount] = useState(null);
    // const navigate = useNavigate();
    // const fetchAccount = async () => {
    // const account = await client.account();
    //     setAccount(account);
    // };
    // useEffect(() => {
    //     fetchAccount();
    // }, []);
    return (
        <div className="d-flex">
            <div className="profile-text mt-5 ms-5">
                <FontAwesomeIcon icon={faUserCircle} className="profile-icon mb-3"/>
                <h1>Username</h1>
                <p>
                    Email <br/>
                    Phone <br/>
                </p>
            </div>
        </div>
    )
}

export default Profile;