function Favorites({ favGame }) {
    const num = 0;
    if (favGame) {
        num = favGame.length;
    }
    return (
        <div className="ms-2">
            <h4>{`Favorites (${num})`}</h4>
            {favGame && (
                <h1>{favGame.length}</h1>
            )}
        </div>
    );
}

export default Favorites;