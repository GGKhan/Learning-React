import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestro from "../utils/useRestro";
import RestroCategories from "./RestroCategories";
import { useState } from "react";

const RestroMenu = () => {

    const {resId} = useParams();

    const restroInfo = useRestro(resId);

    const [showIndex , setShowIndex ] = useState(null);
      
      if( restroInfo === null ) return  <Shimmer/>

    const {name , 
        cuisines , 
        costForTwoMessage} = restroInfo?.cards[0]?.card?.card?.info;

    // const {itemCards} = restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    
    const categories = 
    restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => 
         e.card.card["@type"] === 
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
     );
     return (
        <div className=" text-center p-4 m-4 w-auto h-Auto border border-solid  hover:bg-orange-50 rounded-lg shadow-[5px_5px_0px_0px_rgba(254,215,170)]" >

            <h1 className=" my-5 text-2xl font-bold">{name}</h1> 

            <h2 className=" text-xl font-semibold">{cuisines.join(' , ')}</h2>

            <h2 className="font-medium">{costForTwoMessage}</h2>

            {categories.map((category , index) => (
                // Controlled Component //
                <RestroCategories 
                key = {category?.card?.card.title} 
                data ={category?.card?.card}
                showItems={ index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export  default RestroMenu;
