
// Below is an idea to create Nested Elements in React along with Array of Children  \\

// const div =
//     React.createElement("div" , {id : "parent"}, 
//     React.createElement("div" , {id : "child"},
//     [
//      React.createElement("h1", {id: "heading"}, "I am Nested Element1 in React"),
//      React.createElement("h2", {id: "heading2"}, "I am Nested Element2 in React"),
//     ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);





const heading = React.createElement("h1", {id : "heading"} , "Hello , I am React!");

// console.log(heading); // It will Return an Object in React \\

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render is to wrap heading object from above  & convert to H1 Tag & display accordingly \\

root.render(heading);


