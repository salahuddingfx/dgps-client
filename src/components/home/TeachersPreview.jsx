import { Link } from "react-router-dom";
import { TEACHERS } from "../../constants/navigation";
import TeacherCard from "../shared/TeacherCard";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";
import Button from "../ui/Button";

export default function TeachersPreview() {
  const featuredTeachers = TEACHERS.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Teachers"
          description="Dedicated and experienced educators committed to shaping the future of every student."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTeachers.map((teacher) => (
            <ScrollReveal key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/teachers">
            <Button variant="outline">View All Teachers</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
