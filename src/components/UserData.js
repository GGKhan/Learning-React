import { useState } from "react";

const UserData = (props) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
        
        <h3> Name :- {props.name} </h3>

        <h3> Designation :- UI-Dev </h3>

        <h3> Location :- {props.location} </h3>

        <h3> Contact :- GGKhan@.Com </h3>

        <h4> Count = {count}</h4>
        
        </div>
    )
}

export default UserData;