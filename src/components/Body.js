import RestoCard, {withOpenLable} from "./RestoCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetActive from "../utils/useNetActive";


const Body = () => {
const [listOfRestro,setListOfRestro] = useState([]);


const [searchList,setSearchList] = useState("");

const [filteredRestro , setfilteredRestro] = useState([]);

const RestroOpenCard = withOpenLable(RestoCard);


useEffect(()=>{
    fetchData();
} , [])

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    // console.log(json);

    //Optional Chaining
    setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


    const status = useNetActive();
    
    if(status === false)
        return (

            <h1>You're Offline - Make sure you have stable Internet Connection;</h1>
        );


    //Conditional Rendering => with Ternary Operator
    // if (listOfRestro.length === 0) {
    //     return 
    // }

    return listOfRestro.length === 0 ? <Shimmer />  : (
        <div className = "bg-[#f9f5ea] ">
            <div className = "flex">
                <div className="m-4 p-4" >
                    <input  type ="text" placeholder ="Search...                       🔎"
                    className=" p-2 border border-solid border-orange-400 rounded-full placeholder:text-black-300"
                    value={searchList}
                    onChange={(input) => 
                        {setSearchList(input.target.value)}
                    }
                    />

                    <button className=" ps-4 ms-4  text-white bg-orange-400 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={() => {
                            const filteredSearchList = listOfRestro.filter((res) => 
                            res.info.name.toLowerCase().includes(searchList.toLowerCase())
                            );
                            setfilteredRestro(filteredSearchList);
                        }}
                    >Search</button>
                </div>

                <div className="m-4 p-4">
                <button className=" ps-4 ms-4  text-white bg-orange-400 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" 
                    onClick={() => {
                        const filterList = listOfRestro.filter(
                            (res) => res.info.avgRatingString >  4.1
                        );
                        console.log(filterList)
                        setfilteredRestro(filterList);
                }}
                >Top Rated Restro</button>
                </div>
                
            </div>
             <div className = "flex flex-wrap ">
             {filteredRestro.map( (restro) => (
                <Link 
                    key =  {restro.info.id} 
                    to=  {"/restro/" + restro.info.id}
    
                >
                    {restro.info.veg ? (
                        <RestroOpenCard resData = {restro} /> 
                    ) : (    
                    <RestoCard resData = {restro}/>
                )}
                </Link>
               
                ))}
             </div>
        </div>
    );
};

export default Body;