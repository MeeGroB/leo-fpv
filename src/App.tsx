import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Equipment from './components/Equipment';
import Contact from './components/Contact';
import ServiceDetail from './pages/ServiceDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "+51991012958";
  const whatsappMessage = encodeURIComponent("Hola leo, me interesa contratar tus servicioes de grabaciones FPV. Podemos hablar?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  }

  return (
    <main className='min-h-screen bg-black text-white'>
      <nav className='fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-emerald-500/20'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <a href="/" className='text-2xl font-bold bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent uppercase'>Leo FPV</a>

          <div className='hidden md:flex space-x-8'>
            <a href="/#inicio" className='hover:text-emerald-400 transition-colors'>Inicio</a>

            <a href="/#sobre-mi" className='hover:text-emerald-400 transition-colors'>Sobre Mi</a>

            <a href="/#servicios" className='hover:text-emerald-400 transition-colors'>Servicios</a>

            <a href="/#portafolio" className='hover:text-emerald-400 transition-colors'>Portafolio</a>

            <a href="/#equipo" className='hover:text-emerald-400 transition-colors'>Equipo</a>

            <a href="/#contacto" className='hover:text-emerald-400 transition-colors'>Contacto</a>
          </div>

          <button
            onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-emerald-400 hover:text-emerald-300 transition-colors'
          >
            {mobileMenuOpen? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className='md:hidden bg-black/95 border-b border-emerald-500/20'>
            <div className='px-6 py-4 flex flex-col min-h-screen gap-8 space-y-4 text-center text-xl'>
              <a href="/#inicio" onClick={handleNavClick} className='hover:text-emerald-400 transition-colors' >Inicio</a>
              <a href="/#sobre-mi" onClick={handleNavClick} className='hover:text-emerald-400 transition-colors' >Sobre Mi</a>
              <a href="/#servicios" onClick={handleNavClick} className='hover:text-emerald-400 transition-colors' >Servicios</a>
              <a href="/#portafolio" onClick={handleNavClick} className='hover:text-emerald-400 transition-colors' >Portafolio</a>
              <a href="/#equipo" onClick={handleNavClick} className='hover:text-emerald-400 transition-colors' >Equipo</a>
              <a href="/#contacto" onClick={handleNavClick} className='hover:text-emerald-400 transition-colors' >Contacto</a>
            </div>
          </div>
        )}
      </nav>

      <a 
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 z-50 bg-linear-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse hover:animate-none'
        aria-label='Contactar por WhatsApp'
      >
        <MessageCircle className='w-7 h-7' />
      </a>

      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Equipment />
            <Contact />
          </>
        }/>
        <Route path='/servicio/:id' element={<ServiceDetail />} />
      </Routes>

      <footer className='bg-black border-t border-emerald-500/20 py-8'>
        <div className='max-w-7xl mx-auto px-6 text-center text-gray-400'>
          <p>&copy; 2025 Leo FPV - Grabaciones Aéreas Profesionales con Drones FPV</p>
          <p className='mt-2'>Hecho por {""}
            <a 
              href="https://pierchavez.netlify.app/"
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:text-blue-500 transition-colors duration-300'
            >Pier Chávez Monteblanco</a>
          </p>
        </div>
      </footer>
      <SpeedInsights />
    </main>
  )
}

export default App
