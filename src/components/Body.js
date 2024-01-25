import RestoCard from "./RestoCard";
import resListObj from "../utils/mockData";
import { useState } from "react";


const Body = () => {
const [listOfRestro , setListOfRestro] = useState(resListObj)
    return(
        <div className = "body-container">
            <div className = "filter">
                <button className="filter-btn" 
                    onClick={() => {
                        const filterList = listOfRestro.filter(
                            (res) => res.info.avgRatingString >  4
                        );
                    setListOfRestro(filterList);
                }}
                >Top Rated Search</button>
            </div>
             <div className = "resto-container">
              {listOfRestro.map( (restro) => 
              <RestoCard key=  {restro.info.id} resData = {restro}/>)}
             </div>
        </div>
    );
};

export default Body;