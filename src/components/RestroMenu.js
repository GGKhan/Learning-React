import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestro from "../utils/useRestro";

const RestroMenu = () => {

    const {resId} = useParams();

    const restroInfo = useRestro(resId);
      
      if( restroInfo === null ) return  <Shimmer/>

    const {name , 
        cuisines , 
        costForTwoMessage} = restroInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   
    console.log(itemCards);
    
     return (
        <div className="restro-menu" >

            <h1>{name}</h1> 

            <h2>{cuisines.join(' , ')}</h2>

            <h2>{costForTwoMessage}</h2>

            <h3>Menu</h3>

            <ul>
                {itemCards.map((card) => (

                    <li key={card.card.info.id}>
                        {card.card.info.name} , Rs:- 
                        {card.card.info.price/100}</li>
                ))}

            </ul>
        </div>
    );
};

export  default RestroMenu;