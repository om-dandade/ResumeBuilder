import { useState } from "react";
import getSectionComponent from './Forms'
import { capitalize } from "./utils";

//Generic Collapsable component with socket for custom form
export default function ColapcableForm({sectionName, sectionData, sectionRef}){
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () =>{
        if(isCollapsed && sectionRef.current){
            sectionRef.current.scrollIntoView({behavior: "smooth", block: "center"});
        }
        setIsCollapsed(!isCollapsed);
    }

    return(
        <>
            <div>
                <div className="collapseTitle" onClick={toggleCollapse}>
                    {capitalize(sectionName)}
                    <button className={`collapseButton ${(isCollapsed)? "" : "collapseButtonUp"}`}></button>
                </div>
                <div className="collapsedContent">
                    {!isCollapsed && getSectionComponent(sectionName, sectionData)}
                </div>
            </div>
            <div className="separator"></div>
        </>
    )
}