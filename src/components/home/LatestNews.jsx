import { Link } from "react-router-dom";
import { NEWS } from "../../constants/navigation";
import NewsCard from "../shared/NewsCard";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";
import Button from "../ui/Button";

export default function LatestNews() {
  const latestNews = NEWS.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="News & Updates"
          title="Latest News"
          description="Stay informed about the latest happenings at our school."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <ScrollReveal key={news.id}>
              <NewsCard news={news} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/news">
            <Button variant="outline">Read More News</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
