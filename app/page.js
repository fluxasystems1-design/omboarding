import Link from "next/link";

const landings = [
  {
    name: "Jesus Rodriguez",
    path: "/jesus-rodriguez",
    description: "Seguimiento de proyecto Fluxa Method",
  },
  {
    name: "Juan Pablo Moreno",
    path: "/juan-pablo-moreno",
    description: "Propuesta Comercial · Fluxa Launch y Fluxa Pro · @juan.moreno.fx · Junio 2026",
  },
  {
    name: "GAL'S Studio — Natalia Galvis",
    path: "/propuesta-natalia",
    description: "Método PDP Wellness™ · GAL'S DIGITAL $947 y GAL'S PRO $1,497 · @galstudio___",
  },
  {
    name: "ANAK — Barre by Anak",
    path: "/prototipoanak",
    description: "Protótipo landing de membresía fitness · Barre · Strength · Balance",
  },
  {
    name: "Veterinaria Caobos",
    path: "/propuesta-veterinaria-caobos",
    description: "Intercambio · sistema digital $2.697.000 COP · sin desembolso · Fluxa Systems",
  },
  {
    name: "RIFEX — Mejoras v2",
    path: "/propuesta-rifex-mejoras",
    description: "Daniel · rifex.app · Landing visual + ganadores · $2.499.000 COP · Fluxa Systems",
  },
  {
    name: "Essenza MD — Automatiza",
    path: "/propuesta-essenza-automatiza",
    description: "Sistema completo $12M COP · Homepage, chatbot unificado y reserva · Fluxa Systems",
  },
  {
    name: "Essenza MD — Dra. Ziul Pérez",
    path: "/propuesta-essenza-md",
    description: "Arquitectura digital y captación · BE YOU · BE YOU+ · Hydrash · Fluxa Systems",
  },
  {
    name: "Ronaldo Escandón — Alianza Chile",
    path: "/alianza-chile",
    description: "Alianza comercial B2B · Fluxa × Chile 2026 · Tú cierras, nosotros ejecutamos",
  },
  {
    name: "Dr. Leonardo Bello",
    path: "/dr-leonardo-bello",
    description: "Propuesta comercial y plan de ejecución",
  },
  {
    name: "Seguimiento Mes 1",
    path: "/seguimiento-bello",
    description: "Dr. Leonardo Bello · Reporte de avance FuncionA Plus · Junio 2025",
  },
  {
    name: "Roadmap Dr. Leonardo Bello",
    path: "/roadmap-doctor-bello",
    description: "Kickoff estratégico y mapa ejecutivo del proyecto",
  },
  {
    name: "Cuestionario Dr. Leonardo Bello",
    path: "/dr-leonardo-bello/brief",
    description: "Brief estratégico de diagnóstico y arranque",
  },
  {
    name: "Funciona+ creadores",
    path: "/funciona-creadores",
    description: "Reclutamiento privado de embajadores y creadores UGC",
  },
  {
    name: "Andrés Wolves — Ecosistema digital",
    path: "/propuesta-ecosistema-digital",
    description: "Propuesta privada · ecommerce, asesoramiento deportivo y fondo de inversión integrados",
  },
  {
    name: "Andrés Wolves — Trading",
    path: "/andres-wolves-trading",
    description: "Propuesta Andrés Wolves · Fluxa Launch $897 y Fluxa Pro $1,497 · @andres.wolves",
  },
  {
    name: "Tu Supermercado",
    path: "/supermercado",
    description: "Sistema digital para vender más (3 planes: Sistema, Páginas, Educación)",
  },
  {
    name: "Carolina Rojas",
    path: "/carolina-rojas",
    description: "Ecosistema digital para monetizar audiencia",
  },
  {
    name: "Brief Anak Karina Lozano",
    path: "/anak-karina-lozano/brief",
    description: "Brief femenino de marca, bienestar y crecimiento",
  },
  {
    name: "Ecosistema Panther — Lorena Perch",
    path: "/propuesta-ecosistema-panther",
    description: "Arquitectura digital · Paquete Completo $1,797 + Sanctuary $897 · Partnersflux",
  },
  {
    name: "FonoPatipo — Patricia Porras",
    path: "/propuesta-fonopatipo",
    description: "Página + checkout + cursos · desde $3.499.000 COP · Sistema completo $4.999.000 · Partnersflux",
  },
  {
    name: "Jean",
    path: "/jean",
    description: "Dos empresas, un ecosistema digital en 90 días",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-extrabold sm:text-4xl">Selecciona una landing</h1>
        <p className="mt-3 text-center text-zinc-400">
          Pulsa el botón de la propuesta que quieras abrir.
        </p>

        <div className="mt-8 grid gap-4">
          {landings.map((landing) => (
            <article
              key={landing.path}
              className="rounded-xl border border-zinc-700 bg-[#111111] p-5"
            >
              <h2 className="text-xl font-bold">{landing.name}</h2>
              <p className="mt-1 text-sm text-zinc-400">{landing.description}</p>
              <Link
                href={landing.path}
                className="mt-4 inline-flex rounded-lg border border-yellow-400 px-5 py-2 font-semibold text-yellow-300 transition hover:bg-yellow-400/10"
              >
                Ir a {landing.path}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
