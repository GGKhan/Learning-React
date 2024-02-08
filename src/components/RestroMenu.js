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
        <div className=" p-4 m-4 w-2/4 h-Auto border border-solid  hover:bg-orange-50 rounded-lg shadow-[5px_5px_0px_0px_rgba(254,215,170)]" >

            <h1 className=" font-bold">{name}</h1> 

            <h2 className="justify-content-center font-semibold">{cuisines.join(' , ')}</h2>

            <h2 className="font-medium">{costForTwoMessage}</h2>

            <h3>Menu</h3>

            <ul className=" justify-evenly from-neutral-700 list-outside ...">
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