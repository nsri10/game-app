import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ProfileStatus({ account, isLoggedIn }) {
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return (
            <div>
                {account && (
                <div>
                    <h1>Username</h1>
                    <p>
                        Email <br/>
                        Phone <br/>
                    </p>
                </div>
                )}
            </div>
        );
    } else {
        return (
            <h1>Log in to see profile</h1>
        );
    }
}

function Profile() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    useEffect(() => {
        fetchAccount();
    }, []);
    const isLoggedIn = account != null;
    return (
        <div className="d-flex profile mt-5 ms-5">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon mb-3"/>
            <ProfileStatus
                account={account}
                isLoggedIn={isLoggedIn}
            />
        </div>
    )
}

export default Profile;