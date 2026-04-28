import Link from "next/link";

const landings = [
  {
    name: "Jesus Rodriguez",
    path: "/jesus-rodriguez",
    description: "Seguimiento de proyecto Fluxa Method",
  },
  {
    name: "Dr. Leonardo Bello",
    path: "/dr-leonardo-bello",
    description: "Propuesta comercial y plan de ejecución",
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
    name: "Eco-Dreamers Curití",
    path: "/eco-dreamers-curiti",
    description: "Ecosistema de reservas automáticas",
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
