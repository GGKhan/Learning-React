import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
    const {resData} = props;
    const {   
    name, 
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    sla: {deliveryTime}
    } = resData.info ;
    return (
           <div className = "p-4 m-4 max-w-60 bg-[#FAF9F6] hover:bg-orange-200 rounded-lg shadow-[5px_5px_0px_0px_rgba(251,146,60)]">
           <img alt="logo" className = "object-cover h-48 w-96  " src = 
           { 
            CDN_URL
            +
            cloudinaryImageId
           }/>
           <div className="max-w-60 h-44 overflow-hidden">
            <h2 className="font-bold">{name}</h2>
            <h5 className="justify-content-center font-normal">{cuisines.join(",")} ...more</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>Arrival time {deliveryTime} minutes</h5>
           </div>
          
       </div>
    );
};

export default RestoCard;