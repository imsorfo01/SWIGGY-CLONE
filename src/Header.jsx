import LOGO_URL from  "./constant"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineSatus";
import { useSelector } from "react-redux";



const Header = () => {
  const cartItem = useSelector((store)=>{
    
    return store.cart.items
  })
  
  useEffect(() => {
    {onlineStatus? green():red()}
  });
  
  const onlineStatus = useOnlineStatus();
  let loginbtn = "Log In"
  let logoutbtn = "Log Out"
 const [login, setlogin] = useState(loginbtn);





//  function
let click =()=>{
  if (login == loginbtn){
    setlogin(logoutbtn)
  }else{
     setlogin(loginbtn)
  }
}
 let green =()=>{
  document.querySelector(".connection").style = "color: green";
 }
  let red =()=>{
  document.querySelector(".connection").style = "color: red";
 }

 

 
  

  return (
    
    <div>
      <div className="header">
      <div className="logo">
        <img alt="logo" src={LOGO_URL}/>
        <span className="webhead">Ziggy</span>
      </div>
      <div className="navItem">
        <ul>
          <li>Online Status : <span className="connection">{onlineStatus?"Connected":"Disconnected"}</span></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart({cartItem.length})</Link></li>
          <li><button className="login" onClick={click}>{login}</button></li>
        </ul>
      </div>
      
    </div>
    <div className="line"></div>
    </div>
    
  );
};
export default Header