import { useState } from "react";

const UserData = (props) => {
    const [count] = useState(0);
    return (
        <div className="p-4 m-4 w-80 border border-solid bg-orange-200 cursor-pointer  hover:bg-orange-300 rounded-lg ">
        
        <h3> Name :- {props.name} </h3>

        <h3> Designation :- UI-Dev </h3>

        <h3> Location :- {props.location} </h3>

        <h3> Contact :- GGKhan@.Com </h3>

        <h4> Count = {count}</h4>
        
        </div>
    )
}

export default UserData;