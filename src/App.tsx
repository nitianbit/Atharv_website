import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs'
import OccupationalHealthCentres from './components/OccupationalHealthCentres/OccupationalHealthCentres'
import HomeHealthcare from './components/HomeHealthcare/HomeHealthcare'
import Pharmacy from './components/Pharmacy/Pharmacy'
import MobileMedicalUnit from './components/MobileMedicalUnit/MobileMedicalUnit'
import Gallery from './components/Gallery/Gallery'
// import MMU from './components/MMU/MMU'
import Blogs from './components/Blogs/Blogs'
import BlogDetails from './components/BlogDetail.tsx/BlogDetails'
import CSR from './components/CSR/CSR'
import Contact from './components/ContactUS/Contact'
import NewBlogForm from './components/NewBlogs'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/occupational-health-centres" element={<OccupationalHealthCentres />} />
        <Route path="/home-healthcare" element={<HomeHealthcare />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/mobile-medical-units" element={<MobileMedicalUnit />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/mmu" element={<MMU />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail/:id" element={<BlogDetails />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-blog" element={<NewBlogForm />} />

      </Routes>
    </>
  )
}

export default App
