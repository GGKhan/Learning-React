import UserData from "./UserData";
import UserDataClass from "./UserDataClass";


const About = () => {
    

    return (
        <div>
            <h1>About-Us</h1>
            <h2>All Data About Us</h2>
            <UserData name = {"Ghulam Ghouse Khan Via (Functional Component) "} location = {"Hyderabad via (Functional Component)"} />

            <UserDataClass name = {"Ghulam Ghouse Khan Via (Class Component) "} location = {"Hyderabad via (Class Component)"}/>
        </div>
        
    )
}

export default About