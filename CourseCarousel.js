import CourseCard from "./CourseCard";

const CourseCarousel = ({ title }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-[1280px] mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center">
          {title} ⭐
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Our most loved courses that kids absolutely adore!
        </p>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
          {[...Array(5)].map((_, i) => (
            <CourseCard key={i} highlight={i === 2} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseCarousel;



