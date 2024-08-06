import '../style/previewSection.css'
import Resume from './Resume'

export default function PreviewSection({data}){
    return(
        <div className="previewSection">
            <h1>PreviewSection</h1>
            <Resume data={data}/>
        </div>
    )
}
