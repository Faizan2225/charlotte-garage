"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Extend Window interface for jQuery and custom scripts
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jQuery: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Swiper: any;
    init_scroll_navigate: () => void;
    init: () => void;
  }
}

export default function ScriptReinitializer() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Reinitialize scripts after navigation
    const reinitializeScripts = () => {
      // Check if jQuery and required plugins are loaded
      if (typeof window !== "undefined" && window.$) {
        const $ = window.$;

        // Destroy existing jarallax instances
        if ($.fn.jarallax) {
          $(".jarallax").jarallax("destroy");
        }

        // Reset body/html min-height that might be set by jarallax
        $("body, html").css({
          height: "",
          minHeight: "",
        });

        // Reset wrapper height
        $("#wrapper").css({
          height: "",
          minHeight: "",
        });

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          // Reinitialize Jarallax
          if ($.fn.jarallax) {
            $(".jarallax").jarallax({
              speed: 0.2,
            });
          }

          // Reinitialize Swiper if exists
          if (window.Swiper) {
            // Let the custom swiper scripts handle initialization
            const swiperEvent = new Event("reinit-swiper");
            window.dispatchEvent(swiperEvent);
          }

          // Reinitialize other plugins
          if ($.fn.magnificPopup) {
            $(".image-popup-gallery").magnificPopup({
              type: "image",
              gallery: {
                enabled: true,
              },
            });
          }

          // Force layout recalculation
          window.dispatchEvent(new Event("resize"));

          // Trigger scroll event to fix any scroll-related animations
          $(window).trigger("scroll");

          // Reinitialize any scroll-based animations
          if (typeof window.init_scroll_navigate === "function") {
            window.init_scroll_navigate();
          }

          // Re-trigger designesia initialization if available
          if (typeof window.init === "function") {
            window.init();
          }
        }, 100);
      }
    };

    reinitializeScripts();
  }, [pathname]);

  return null;
}
