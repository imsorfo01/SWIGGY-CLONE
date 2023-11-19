import React from 'react';
import { emptyCartImage } from './constant';
import {Link} from "react-router-dom"


export default function EmptyCart() {
  return (
    <div>
      <div className="emptycart">
         <img className='emptyCartImage' src={emptyCartImage} alt="empty cart" />
         <h1 className='cartitemtxt'>Cart is Empty ! <br /> Please Add item to Cart</h1>
        <Link to="/"> <div className="emptyButton">
            
            Go To Home
        
         </div></Link>
      </div>
    </div>
  );
}
