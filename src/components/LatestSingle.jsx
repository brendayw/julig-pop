import React from 'react';
import backgroundImage from '/assets/bg-seccion2v3.png';
import instintoAnimal from '/assets/instintoanimal.png';
// import '../styles/components/latest-single.css';

const LatestSingle = () => {
  return (
    <section className='relative h-screen w-full overflow-hidden'>

      <div className="relative z-10 info-single">
        <div className="titulo-single">
          <img src={instintoAnimal} className='absolute z-10 top-[-65px] left-[550px]'></img>
        </div>
      </div>

      <div className='relative z-10 top-[350px] left-[550px] info-single'>
        <div className="w-[25%] single-descripcion">
          <p className='text-white text-kotta text-center text-xl font-medium'>
            "Quiero verte enloquecerte <br /> 
            con ese INSTINTO ANIMAL <br /> 
            cuando escuches esta canción"
          </p>
        </div>
      </div>

      <div className="relative z-10 items-center">

        <iframe 
          className="relative top-32 left-20 api-single" 
          style={{borderRadius: '12px'}}
          src="https://open.spotify.com/embed/track/3IbiiVftIyhIErVAmSc0nw?utm_source=generator"
          width="25%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          title="Spotify Embed - Instinto Animal"
        ></iframe>
      </div>
    </section>
  );
};

export default LatestSingle;