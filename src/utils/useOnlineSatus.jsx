 import { useState ,useEffect} from "react"



 const useOnlineStatus = ()=>{
    // set your hook
    const [onlineStatus, setonlineStatus]=useState(true);
    useEffect(() => {
        window.addEventListener("offline",()=>{
            setonlineStatus(false)
        } )
        window.addEventListener("online",()=>{
            setonlineStatus(true)
        } )
    }, []);
     
    // return status
    return onlineStatus;

 } 
 export default useOnlineStatus;