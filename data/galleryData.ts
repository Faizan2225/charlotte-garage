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
    src: "/images/IMG_0764.jpg",
    alt: "Garage Door Spring Replacement Project",
    category: "springs",
    title: "Torsion Spring Replacement",
    description: "High-cycle dual spring installation and tension balancing",
  },
  {
    id: 2,
    src: "/images/IMG_0766.jpg",
    alt: "Garage Door Track Alignment and Cable Repair",
    category: "repairs",
    title: "Track & Cable Realignment",
    description: "Heavy-duty steel cable rethreading and track balance adjustment",
  },
  {
    id: 3,
    src: "/images/IMG_0769.jpg",
    alt: "Residential Garage Door Installation",
    category: "installations",
    title: "Modern Carriage House Door Installation",
    description: "Insulated steel garage door replacement with decorative hardware",
  },
  {
    id: 4,
    src: "/images/IMG_0770.jpg",
    alt: "Emergency Garage Door Off Track Repair",
    category: "repairs",
    title: "Emergency Off-Track Repair",
    description: "Same-day emergency response for derailed garage door panel reset",
  },
  {
    id: 5,
    src: "/images/IMG_0068.jpg",
    alt: "Smart Garage Door Opener Installation",
    category: "openers",
    title: "Smart Wi-Fi Opener Installation",
    description: "Whisper-quiet belt drive opener with smartphone remote control",
  },
  {
    id: 6,
    src: "/images/IMG_0774.jpg",
    alt: "Garage Door Opener Motor Repair",
    category: "openers",
    title: "Opener Motor & Gear Repair",
    description: "Replacement drive gear and limit switch calibration",
  },
  {
    id: 7,
    src: "/images/IMG_0777.jpg",
    alt: "New Residential Double Garage Door",
    category: "installations",
    title: "Double Car Garage Door Upgrade",
    description: "Thermal insulated sectional garage door installation",
  },
  {
    id: 8,
    src: "/images/IMG_0778.jpg",
    alt: "High Tension Torsion Spring Repair",
    category: "springs",
    title: "Extension Spring Replacement",
    description: "Safety cable and extension spring conversion",
  },
];

export const categoryLabels: Record<GalleryCategory, string> = {
  all: "All Projects",
  repairs: "Door Repairs",
  installations: "Installations",
  openers: "Opener Service",
  springs: "Spring Repair",
};

