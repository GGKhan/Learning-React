import RestoCard from "./RestoCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
const [listOfRestro,setListOfRestro] = useState([]);

const [searchList,setSearchList] = useState("");

const [filteredRestro , setfilteredRestro] = useState([]);

useEffect(()=>{
    fetchData();
} , [])

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    

    console.log(json);
    //Optional Chaining
    setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
    //Conditional Rendering => with Ternary Operator
    // if (listOfRestro.length === 0) {
    //     return 
    // }

    return listOfRestro.length === 0 ? <Shimmer />  : (
        <div className = "body-container">
            <div className = "filter">
                <div className="search">
                    <input type="text" 
                    className="search-bar"
                    value={searchList}
                    onChange={(input) => 
                        {setSearchList(input.target.value)}
                    }
                    ></input>

                    <button className="search-btn"
                        onClick={() => {
                            const filteredSearchList = listOfRestro.filter((res) => 
                            res.info.name.toLowerCase().includes(searchList.toLowerCase())
                            );
                            setfilteredRestro(filteredSearchList);
                        }}
                    >Search</button>
                </div>
                <button className="filter-btn" 
                    onClick={() => {
                        const filterList = listOfRestro.filter(
                            (res) => res.info.avgRatingString >  4.1
                        );
                        console.log(filterList)
                        setfilteredRestro(filterList);
                }}
                >Top Rated Restro</button>
            </div>
             <div className = "resto-container">
              {filteredRestro.map( (restro) => 
              <RestoCard key =  {restro.info.id} resData = {restro}/>)}
             </div>
        </div>
    );
};

export default Body;