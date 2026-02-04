import React from "react";

const PopularCourseCard = ({ sellingFast }) => {
  return (
    <div className="w-full animate-cardIn">
      
      <div className="flex justify-end items-center gap-1 text-[10px] text-gray-500 mb-2 pr-2 animate-fadeIn">
        <span className="text-yellow-400">★</span>
        <span>4.9 | 200+ learners</span>
      </div>

      <div
        className="bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-lg"
      >
        <div className="relative p-2 pb-0 overflow-hidden">
          {sellingFast && (
            <span
              className="absolute top-4 left-4 z-10 bg-[#FF8A00] text-white
              text-[10px] font-bold px-2 py-1 rounded-lg
              animate-pulseSoft"
            >
              Selling Fast
            </span>
          )}

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="course"
            className="w-full h-[160px] object-cover rounded-[20px]
            transition-transform duration-500 ease-out
            hover:scale-105"
          />
        </div>

        <div className="p-4 pt-3">
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="bg-orange-50 text-orange-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-orange-100 transition-transform hover:scale-105">
              Coding
            </span>
            <span className="bg-rose-50 text-rose-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-rose-100 transition-transform hover:scale-105">
              Intermediate
            </span>
          </div>

          <h3 className="text-[14px] font-bold text-gray-900 leading-tight mb-3">
            Summer robotics camp: fun projects with auto arduino...
          </h3>

          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <div className="flex items-center gap-3 text-[11px] font-bold text-gray-700">
              <span>👤 7-10 yrs</span>
              <span>₹ 299</span>
            </div>

            <button
              className="p-1.5 bg-gray-50 rounded-full border border-gray-100
              transition-all duration-300
              hover:scale-110 hover:bg-gray-100 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-cardIn {
          animation: cardIn 0.7s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-pulseSoft {
          animation: pulseSoft 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PopularCourseCard;

