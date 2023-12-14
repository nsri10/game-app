import * as accountClient from "../users/client.js";

function FavBtn({ account, setAccount, gameID }) {
    const addFav = async () => {
        console.log(gameID);
        let updatedFavs = account.favGame;
        console.log(updatedFavs);
        if (updatedFavs.includes(gameID)) {
            return;
        }
        updatedFavs.push(gameID);

        let updatedUser = { ...account, favGame: updatedFavs };
        setAccount(updatedUser);
        accountClient.updateUser(updatedUser);
    }

    if (account) {
        return (<button style={{ marginRight: "25px" }} className="btn btn-primary gameButton"
            onClick={() => addFav()}>
            Favorite
        </button>);
    }
}
export default FavBtn;
