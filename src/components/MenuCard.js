
function MenuCard({ menuInfoEach }) {
    return (
        <div className="menu-card">
            <div className="menu-img">
                <img src={"./img/" + menuInfoEach.imgName}/>
            </div>
            <div class="menu-text">
                <h4>{menuInfoEach.menuName}</h4>
                <h4>{menuInfoEach.price}</h4>
            </div>
        </div>
    );
}

export default MenuCard;