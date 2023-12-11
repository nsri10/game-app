import * as dao from "./dao.js";

let currentUser = null;
function UserRoutes(app) {
    const account = async (req, res) => {
        res.json(currentUser);
    };
    app.post("/api/users/account", account);
}
export default UserRoutes;