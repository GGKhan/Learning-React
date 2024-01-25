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
           <div className = "restocard">
           <img alt="logo" className = "restoimg" src = 
           { 
            CDN_URL
            +
            cloudinaryImageId
           }/>
          <h2>{name}</h2>
          <h5>{cuisines.join(",")} ...more</h5>
          <h5>{costForTwo}</h5>
          <h5>{avgRating} Stars</h5>
          <h5>Arrival time {deliveryTime} minutes</h5>
       </div>
    );
};

export default RestoCard;