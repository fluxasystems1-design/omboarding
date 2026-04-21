"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const STEPS = [
  { id: 1, title: "Marca e identidad" },
  { id: 2, title: "Suplementos FuncionA+" },
  { id: 3, title: "Cursos y libros" },
  { id: 4, title: "Consultas 1:1" },
  { id: 5, title: "Accesos requeridos" },
  { id: 6, title: "Para cerrar" },
];

const ACCESOS_OPTIONS = [
  "Dominio web (credenciales del registrador)",
  "Hosting o cuenta Vercel",
  "Meta Business Suite — acceso administrador",
  "Cuenta Wompi o Bold (pasarela de pago)",
  "Email corporativo",
  "Acceso Instagram como negocio",
  "Carpeta de imágenes, videos y activos de marca",
  "Cuenta Hotmart u otra plataforma de cursos",
];

const initialForm = {
  colores: "",
  fuentes: "",
  tono: "",
  percepcion: "",
  suplemento1: "",
  suplemento2: "",
  suplemento3: "",
  descripcionSupl: "",
  variantesSupl: "",
  cursos: "",
  libros: "",
  precioConsulta: "",
  duracionConsulta: "",
  modalidad: "",
  tieneCalendly: "",
  linkCalendly: "",
  accesos: [],
  accesosFaltantes: "",
  infoAdicional: "",
  resultadoEsperado: "",
};

const inputBase =
  "w-full rounded-lg border bg-[#111111] px-3 py-2.5 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:ring-1 sm:text-base";
const borderNormal = "border-[#333333] focus:border-[#FFD600] focus:ring-[#FFD600]";
const borderError = "border-red-500 focus:border-red-500 focus:ring-red-500";

function validateStep(step, form) {
  const err = {};

  const req = (key, msg = "Este campo es obligatorio") => {
    const v = form[key];
    if (v == null || String(v).trim() === "") err[key] = msg;
  };

  if (step === 1) {
    req("colores");
    req("fuentes");
    if (!form.tono) err.tono = "Seleccione una opción";
    req("percepcion");
  }

  if (step === 2) {
    req("suplemento1");
    req("suplemento2");
    req("suplemento3");
    req("descripcionSupl");
  }

  if (step === 3) {
    req("cursos");
    req("libros");
  }

  if (step === 4) {
    req("precioConsulta");
    req("duracionConsulta");
    if (!form.modalidad) err.modalidad = "Seleccione una opción";
    if (!form.tieneCalendly) err.tieneCalendly = "Seleccione una opción";
  }

  if (step === 5) {
    req("accesosFaltantes");
  }

  if (step === 6) {
    req("infoAdicional");
    req("resultadoEsperado");
  }

  return err;
}

export default function BriefBelloPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const progressPct = useMemo(() => {
    if (step >= 7) return 100;
    return Math.round((step / 6) * 100);
  }, [step]);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const toggleAcceso = (label) => {
    setForm((prev) => {
      const set = new Set(prev.accesos);
      if (set.has(label)) set.delete(label);
      else set.add(label);
      return { ...prev, accesos: Array.from(set) };
    });
  };

  const fieldClass = (key) => `${inputBase} ${errors[key] ? borderError : borderNormal}`;

  const goNext = () => {
    setSubmitError("");
    const e = validateStep(step, form);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    if (step < 6) setStep((s) => s + 1);
  };

  const goPrev = () => {
    setSubmitError("");
    setErrors({});
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setSubmitError("");
    const e = validateStep(6, form);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/brief-bello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) {
        setSubmitError(data.error || "No se pudo enviar. Intente de nuevo.");
        return;
      }
      setStep(7);
    } catch {
      setSubmitError("Error de red. Verifique su conexión.");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 7) {
    return (
      <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <div className="check-bounce mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#FFD600] bg-[#111111] shadow-[0_0_30px_rgba(255,214,0,0.35)]">
            <svg className="h-10 w-10 text-[#FFD600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path className="check-draw" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold sm:text-3xl">¡Listo, Dr. Bello!</h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Recibimos toda su información. Nos pondremos en contacto en las próximas 24 horas hábiles para confirmar la fecha de kick-off.
          </p>
          <p className="mt-6 text-lg font-semibold text-[#FFD600]">Bienvenido a Fluxa Method.</p>
          <Link
            href="/dr-leonardo-bello"
            className="mt-10 inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-[#FFD600] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(255,214,0,0.3)] sm:w-auto"
          >
            Volver a la propuesta
          </Link>
        </div>
        <style jsx>{`
          @keyframes checkDraw {
            from {
              stroke-dashoffset: 24;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes bounceIn {
            0% {
              transform: scale(0.85);
              opacity: 0;
            }
            60% {
              transform: scale(1.05);
              opacity: 1;
            }
            100% {
              transform: scale(1);
            }
          }
          .check-bounce {
            animation: bounceIn 0.6s ease-out both;
          }
          .check-draw {
            stroke-dasharray: 24;
            stroke-dashoffset: 24;
            animation: checkDraw 0.45s ease-out 0.25s forwards;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 pb-12 pt-8 text-white sm:px-6 sm:pt-12">
      <div className="mx-auto max-w-xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD600]">Brief de arranque</p>
        <h1 className="mt-2 text-center text-xl font-extrabold sm:text-2xl">Dr. Leonardo Bello</h1>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-xs text-zinc-400">
            <span>
              Paso {step} de 6
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-[#FFD600] transition-all duration-300 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-zinc-200">{STEPS[step - 1]?.title}</p>
        </div>

        <div className="mt-8 space-y-5">
          {step === 1 && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">¿Cuáles son los colores de su marca? (HEX si los tiene, o descríbalos)</label>
                <textarea
                  rows={3}
                  value={form.colores}
                  onChange={(e) => update("colores", e.target.value)}
                  className={fieldClass("colores")}
                  placeholder="Ej: #0B2A4A, blanco, acento dorado…"
                />
                {errors.colores && <p className="mt-1 text-xs text-red-400">{errors.colores}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">¿Qué fuentes o tipografías usa actualmente?</label>
                <input type="text" value={form.fuentes} onChange={(e) => update("fuentes", e.target.value)} className={fieldClass("fuentes")} placeholder="Ej: Inter, system-ui…" />
                {errors.fuentes && <p className="mt-1 text-xs text-red-400">{errors.fuentes}</p>}
              </div>
              <div>
                <span className="mb-2 block text-sm font-medium text-zinc-200">Tono de comunicación</span>
                <div className="space-y-2">
                  {["Formal y académico", "Cercano y educativo", "Motivacional y aspiracional", "Una combinación"].map((opt) => (
                    <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#333333] bg-[#111111] px-3 py-2.5 has-[:checked]:border-[#FFD600]">
                      <input
                        type="radio"
                        name="tono"
                        checked={form.tono === opt}
                        onChange={() => update("tono", opt)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#FFD600]"
                      />
                      <span className="text-sm text-zinc-200">{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.tono && <p className="mt-1 text-xs text-red-400">{errors.tono}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">¿Cómo quiere que sus clientes lo perciban al llegar a su web o ver su contenido?</label>
                <textarea
                  rows={4}
                  value={form.percepcion}
                  onChange={(e) => update("percepcion", e.target.value)}
                  className={fieldClass("percepcion")}
                  placeholder="Confianza, autoridad, cercanía…"
                />
                {errors.percepcion && <p className="mt-1 text-xs text-red-400">{errors.percepcion}</p>}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Magnesio: nombre exacto, precio COP y presentación</label>
                <input type="text" value={form.suplemento1} onChange={(e) => update("suplemento1", e.target.value)} className={fieldClass("suplemento1")} />
                {errors.suplemento1 && <p className="mt-1 text-xs text-red-400">{errors.suplemento1}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Omega 3: nombre exacto, precio COP y presentación</label>
                <input type="text" value={form.suplemento2} onChange={(e) => update("suplemento2", e.target.value)} className={fieldClass("suplemento2")} />
                {errors.suplemento2 && <p className="mt-1 text-xs text-red-400">{errors.suplemento2}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Creatina: nombre exacto, precio COP y presentación</label>
                <input type="text" value={form.suplemento3} onChange={(e) => update("suplemento3", e.target.value)} className={fieldClass("suplemento3")} />
                {errors.suplemento3 && <p className="mt-1 text-xs text-red-400">{errors.suplemento3}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Para cada suplemento: para qué sirve, a quién va dirigido y su beneficio principal</label>
                <textarea rows={5} value={form.descripcionSupl} onChange={(e) => update("descripcionSupl", e.target.value)} className={fieldClass("descripcionSupl")} />
                {errors.descripcionSupl && <p className="mt-1 text-xs text-red-400">{errors.descripcionSupl}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">¿Hay variantes? (sabores, tamaños) — (opcional)</label>
                <input
                  type="text"
                  value={form.variantesSupl}
                  onChange={(e) => update("variantesSupl", e.target.value)}
                  className={`${inputBase} ${errors.variantesSupl ? borderError : borderNormal}`}
                  placeholder="Si no, escriba No"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Liste sus cursos: nombre, precio, plataforma y descripción de una línea cada uno</label>
                <textarea rows={6} value={form.cursos} onChange={(e) => update("cursos", e.target.value)} className={fieldClass("cursos")} />
                {errors.cursos && <p className="mt-1 text-xs text-red-400">{errors.cursos}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Liste sus libros: título, link de venta y de qué trata cada uno</label>
                <textarea rows={6} value={form.libros} onChange={(e) => update("libros", e.target.value)} className={fieldClass("libros")} />
                {errors.libros && <p className="mt-1 text-xs text-red-400">{errors.libros}</p>}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Precio de la consulta 1:1 (COP o USD)</label>
                <input type="text" value={form.precioConsulta} onChange={(e) => update("precioConsulta", e.target.value)} className={fieldClass("precioConsulta")} />
                {errors.precioConsulta && <p className="mt-1 text-xs text-red-400">{errors.precioConsulta}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Duración de cada sesión (ej: 60 minutos)</label>
                <input type="text" value={form.duracionConsulta} onChange={(e) => update("duracionConsulta", e.target.value)} className={fieldClass("duracionConsulta")} />
                {errors.duracionConsulta && <p className="mt-1 text-xs text-red-400">{errors.duracionConsulta}</p>}
              </div>
              <div>
                <span className="mb-2 block text-sm font-medium text-zinc-200">Modalidad</span>
                <div className="space-y-2">
                  {["Zoom", "Google Meet", "Presencial", "Varias"].map((opt) => (
                    <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#333333] bg-[#111111] px-3 py-2.5 has-[:checked]:border-[#FFD600]">
                      <input
                        type="radio"
                        name="modalidad"
                        checked={form.modalidad === opt}
                        onChange={() => update("modalidad", opt)}
                        className="mt-0.5 h-4 w-4 accent-[#FFD600]"
                      />
                      <span className="text-sm text-zinc-200">{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.modalidad && <p className="mt-1 text-xs text-red-400">{errors.modalidad}</p>}
              </div>
              <div>
                <span className="mb-2 block text-sm font-medium text-zinc-200">Calendly / agenda</span>
                <div className="space-y-2">
                  {["Sí, tengo cuenta activa", "No todavía", "Uso otra herramienta"].map((opt) => (
                    <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#333333] bg-[#111111] px-3 py-2.5 has-[:checked]:border-[#FFD600]">
                      <input
                        type="radio"
                        name="tieneCalendly"
                        checked={form.tieneCalendly === opt}
                        onChange={() => update("tieneCalendly", opt)}
                        className="mt-0.5 h-4 w-4 accent-[#FFD600]"
                      />
                      <span className="text-sm text-zinc-200">{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.tieneCalendly && <p className="mt-1 text-xs text-red-400">{errors.tieneCalendly}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">Link de Calendly u otra herramienta (opcional)</label>
                <input
                  type="text"
                  value={form.linkCalendly}
                  onChange={(e) => update("linkCalendly", e.target.value)}
                  className={`${inputBase} ${errors.linkCalendly ? borderError : borderNormal}`}
                  placeholder="Si no tiene, escriba No aplica"
                />
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <div>
                <span className="mb-2 block text-sm font-medium text-zinc-200">Marque los accesos que ya puede compartir</span>
                <div className="space-y-2">
                  {ACCESOS_OPTIONS.map((opt) => (
                    <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#333333] bg-[#111111] px-3 py-2.5 has-[:checked]:border-[#FFD600]">
                      <input
                        type="checkbox"
                        checked={form.accesos.includes(opt)}
                        onChange={() => toggleAcceso(opt)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#333333] bg-[#111111] accent-[#FFD600]"
                      />
                      <span className="text-sm text-zinc-200">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">
                  ¿Algún acceso que NO tiene o necesita ayuda para configurar? (Si todo está listo, escriba: Todo listo)
                </label>
                <textarea rows={4} value={form.accesosFaltantes} onChange={(e) => update("accesosFaltantes", e.target.value)} className={fieldClass("accesosFaltantes")} />
                {errors.accesosFaltantes && <p className="mt-1 text-xs text-red-400">{errors.accesosFaltantes}</p>}
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">¿Hay algo sobre su negocio o audiencia que no hayamos preguntado?</label>
                <textarea rows={5} value={form.infoAdicional} onChange={(e) => update("infoAdicional", e.target.value)} className={fieldClass("infoAdicional")} />
                {errors.infoAdicional && <p className="mt-1 text-xs text-red-400">{errors.infoAdicional}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-200">¿Cuál es el resultado que más le emociona lograr en estos 3 meses?</label>
                <textarea rows={5} value={form.resultadoEsperado} onChange={(e) => update("resultadoEsperado", e.target.value)} className={fieldClass("resultadoEsperado")} />
                {errors.resultadoEsperado && <p className="mt-1 text-xs text-red-400">{errors.resultadoEsperado}</p>}
              </div>
            </>
          )}
        </div>

        {submitError && <p className="mt-6 text-center text-sm text-red-400">{submitError}</p>}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={step === 1}
            className="order-2 rounded-xl border border-[#333333] bg-transparent px-5 py-3 text-sm font-bold text-white transition enabled:hover:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-40 sm:order-1"
          >
            Anterior
          </button>
          {step < 6 ? (
            <button
              type="button"
              onClick={goNext}
              className="order-1 rounded-xl bg-[#FFD600] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_0_18px_rgba(255,214,0,0.25)] sm:order-2 sm:ml-auto"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="order-1 rounded-xl bg-[#FFD600] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_0_18px_rgba(255,214,0,0.25)] disabled:opacity-60 sm:order-2 sm:ml-auto"
            >
              {submitting ? "Enviando…" : "Enviar"}
            </button>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          <Link href="/dr-leonardo-bello" className="text-[#FFD600] underline-offset-2 hover:underline">
            Volver a la propuesta
          </Link>
        </p>
      </div>
    </main>
  );
}
