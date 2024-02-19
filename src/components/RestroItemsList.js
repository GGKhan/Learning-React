import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";


const RestroItemsList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatching Action
        dispatch(addItems(item))
        console.log(item);
    } ;

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} 
                    className="p-2 m-2  border-orange-200 border-b-2 text-left bg-zinc-50 rounded-md">
                    <div className="py-2">
                        <button className=" my-8 mx-20  rounded-t-lg absolute rounded-md bg-green-500 text-white"
                        //Dispatch Action
                        onClick={() => handleAddItem (item)}
                        >Add +</button>
                        <span className="font-medium">{item.card.info.name}</span>
                        <span className="p-1 m-1"> - ₹ 
                            {item.card.info.price ? 
                            item.card.info.price / 100 : 
                            item.card.info.defaultPrice / 100 }
                        </span>
                    </div>
                    <div>
                        <img src = {CDN_URL + item.card.info.imageId} className="w-1/6 rounded-md" /> 
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    );
}

export default RestroItemsList;
