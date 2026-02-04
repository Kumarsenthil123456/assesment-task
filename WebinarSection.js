import CourseCard from "./CourseCard";

const webinarData = [
  { time: "Starting at 4am", sellingFast: true },
  { time: "Starting at 7pm", sellingFast: false },
  { time: "Starting at 10am", sellingFast: false },
  { time: "Starting at 3pm", sellingFast: false },
  { time: "Starting at 6pm", sellingFast: false },
];

export default function WebinarSection() {
  return (
    <section className="py-24 bg-[#FAFAFF] relative overflow-hidden">
      {/* Decorative Clock Icons - Placed as ghosts in the background corners */}
      <div className="absolute top-10 right-10 opacity-[0.05] -rotate-12 pointer-events-none">
        <img src="/icons/clock.svg" alt="" className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-[0.05] rotate-12 pointer-events-none">
        <img src="/icons/clock.svg" alt="" className="w-32 h-32" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* FIGMA HEADER DESIGN */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {/* Left Decorative Line */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2.5 h-2.5 rotate-45 bg-[#9333ea]" />
            <div className="w-24 lg:w-48 border-t-2 border-dashed border-[#d8b4fe]" />
          </div>

          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1f2937] text-center tracking-tight">
            Webinar starting within 24 hrs
          </h2>

          {/* Right Decorative Line */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-24 lg:w-48 border-t-2 border-dashed border-[#d8b4fe]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#9333ea]" />
          </div>
        </div>

        {/* 5-COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {webinarData.map((item, i) => (
            <CourseCard 
              key={i} 
              sellingFast={item.sellingFast} 
              webinarTime={item.time} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

