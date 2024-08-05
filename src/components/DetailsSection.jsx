import '../style/detailsSection.css'
import ToolBar from './ToolBar'
import { ColapcableSection } from './InfoSections'

const infoSections = ["personalInfo", "experience", "skills", "education"];

export default function DetailsSection(){
    return(
        <div className="detailsSection">
            <ToolBar />
            {infoSections.map((section) => {
                return <ColapcableSection key={section} sectionName={section} />
            })}
        </div>
    )
}