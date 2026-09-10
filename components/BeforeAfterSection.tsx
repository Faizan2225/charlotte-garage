"use client";

import { useEffect, useRef } from "react";

interface BeforeAfterSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  beforeLabel?: string;
  afterLabel?: string;
  reversed?: boolean;
}

export default function BeforeAfterSection({
  subtitle = "Real Results",
  title = "Before & After Transformation",
  description,
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  imageWidth = 800,
  imageHeight = 450,
  beforeLabel = "Before",
  afterLabel = "After",
  reversed = false,
}: BeforeAfterSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const initTwentyTwenty = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.twentytwenty &&
        containerRef.current &&
        !initializedRef.current
      ) {
        const $ = window.$;
        const $container = $(containerRef.current);

        // Check if images are loaded
        const images = $container.find("img");
        let loadedCount = 0;

        const tryInit = () => {
          loadedCount++;
          if (loadedCount >= images.length) {
            // Initialize twentytwenty
            $container.twentytwenty({
              default_offset_pct: 0.5,
              orientation: "horizontal",
              before_label: beforeLabel,
              after_label: afterLabel,
              no_overlay: false,
              move_slider_on_hover: false,
              move_with_handle_only: true,
              click_to_move: true,
            });
            initializedRef.current = true;
          }
        };

        // Use a standard for loop to avoid 'this' issues
        for (let i = 0; i < images.length; i++) {
          const img = images[i] as HTMLImageElement;
          if (img.complete) {
            tryInit();
          } else {
            $(img).on("load", tryInit);
          }
        }
      }
    };

    // Try to initialize after a short delay to ensure scripts are loaded
    const timer = setTimeout(initTwentyTwenty, 200);

    // Also listen for resize to reinitialize if needed
    const handleResize = () => {
      if (window.$ && containerRef.current && initializedRef.current) {
        window.$(window).trigger("resize.twentytwenty");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [beforeLabel, afterLabel]);

  const contentColumn = (
    <div className="col-lg-6">
      <div className="subtitle">{subtitle}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );

  const imageColumn = (
    <div className="col-lg-6">
      <div ref={containerRef} className="twentytwenty-container rounded-1">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="img-responsive"
          width={imageWidth}
          height={imageHeight}
        />
        <img
          src={afterImage}
          alt={afterAlt}
          className="img-responsive"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );

  return (
    <section>
      <div className="container">
        <div className="row g-4 align-items-center">
          {reversed ? (
            <>
              {imageColumn}
              {contentColumn}
            </>
          ) : (
            <>
              {contentColumn}
              {imageColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
