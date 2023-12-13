import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./profile.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ProfileStatus({ account, username }) {
    if (username) {
        return (
            <div>
                {account && (
                <div>
                    <h1>{account.username}</h1>
                </div>
                )}
            </div>
        );
    } else if (account) {
        return (
            <div>
                <div className="me-5">
                    {account && (
                    <div>
                        <h1>{account.username}</h1>
                        <p>
                        Email: {account.email}<br />
                        </p>
                    </div>
                    )}
                    <Link to={`/profile/edit_profile/${account.username}`}>
                        <button className="btn btn-secondary edit-data mt-0 ms-4">
                            Edit personal data
                        </button>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <h1>Anonymous User</h1>
        );
    }
}

function Profile() {
    const { username } = useParams();
    const [account, setAccount] = useState(null);
    const findUserByUsername = async (username) => {
        const user = await client.findUserByUsername(username);
        setAccount(user);
    };    
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    useEffect(() => {
        if (username) {
            findUserByUsername(username);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="profile mt-5 ms-5">
            <div className="d-flex mb-5">
                <FontAwesomeIcon icon={faUserCircle} className="profile-icon mb-5 ms-2 me-5"/>
                {<ProfileStatus
                    account={account}
                    username={username}
                />}
            </div>
        </div>
    )
}

export default Profile;