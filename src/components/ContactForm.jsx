import { useForm, ValidationError } from '@formspree/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import instagramIcon from '/assets/redes/instagram.png';
import spotifyIcon from '/assets/redes/spotify.png';
import youtubeIcon from '/assets/redes/youtube.png';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeoqevzl");

  // Referencia y detección del scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animación unificada para los íconos
  const unifiedAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  if (state.succeeded) {
    return <p className="text-center mt-10 text-primary">¡Gracias por comunicarte con Juli G Pop!</p>;
  }

  return (
    <section id="contacto" className='relative h-screen w-full overflow-hidden'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-5'>

        {/* Formulario (izquierda) */}
        <form 
          onSubmit={handleSubmit} 
          className='md:w-1/2 w-[90%] h-[450px] flex flex-col gap-2 bg-white/5 p-6 rounded-xl md:ml-20 mt-10 md:mt-16'
        >
          <label htmlFor="name" className='text-primary font-medium'>
            Nombre Completo
          </label>
          <input
            className='border border-gray-400 text-sm text-gray-500 rounded-md p-1'
            id="name"
            type="text"
            name="name"
            required
          />

          <label htmlFor="email" className='text-primary font-medium'>
            Email
          </label>
          <input
            className='border border-gray-400 text-sm text-gray-500 rounded-md p-1'
            id="email"
            type="email"
            name="email"
            required
          />

          <label htmlFor="telefono" className='text-primary font-medium'>
            Teléfono
          </label>
          <input
            className='border border-gray-400 text-sm text-gray-500 rounded-md p-1'
            id="telefono"
            type="tel"
            name="telefono"
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className='text-primary font-medium'>
            Mensaje
          </label>
          <textarea
            className='h-[20%] border border-gray-400 text-sm text-gray-500 rounded-md p-1'
            id="message"
            name="message"
            required
          />

          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button 
            type="submit" 
            disabled={state.submitting} 
            className='mt-4 w-[30%] bg-primary text-white p-2 rounded-xl'
          >
            Enviar
          </button>
        </form>

        {/* Título (derecha) */}
        <div ref={ref} className='md:w-1/2 flex flex-col items-center text-center justify-center gap-10'>
          <h2 className='text-2xl md:text-3xl font-medium text-primary'>
            <div className='absolute z-[0] w-[45%] h-[30%] z-[0] right-10 top-55 blue__gradient opacity-50'></div>
            Consultas y contrataciones
          </h2>

          <p className='text-[#ffffff] max-w-md'>
            Si querés contratar a <strong className='text-primary'>Juli G Pop</strong> para tu evento, colaboración o simplemente dejar un mensaje, completá el formulario o escribinos directamente.
          </p>

          <div className='flex gap-10'>
            {/* Instagram */}
            <motion.a 
              href="https://instagram.com/juligpop" 
              className='relative flex items-center gap-3 p-3'
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={unifiedAnimation}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className='relative flex items-center'
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={instagramIcon}
                  alt="Spotify"
                  className='w-12 h-12'
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <motion.span
                  variants={{
                    rest: { opacity: 0, y: 0, },
                    hover: { opacity: 1, y: 50, x: -25}
                  }}
                  transition={{ duration: 0.4 }}
                  className='absolute text-white text-lg tracking-wide font-light pointer-events-none'
                >
                  Instagram
                </motion.span>
              </motion.div>
            </motion.a>

            {/* Spotify */}
            <motion.a 
              href="https://open.spotify.com/intl-es/artist/2RUcSxfSd8UIa2s5YWZatx" 
              className='relative flex items-center gap-3 p-3'
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={unifiedAnimation}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className='relative flex items-center'
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={spotifyIcon}
                  alt="Spotify"
                  className='w-12 h-12'
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <motion.span
                  variants={{
                    rest: { opacity: 0, y: 0 },
                    hover: { opacity: 1, y: 50, x: -5 }
                  }}
                  transition={{ duration: 0.4 }}
                  className='absolute text-white text-lg tracking-wide font-light pointer-events-none'
                >
                  Spotify
                </motion.span>
              </motion.div>
            </motion.a>

            {/* YouTube */}
            <motion.a 
              href="https://www.youtube.com/channel/UCBjbu8ZF62AuTcPQBx5a8FA" 
              className='relative flex items-center gap-3 p-3'
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={unifiedAnimation}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className='relative flex items-center'
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={youtubeIcon}
                  alt="YouTube"
                  className='w-12 h-12'
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <motion.span
                  variants={{
                    rest: { opacity: 0, y: 0 },
                    hover: { opacity: 1, y: 50, x: -15 }
                  }}
                  transition={{ duration: 0.4 }}
                  className='absolute text-white text-lg tracking-wide font-light pointer-events-none'
                >
                  YouTube
                </motion.span>
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
