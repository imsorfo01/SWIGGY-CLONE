import React from 'react';
import ResDetailCategory from './ResDetailCategory';

export default function Menudetail(props) {
  const {category}=props;
  // console.log(category);
  
  const categorylist = category.filter((e)=>e.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div >
     {categorylist.map((item,index)=><ResDetailCategory data = {item?.card?.card} key={index}/>)}
    </div>
  );
}
