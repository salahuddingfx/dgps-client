import { motion } from "framer-motion";
import { PRINCIPAL_INFO, SCHOOL_INFO } from "../../constants/navigation";
import Avatar from "../ui/Avatar";
import ScrollReveal from "../shared/ScrollReveal";

export default function PrincipalMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <ScrollReveal>
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 flex flex-col items-center text-center">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6">
                <span className="text-5xl lg:text-6xl font-bold text-primary-500 font-poppins">
                  {PRINCIPAL_INFO.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-heading font-poppins">{PRINCIPAL_INFO.name}</h3>
              <p className="text-sm text-primary-500 font-medium">{PRINCIPAL_INFO.designation}</p>
              <p className="text-xs text-paragraph mt-1">{PRINCIPAL_INFO.qualification}</p>
            </div>
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Principal's Message</span>
              <h2 className="text-2xl md:text-3xl font-bold text-heading font-poppins mt-2 mb-6">
                A Message from Our Headmaster
              </h2>
              <div className="space-y-4 text-paragraph leading-relaxed">
                {PRINCIPAL_INFO.message.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
