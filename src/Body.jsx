import Cartlist,{PromotionResList} from "./Cartlist.jsx";
import { useState,useEffect } from "react";
import { FetchURL } from "./constant.js"
import Fakepage from "./Fakepage.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineSatus.jsx";


const Body = () => {

  const Promotedlist = PromotionResList(Cartlist)
  const onlineStatus = useOnlineStatus();
  const [offer, setoffer] = useState([]);
  const [delTym, setdelTym] = useState([]);
    const [searchView, setsearchView] = useState([]);
    const [input, setinput] = useState("");
    const [rateList, setrateList] = useState([]);
   
    const [item, setitem] = useState([]);
    // console.log(item.info.avgRating);
  useEffect(() => {
    fetchData()
    // console.log(fetchData());
  },[]);


//   functions
let offerfn = ()=>{
  let offerlist = offer.filter((e)=>e.info.feeDetails.fees[0].fee<3000)
  setitem(offerlist)
}
let aboveRating4 =()=>{
  let aboveRating4List = rateList.filter((e)=>e.info.avgRating>4)
  setitem(aboveRating4List)
}

let search=()=>{
   const searchlist= searchView.filter((e)=>e.info.name.toLowerCase().includes(input.toLocaleLowerCase()))
console.log(searchlist);
if (searchView.length==0) {
  setitem(item)
}else{
  setitem(searchlist)
}
    return setinput("")
} 
let delivery =()=>{
  const delList = delTym.filter((e)=>e.info.sla.deliveryTime<30)
  setitem(delList)
}

  const fetchData=async()=>{
      const data = await fetch(FetchURL);
         const datalist = await data.json();
        //  console.log(datalist);
       setitem(datalist.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
       setsearchView(datalist.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
       setdelTym(datalist.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
       setrateList(datalist.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
       setoffer(datalist.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
       
  }


if (!onlineStatus) {
  return <h1 className="offline">Looks Like You are offline !! <br /> <span className="Iconnection">Please Check Your Internet Connection</span></h1>
}

return item.length === 0?(<Fakepage/>): (
  
    <div className="body">
      <div className="filterlist">
        <div><button className="filterbtn" onClick={delivery}>Fast Delivery</button></div>
        <div><button className="filterbtn">New on Swiggy</button></div>
        <div><button className="filterbtn" onClick={aboveRating4}>Rting 4.0</button></div>
        <div><button className="filterbtn" onClick={offerfn}>Offers</button></div>
        <div><button className="filterbtn">Rs.300- Rs.600 </button></div>
        <div><button className="filterbtn">Less Than Rs.300</button></div>
      </div>
      <div className="search">
        <input
          className="input"
          type="text"
          name="input"
          value={input}
          placeholder="Search Item" onChange={(e)=>{
            return setinput(e.target.value)
          }}
          
        />
        <button className="searchicon" onClick={search}>Search</button>
      </div>
      <div className="filter">
        <h3 className="result"></h3>
        
      </div>
      <div className="cart">
      <div className="cartItem">
           {item.map((res)=>{
            // console.log(res.info.feeDetails.restaurantId);
            return <Link to={"/restaurant/"+res.info.feeDetails.restaurantId} key={res.info.feeDetails.restaurantId}>
              {res.info.avgRating>4.2?<Promotedlist productData= {res}/>:<Cartlist  productData= {res} />}
             </Link>
        })}
    </div>
      </div>
    </div>
  )

  
};
export default Body