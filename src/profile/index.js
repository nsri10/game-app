import * as client from "../users/client";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ProfilePicture from "./picture";
import Username from "./username";
import About from "./about";
import Favorites from "./favorites";
import Following from "./following";
import "./profile.css";

function ConditionalProfile({ account }) {
    const navigate = useNavigate();
    if (account) {
        return (
            <div className="d-flex">
                {account && (
                <div>
                    <div className="d-flex mb-5">
                        <div className="d-flex">
                            {<ProfilePicture
                                pfp={account.pfp}
                            />}
                            <div>
                                <Username 
                                    username={account.username} 
                                    role={account.role}
                                />
                                <p className="mt-1">
                                    {account.email}<br />
                                </p>
                                <About bio={account.bio} />
                            </div>
                        </div>
                        <Link to={`/profile/edit_profile/${account.username}`}>
                            <button className="btn btn-secondary edit-data ms-4">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    <div className="d-flex">
                        <Favorites 
                            favGame={account.favGame}
                        />
                        <Following 
                            following={account.following}
                        />
                    </div>
                </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="ms-3">
                <h4 className="mb-0">You are not logged in.</h4>
                <button onClick={() => navigate("/signin")} className="btn btn-secondary edit-data mt-2">Go to signin page</button>
            </div>
        );
    }
}

function Profile() {
    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    useEffect(() => {
        fetchAccount();
    },);
    return (
        <div key="profile" className="profile mt-5 ms-5">
            <div className="d-flex mb-5">
                {<ConditionalProfile
                    account={account}
                />}
            </div>
        </div>
    )
}

export default Profile;