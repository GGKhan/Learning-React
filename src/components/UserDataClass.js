import React from "react";
// import { userContext } from "react";



class UserDataClass extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count : 0,
        };
    }

    render () {

        const {name , location} = this.props

        const {count} = this.state;


        return (
            <div className="p-4 m-4 w-80 border border-solid bg-orange-200 cursor-pointer  hover:bg-orange-300 rounded-lg ">
                <h3>Name :-{name}</h3>

                <h3> Designation :- Developer</h3>

                <h3>Location :-{location}</h3>

                <h3>Contact :- ggk@dev.com</h3>

                <h4>Count = {count}</h4>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Count Increase</button>

            {/* <div>
                <userContext.Consumer>
                    {({loggedUser}) => <h3>{loggedUser}</h3> }
                </userContext.Consumer>
            </div> */}
                
            </div>
        );
    }

            
}

export default UserDataClass;