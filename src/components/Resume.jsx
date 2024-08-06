
export default function Resume({data}){
    return(
        <div className="resume">
            <h1>{data.personal.name.value}</h1>
            <a>{data.personal.gender.value}</a>
        </div>
    )
}