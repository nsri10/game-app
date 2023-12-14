import * as client from "../../users/client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProfilePicture from "../picture";
import Username from "../username";
import About from "../about";
import Favorites from "../favorites";
import Following from "../following";
import "../profile.css";

function Follow({ username }) {  
    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    useEffect(() => {
        fetchAccount();
        console.log("logged in");
        console.log(account);
    }, []);
    const addToFollowing = () => {
        const addFollower = [...account.following];
        console.log(addFollower);
        addFollower.push(username);
        console.log(addFollower);
        setAccount({ ...account, following: addFollower })
    }
    const removeFromFollowing = () => {
        const followList = [...account.following];
        console.log(followList);
        const removeFollower = followList.filter(name => name !== username);
        console.log(removeFollower);
        setAccount({ ...account, following: removeFollower })
    }
    const follow = async () => {
        addToFollowing();
        await client.updateUser(account); // TODO
    };
    const unfollow = async () => {
        removeFromFollowing();
        await client.updateUser(account); // TODO
    };
    return (
        <div>
            {account && (
            <div>
                <button onClick={follow} className="btn btn-secondary edit-data ms-4">
                    Follow
                </button>
                <button onClick={unfollow} className="btn btn-secondary edit-data ms-2">
                    Unfollow
                </button>
            </div>
            )}
        </div>
    );
}

function OtherProfile() {
    const { username } = useParams();
    const [account, setAccount] = useState(null);
    const findUserByUsername = async (username) => {
        const user = await client.findUserByUsername(username);
        setAccount(user);
    };    
    useEffect(() => {
        findUserByUsername(username);
        console.log("displayed");
        console.log(account);
    }, []);
    return (
        <div className="profile mt-5 ms-5">
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
                                <About bio={account.bio} />
                            </div>
                        </div>
                        <Follow username={username} />
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
        </div>
    )
}

export default OtherProfile;