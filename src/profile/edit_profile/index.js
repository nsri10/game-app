import * as client from "../../users/client";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../profile.css";
import "./edit.css";

function ProfileEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    }; 
    const save = async () => {
        await client.updateUser(account);
        navigate("/profile");
    };       
    useEffect(() => {
        findUserById(id);
    }, []);
    return (
        <div className="profile mt-5 ms-5">
            {account && (
                <div>
                    <h2 className="mb-3">Edit personal data for {account.username}</h2>
                    <label htmlFor="email" className="form-label mt-2">
                        Email
                    </label>
                    <input
                        className="form-control form-input mb-2"
                        value={account.email}
                        onChange={(e) => setAccount({ ...account,
                            email: e.target.value })}
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