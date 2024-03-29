import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useNetActive from "../utils/useNetActive";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => { 

    const [btnLoginBtn , setbtnLoginBtn] = useState("Login");

    const status = useNetActive();

    const {loggedUser} = useContext(userContext);

    // Subscribing to the store using Selector 

    const cartItems = useSelector((store) => store.cart.items);
    
    return (
            <div className = "flex justify-between bg-white shadow-lg mb-2 " >
                <div className = "logo-container">
                    <img className ="w-56" 
                        src = 
                        {LOGO_URL}
                    />
                </div>
             <div className = "flex items-center ">
                    <ul className="flex p-4 m-4 "> 
                        <li className="px-4">
                        <Link to= "/" className="font-medium text-orange-400 dark:text-orange-500 hover:underline">Home</Link>
                        </li>
                        <li className="px-4">
                        <Link to= "/about" className="font-medium text-orange-400 dark:text-orange-500 hover:underline">About Us</Link>
                        </li>
                        
                        <li className="px-4">
                        <Link to= "/contact" className="font-medium text-orange-400 dark:text-orange-500 hover:underline">Contact Us</Link>
                        </li>
                         
                        <li className="px-4 ">
                        <Link to= "/cart/" className="font-medium text-orange-400 dark:text-orange-500 hover:underline">Cart  ⇢ 🛒 {cartItems.length}</Link>
                        </li>
                        
                        <li className="px-4 font-medium text-orange-400 dark:text-orange-500 ">{status ? "🟢Online" : "🔴Offline"} </li>
                        <li className="mx-2">{loggedUser}</li>
                        <button className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"  
                        
                            onClick={() => 
                            {
                                btnLoginBtn === "Login"   
                                ? setbtnLoginBtn ("Logout")  
                                : setbtnLoginBtn ("Login");
                            }}
                        >{btnLoginBtn}  
                        </button>
                    </ul>     
                </div>
            
            </div>
        );
    };

export default Header;