import React from 'react';

const ages = [
  "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11",
  "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20"
];

const colors = [
  "border-yellow-400 text-yellow-600", "border-yellow-400 text-yellow-600", "border-yellow-400 text-yellow-600",
  "border-orange-400 text-orange-600", "border-orange-500 text-orange-600", "border-orange-500 text-orange-600",
  "border-pink-500 text-pink-600", "border-pink-500 text-pink-600", "border-pink-500 text-pink-600",
  "border-pink-500 text-pink-600", "border-pink-500 text-pink-600", "border-green-500 text-green-600",
  "border-green-500 text-green-600", "border-green-500 text-green-600", "border-green-500 text-green-600",
  "border-cyan-500 text-cyan-600", "border-cyan-500 text-cyan-600", "border-cyan-500 text-cyan-600",
  "border-cyan-500 text-cyan-600",
];

export default function AgeSelector() {
  return (
    <section className="py-16 bg-white animate-section">
      <div className="max-w-[1400px] mx-auto px-2 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 animate-fadeUp">
          How Old Are You? 🎯
        </h2>

        <p className="text-gray-500 mb-10 text-sm md:text-base animate-fadeUp delay-200">
          Pick your age and find the perfect courses just for you! ✨
        </p>

        {/* SINGLE LINE – NO SCROLL */}
        <div className="flex flex-row justify-between items-center w-full gap-1 md:gap-2">
          {ages.map((age, i) => (
            <button
              key={age}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`flex-1 flex flex-col items-center justify-center border-[1.5px] md:border-2 
              ${colors[i]} rounded-lg md:rounded-2xl py-2 min-w-0
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
              active:scale-95
              animate-ageBox`}
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-bold leading-tight">
                {age}
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase">
                Years
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-section {
          animation: sectionFade 0.8s ease forwards;
        }

        @keyframes sectionFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ageBox {
          opacity: 0;
          animation: agePop 0.5s ease forwards;
        }

        @keyframes agePop {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}


