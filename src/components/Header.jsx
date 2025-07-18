import React, { useState } from 'react';
import logo from '/assets/julian2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 z-[1000] flex w-full h-[80px] items-center justify-between px-3 bg-transparent'>
      <div className='absolute left-2 top-2 z-10'>
        <img className='w-[42px] h-[49px]' src={logo} alt="Logo del artista" />
      </div>
      
      {/* Menú para desktop (oculto en mobile) */}
      <nav className='hidden md:flex w-[75%] h-[49px] items-center justify-center'>
        <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#principal">Inicio</a>
        <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#biografia">Biografía</a>
        <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#musica">Música</a>
        <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#videos">Videos</a>
        <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#contacto">Contacto</a>
      </nav>
      
      {/* Botón hamburguesa para mobile (oculto en desktop) */}
      <button 
        className='md:hidden absolute right-4 top-6 z-20 text-primary'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke={isMenuOpen ? 'white' : 'currentColor'}
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Menú dropdown para mobile */}
      {isMenuOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-screen bg-primary bg-opacity-90 z-10 pt-20'>
          <nav className='flex flex-col items-center space-y-6'>
            <a className='no-underline cursor-pointer font-montserrat text-lg text-white py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors' href="#principal" onClick={toggleMenu}>Inicio</a>
            <a className='no-underline cursor-pointer font-montserrat text-lg text-white py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors' href="#biografia" onClick={toggleMenu}>Biografía</a>
            <a className='no-underline cursor-pointer font-montserrat text-lg text-white py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors' href="#musica" onClick={toggleMenu}>Música</a>
            <a className='no-underline cursor-pointer font-montserrat text-lg text-white py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors' href="#videos" onClick={toggleMenu}>Videos</a>
            <a className='no-underline cursor-pointer font-montserrat text-lg text-white py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors' href="#contacto" onClick={toggleMenu}>Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;