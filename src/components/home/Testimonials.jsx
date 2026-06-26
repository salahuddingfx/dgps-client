import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../constants/navigation";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Testimonials"
          title="What People Say"
          description="Hear from parents and alumni about their experience with our school."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 relative">
                <Quote className="w-8 h-8 text-primary-100 absolute top-4 right-4" />
                <p className="text-sm text-paragraph leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-heading">{testimonial.name}</h4>
                    <p className="text-xs text-paragraph">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
