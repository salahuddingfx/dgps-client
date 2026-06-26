import { Link } from "react-router-dom";
import { ACHIEVEMENTS } from "../../constants/navigation";
import Badge from "../ui/Badge";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import Button from "../ui/Button";

export default function AchievementsPreview() {
  const recentAchievements = ACHIEVEMENTS.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Our Pride"
          title="Achievements"
          description="Celebrating the accomplishments of our students, teachers, and institution."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {recentAchievements.map((achievement) => (
            <ScrollReveal key={achievement.id}>
              <div className="bg-white rounded-2xl border border-border shadow-card hover-lift p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={
                    achievement.category === "students" ? "success" :
                    achievement.category === "teachers" ? "secondary" : "primary"
                  }>
                    {achievement.category}
                  </Badge>
                  <span className="text-xs text-paragraph">{achievement.year}</span>
                </div>
                <h3 className="text-base font-semibold text-heading font-poppins mb-2">{achievement.title}</h3>
                <p className="text-sm text-paragraph leading-relaxed">{achievement.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/achievements">
            <Button variant="outline">View All Achievements</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
