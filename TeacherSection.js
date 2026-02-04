const teachers = [
  { id: 1, subject: "Computer science" },
  { id: 2, subject: "English" },
  { id: 3, subject: "Early educator" },
  { id: 4, subject: "Coding" },
  { id: 5, subject: "Computer science" },
  { id: 6, subject: "Computer science" },
];

export default function TeacherSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-[36px] font-bold text-gray-900">
            Learn from Top Teachers
          </h2>
          <p className="text-gray-500 mt-2">
            Expert instructors who make learning fun and engaging for every child
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="relative w-[180px] bg-white border border-gray-100 rounded-[24px]
              px-4 pb-6 pt-10 text-center shadow-sm
              transition-all duration-300 ease-out
              hover:-translate-y-3 hover:shadow-lg
              animate-cardIn"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Floating Avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-floatSlow">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop"
                    alt="Teacher"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              <h4 className="text-[16px] font-bold text-gray-900">
                Andy Brew
              </h4>
              <p className="text-[11px] text-gray-400 mt-1">
                M.Sc, B.Ed • 15+ Years
              </p>
              <p className="text-[11px] text-gray-400">
                1000+ Students
              </p>

              <span
                className="inline-block mt-4 px-4 py-1.5 text-[11px] font-medium
                rounded-full bg-gray-50 text-gray-600 border border-gray-100
                transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                {t.subject}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .animate-floatSlow {
          animation: floatSlow 5s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.9) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-cardIn {
          animation: cardIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
