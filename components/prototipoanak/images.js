const BASE = "/prototipoanak";

function file(name) {
  return `${BASE}/${encodeURIComponent(name)}`;
}

export const ANAK_LOGO = file("logo.png");

export const ANAK_IMAGES = {
  hero: file("WhatsApp Image 2026-06-29 at 8.37.11 AM.jpeg"),
  metodo: file("WhatsApp Image 2026-06-29 at 8.37.12 AM.jpeg"),
  clases: file("WhatsApp Image 2026-06-29 at 8.37.13 AM.jpeg"),
  testimonial1: file("WhatsApp Image 2026-06-29 at 8.37.13 AM (1).jpeg"),
  testimonial2: file("WhatsApp Image 2026-06-29 at 8.37.14 AM.jpeg"),
  testimonial3: file("WhatsApp Image 2026-06-29 at 8.37.14 AM (1).jpeg"),
};

export const ANAK_VIDEOS = [
  { title: "BARRE 1.1", duration: "36:54", image: file("WhatsApp Image 2026-06-29 at 8.37.11 AM.jpeg") },
  { title: "SCULPT 1.2", duration: "33:54", image: file("WhatsApp Image 2026-06-29 at 8.37.12 AM.jpeg") },
  { title: "CALMA 1.3", duration: "28:12", image: file("WhatsApp Image 2026-06-29 at 8.37.13 AM.jpeg") },
  { title: "FUERZA 1.4", duration: "41:08", image: file("WhatsApp Image 2026-06-29 at 8.37.13 AM (1).jpeg") },
  { title: "BARRE 2.1", duration: "35:20", image: file("WhatsApp Image 2026-06-29 at 8.37.13 AM (2).jpeg") },
  { title: "SCULPT 2.2", duration: "32:45", image: file("WhatsApp Image 2026-06-29 at 8.37.14 AM.jpeg") },
  { title: "FLOW 2.3", duration: "29:30", image: file("WhatsApp Image 2026-06-29 at 8.37.14 AM (2).jpeg") },
  { title: "RESET 2.4", duration: "24:18", image: file("WhatsApp Image 2026-06-29 at 8.37.14 AM (3).jpeg") },
];
