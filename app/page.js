import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Landing de seguimiento lista</h1>
        <p className="mt-3 text-zinc-400">Abre la ruta del cliente para verla completa.</p>
        <Link
          href="/jesus-rodriguez"
          className="mt-6 inline-flex rounded-lg border border-yellow-400 px-5 py-2 font-semibold text-yellow-300 transition hover:bg-yellow-400/10"
        >
          Ir a /jesus-rodriguez
        </Link>
      </div>
    </main>
  );
}
