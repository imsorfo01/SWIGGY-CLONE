
const Cartlist = (props) => {
 const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla,aggregatedDiscountInfoV3

}=props?.productData.info
// console.log(sla);
//  sla contain delivery time 
// aggregatedDiscountInfoV3 contain header,subHeader


 return(
    
        <div className="cartlist">
      <div className="img">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="resImage" />
      </div>
     <div className="info">
        <h3>{name}</h3>
        <div className="rate">
          <div className="starsym"><h5>&#9734;</h5></div>
          <div><span className="ratenum">{avgRating}</span><span className="time">{sla.slaString}</span></div>
          
        </div>
        <h6 className="cuisines">{cuisines.join(", ")}</h6>
      </div>
   
  </div>
 )  
};

export const PromotionResList = (Cartlist)=>{
  
  return (props)=>{
    
    return(
      <div>
        <label className="label">Promoted</label>
        <Cartlist {...props}/>
      </div>
    )
  }
}


export default Cartlist