import MenuCard from "./MenuCard";

function MenuRow({ menuInfo }) {
  return (
    <div className="menu-container-row">
      {menuInfo.map((m) => {
        <MenuCard menuInfoEach={m}></MenuCard>
      })}
    </div>
  );
}

export default MenuRow;