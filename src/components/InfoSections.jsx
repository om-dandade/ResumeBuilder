export {ColapcableSection}
import { useState } from "react";

//Generic Collapsable component with socket for custom form
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

//switch case to get the correct form from below based on sectionName
function getSectionComponent(sectionName, sectionData){
    switch(sectionName){
        case "personal": return <PersonalInfoForm sectionData={sectionData} />;
        case "contact": return <ContactForm sectionData={sectionData} />;
        case "summary": return <SummaryForm sectionData={sectionData} />;
        case "skills": return <SKillsForm sectionData={sectionData} />;
    }

    return null;
}

//following are all diffrent forms avaialable

function PersonalInfoForm({sectionData}){
    return(
        <div>
            name <input value={sectionData.name.value} onChange={(event) => sectionData.name.setter(event.target.value)}/>
        </div>
    )
}

function ContactForm({sectionData}){
    return(
        <div>
            <div>address <input value={sectionData.address.value} onChange={(event) => sectionData.address.setter(event.target.value)}/></div>
            <div>phone <input value={sectionData.phone.value} onChange={(event) => sectionData.phone.setter(event.target.value)}/></div>
            <div>email <input value={sectionData.email.value} onChange={(event) => sectionData.email.setter(event.target.value)}/></div>
        </div>
    )
}

function SummaryForm({sectionData}){
    return(
        <div>
            Profile Summary <input value={sectionData.value} onChange={(event) => sectionData.setter(event.target.value)}/>
        </div>
    )
}

function SKillsForm({sectionData}){
    return(
        <div>
            Sills <input value={sectionData.value} onChange={(event) => sectionData.setter(event.target.value)}/>
        </div>
    )
}