import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import GalleryCard from "../components/shared/GalleryCard";
import Modal from "../components/ui/Modal";
import { GALLERY_ALBUMS } from "../constants/navigation";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";

const getPlaceholderImages = (count, albumId) =>
  Array.from({ length: Math.min(count, 20) }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/seed/dgps${albumId}${i + 1}/600/400`,
    alt: `Photo ${i + 1}`,
  }));

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAlbumOpen, setAlbumOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setAlbumOpen(true);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageOpen(true);
  };

  const images = selectedAlbum ? getPlaceholderImages(selectedAlbum.count, selectedAlbum.id) : [];

  const currentIdx = images.findIndex((img) => img?.id === selectedImage?.id);

  const goNext = () => {
    if (currentIdx < images.length - 1) {
      setSelectedImage(images[currentIdx + 1]);
    }
  };

  const goPrev = () => {
    if (currentIdx > 0) {
      setSelectedImage(images[currentIdx - 1]);
    }
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.gallery.title}</title>
        <meta name="description" content={PAGE_SEO.gallery.description} />
        <meta property="og:title" content={PAGE_SEO.gallery.title} />
        <meta property="og:description" content={PAGE_SEO.gallery.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.gallery.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.gallery.title} />
        <meta name="twitter:description" content={PAGE_SEO.gallery.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.gallery.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Gallery" }]} />

      <PageHeader
        title="Photo Gallery"
        description="Browse through photos from school events, activities, and campus life."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ALBUMS.map((album) => (
              <GalleryCard
                key={album.id}
                album={album}
                onClick={handleAlbumClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Album Modal */}
      <Modal
        isOpen={isAlbumOpen}
        onClose={() => setAlbumOpen(false)}
        title={selectedAlbum?.title}
        size="xl"
      >
        {selectedAlbum && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-paragraph text-sm">
              <Images className="w-5 h-5" />
              <span>{selectedAlbum.count} photos</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => handleImageClick(img)}
                  className="aspect-square rounded-xl overflow-hidden bg-primary-100 hover:ring-2 hover:ring-primary-500 transition-all group"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            {selectedAlbum.count > 20 && (
              <p className="text-center text-sm text-paragraph">
                + {selectedAlbum.count - 20} more photos
              </p>
            )}
          </div>
        )}
      </Modal>

      {/* Image Lightbox */}
      {isImageOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={() => setImageOpen(false)}
        >
          <button
            onClick={() => setImageOpen(false)}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {currentIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {currentIdx < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="absolute bottom-4 text-white/60 text-sm">
            {currentIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
