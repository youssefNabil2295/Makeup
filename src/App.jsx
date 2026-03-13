// src/App.jsx
import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home          from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
