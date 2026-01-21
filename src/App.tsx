import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs'
import Gallery from './components/Gallery/Gallery'
import MMU from './components/MMU/MMU'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mmu" element={<MMU />} />
      </Routes>
    </>
  )
}

export default App
