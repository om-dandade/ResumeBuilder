import '../style/detailsSection.css'
import ToolBar from './ToolBar'
import  CollapsibleForm from './CollapsibleForm'

export default function DetailsSection({data, refs}){

    return(
        <div className="detailsSection">
            <ToolBar />
            {Object.keys(data).map((sectionName) => {
                return <CollapsibleForm key={sectionName} sectionName={sectionName} sectionData={data[sectionName]} sectionRef={refs[sectionName]}/>
            })}
        </div>
    )
}