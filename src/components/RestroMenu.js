import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";

const RestroMenu = () => {

    const [restroInfo , setRestroInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId)


    useEffect (() =>{
        fetchMenu("");
    },[]);

    const fetchMenu = async () => {
    const data = await fetch(
         Menu_URL +
        resId 
        );
   
    const jsData = await data.json();

    // console.log(jsData);

    setRestroInfo(jsData.data);
      };
      
      if( restroInfo === null ) return  <Shimmer/>

    const {name , 
        cuisines , 
        costForTwoMessage} = restroInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards,"abc");
   
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