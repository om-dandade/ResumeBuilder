import '../style/previewSection.css'
import Resume from './Resume'

export default function PreviewSection({data}){
    return(
        <div className="previewSection">
            <div className='centeredText'>
                <h1>Resume Builder</h1>
            </div>
            <Resume data={data}/>
        </div>
    )
}
