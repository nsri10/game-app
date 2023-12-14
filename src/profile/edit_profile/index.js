import * as client from "../../users/client";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../profile.css";
import "./edit.css";

function ProfileEditor() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [account, setAccount] = useState(null);
    const findUserByUsername = async (username) => {
        const user = await client.findUserByUsername(username);
        setAccount(user);
    }; 
    const save = async () => {
        await client.updateUser(account);
        navigate("/profile");
    };       
    useEffect(() => {
        findUserByUsername(username);
    }, []);
    return (
        <div className="profile mt-5 ms-5">
            {account && (
                <div>
                    <h2 className="mb-3">Edit profile and personal data for {account.username}</h2>
                    <label htmlFor="email" className="form-label mt-2">
                        Email
                    </label>
                    <input
                        className="form-control form-input mb-2"
                        value={account.email}
                        onChange={(e) => setAccount({ ...account,
                            email: e.target.value })}
                    />
                    <label htmlFor="pfp" className="form-label mt-2">
                        Profile Picture
                    </label>
                    <input
                        className="form-control form-input mb-2"
                        value={account.pfp}
                        onChange={(e) => setAccount({ ...account,
                            pfp: e.target.value })}
                    />
                    <label htmlFor="bio" className="form-label mt-2">
                        Bio
                    </label>
                    <textarea
                        className="form-control form-input mb-2"
                        value={account.bio}
                        onChange={(e) => setAccount({ ...account,
                            bio: e.target.value })}
                    />
                    <button onClick={save} className="btn btn-secondary mt-4">
                        Save
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProfileEditor;