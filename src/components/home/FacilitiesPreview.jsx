import { Link } from "react-router-dom";
import { FACILITIES } from "../../constants/navigation";
import FacilityCard from "../shared/FacilityCard";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";
import Button from "../ui/Button";

export default function FacilitiesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Infrastructure"
          title="Our Facilities"
          description="Modern infrastructure and facilities to support holistic development of students."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => (
            <ScrollReveal key={facility.id}>
              <FacilityCard facility={facility} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/facilities">
            <Button variant="outline">Explore All Facilities</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
