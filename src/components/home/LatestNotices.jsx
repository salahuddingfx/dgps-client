import { Link } from "react-router-dom";
import { NOTICES } from "../../constants/navigation";
import NoticeCard from "../shared/NoticeCard";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";
import Button from "../ui/Button";

export default function LatestNotices() {
  const latestNotices = NOTICES.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          subtitle="Stay Updated"
          title="Latest Notices"
          description="Important announcements and updates from the school administration."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNotices.map((notice) => (
            <ScrollReveal key={notice.id}>
              <NoticeCard notice={notice} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/notices">
            <Button variant="outline">View All Notices</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
