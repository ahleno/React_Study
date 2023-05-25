import {Link} from "react-router-dom"

function MenuCard({ menuInfoEach, setClickedMenu, cardOrder }) {
    return (
        <Link to="/detail">
            <div className="menu-card"
                data-order={cardOrder}
                onClick={ (e) => {
                    const order = e.currentTarget.dataset.order;
                    console.log(order);
                    setClickedMenu(order);
                }}
            >
                <div className="menu-img">
                    <img src={"./img/" + menuInfoEach.imgName}/>
                </div>
                <div class="menu-text">
                    <h4>{menuInfoEach.menuName}</h4>
                    <h4>{menuInfoEach.price}</h4>
                </div>
            </div>
        </Link>
    );
}

export default MenuCard;