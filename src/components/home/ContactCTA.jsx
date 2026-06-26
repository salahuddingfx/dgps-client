import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "../../constants/navigation";
import ScrollReveal from "../shared/ScrollReveal";
import Button from "../ui/Button";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
      <div className="container-wide">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Join Our School Family?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Give your child the gift of quality education. Contact us today to learn more about admissions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${SCHOOL_INFO.contact.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                {SCHOOL_INFO.contact.phone}
              </a>
              <span className="hidden sm:block text-white/30">|</span>
              <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                {SCHOOL_INFO.contact.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/admission">
                <Button variant="white" size="lg">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
