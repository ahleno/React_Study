import MenuCard from "./MenuCard";

function MenuRow({ menuInfo }) {
  return (
    <div className="menu-container-row">
      {menuInfo.map((m) => {
        return (
          <MenuCard menuInfoEach={m}></MenuCard>
        )
      })}
    </div>
  );
}

export default MenuRow;