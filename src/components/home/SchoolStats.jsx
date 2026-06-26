import { BookOpen, GraduationCap, Users, Award } from "lucide-react";
import { STATS } from "../../constants/navigation";
import ReactCountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUp = ReactCountUp.default || ReactCountUp;
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";

export default function SchoolStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const icons = [GraduationCap, BookOpen, Users, Award];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          subtitle="Our Impact"
          title="School at a Glance"
          description="Six decades of commitment to quality education and community development."
          className="[&_span]:text-accent-400 [&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold font-poppins mb-1">
                    {inView ? <CountUp end={stat.value} duration={2} /> : "0"}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
