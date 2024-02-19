import { useDispatch, useSelector } from "react-redux";
import RestroItemsList from "./RestroItemsList";
// import { UseDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    // Redux ToolKit
    // Mutate The State with Immer Behind the Scenes

    const cartItems  = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearEvent = () => {
        dispatch(clearCart ());
    };
    

    return <div className=" bg-[#f9f5ea] m-4 p-4 border-orange-200 border-b-2  w-auto h-Auto  hover:bg-orange-100 rounded-lg shadow-[5px_5px_0px_0px_rgba(254,215,170)]">
            <div className=" justify-self-center">
                <button className=" ps-4 ms-4  text-white bg-orange-400 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                onClick={handleClearEvent}
                >Clear Cart</button>
                {cartItems.length === 0 && <h1>Your Cart is Empty 💨 Add Items in your Cart 🛒</h1>}
                <h1 className="text-center font-bold">Cart-Items</h1>
            </div>
            
            <div className="p-4 w-6/12 m-auto">
                <RestroItemsList items={cartItems}/>
            </div>
    </div>;
    
   
};

export default Cart;