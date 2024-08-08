
export default function Resume({data}){
    const {personal, contact, summary} = data;
    return(
        <div className="resume">
            <div className="centeredText">
                {/* Title Section */}
                <h2 className="resumeTitle">{personal.name.value}</h2>
                <a className="contentText">{contact.address.value +" | "+ contact.phone.value +" | "+ contact.email.value}</a>
                
                <div className="separator"></div>

                {/* Summury */}
                <p className="contentText">{summary.value}</p>

                <div className="separator"></div>

                
            </div>
        </div>
    )
}