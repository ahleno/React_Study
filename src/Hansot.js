import Header from "./components/Header.js";
import SideBar from "./components/SideBar";

function Hansot() {
  return (
    <div>
      <Header></Header>
      <div className="content-container">
        <SideBar></SideBar>
        <div className="menu-container">
          <div className="menu-container-row">
            <div className="menu-card">
              <div className="menu-img">
                <img src="./img/menu1.jpg" alt="1993 왕돈까스 도시락" />
              </div>
              <div class="menu-text">
                <h4>나시고랭 콤보</h4>
                <h4>6,800</h4>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-img">
                <img src="./img/menu2.jpg" alt="1993 왕돈까스 도시락" />
              </div>
              <div class="menu-text">
                <h4>나시고랭 콤보</h4>
                <h4>6,800</h4>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-img">
                <img src="./img/menu3.jpg" alt="1993 왕돈까스 도시락" />
              </div>
              <div class="menu-text">
                <h4>나시고랭 콤보</h4>
                <h4>6,800</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hansot;
