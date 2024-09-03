import { useState } from "react";
import getSectionComponent from './Forms'

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
        <div>
            {sectionName}
            <button onClick={toggleCollapse}>{isCollapsed? "expand": "collapse"}</button>
            {!isCollapsed && getSectionComponent(sectionName, sectionData)}
        </div>
    )
}