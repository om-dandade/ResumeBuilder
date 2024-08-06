import { useState } from "react";

const useStateAsObject = (initialValue) => {
    const [value, setter] = useState(initialValue);
    return { value, setter };
};

export default function Data(){
    const data = {
        "personal": {
            "name": useStateAsObject("Om Dandade"),
            "gender": useStateAsObject("male"),
        },
        "contact": {
            "phone": useStateAsObject("+xx 8xxxxxxx09"),
            "email": useStateAsObject("youremail@gmail.com"),
        }
    };

    return data;
}