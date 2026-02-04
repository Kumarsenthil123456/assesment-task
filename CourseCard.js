import React from 'react';

export default function CourseCard({ sellingFast, webinarTime }) {
  return (
    <div className="w-full flex-shrink-0 group">
      
      {/* RATING ABOVE CARD */}
      <div className="flex justify-end items-center gap-1 text-[10px] text-gray-500 mb-2 pr-2">
        <span className="text-yellow-400 text-[10px]">★</span>
        <span>4.9 | 200+ learners</span>
      </div>

      <div
        className="relative bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm
        transition-all duration-300 ease-out
        group-hover:-translate-y-2 group-hover:shadow-lg"
      >
        {/* SELLING FAST BADGE */}
        {sellingFast && (
          <div className="absolute top-4 left-4 z-10 animate-pulse">
            <span className="bg-[#FF8A00] text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
              Selling Fast
            </span>
          </div>
        )}

        {/* IMAGE AREA */}
        <div className="p-3 pb-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="Robotics Course" 
            className="w-full h-[160px] object-cover rounded-[20px]
            transition-transform duration-500 ease-out
            group-hover:scale-110" 
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 pt-3 transition-all duration-300 group-hover:translate-y-[-2px]">
          <div className="flex gap-2 mb-3">
            <span className="bg-blue-50 text-blue-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-blue-100">
              English
            </span>

            <span className="bg-yellow-50 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-yellow-100">
              {webinarTime || "Starting at 4am"}
            </span>
          </div>

          <h3 className="text-[14px] font-bold text-gray-900 leading-tight mb-2">
            Summer robotics camp: fun projects with auto arduino, Tink...
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/author.png"
              alt="Daniel James"
              className="w-5 h-5 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-[11px] text-gray-500 font-medium">
              By: Daniel James
            </p>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <div className="flex items-center gap-3 text-[11px] font-bold text-gray-700">
              <span className="flex items-center gap-1">👤 7-10 yrs</span>
              <span className="flex items-center gap-1">🕒 45</span>
              <span className="text-gray-900">₹ 299</span>
            </div>
            
            <button
              className="p-2 bg-gray-50 rounded-full border border-gray-100 text-gray-600
              transition-all duration-300
              hover:bg-gray-100 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





