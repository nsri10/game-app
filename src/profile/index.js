import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./profile.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ProfilePicture({ pfp }) {
    if (pfp) {
        return (
            <img src={`/imgs/placeholders/${pfp}`} className="profile-picture ms-2 me-3"/>
        );
    } else {
        return (
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon ms-2 me-3"/>
        );
    }
}

function ProfileStatus({ account, username }) {
    if (username) {
        return (
            <div className="d-flex mb-5">
                {account && (
                <div className="d-flex">
                    {<ProfilePicture
                        pfp={account.pfp}
                    />}
                    <div>
                        <h1 className="mb-4">{`@${account.username}`}</h1>
                        <p className="mb-0 about-header">ABOUT ME</p>
                        <p className="mt-0">{account.bio}</p>
                    </div>
                </div>
                )}
            </div>
        );
    } else if (account) {
        return (
            <div className="d-flex mb-5">
                <div className="d-flex">
                    {account && (
                    <div className="d-flex">
                        {<ProfilePicture
                            pfp={"ying_pfp.jpeg"}
                        />}
                        <div>
                            <h1 className="mb-0">{`@${account.username}`}</h1>
                            <p className="mt-1">
                                {account.email}<br />
                            </p>
                            <p className="mb-0 about-header">ABOUT ME</p>
                            <p className="mt-0">{account.bio}</p>
                        </div>
                    </div>
                    )}
                    <Link to={`/profile/edit_profile/${account.username}`}>
                        <button className="btn btn-secondary edit-data ms-4">
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="d-flex">
                {<ProfilePicture
                        pfp={null}
                />}
                <h1>Anonymous User</h1>
            </div>
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
                {<ProfileStatus
                    account={account}
                    username={username}
                />}
            </div>
            <div>
                <h2>Favorite Games</h2>
            </div>
        </div>
    )
}

export default Profile;