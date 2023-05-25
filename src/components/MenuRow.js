import MenuCard from "./MenuCard";

function MenuRow({ menuInfo, setClickedMenu }) {
  return (
    <div className="menu-container-row">
      {menuInfo.map((m, index) => {
        return (
          <MenuCard 
            menuInfoEach={m} 
            setClickedMenu={setClickedMenu}
            cardOrder={index}>
          </MenuCard>
        )
      })}
    </div>
  );
}

export default MenuRow;