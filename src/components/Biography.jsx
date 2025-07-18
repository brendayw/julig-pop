import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import backgroundImage from '/assets/fondo-blanco.png';

const Biography = () => {
    const carouselImages = [
        "/assets/gallery/IMG_2917.jpg",
        "/assets/gallery/img_cantando.jpeg",
        "/assets/gallery/IMG_9024.jpg"
    ];

    return (
        <section id="biografia" className="relative h-screen w-full overflow-hidden siguiente-seccion">
            <img 
                src={backgroundImage} 
                alt="fondo juli g" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
            />
            <div className="container mx-auto h-full flex items-center">
                <div className="w-full lg:w-1/2 z-10 pl-8 md:pl-16">
                    <div className='mb-8'>
                        <h3 className='text-primary text-4xl md:text-5xl font-medium mb-4'>BIOGRAFÍA</h3> 
                    </div>

                    <div className="w-full lg:w-3/4 descripcion-seccion-biografia">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            JULI G es un autor, compositor, intérprete y productor artístico/musical de música pop; 
                            oriundo de la ciudad de Bahía Blanca, Provincia de Buenos Aires, Argentina. <br /> <br/>
                            Actualmente está trabajando en un álbum que está en proceso de grabación.
                        </p>
                    </div>
                </div>

                {/* Carrusel de fotos (lado derecho) */}
                <div className="hidden lg:block absolute right-0 top-20 w-1/2 h-[500px]">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation
                        loop={true}
                        className="w-[50%] h-full [--swiper-theme-color:theme(colors.primary)] [--swiper-navigation-size:24px]"
                    >
                        {carouselImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full w-full">
                                <img 
                                    src={img} 
                                    alt={`Biografía Juli G ${index + 1}`}
                                    className="w-full h-full object-cover rounded-[50px]"
                                />
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Versión móvil del carrusel (debajo del texto) */}
            <div className="lg:hidden absolute bottom-0 left-0 w-full h-1/3">
                <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                className="h-full"
                >
                    {carouselImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img 
                                src={img} 
                                alt={`Biografía Juli G ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        
            
        </section>
    )
}

export default Biography;