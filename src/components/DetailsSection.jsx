import '../style/detailsSection.css'
import {ToolBar, AboutPage} from './ToolBar'
import  CollapsibleForm from './CollapsibleForm'
import { useState } from 'react'

export default function DetailsSection({data, refs}){
    const [isAboutClosed, setAboutClosed] = useState(true);

    return(
        <div className="detailsSection">
            <ToolBar setAboutClosed={setAboutClosed}/>
            {Object.keys(data).map((sectionName) => {
                return <CollapsibleForm key={sectionName} sectionName={sectionName} sectionData={data[sectionName]} sectionRef={refs[sectionName]}/>
            })}
            <AboutPage isAboutClosed={isAboutClosed} setAboutClosed={setAboutClosed}/>
        </div>
    )
}