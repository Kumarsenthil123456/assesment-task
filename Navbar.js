const Navbar = () => {
  return (
    <header className="bg-white border-b animate-navbar">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* LEFT: Logo + Menu */}
          <div className="flex items-center gap-10">
            
            {/* Logo */}
            <div className="text-xl font-semibold text-black animate-logo">
              Logo
            </div>

            {/* Active menu */}
            <div className="relative group cursor-pointer">
              <span className="text-purple-600 font-medium">
                Course
              </span>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-purple-600 rounded-full origin-left scale-x-100 animate-underline"></span>
            </div>
          </div>

          {/* RIGHT: Auth */}
          <div className="flex items-center gap-6">

            {/* Login */}
            <button className="relative text-sm font-medium text-gray-800 hover:text-purple-600 transition group">
              Login
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Register */}
            <button className="bg-purple-600 text-white text-sm font-medium px-5 py-2 rounded-full 
              transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg animate-pulseSoft">
              Register for free
            </button>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-navbar {
          animation: navDrop 0.8s ease forwards;
        }

        @keyframes navDrop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-logo {
          animation: logoFade 1s ease forwards;
        }

        @keyframes logoFade {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-underline {
          animation: underlineSlide 0.6s ease forwards;
        }

        @keyframes underlineSlide {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-pulseSoft {
          animation: pulseSoft 3s ease-in-out infinite;
        }

        @keyframes pulseSoft {
          0%, 100% {
            box-shadow: 0 0 0 rgba(124, 58, 237, 0.4);
          }
          50% {
            box-shadow: 0 0 18px rgba(124, 58, 237, 0.4);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;



