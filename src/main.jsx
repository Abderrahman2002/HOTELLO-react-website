import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx' // Corrected casing to match the file name
import Footer from './components/footer.jsx' // Corrected casing to match the file name
import Hero from './components/Hero.jsx'
import About from './components/about.jsx'
import Book from './components/Book.jsx'
import Contact from './components/Contacts.jsx'
import Gallery from './components/Gallery.jsx'
import OurTeam from './components/OurTeam.jsx'
import Offers from './components/Offers.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About/ >
    <Book />
    <OurTeam/ >
    <Gallery/ >
    <Offers />
    <Contact/ >
    <Footer />
  </StrictMode>,
)
