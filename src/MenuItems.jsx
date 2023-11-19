import React from "react";
import { menuImageURL } from "./constant";
import { addItem } from "./utils/cartslice";
import { useDispatch } from "react-redux";

export default function MenuItems(props) {
  // console.log(props);
  const dispatch = useDispatch()
  const handleCart=(item)=>{
    dispatch(addItem(item))

  }

  return (
    <div>
      {props.data.map((item) => (
        <div className="menu"  key={item.card.info.id}>
          <div className="menuLeft">
            <span  className="foodName"> {item.card.info.name} </span>
            <p className="description">{item.card.info.description}</p>
            <h4 className="price">₹ {item.card.info.defaultPrice/100||item.card.info.price/100}/-</h4>
          </div>
          <div className="menuRight">
            <img alt="menuimage"
              className="menuImage"
              src={menuImageURL + item.card.info.imageId}
            key={item.card.info.id}></img>
            <button className="Addbtn" onClick={()=>handleCart(item)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}
