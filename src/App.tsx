import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs'
import OccupationalHealthCentres from './components/OccupationalHealthCentres/OccupationalHealthCentres'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/occupational-health-centres" element={<OccupationalHealthCentres />} />
      </Routes>
    </>
  )
}

export default App
