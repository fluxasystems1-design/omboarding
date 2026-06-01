/** Config exclusiva — Andrés Wolves (/andres-wolves-trading) */

export const ANDRES_WOLVES_PACKAGE_COMPARISON = [
  { feature: "Landing page con VSL estratégico", paquete1: true, paquete2: true },
  { feature: "Guion VSL listo para grabar", paquete1: true, paquete2: true },
  { feature: "Bot de bienvenida WhatsApp / Instagram", paquete1: true, paquete2: true },
  { feature: "Automatización básica de entrada", paquete1: true, paquete2: true },
  { feature: "Píxeles Meta y analítica instalados", paquete1: true, paquete2: true },
  { feature: "Meta Ads configurado", paquete1: true, paquete2: true },
  { feature: "Creativos para campañas", paquete1: "3 estáticos", paquete2: "5 + video" },
  { feature: "Segmentación traders Forex & Crypto (LATAM)", paquete1: true, paquete2: true },
  { feature: "Arquitectura de embudos por perfil del prospecto", paquete1: true, paquete2: true },
  { feature: "Soporte WhatsApp en días hábiles (2 meses)", paquete1: true, paquete2: true },
  { feature: "Comunidad Skool completa (canales, onboarding y retos)", paquete1: false, paquete2: true },
  { feature: "Segunda landing mentoría 1:1 con agenda integrada", paquete1: false, paquete2: true },
  { feature: "Embudo de nutrición automatizado (5 mensajes)", paquete1: false, paquete2: true },
  { feature: "Estrategia de contenido 60 días", paquete1: false, paquete2: true },
  { feature: "Gestión activa de comunidad (2 meses)", paquete1: false, paquete2: true },
  { feature: "Optimización semanal de campañas según datos", paquete1: false, paquete2: true },
  { feature: "Sesiones estratégicas mensuales con datos reales", paquete1: false, paquete2: "2 / mes" },
  { feature: "Soporte post-entrega (30 días)", paquete1: false, paquete2: true },
];

const WA_BASE = "https://wa.me/573116425337?text=";

export const ANDRES_WOLVES_CONFIG = {
  cliente: "Andrés Wolves",
  clienteCorto: "Andrés Wolves",
  instagram: "@andres.wolves",
  fecha: "Junio 2026",
  waUrl:
    WA_BASE +
    encodeURIComponent(
      "Hola Fluxa Method. Soy Andrés Wolves, revisé la propuesta de trading y quiero coordinar el siguiente paso."
    ),
  packageComparison: ANDRES_WOLVES_PACKAGE_COMPARISON,
  hideDiagnostico: true,
};
