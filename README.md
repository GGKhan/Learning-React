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

# 24-01-2024 #
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.
## Use - Effect ##
It works after Rendering the Component.
In summary, useState is used to manage state within a component, allowing you to store and update data. useEffect is used to perform side effects in a component, such as updating the document title, fetching data, or subscribing to events.

Load => Render => API Call => Render

# Shimmer - UI #
It is an Fake UI which is shown before the API Fetch Data & Renders it.. its just like a loder while displaying the dat.. as per latest UI Practice. Also Called Conditional Rendering

## 25th , 26th , 29th ##

## 30-01-2024 ##

# Routing #
* useeffect  :- useeffect(() => []);
It is called by importing from react & it has two arrguments , 1st is callBack function & Dependencies Array.
It will called after rendering every component.
Note-1:- when the dependency Array [] not present useeffect will call on every render
Note-2:- when the dependency Array [] is present useeffect will call on one render/Initial render (Just Once)
Note-3:- when the dependency Array [""] is present wth some Component , Button e.t.c useeffect will call on intal render aswell along wth the one render call of Array values renders every time.

* usestate  :- usestate ([])
Usestate should be called always insde a body or component function & it is used to create state variables insde the component.
Never use usestate with if() , else if() conditons... & for Loops & inside the functional components on the higher level.

## Routing ##
npm install react-router.dom
To develope a routes we have to create routing configuration
import createRouterBrowser , RouterProvider from react-router-dom
We can Give path accordingly,
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const appRouting = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>  
    },
* ChildRouting *
import { RouterProvider, createBrowserRouter , outlet } from "react-router-dom";
const appRouting = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
        ]
ChildRouting will wth outlet wll keep required components accordingly render
<div className="app" >

            <Header/>

            <Outlet/>
</div>

* RouterLink *
import { Link } from "react-router-dom";

There are two types of routing in web react
1) Client side routing <=>
2) Server side routing

# 31-01-2024 #

## Dynamic Routing ##

path: "/restro/:resId",
element: <RestroMenu/>

# 01-02-2024 #

## Classes ## 
A Class Based component will extends with React.Component along with render () method to run the piece of code

_Example_

import React from "react";

class UserClass extends React.Component {
    render(){
        return (
                    <div className = "container" > 
                    
                    <h1>Any Logic</h1> 
                    
                    </div>
        ); 
    }
}

export default UserClass;

# 01-02-2024 #

## Optimizing ## 

## Lazy Loading , Chunking , On Demand Loading , Dynamic Bundling , Code Splitting , dynamic import ##
Example :- 
<!-- import {LazyComponent} "./components/LazyComponent"; -->
import React, {lazy , Suspense} from "react";

const LazyComponent = lazy(() => import("./components/LazyComponent"))

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a <Suspense> boundary:

<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
 </Suspense>

 ## Custom Hooks ##


# 06-02-2024 # # 07-02-2024 #

 ## Tailwind Css ##  (PARCEL)
 npm install -D tailwindcss postcss
 npx tailwindcss init

 A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
 Tailwind Css can be used to style websites in the fastest and easiest way. Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

The beauty of this thing called tailwind is it doesn’t impose design specifications or how your site should look, you simply bring tiny components together to construct a user interface that is unique. What Tailwind simply does is take a ‘raw’ CSS file, process this CSS file over a configuration file, and produce an output.

## 08-02-2024 ##

# Higher Order Components # 
It is an function which takes the component & transforms it  & returns the components
it is an pure function hich means it will not chnage the stste of the component but 

# Controlled & Uncontrolled Components # 
Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.

Difference between Controlled and Uncontrolled Components
Controlled  Component
Uncontrolled Component
The component is under control of the component’s state.	Components are under the control of DOM.
These components are predictable as are controlled by the state of the component.	Are Uncontrolled because during the life cycle methods the data may loss
Internal state is not maintained	Internal state is maintained
It accepts the current value as props	We access the values using refs
Does not maintain its internal state.	Maintains its internal state.
Controlled by the parent component.	Controlled by the DOM itself.
Have better control on the form data and values	Has very limited control over form values and data

# Lifting The State Up # 

Lifting state up is a common pattern that react developers use to share state between multiple components. This process involves moving the state management from child components to a common ancestor (parent component). This way, the state becomes the "source of truth" for child components, and they can access and update it through props.

Lifting state up is a technique used in React to share state between multiple components. Instead of each component having its own local state, the state is lifted up to their closest common ancestor. This common ancestor then passes the state down to the components through props. This allows the components to stay in sync and reflect the same data.

# Props Drilling #
Prop drilling is the process of passing down data or state through multiple layers of a component hierarchy. By the way, it refers to the practice of passing data from a parent component to its children and then from the children to their own children and so on, until the data reaches the desired component that needs it..

Prop drilling can be a necessary and effective way to manage application state, it can also become a problem when the hierarchy of components becomes too deep or complex. This can lead to several issues. Let's say, code duplication, increased cognitive load and decreased maintainability..

# useContext #
# Provider #







