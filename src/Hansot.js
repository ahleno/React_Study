import Header from "./components/Header.js";
import SideBar from "./components/SideBar.js";
import MenuRow from "./components/MenuRow.js";

function Hansot() {
  return (
    <div>
      <Header></Header>
      <div className="content-container">
        <SideBar></SideBar>
        <div className="menu-container">
            <MenuRow></MenuRow>
        </div>
      </div>
    </div>
  );
}

export default Hansot;
