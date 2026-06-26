import { Link } from "react-router-dom";
import { GALLERY_ALBUMS } from "../../constants/navigation";
import GalleryCard from "../shared/GalleryCard";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import Button from "../ui/Button";

export default function GalleryPreview() {
  const previewAlbums = GALLERY_ALBUMS.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          subtitle="Visual Stories"
          title="Photo Gallery"
          description="Glimpses of our vibrant school life, events, and celebrations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewAlbums.map((album) => (
            <ScrollReveal key={album.id}>
              <GalleryCard album={album} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline">Browse Full Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
