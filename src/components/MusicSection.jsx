import React from 'react';
import backgroundImage from '/assets/bg-seccion4.png';

const MusicSection = () => {

  const spotifyEmbeds = [
    {
      type: 'album',
      src: 'https://open.spotify.com/embed/album/0NEblwvMCVxA4q3MmC67ap?utm_source=generator',
      title: 'Álbum 1'
    },
    {
      type: 'artist',
      src: 'https://open.spotify.com/embed/artist/2RUcSxfSd8UIa2s5YWZatx?utm_source=generator',
      title: 'Artista'
    },
    {
      type: 'album',
      src: 'https://open.spotify.com/embed/album/2kEPfamr7uEksUnUSnCNXV?utm_source=generator',
      title: 'Álbum 2'
    }
  ];

  return (
    <section 
      id="musica" 
      className="h-screen w-full overflow-hidden py-16 px-4 md:px-8 lg:px-16"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="titulo-seccion-musica text-center mb-12">
          <h2 className="relative top-5 text-4xl text-primary md:text-5xl font-medium drop-shadow-lg">ESCUCHA SU MÚSICA</h2>
        </div>

        {/* Contenedor de iframes */}
        <div className="spotify grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotifyEmbeds.map((embed, index) => (
            <div 
              key={index} 
              className={`spotify-${embed.type} rounded-xl p-4 backdrop-blur-sm`}
            >
              <iframe 
                src={embed.src}
                width="90%" 
                height="352" 
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title={`Spotify ${embed.type} - ${embed.title}`}
                className="rounded-xl shadow-lg w-full"
                style={{ borderRadius: '18px' }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;