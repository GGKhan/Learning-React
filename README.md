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