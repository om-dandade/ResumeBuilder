import '../style/detailsSection.css'
import ToolBar from './ToolBar'
import { ColapcableSection } from './InfoSections'

export default function DetailsSection({data}){

    return(
        <div className="detailsSection">
            <ToolBar />
            {Object.keys(data).map((sectionName) => {
                return <ColapcableSection key={sectionName} sectionName={sectionName} sectionData={data[sectionName]} />
            })}
        </div>
    )
}