import React from "react";

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
            <div className="user-card">
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
            </div>
        );
    }
}

export default UserDataClass;