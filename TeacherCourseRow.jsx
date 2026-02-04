export default function TeacherCourseRow() {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-full">
              {/* RATING ABOVE CARD */}
              <div className="flex justify-end items-center gap-1 text-[10px] text-gray-500 mb-2 pr-2">
                <span className="text-yellow-400">★</span>
                <span>4.9 | 200+ learners</span>
              </div>

              <div className="relative bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                {/* SELLING FAST BADGE */}
                {i === 0 && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#FF8A00] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                      Selling Fast
                    </span>
                  </div>
                )}

                {/* IMAGE AREA */}
                <div className="p-3 pb-0">
                  <img 
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350" 
                    alt="Course Thumbnail" // Added alt prop here
                    className="w-full h-[170px] object-cover rounded-[20px]" 
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-rose-50 text-rose-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-rose-100">English</span>
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-blue-100">Intermediate</span>
                    <span className="bg-yellow-50 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-yellow-100">4 classes</span>
                  </div>

                  <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-1">
                    Summer robotics camp: fun projects with auto arduino, Tink...
                  </h3>
                  
                  {/* AUTHOR SECTION - Fixed the warning here */}
                  <div className="flex items-center gap-2 mt-2">
                     <img 
                        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                        alt="Daniel James" // Added meaningful alt text
                        className="w-5 h-5 rounded-full" 
                     />
                     <p className="text-[11px] text-gray-500 font-medium">By: Daniel James</p>
                  </div>

                  {/* FOOTER STATS */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-700">
                      <span className="flex items-center gap-1">👤 7-10 yrs</span>
                      <span className="flex items-center gap-1">🕒 45</span>
                      <span className="text-gray-900">₹ 299</span>
                    </div>
                    
                    <button className="p-2 bg-gray-50 rounded-full border border-gray-100 text-gray-600 hover:bg-gray-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
