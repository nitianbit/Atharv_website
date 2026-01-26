import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs'
import OccupationalHealthCentres from './components/OccupationalHealthCentres/OccupationalHealthCentres'
import MobileMedicalUnit from './components/MobileMedicalUnit/MobileMedicalUnit'
import Gallery from './components/Gallery/Gallery'
import MMU from './components/MMU/MMU'
import Blogs from './components/Blogs/Blogs'
import BlogDetails from './components/BlogDetail.tsx/BlogDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/occupational-health-centres" element={<OccupationalHealthCentres />} />
        <Route path="/mobile-medical-units" element={<MobileMedicalUnit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mmu" element={<MMU />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail/:id" element={<BlogDetails />} />
      </Routes>
    </>
  )
}

export default App
