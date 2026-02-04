import CourseCard from "./CourseCard";

export default function CourseSection({ title }) {
  return (
    <section className="py-24 bg-[#FAFAFF]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] font-semibold text-[#1A1A1A]">
            {title} ⭐
          </h2>
          <p className="mt-2 text-[14px] text-[#6B7280]">
            Our most loved courses that kids absolutely adore!
          </p>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <CourseCard key={i} sellingFast={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
