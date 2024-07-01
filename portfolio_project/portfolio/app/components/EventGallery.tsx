"use client";

import React, { useState } from 'react';

interface Image {
  src: string;
  title: string;
}

const images: Image[] = [
  { src: '/images/event_1.jpg', title: 'Global LinkedIn Bootcamp' },
  { src: '/images/event_2.jpg', title: 'Global LinkedIn Bootcamp' },
  { src: '/images/event_3.jpg', title: 'Global LinkedIn Bootcamp' },
  { src: '/images/event_4.jpg', title: '5AM Challenge' },
  { src: '/images/event_5.jpg', title: '5AM Challenge' },
  { src: '/images/event_6.jpg', title: '5AM Challenge' },
  { src: '/images/event_7.jpg', title: 'Tech Hub' },

];

const EventGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < images.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="py-8 px-8 sm:py-14 xl:px-8 bg-primary">
      <div className="flex flex-col items-center bg-blue-100 p-4 px-10">
        <h2 className="text-center text-lg font-light mb-10 mt-8">
          Event Gallery <br />
          <span className="text-heading text-3xl font-bold">Captured Moments</span>
        </h2>
        <div className="relative w-full flex justify-center items-center">
        <button onClick={handlePrev} className=" left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
            &lt;
          </button>
          <div className="w-2/3 h-80 bg-gray-300 mb-4 mx-3  flex items-center justify-center">
            <img src={images[currentIndex].src} alt={images[currentIndex].title} className="object-cover h-full w-full" />
          </div>
          <button onClick={handleNext} className="right-2 p-2 bg-white rounded-full shadow-md">
            &gt;
          </button>
        </div>
        <p className="mb-4">{images[currentIndex].title}</p>
        <div className="flex justify-center space-x-2 w-2/3">
          {images.slice(startIndex, startIndex + 3).map((image, index) => (
            <div
              key={index}
              className={`w-1/3 h-32 bg-gray-300 flex items-center justify-center cursor-pointer ${currentIndex === startIndex + index ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setCurrentIndex(startIndex + index)}
            >
              <img src={image.src} alt={image.title} className="object-cover h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;