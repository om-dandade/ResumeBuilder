
//switch case to get the correct form from below based on sectionName
export default function getSectionComponent(sectionName, sectionData){
    switch(sectionName){
        case "personal": return <PersonalInfoForm sectionData={sectionData} />;
        case "contact": return <ContactForm sectionData={sectionData} />;
        case "summary": return <SummaryForm sectionData={sectionData} />;
        case "skills": return <SkillsForm sectionData={sectionData} />;
        case "experience": return <ExperienceForm sectionData={sectionData} />;
        case "education": return <EducationForm sectionData={sectionData} />;
        case "languages": return <LanguagesForm sectionData={sectionData} />;
    };

    return null;
}

//following are all diffrent forms avaialable

function PersonalInfoForm({sectionData}){
    return(
        <div>
            Name <input value={sectionData.name.value} onChange={(event) => sectionData.name.setter(event.target.value)}/>
        </div>
    );
}

function ContactForm({sectionData}){
    return(
        <div>
            <div>Address <input value={sectionData.address.value} onChange={(event) => sectionData.address.setter(event.target.value)}/></div>
            <div>Phone <input value={sectionData.phone.value} onChange={(event) => sectionData.phone.setter(event.target.value)}/></div>
            <div>Email <input value={sectionData.email.value} onChange={(event) => sectionData.email.setter(event.target.value)}/></div>
        </div>
    );
}

function SummaryForm({sectionData}){
    return(
        <div>
            <textarea className="threeLineInput" value={sectionData.value} onChange={(event) => sectionData.setter(event.target.value)}/>
        </div>
    )
}

function SkillsForm({sectionData}){
    function updateSkills(event, index){
        const newSkillList = [...sectionData.value];
        newSkillList[index] = event.target.value;
        sectionData.setter(newSkillList);
    }

    function deleteSkill(index){
        const newSkillList = [...sectionData.value];
        newSkillList.splice(index, 1);
        sectionData.setter(newSkillList);
    }

    function addNewSkill(){
        const newSkillList = [...sectionData.value];
        newSkillList.push("");
        sectionData.setter(newSkillList);
    }

    return(
        <div>
            {sectionData.value.map((skill, index) =>{
                return (
                    <div className="deletableFeild" key={index}>
                        <textarea className="twoLineInput" value={skill} onChange={(event) => updateSkills(event, index)} />
                        <button className="deleteButton" onClick={() => deleteSkill(index)}></button>
                    </div>
                )
            })}
            <button className="addNewButton" onClick={addNewSkill}>+ Add new</button>
        </div>
    );
}

function ExperienceForm({sectionData}){
    const updateOrganisation = (event, index, key) =>{
        const newExperienceList = [...sectionData.value];
        newExperienceList[index] = {...newExperienceList[index], [key] : event.target.value};
        sectionData.setter(newExperienceList);
    }
    const updateAchivement = (event, index, achivIndex) =>{
        const newExperienceList = [...sectionData.value];
        newExperienceList[index].achivements[achivIndex] = event.target.value;
        sectionData.setter(newExperienceList);
    }
    const addAchivement = (index) =>{
        const newExperienceList = [...sectionData.value];
        newExperienceList[index].achivements.push("");
        sectionData.setter(newExperienceList);
    }
    const deleteAchivement = (index, achivIndex) => {
        const newExperienceList = [...sectionData.value];
        newExperienceList[index].achivements.splice(achivIndex, 1);
        sectionData.setter(newExperienceList);
    }
    function addExperience(){
        const newExperienceList = [...sectionData.value];
        newExperienceList.push(
            {
                "organisation": "",
                "role": "",
                "period": "",
                "location": "",
                "achivements": [
                    "",
                ]
            }
        )
        sectionData.setter(newExperienceList);
    }
    function deleteExperience(index){
        if(confirm("Are you sure you want to delete whole experience?   ")){
            const newExperienceList = [...sectionData.value];
            newExperienceList.splice(index, 1);
            sectionData.setter(newExperienceList);
        }
    }

    return(
        <div>
            {sectionData.value.map((exp, index) =>{
                return (
                    <div key={index}>
                        <div className="deletableFeild">
                            Company: <input value={exp.organisation} onChange={(event) => updateOrganisation(event, index, "organisation")}/>
                            <button className="deleteButton" onClick={()=>deleteExperience(index)}></button>
                        </div>
                        Role: <input value={exp.role} onChange={(event) => updateOrganisation(event, index, "role")}/>
                        Period: <input value={exp.period} onChange={(event) => updateOrganisation(event, index, "period")}/>
                        Location: <input value={exp.location} onChange={(event) => updateOrganisation(event, index, "location")}/>
                        Achivements: <div>
                            {exp.achivements.map((achiv, achivIndex) =>{
                                return(
                                    <div className="deletableFeild">
                                        <input key={achivIndex} value={achiv} onChange={(event) => updateAchivement(event, index, achivIndex)}/>
                                        <button className="deleteButton" onClick={()=> deleteAchivement(index,achivIndex)} ></button>
                                    </div>
                                )
                            })}
                            <button className="addNewButton" onClick={() => addAchivement(index)}>+ New achivement</button>
                        </div>
                        <div className="separator"></div>
                    </div>
                )
            })}
            <button className="addNewButton" onClick={addExperience} >+ New experience</button>
        </div>
    )
}

function EducationForm({sectionData}){
    const updateCollege = (event)=>{
        const newEducationData = {...sectionData.value, "college": event.target.value};
        sectionData.setter(newEducationData);
    }
    const updateDegree = (event)=>{
        const newEducationData = {...sectionData.value, "degree": event.target.value};
        sectionData.setter(newEducationData);
    }
    const updateDate = (event)=>{
        const newEducationData = {...sectionData.value, "completionBy": event.target.value};
        sectionData.setter(newEducationData);
    }
    const updateLocation = (event)=>{
        const newEducationData = {...sectionData.value, "location": event.target.value};
        sectionData.setter(newEducationData);
    }
    const updateResult = (event)=>{
        const newEducationData = {...sectionData.value, "result": event.target.value};
        sectionData.setter(newEducationData);
    }

    return(
        <div>
            College/University: <textarea className="twoLineInput" value={sectionData.value.college} onChange={(event)=> updateCollege(event)} />
            Degree: <input value={sectionData.value.degree} onChange={(event)=> updateDegree(event)} />
            Completion By: <input value={sectionData.value.completionBy} onChange={(event)=> updateDate(event)} />
            Location: <input value={sectionData.value.location} onChange={(event)=> updateLocation(event)} />
            Result: <input value={sectionData.value.result} onChange={(event)=> updateResult(event)} />
        </div>
    )
}

function LanguagesForm({sectionData}){
    const updateLang = (event, index) =>{
        const newLang = {
            "lang": event.target.value,
            "fluency": sectionData.value[index].fluency,
        };
        const newLangData = [...sectionData.value];
        newLangData[index] = newLang;

        sectionData.setter(newLangData);
    }

    const updateFluency = (event, index)=>{
        const newLangData = [...sectionData.value];
        newLangData[index] = {...newLangData[index], "fluency": event.target.value};

        sectionData.setter(newLangData);
    }

    const deleteLang = (index) =>{
        const newLangData = [...sectionData.value];
        newLangData.splice(index, 1);

        sectionData.setter(newLangData);
    }

    const addNewLang = ()=>{
        const newLangData = [...sectionData.value];
        newLangData.push({
            "lang": "Language",
            "fluency": "Fluency"
        });

        sectionData.setter(newLangData)
    }
    
    return(
        <div>
                {sectionData.value.map((language, index) =>{
                    return(
                        <div className="deletableFeild" key={index}>
                            <input className="halfInput" value={language.lang} onChange={(event) => updateLang(event, index)} />
                            <input className="halfInput" value={language.fluency} onChange={(event) => updateFluency(event, index)}/>
                            <button className="deleteButton" onClick={()=> deleteLang(index)}></button>
                            <div className="separator"></div>
                        </div>
                    )
                })}
            <button className="addNewButton" onClick={()=>addNewLang()}>+ Add new</button>
        </div>
    )
}