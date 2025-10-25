import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import logo from '/assets/juli_g.png';
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
    <section className='relative h-screen overflow-hidden'>      
      
      {/* Imagen principal */}
      <div className="absolute top-[30px] right-0 w-[900px] h-[574px] z-[2]">

        {/* <div className="absolute inset-10 blue__gradient z-[1] opacity-50"></div> */}

        {/* <div className="absolute inset-0 orange__gradient z-[1] opacity-50"></div> */}
        
        <img  
          src={backgroundImage} 
          alt="foto juli g" 
          className="absolute inset-5 w-full h-full object-cover z-[1] opacity-[85%]"
        />
      </div>
    
      {/* Logo */}
      <motion.img ref={logoRef} src={logo} alt="logo_julig" 
        className='relative z-10 top-[65px] ml-12 w-[613px] h-[292px] opacity-50'{...unifiedAnimation}
      />

      <div className='absolute z-[0] w-[45%] h-[40%] top-10 blue__gradient'></div>

      {/* Redes sociales - MISMA ANIMACIÓN que el logo */}
      <div ref={linksRef} className="relative w-[30%] z-10 top-10 left-10 flex flex-col gap-2">
        
        <motion.a 
          href="https://www.instagram.com/juligpop/" 
          className="relative flex items-center gap-3 p-3"
          {...unifiedAnimation}
          animate={areLinksInView ? unifiedAnimation.animate : unifiedAnimation.initial}
          transition={{ ...unifiedAnimation.animate.transition, delay: 0.2 }}
        >
          {/* Contenedor del ícono con hover controlado */}
          <motion.div 
            className="relative flex items-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Icono */}
            <motion.img 
              src={instagramIcon} 
              alt="Instagram" 
              className="w-12 h-12"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />

            {/* Texto (animado al hover del ícono) */}
            <motion.span
              variants={{
                rest: { opacity: 0, x: 0 },
                hover: { opacity: 1, x: 20 }
              }}
              transition={{ duration: 0.4 }}
              className="absolute left-14 text-white text-lg tracking-wide font-light pointer-events-none"
            >
              Instagram
            </motion.span>
          </motion.div>
        </motion.a>

        <motion.a 
          href="https://open.spotify.com/intl-es/artist/2RUcSxfSd8UIa2s5YWZatx" 
          className="relative flex items-center gap-3 p-3"
          {...unifiedAnimation}
          animate={areLinksInView ? unifiedAnimation.animate : unifiedAnimation.initial}
          transition={{ ...unifiedAnimation.animate.transition, delay: 0.2 }}
        >
          {/* Contenedor del ícono */}
          <motion.div 
            className="relative flex items-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.img
              src={spotifyIcon}
              alt="Spotify"
              className="w-12 h-12"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />

            {/* Texto */}
            <motion.span
              variants={{
                rest: { opacity: 0, x: 0 },
                hover: { opacity: 1, x: 20 }
              }}
              transition={{ duration: 0.4 }}
              className="absolute left-14 text-white text-lg tracking-wide font-light pointer-events-none"
            >
              Spotify
            </motion.span>
          </motion.div>
        </motion.a>

        <motion.a 
          href="https://www.youtube.com/channel/UCBjbu8ZF62AuTcPQBx5a8FA" 
          className="relative flex items-center gap-3 p-3"
          {...unifiedAnimation}
          animate={areLinksInView ? unifiedAnimation.animate : unifiedAnimation.initial}
          transition={{ ...unifiedAnimation.animate.transition, delay: 0.2 }}
        >
          <motion.div
            className="relative flex items-center"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.img
              src={youtubeIcon}
              alt="YouTube"
              className="w-12 h-12"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />

            {/* Texto */}
            <motion.span
              variants={{
                rest: { opacity: 0, x: 0 },
                hover: { opacity: 1, x: 20 }
              }}
              transition={{ duration: 0.4 }}
              className="absolute left-14 text-white text-lg tracking-wide font-light pointer-events-none"
            >
              Youtube
            </motion.span>

          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;