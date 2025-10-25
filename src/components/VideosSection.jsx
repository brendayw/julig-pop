import React from 'react';

const VideosSection = () => {

  const youtubeVideos = [
    {
      id: 'FxBXv50eCGQ',
      title: 'Video 1 de Juli G'
    },
    {
      id: 'EcnWpBA4AAs',
      startTime: 929, // 15:29 en segundos
      title: 'Video 2 de Juli G'
    }
  ];

  return (
    <section id="videos" className="h-screen w-full overflow-hidden py-16 px-4 md:px-8 lg:px-16">

      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="titulo-seccion-videos text-center mb-12">
          <h2 className="relative top-5 text-start text-4xl md:text-5xl font-medium text-primary">MIRA SUS VIDEOS</h2>
        </div>

        {/* Contenedor de videos */}
        <div className="relative top-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {youtubeVideos.map((video, index) => (

            <div key={index} className="min-h-[350px] aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-xl">
              
              <iframe
                src={`https://www.youtube.com/embed/${video.id}${video.startTime ? `?start=${video.startTime}` : ''}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              ></iframe>

            </div>

          ))}
        </div>

      </div>

    </section>
  );
};

export default VideosSection;