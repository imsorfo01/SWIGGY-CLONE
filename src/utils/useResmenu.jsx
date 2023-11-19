import { useState,useEffect } from "react";




const useResmenu =(resid)=>{
    //store data in a state variable 
     const [resInfo, setresInfo] = useState(null);

// run the fetchdata fn in use effect so that it runs every render 
useEffect(() => {
  fetchdata()
}, []);

    //fetch data
      let fetchdata = async()=>{
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.165283&lng=91.773698&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
        let json = await data.json()
        setresInfo(json.data)
    }
   

    //  return fetch data
    return resInfo
}
export default useResmenu;