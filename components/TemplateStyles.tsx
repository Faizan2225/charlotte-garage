"use client";

export default function TemplateStyles() {
  // Load styles synchronously before render
  if (typeof document !== "undefined") {
    const stylesheets = [
      { id: "bootstrap", href: "/css/bootstrap.min.css" },
      { id: "plugins", href: "/css/plugins.css" },
      { id: "swiper", href: "/css/swiper.css" },
      { id: "style", href: "/css/style.css" },
      { id: "colors", href: "/css/colors/scheme-1.css" },
      { id: "custom-swiper", href: "/css/custom-swiper-1.css" },
    ];

    stylesheets.forEach(({ id, href }) => {
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }

  return null;
}
