"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  GalleryItem,
  GalleryCategory,
  galleryImages,
  categoryLabels,
} from "@/data/galleryData";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? filteredImages.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) =>
          prev === filteredImages.length - 1 ? 0 : prev + 1
        );
      }
    },
    [filteredImages.length]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    },
    [closeLightbox, navigateImage]
  );

  const categories: GalleryCategory[] = ["all", "repairs", "installations", "openers", "springs"];

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item wow fadeInUp"
            data-wow-delay={`${(index % 6) * 0.1}s`}
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-image-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h4>{image.title}</h4>
                  {image.description && <p>{image.description}</p>}
                  <span className="category-tag">{categoryLabels[image.category]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentImageIndex]?.src || ""}
              alt={filteredImages[currentImageIndex]?.alt || ""}
              fill
              sizes="100vw"
              className="lightbox-image"
              priority
            />
            <div className="lightbox-caption">
              <h3>{filteredImages[currentImageIndex]?.title}</h3>
              {filteredImages[currentImageIndex]?.description && (
                <p>{filteredImages[currentImageIndex]?.description}</p>
              )}
              <span className="lightbox-counter">
                {currentImageIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      <style jsx>{`
        .gallery-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid rgba(212, 175, 55, 0.3);
          background: transparent;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-btn:hover {
          border-color: #d4af37;
          color: #d4af37;
        }

        .filter-btn.active {
          background: #d4af37;
          border-color: #d4af37;
          color: #000;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gallery-item {
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
        }

        .gallery-image-wrapper {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .gallery-image {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content h4 {
          font-size: 1.25rem;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .overlay-content p {
          font-size: 0.9rem;
          margin: 0 0 0.75rem 0;
          color: rgba(255, 255, 255, 0.8);
        }

        .category-tag {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #d4af37;
          color: #000;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 3px;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          z-index: 10;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .lightbox-close:hover {
          color: #d4af37;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 1rem;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .lightbox-nav:hover {
          background: #d4af37;
          color: #000;
        }

        .lightbox-prev {
          left: 1rem;
        }

        .lightbox-next {
          right: 1rem;
        }

        .lightbox-content {
          position: relative;
          width: 90%;
          height: 80%;
          max-width: 1200px;
        }

        .lightbox-image {
          object-fit: contain;
        }

        .lightbox-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          padding: 2rem 1.5rem 1.5rem;
          text-align: center;
        }

        .lightbox-caption h3 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .lightbox-caption p {
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
          color: rgba(255, 255, 255, 0.8);
        }

        .lightbox-counter {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          color: #d4af37;
          font-size: 0.875rem;
          border-radius: 3px;
        }

        @media (max-width: 768px) {
          .lightbox-nav {
            padding: 0.5rem;
          }

          .lightbox-prev {
            left: 0.5rem;
          }

          .lightbox-next {
            right: 0.5rem;
          }

          .lightbox-caption h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
