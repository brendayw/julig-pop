import React from 'react';
import logo from '/assets/julian2.png';
// import '../styles/components/header.css';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-[1000] flex w-full h-[80px] items-center justify-center px-3 bg-transparent'>
      <div className='absolute left-2 top-2 z-10'>
        <img className='w-[42px] h-[49px]' src={logo} alt="Logo del artista" />
      </div>
      
      <nav className='h-[49px] flex items-center justify-center'>
        <div className="nav">
          <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#principal">Inicio</a>
          <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#biografia">Biografía</a>
          <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#musica">Música</a>
          <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#videos">Videos</a>
          <a className='no-underline cursor-pointer font-montserrat text-[15px] text-primary border border-primary rounded-[45px] py-[5px] px-[30px] ml-[15px] hover:bg-primary hover:text-white transition-colors' href="#contacto">Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;