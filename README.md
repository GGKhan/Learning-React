# React-Training #

# 17-01-2024

React - Basics
React is an library & it works independently on root file & on any existing app
CDN Link's - its an React Links to run
crossorigin - its an Link
React.createElement - It will create an HTML Element - Object
ReactDOM - It will create root element with document.getelementbyid
root.render - Render is to method wrap heading object from above & convert to H1 Tag & display accordingly

# 18-01-2024
npm init -Node Install
npm install -D parcel - WebPack Install

# Parcel
npx parcel index.html - 
Dev Build , # Dist Folder stores the compressed Build file #
Local Host Server , 
HMR-Hot Module Replacement , 
File Watching Algo - C++,
Cacheing -File,  # Parcel.Cache #
Image optimization,
Minification,
Bundling,
Compress,
consisitent Hasing,
code splitting,
Differential Bundling - to support older browsers.

npm install react - Install React
npm install DOM - Install DOM

# Browerlist 
it is an package to work our app older versions browers & customer/country specific accordingly


# Foundation Start #
*Adding Scripts to Run & Build package.json
*npm start / npm run start & npm build
# ReactElement is  => Object & then turned to => HTML Tag(render)

## JSX ##
# JSX => ReactCreateElement => ReactElement is  => Object & then turned to => HTML Tag(render)
JSX is transpilled before it reaches to the JS Engine & JS Engine understands ECMA Script.
Transpilation is done by parcel with Babel 
JSX while giving Attributes we have to use camelCase & if we are writing multiline code we need to wrap wit () Babel understands the Starting & ending of JSX

# React Component
1) Class Based Components - OLD
2) Functional Based Components - NEW
    Functional Components are rendered with syntax in root(<HeadingComponent />) & or in any other component
    {} with Curly braces we can insert any JavaScript code inside the Component of JSX & Elements too 
    
    const HeadingComponent = () => (
    <div id = "parent">
        <TitleComponent/>  // Display Component
        <TitleComponent></TitleComponent> // Display Component
        {TitleComponent()} // Calling Function
        {jsxHeading} // Display Element
        {4 * 4} // JS Code
        <h1 className="heading">I am coming from a component </h1>
    </div>

);

# 19-01-2024
## Learning Concepts With Project ##
# Foodies App ##
# PLANNING
* Header
=> LOGO
=> NAV Items
* Body
=> Search
=> Resto Container
=> Resto Card
* Footer
=> Copy Right
=> Links
=> Address
=> Contact

# 22-01-2024
## PROPS ##
It is used to passs the dynamic content to the components ; Passing an Argument to an function like pasing a prop to an component. its an object in react.
## Destructurring  ## ResData = {pistaObj}
Object destructuring is a feature in JavaScript that allows you to extract properties from objects and bind them to variables in a concise and readable way. It provides a convenient syntax for extracting values from objects and arrays.
const {   
    name, 
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    sla: {deliveryTime}
    } = resData.info ;

# 23-01-2024

## Props ##
"props" stands for "properties," and it refers to the mechanism for passing data from a parent component to a child component. Props are a way for components to communicate with each other by passing information down the component tree. They allow you to configure a child component with specific data or behavior.
## Map() ##
it is used to itirate the elements.
<div className = "resto-container">
              {resListObj.map( (restro) => 
              
              <RestoCard key=  {restro.info.id} resData = {restro}/>)}
</div>

## key properties ##
note: - Alway's mention key's in loops.. key =  {restro.info.id} key's with id's for Data because it will stop rendering complete data instead of new data. its an optimization technique's to avoide warning...(Never Use (Index) as key's recommended but data with no id's use unique (key) or last use index..)

# 24-01-2024

* File's / Components seperation is the best practice.
## Export & Import ##
Two types
1) Default is used for single files
2) export with Named is used for the multi files import with {} braces
## Hook's ##
React Hook is an normal JavaScript Function & it gives some inbuilt utlities
Important Hook's
1) Use-State
2) Use-Effect
when ever the state variable updates React Re-renders the component