// import { useState } from "react";
import RestroItemsList from "./RestroItemsList";

const RestroCategories = ({data , showItems , setShowIndex})   => {
    // const [showItems , setShowItems] = useState(false);

    const  handleEvent = () => {
        //setShowItems(!showItems);//
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 shadow-lg p-4 rounded-xl bg-white">
                <div className="justify-between flex cursor-pointer" onClick={handleEvent} > {/*Accordian*/}
                   <span className="font-semibold">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </div>
                 {showItems && <RestroItemsList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestroCategories;