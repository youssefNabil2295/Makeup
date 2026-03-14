// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import WhatsAppFloat   from './components/WhatsAppFloat'
import Home            from './pages/Home'
import Booking         from './pages/Booking'
import ServiceGallery  from './pages/ServiceGallery'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                element={<Home />} />
<Route path="/booking"  element={<Booking />} />
          <Route path="/service/:slug"   element={<ServiceGallery />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}
