import { useState } from "react";

const useStateAsObject = (initialValue) => {
    const [value, setter] = useState(initialValue);
    return { value, setter };
};

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
        "skills": useStateAsObject(
            `• Java 8 / Java EE, Spring Boot
• React, HTML-CSS-JavaScript,
Webpack
• MySQL, MongoDB
• API Development, MuleSoft
(Integration Technology)
• AWS, Git, Jenkins
• PowerShell, Bash
• C, C++, Python Django`
        )
        
    };

    return data;
}