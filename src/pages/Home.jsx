import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LatestSingle from '../components/LatestSingle';
import Biography from '../components/Biography';
import MusicSection from '../components/MusicSection';
import VideosSection from '../components/VideosSection';
import ContactForm from '../components/ContactForm';
// import Footer from '../components/Footer';

// const AnimatedSection = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5, delay }}
//       style={{ width: '100%' }}
//     >
//       {children}
//     </motion.div>
//   );
// };


const Home = () => {
  return (
    <div className="app">
      <Header />
      <main>

        <HeroSection />
        <div className='absolute z-[10] w-[45%] h-[35%] top-50 right-40 pink__gradient opacity-50'></div>
        <LatestSingle />
        
        <div className='absolute z-[0] w-[90%] h-[45%] top-200 orange__gradient opacity-40'></div>
        <Biography />
        <MusicSection />
        <VideosSection />
        <ContactForm />

{/* 
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <LatestSingle />
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <Biography />
        </AnimatedSection>

        
        <AnimatedSection delay={0.6}>
          <MusicSection />
        </AnimatedSection>
        
        
        <AnimatedSection delay={0.8}>
          <VideosSection />
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <ContactForm />
        </AnimatedSection> */}

      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;