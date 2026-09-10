export type GalleryCategory = "all" | "repairs" | "installations" | "openers" | "springs";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  description?: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: "/images/spring-repair/IMG_0770.jpg",
    alt: "Garage Door Spring Replacement Project",
    category: "springs",
    title: "Torsion Spring Assembly",
    description: "High-cycle dual spring installation and tension balancing",
  },
  {
    id: 2,
    src: "/images/opener-repair/IMG_0766.jpg",
    alt: "Garage Door Opener Chain Drive Sprocket",
    category: "openers",
    title: "Opener Chain Drive Sprocket",
    description: "Heavy-duty chain drive gear alignment and sprocket service",
  },
  {
    id: 3,
    src: "/images/garage-door-installation/IMG_8499.jpg",
    alt: "Residential Garage Door Installation",
    category: "installations",
    title: "Sectional Garage Door Installation",
    description: "Insulated steel garage door replacement with window inserts",
  },
  {
    id: 4,
    src: "/images/garage-door-repair/IMG_8965.jpg",
    alt: "Emergency Garage Door Off Track Repair",
    category: "repairs",
    title: "Emergency Off-Track Repair",
    description: "Same-day emergency response for derailed garage door panel reset",
  },
  {
    id: 5,
    src: "/images/opener-repair/IMG_0764.jpg",
    alt: "Genie Smart Garage Door Opener Installation",
    category: "openers",
    title: "Genie 2028 Opener Installation",
    description: "Professional Genie ceiling mount opener installation",
  },
  {
    id: 6,
    src: "/images/garage-door-repair/IMG_0068.jpg",
    alt: "Garage Door Track Realignment & Maintenance",
    category: "repairs",
    title: "Track Realignment & Inspection",
    description: "Complete track balance, hinge tightening, and roller service",
  },
  {
    id: 7,
    src: "/images/garage-door-installation/IMG_9515.jpg",
    alt: "Arched Window Carriage House Garage Door",
    category: "installations",
    title: "Carriage House Door Upgrade",
    description: "Thermal insulated sectional garage door with decorative glass",
  },
  {
    id: 8,
    src: "/images/spring-repair/IMG_0777.jpg",
    alt: "Broken Torsion Spring Replacement",
    category: "springs",
    title: "Broken Spring Replacement",
    description: "Heavy-duty oil-tempered spring replacement and safety test",
  },
  {
    id: 9,
    src: "/images/cable-repair/IMG_9518.jpg",
    alt: "Garage Door Cable & Drum Repair",
    category: "repairs",
    title: "Cable Drum & Tension Service",
    description: "Precision cable spooling and drum assembly replacement",
  },
];

export const categoryLabels: Record<GalleryCategory, string> = {
  all: "All Projects",
  repairs: "Door Repairs",
  installations: "Installations",
  openers: "Opener Service",
  springs: "Spring Repair",
};

