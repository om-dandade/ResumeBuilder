import React from "react";

export default function Resume({data, refs}){
    const {personal, contact, summary, skills, experience, education, languages} = data;

    return(
        <div className="resume">
            {/* Title Section */}
            <h1 className="resumeTitle centeredText" ref={refs.personal}>{personal.name.value}</h1>

            {/* Contact and Summary */}
            <div className="centeredText contentText">
                <a>{contact.address.value +" | "+ contact.phone.value +" | "+ contact.email.value}</a>
                
                <div className="separator"></div>

                {/* Summury */}
                <p>{summary.value}</p>

                <div className="separator"></div>
            </div>

            {/* Resume Content Section */}
            <div className="resumeContent contentText">
                <div className="resumeLeft">
                    {/* Skills */}
                    <h2>Skills</h2>
                    <div ref={refs.skills}>
                        {skills.value.map((skill, index) => {
                            return <p key={index} className="contentText">{skill}</p>;
                        })}
                    </div>
                    
                    <div className="separator"></div>

                    {/* Education  */}
                    <h2>Education</h2>
                    <div ref={refs.education}>
                        <h4>{education.value.college}</h4>
                        <p>{education.value.degree}</p>
                        <p>{education.value.completionBy}</p>
                        <p>{education.value.location}</p>
                        <p>{education.value.marks}</p>
                    </div>

                    <div className="separator"></div>

                    {/* Languages */}
                    <h2>Languages</h2>
                    <div ref={refs.languages}>
                        {languages.value.map((language) =>{
                            return <p key={language.lang}>{language.lang + " : " + language.fluency}</p>
                        })}
                    </div>
                </div>
                <div className="resumeRight">
                    {/* Experience */}
                    <h2>Experience</h2>
                    <div ref={refs.experience}>
                        {experience.value.map((exp, index) =>{
                            return(
                                <div key={index}>
                                    <div className="companyName">
                                        <h3>{exp.organisation + " | "}</h3>
                                        <p>{exp.role}</p>
                                    </div>
                                    <p className="date">{exp.period + " | " + exp.location}</p>
                                    <div>achivements: 
                                        {exp.achivements.map((achiv) =>{
                                            return <p key={achiv}>{achiv}</p>
                                        })}
                                    </div>
                                    <div className="emptyLine"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}