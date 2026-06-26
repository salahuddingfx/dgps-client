import { FAQS } from "../../constants/navigation";
import Accordion from "../ui/Accordion";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";

export default function FAQPreview() {
  const previewFaqs = FAQS.slice(0, 5);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          subtitle="Got Questions?"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our school, admissions, and more."
        />
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Accordion items={previewFaqs} defaultOpen={0} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
