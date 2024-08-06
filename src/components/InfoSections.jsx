export {ColapcableSection}
import { useState } from "react";

function ColapcableSection({sectionName, sectionData}){
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () =>{
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
function getSectionComponent(sectionName, sectionData){
    switch(sectionName){
        case "personal": return <PersonalInfoForm sectionData={sectionData} />
    }

    return null;
}

function PersonalInfoForm({sectionData}){
    return(
        <div>
            name <input value={sectionData.name.value} onChange={(event) => sectionData.name.setter(event.target.value)}/>
        </div>
    )
}