import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./profile.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

/*
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
                <div className="me-5">
                    {account && (
                    <div>
                        <h1>{account.username}</h1>
                        <p>
                        Email: {account.email}<br />
                        </p>
                    </div>
                    )}
                </div>
                <Link to={`/profile/edit_profile/${id}`}>
                    <button className="btn btn-secondary edit-data mt-3 ms-3">
                        Edit personal data
                    </button>
                </Link>
            </div>
        );
    } else {
        return (
            <h1>Anonymous User</h1>
        );
    }
}
*/

function Profile() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };    
    const fetchAccount = async () => {
    const account = await client.account();
        setAccount(account);
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="profile mt-5 ms-5">
            <div className="d-flex mb-5">
                <FontAwesomeIcon icon={faUserCircle} className="profile-icon mb-5 ms-2 me-5"/>
                <div className="me-5">
                    {account && (
                    <div>
                        <h1>{account.username}</h1>
                        <p>
                        Email: {account.email}<br />
                        </p>
                    </div>
                    )}
                </div>
                <Link to={`/profile/edit_profile/${id}`}>
                    <button className="btn btn-secondary edit-data mt-3 ms-3">
                        Edit personal data
                    </button>
                </Link>
                {/* <ProfileStatus
                    account={account}
                    id={id}
                    isLoggedIn={isLoggedIn}
                /> */}
            </div>
        </div>
    )
}

export default Profile;