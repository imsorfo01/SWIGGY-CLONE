import MenuItems from "./MenuItems";
import { useState } from "react";


const ResDetailCategory = (props) => {
  const [showMenu, setshowMenu] = useState(false);

  const toggle=()=>{
    setshowMenu(!showMenu)
  }

  return (
    <div>
      <div className="menubox" onClick={toggle}>
        <div className="menuHeader">
          <h4>
            {props.data.title} ({props.data.itemCards.length})
          </h4>
          <h4>⬇</h4>
        </div>
      </div>
      {/* {showMenu && <MenuItems data={props?.data?.itemCards}/>} */}
      {showMenu?<MenuItems data={props?.data?.itemCards} />:!showMenu}
      

    </div>
  );
};
export default ResDetailCategory;
