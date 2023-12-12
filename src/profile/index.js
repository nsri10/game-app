import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./profile.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ProfileStatus({ account, id, isLoggedIn }) {
    console.log(isLoggedIn);
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
    const isLoggedIn = account != null;
    return (
        <div className="profile mt-5 ms-5">
            <div className="d-flex mb-5">
                <FontAwesomeIcon icon={faUserCircle} className="profile-icon mb-3 me-3"/>
                <ProfileStatus
                    account={account}
                    id={id}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </div>
    )
}

export default Profile;