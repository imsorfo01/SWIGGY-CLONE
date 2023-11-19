import React from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';
import { menuImageURL } from './constant';
import { useDispatch } from 'react-redux';
import { clearcart } from './utils/cartslice';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const dispatch = useDispatch();
  let clearCart=()=>{
    dispatch(clearcart())
  }

  const cartitem = useSelector((store)=>store.cart.items)
  // console.log(cartitem);
return cartitem==0?<EmptyCart/>:(
    <div>
      <button className='cartbtn' onClick={clearCart}>Clear Cart</button>
     {cartitem.map((e)=>
     <div className="cartitem" key={e.card.info.id}>
      <div className='cartitemleft'><h2>{e.card.info.name}</h2>
      <h3 className='pricetag'>₹ {e.card.info.price/100}</h3>
      <h6 className='menuDescription'>{e.card.info.description}</h6></div>
      <div className="cartitemright"><img className='menuImage' alt='menuimage' src={menuImageURL+e.card.info.imageId}></img></div>
     </div>
     )}
     
     
    </div>
  );
}
