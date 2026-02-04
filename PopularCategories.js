import React, { useState } from 'react';
import PopularCourseCard from './PopularCourseCard';

const categories = [
  { id: 'coding', name: 'Coding', icon: '/computer.png' },
  { id: 'public-speaking', name: 'Public speaking', icon: '/microphone.png' },
  { id: 'chess', name: 'Chess', icon: '/chess.png' },
  { id: 'homework', name: 'Home work help', icon: '/book.png' },
  { id: 'app-building', name: 'App building', icon: '/smartphone.png' },
];

const PopularCategories = () => {
  const [activeTab, setActiveTab] = useState('coding');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-bold text-[#1A1A1A]">
            Popular Categories
          </h2>
          <p className="text-gray-500 mt-3 text-[16px]">
            Pick what you love most! These categories have everything you need to learn something awesome ✨
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative w-[210px] h-[100px] rounded-[24px] cursor-pointer border-2 transition-all duration-300
                  ${
                    isActive
                      ? 'bg-[#FF7A2F] border-transparent shadow-[0_18px_35px_rgba(255,122,47,0.45)]'
                      : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
              >
                {/* TEXT */}
                <div className="h-full flex items-center pl-6 w-[55%]">
                  <span
                    className={`text-[15px] font-bold leading-tight
                      ${isActive ? 'text-white' : 'text-gray-700'}`}
                  >
                    {cat.name}
                  </span>
                </div>

                {/* ICON – FIGMA STYLE */}
                <div
                  className={`absolute right-[-6px] top-[-30px] transition-all duration-500 ease-out
                    ${isActive
                      ? 'scale-110 -translate-y-1'
                      : 'scale-100 translate-y-1'
                    }`}
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-[105px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <PopularCourseCard
              key={i}
              sellingFast={i === 0}
              category={activeTab}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCategories;
