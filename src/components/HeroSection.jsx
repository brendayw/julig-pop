import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import logo from '/assets/juli_g.png';
import backgroundImageWhite from '/assets/fondo-blanco.png';
import backgroundImage from '/assets/IMG_9208.png';
import instagramIcon from '/assets/redes/instagram.png';
import spotifyIcon from '/assets/redes/spotify.png';
import youtubeIcon from '/assets/redes/youtube.png';

const HeroSection = () => {
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const isInView = useInView(logoRef, { once: true, margin: "-100px" });
  const areLinksInView = useInView(linksRef, { once: true, margin: "-100px" });

  const unifiedAnimation = {
    initial: { opacity: 0, y: -50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 10, 
        stiffness: 100,
        duration: 0.8
      }
    },
    whileHover: { scale: 1.02 }
  };

  return (
    <section id="principal" className="relative h-screen w-full overflow-hidden siguiente-seccion">
      {/* Fondo blanco */}
      <img 
        src={backgroundImageWhite} 
        alt="foto de fondo blanca" 
        className='absolute inset-0 w-full h-full object-cover object-center z-0'
      />
      
      {/* Imagen principal */}
      <img 
        src={backgroundImage} 
        alt="foto juli g" 
        className='absolute z-1 top-[30px] right-0 w-[900px] h-[574px] z-[2] [filter:drop-shadow(5px_5px_10px_rgba(22,22,22,0.795))]' 
      />

      {/* Logo */}
      <motion.img 
        ref={logoRef}
        src={logo} 
        alt="logo_julig" 
        className='relative z-10 top-[50px] ml-12 w-[633px] h-[312px]'
        {...unifiedAnimation}
      />

      {/* Redes sociales - MISMA ANIMACIÓN que el logo */}
      <div ref={linksRef} className="relative w-[30%] z-10 top-10 left-10 flex flex-col gap-2">
        <motion.a 
          href="https://www.instagram.com/juligpop/" 
          className="p-3"
          {...unifiedAnimation}
          animate={areLinksInView ? unifiedAnimation.animate : unifiedAnimation.initial}
          transition={{ ...unifiedAnimation.animate.transition, delay: 0.2 }}
        >
          <img src={instagramIcon} alt="Instagram" className="w-12 h-12"/>
        </motion.a>

        <motion.a 
          href="https://open.spotify.com/intl-es/artist/2RUcSxfSd8UIa2s5YWZatx" 
          className="p-3"
          {...unifiedAnimation}
          animate={areLinksInView ? unifiedAnimation.animate : unifiedAnimation.initial}
          transition={{ ...unifiedAnimation.animate.transition, delay: 0.3 }}
        >
          <img src={spotifyIcon} alt="Spotify" className="w-12 h-12"/>
        </motion.a>

        <motion.a 
          href="https://www.youtube.com/channel/UCBjbu8ZF62AuTcPQBx5a8FA" 
          className="p-3"
          {...unifiedAnimation}
          animate={areLinksInView ? unifiedAnimation.animate : unifiedAnimation.initial}
          transition={{ ...unifiedAnimation.animate.transition, delay: 0.4 }}
        >
          <img src={youtubeIcon} alt="YouTube" className="w-12 h-12"/>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;