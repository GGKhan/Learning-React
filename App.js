import React from "react";
import  ReactDOM from "react-dom/client";

// ReactElement is  => Object & then turned to => HTML Tag(render)

// const heading = React.createElement("h1", {id : "heading"},"I am Learning React 😃");
// console.log(heading);

//JSX - HTML Like / XML Like Syntax

const jsxHeading = <h1 id = "heading" className="head">I am Learning React JSX! 😃👍</h1>;
console.log(jsxHeading);

// React Functional Component

// const HeadingComponent1 = () => {
//     return <h1>I am coming from a component</h1>;
// }

const TitleComponent = () => <h1 id = "heading">I am Learning React JSX! 😃👍</h1>;

const HeadingComponent = () => (
    <div id = "parent">
        <TitleComponent/>  
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {jsxHeading}
        {4 * 4} 
        <h1 className="heading">I am coming from a component </h1>
    </div>

);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);