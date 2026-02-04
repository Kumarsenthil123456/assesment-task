import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#3b0a6f] via-[#4b0082] to-[#5b0f9c] min-h-[520px] flex items-center overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto w-full px-10 flex items-center justify-between relative">

        {/* LEFT IMAGE */}
        <div className="relative w-1/4 flex justify-center">
          
          {/* 500+ badge */}
          <div className="absolute -top-6 left-6 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 text-white text-center">
            <p className="text-xl font-bold">500+</p>
            <p className="text-xs opacity-80">Courses</p>
          </div>

          <img
            src="/boy.png"
            alt="Boy"
            className="h-[380px] object-contain"
          />

          {/* rating badge */}
          <div className="absolute bottom-8 left-8 bg-white/15 backdrop-blur-md 
                          border border-white/20 rounded-2xl px-4 py-2 
                          text-white flex items-center gap-2">
            
            {/* animated star */}
            <span className="text-yellow-400 text-lg animate-starThrow">★</span>

            <div>
              <p className="font-bold leading-none">4.9</p>
              <p className="text-[10px] opacity-80">Rating</p>
            </div>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="w-2/4 text-center text-white px-6">
          <h1 className="text-5xl font-medium mb-3">
            Learn a New Skill
          </h1>
          <p className="text-4xl font-bold text-[#d9ff3f] mb-14">
            Everyday, Anytime, and Anywhere.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full p-2 shadow-xl">
              <div className="pl-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="flex-1 px-4 py-3 outline-none text-gray-700 text-lg"
              />

              <button className="bg-gradient-to-r from-[#6a11cb] to-[#ff0099] text-white px-10 py-3 rounded-full font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-1/4 flex justify-center">
          
          {/* happy kids badge */}
          <div className="absolute -top-6 right-6 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 text-white text-center">
            <p className="text-xl font-bold">10k+</p>
            <p className="text-xs opacity-80">Happy kids</p>
          </div>

          <img
            src="/girl2.png"
            alt="Girl"
            className="h-[380px] object-contain"
          />
        </div>
      </div>

      {/* STAR ANIMATION (hand → throw feel) */}
      <style>{`
        @keyframes starThrow {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          35% {
            transform: translateY(-6px) rotate(-10deg) scale(1.15);
          }
          65% {
            transform: translateY(-12px) rotate(12deg) scale(1.25);
            filter: drop-shadow(0 0 6px gold);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
            filter: none;
          }
        }

        .animate-starThrow {
          animation: starThrow 1.6s ease-in-out 3;
        }
      `}</style>
    </section>
  );
};

export default Hero;


