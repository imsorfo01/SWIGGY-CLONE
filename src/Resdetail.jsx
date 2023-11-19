import React from 'react';
// import { useEffect } from 'react';
import Fakepage from './Fakepage';
// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useResmenu from './utils/useResmenu';
import useOnlineStatus from './utils/useOnlineSatus';
import Menudetail from './Menudetail';

export default function Resdetail() {

  let onlineStatus = useOnlineStatus();
    // const [resInfo, setresInfo] = useState(null);
    // useEffect(() => {
    //   return () => {
    //     fetchmenu();
    //   };
    // }, []);
    
     const {resid} = useParams()
    //  console.log(resid);
    const resInfo = useResmenu(resid)
  



//   function
// let fetchmenu =async ()=>{
//     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.165283&lng=91.773698&restaurantId="+resid+"&catalog_qa=undefined");
//     const json = await data.json()
//     setresInfo(json.data)
//     // console.log(resInfo);
//     }
    if (resInfo===null) {
    return <Fakepage/>
}  

// console.log(resInfo.cards[0].card.card.info.name);
const {id,name,areaName,city,avgRating,cuisines,costForTwoMessage,sla,totalRatingsString}=resInfo?.cards[0]?.card?.card?.info
// console.log(resInfo);


if (!onlineStatus) {
  return <h1 className="offline">Looks Like You are offline !! <br /> <span className="Iconnection">Please Check Your Internet Connection</span></h1>
}

  return (
    <div>
      <h6 className='cityname'>Home/ {areaName} / {name}</h6>
        <div className="menuPage">
          <div className="menuPageLeft">
            <h3>{name}</h3>
            <p className="place">{cuisines.join(", ")} <br />{areaName} , {sla.lastMileTravelString}</p>
          </div>

          <div className="menuPageRight">
            <div className="starbtn"><span className="star">&#9733;</span> {avgRating}</div>
            <div className="starbtn2">{totalRatingsString}</div>
            
          </div>
        </div>
        <Menudetail key={id} category={resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards}/>
        {/* <ResDetailCategory category ={category} /> */}
        
    </div>
  );


}
