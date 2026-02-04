import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AgeSelector from "./components/AgeSelector";
import CourseSection from "./components/CourseSection";
import TeacherSection from "./components/TeacherSection";
import TeacherCourseRow from "./components/TeacherCourseRow";
import WebinarSection from "./components/WebinarSection";
import PopularCategories from "./components/PopularCategories";
import FilterWithTime from "./components/FilterWithTime";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AgeSelector />

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <CourseSection title="New Launches" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <CourseSection title="Featured Courses" />
        </div>
      </section>

      <TeacherSection />

      <TeacherCourseRow />

      <WebinarSection />

      <PopularCategories />

      <FilterWithTime />
    </>
  );
}

export default App;
