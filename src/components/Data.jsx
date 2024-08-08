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
            "phone": useStateAsObject("+xx 8xxxxxxx09"),
            "email": useStateAsObject("youremail@gmail.com"),
        },
        "summary": useStateAsObject("To become one of the Best React Devs! \n Lats Go!"),
    };

    return data;
}