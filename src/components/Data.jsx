import { useState, useRef } from "react";

const useStateAsObject = (initialValue) => {
    const [value, setter] = useState(initialValue);
    return { value, setter };
};

const skillsList = [
    "• Frontend: React, HTML-CSS-JavaScript",
    "• Backend: Java 8 / Java EE, Spring Boot",
    "• DataBase: MySQL, MongoDB",
    "• Integration: MuleSoft",
    "• DevOps: AWS, Git, Jenkins, PowerShell, Bash",
    "• Other: C, C++, Python Django"
]

const experienceList = [
    {
        "organisation": "Capgemini",
        "role": "Sr Software Engineer",
        "period": "Aug 2022 - Present",
        "location": "Hyderabad, India",
        "achivements": [
            "• Worked with team on low-level design of in-house migration accelerator (Java and MySQL).",
            "• Developed several features of the application playing a key role in the development, which will help automate migration by up to 60%.",
            "• Used MuleSoft to Design, Develop, and Deploy multiple APIs enabling new features in Latin America regions for a telecom industry leader."
        ]
    },
]

const education = {
    "college": "Dr D Y Patil Institute of Engineering, Management and Research, Akurdi, Pune",
    "degree": "BE in Electronics and Telecommunication",
    "completionBy": "Aug 2022",
    "location": "Pune, India",
    "result": "CGPA: 8.87/10",
}

const languages = [
    {
        "lang": "English",
        "fluency": "Fluent"
    },
    {
        "lang": "Hindi",
        "fluency": "Native"
    },
    {
        "lang": "Marathi",
        "fluency": "Native"
    },
]

export default function Data(){
    const data = {
        "personal": {
            "name": useStateAsObject("Om Dandade"),
        },
        "contact": {
            "address": useStateAsObject("Pune, India"),
            "phone": useStateAsObject("+91 7757889324"),
            "email": useStateAsObject("dandadeom@gmail.com"),
        },
        "summary": useStateAsObject(
            `Versatile Full Stack Developer with expertise in Java, React, and integration technologies. 
            Also skilled in JavaScript and Python, demonstrating adaptability across various frameworks and platforms.`
        ),
        "skills": useStateAsObject(skillsList),
        "experience": useStateAsObject(experienceList),
        "education": useStateAsObject(education),
        "languages": useStateAsObject(languages),
    };

    return data;
}

function Refs(){
    const personalRef = useRef(null);
    const refs = {
        //personal contact summary skills experience education languages
        "personal": personalRef,
        "contact": personalRef,
        "summary": personalRef,
        "skills": useRef(null),
        "experience": useRef(null),
        "education": useRef(null),
        "languages": useRef(null),
    }

    return refs
}

export {Data, Refs};