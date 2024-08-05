export {ColapcableSection}
import { useState } from "react";

const infoSections = {
    "personalInfo": <PersonalInfoForm />,
};


function ColapcableSection({sectionName}){
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () =>{
        setIsCollapsed(!isCollapsed);
    }
    return(
        <div>
            {sectionName}
            <button onClick={toggleCollapse}>{isCollapsed? "expand": "collapse"}</button>
            {!isCollapsed && infoSections[sectionName]}
        </div>
    )
}

function PersonalInfoForm(){
    const [name, setName] = useState("Om Dandade");
    const updateName = (event) =>{
    setName(event.target.value);

    console.log(name);
}
    return(
        <div>
            name <input value={name} onChange={(event) => updateName(event)}/>
        </div>
    )
}