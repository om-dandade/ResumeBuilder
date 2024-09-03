import React from "react";

export default function Resume({data, refs}){
    const {personal, contact, summary, skills, experience, education, languages} = data;

    return(
        <div className="resume">
            <div className="centeredText">
                {/* Title Section */}
                <h2 className="resumeTitle" ref={refs.personal}>{personal.name.value}</h2>
                <a className="contentText">{contact.address.value +" | "+ contact.phone.value +" | "+ contact.email.value}</a>
                
                <div className="separator"></div>

                {/* Summury */}
                <p className="contentText">{summary.value}</p>

                <div className="separator"></div>

                {/* Skills */}
                <h3>Skills</h3>
                <div ref={refs.skills}>
                    {skills.value.map((skill, index) => {
                        return <p key={index} className="contentText">{skill}</p>;
                    })}
                </div>

                <div className="separator"></div>

                {/* Experience */}
                <h3>Experience</h3>
                <div ref={refs.experience}>
                    {experience.value.map((exp, index) =>{
                        return(
                            <div key={index}>
                                <p>organisation: {exp.organisation}</p>
                                <p>role: {exp.role}</p>
                                <p>period: {exp.period}</p>
                                <p>location: {exp.location}</p>
                                <div>achivements: 
                                    {exp.achivements.map((achiv) =>{
                                        return <p key={achiv}>{achiv}</p>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="separator"></div>

                {/* Education  */}
                <h3>Education</h3>
                <div ref={refs.education}>
                    <p>{education.value.college}</p>
                    <p>{education.value.degree}</p>
                    <p>{education.value.completionBy}</p>
                    <p>{education.value.location}</p>
                    <p>{education.value.marks}</p>
                </div>

                <div className="separator"></div>

                {/* Languages */}
                <h3>Languages</h3>
                <div ref={refs.languages}>
                    {languages.value.map((language) =>{
                        return <p key={language.lang}>{language.lang + " : " + language.fluency}</p>
                    })}
                </div>
            </div>
        </div>
    )
}