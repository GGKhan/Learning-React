import React, { useEffect, useState } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import { RouterProvider, createBrowserRouter , Outlet } from "react-router-dom";
import { lazy , Suspense } from "react";
import userContext from "./utils/userContext";


const About = lazy(() => import("./components/About"))



const AppLayout = () => {

        const [userName , setUserName] = useState();
        //Authentication//
        useEffect(() => {
            const data = {
                name :" Khan",
            }
            setUserName(data.name)
        },[])



    return (
        <userContext.Provider value={ {loggedUser : userName , setUserName}}>
            <div className="app" >

            <Header/>

            <Outlet/>

            </div>
        </userContext.Provider>
        
    );
};

const appRouting = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense 

                fallback={<h1>...Loading</h1>}
                
                >
                <About/>
                </Suspense>
            },
            {
                path: "/contact",
                element: <ContactUs/>,
            },
            {
                path: "/restro/:resId",
                element: <RestroMenu/>
            },
        ],
        errorElement: <Error/>

        
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouting} />);