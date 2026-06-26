import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Trophy, Dumbbell, Music } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";

const activities = [
  {
    icon: Palette,
    title: "Art & Craft",
    description: "Creative expression through painting, drawing, and crafting activities.",
    color: "bg-pink-50 text-pink-500",
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Cricket, football, athletics, and other sports for physical development.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: Dumbbell,
    title: "Physical Education",
    description: "Regular exercise and physical training for healthy growth.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: Music,
    title: "Cultural Activities",
    description: "Music, dance, drama, and cultural programs throughout the year.",
    color: "bg-purple-50 text-purple-500",
  },
];

export default function StudentActivities() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          subtitle="Beyond Academics"
          title="Student Activities"
          description="We believe in holistic development through diverse extracurricular activities."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <ScrollReveal key={activity.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-border shadow-card hover-lift p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${activity.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading font-poppins mb-2">{activity.title}</h3>
                  <p className="text-sm text-paragraph leading-relaxed">{activity.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
