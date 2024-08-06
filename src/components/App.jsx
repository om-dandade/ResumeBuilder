import '/src/style/app.css'
import DetailsSection from './DetailsSection.jsx'
import PreviewSection from './PreviewSection.jsx'
import Data from './Data.jsx'

function App() {
  const data = Data();
  return (
    <div className="app">
      <DetailsSection data={data}/>
      <PreviewSection data={data}/>
    </div>
  )
}

export default App
