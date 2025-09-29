import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const Hero: React.FC = () => {
  const slides = [
    { url: 'https://picsum.photos/1920/1080?random=1', alt: 'Santri studying with modern technology' },
    { url: 'https://picsum.photos/1920/1080?random=2', alt: 'Pesantren marketplace showcasing local products' },
    { url: 'https://picsum.photos/1920/1080?random=3', alt: 'Community gathering at a modern pesantren' },
    { url: 'https://picsum.photos/1920/1080?random=4', alt: 'Digital literacy class for students' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] min-h-[500px] text-white group overflow-hidden">
      {/* Background Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.url} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Membangun Ekosistem Pesantren Modern
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            Platform digital terpadu untuk pendidikan, ekonomi, dan komunitas
            pesantren di era digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-emerald-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Mulai Belajar
            </a>
            <a
              href="#"
              className="bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-500 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Jelajahi Marketplace
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      {/* Left Arrow */}
      <button 
        onClick={prevSlide} 
        aria-label="Previous slide"
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-20 bg-black/30 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      {/* Right Arrow */}
      <button 
        onClick={nextSlide} 
        aria-label="Next slide"
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-20 bg-black/30 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, slideIndex) => (
            <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                aria-current={slideIndex === currentIndex}
                aria-label={`Go to slide ${slideIndex + 1}`}
            />
        ))}
      </div>
    </section>
  );
};

export default Hero;