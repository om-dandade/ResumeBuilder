import '/src/style/app.css'
import DetailsSection from './DetailsSection.jsx'
import PreviewSection from './PreviewSection.jsx'
import {Data, Refs} from './Data.jsx'

function App() {
  const data = Data();
  const refs = Refs();
  return (
    <div className="app">
      <DetailsSection data={data} refs={refs}/>
      <PreviewSection data={data} refs={refs}/>
    </div>
  )
}

export default App
