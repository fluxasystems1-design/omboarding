"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BRIEF_SECTIONS = [
  {
    id: 1,
    title: "Vision general",
    fields: [
      { key: "q01", label: "1. Nombre principal de la marca que desea impulsar", type: "text", required: true },
      {
        key: "q02",
        label: "2. ¿Que linea desea crecer primero?",
        type: "radio",
        required: true,
        options: ["Funciona+ suplementos", "Membresia", "Curso digital", "Marca personal general"],
      },
      { key: "q03", label: "3. ¿Cual es hoy su principal fuente de ingresos?", type: "textarea", rows: 3, required: true },
      { key: "q04", label: "4. ¿Que resultado principal le gustaria lograr en los proximos 90 dias?", type: "textarea", rows: 3, required: true },
      { key: "q05", label: "5. ¿Que meta importante le gustaria alcanzar este ano con la marca?", type: "text", required: true },
      { key: "q06", label: "6. ¿Que tan urgente le gustaria mover este proyecto?", type: "radio", required: true, options: ["Inmediato", "Este mes", "Proximo trimestre"] },
    ],
  },
  {
    id: 2,
    title: "Audiencia y redes",
    fields: [
      { key: "q07", label: "7. ¿Cuales son hoy sus redes sociales mas activas?", type: "text", required: true },
      { key: "q08", label: "8. ¿Cual red siente que mejor le funciona actualmente?", type: "text", required: true },
      { key: "q09", label: "9. ¿Que tipo de personas mas le compran o consultan hoy?", type: "textarea", rows: 3, required: true },
      { key: "q10", label: "10. ¿Que tipo de audiencia le gustaria atraer mas?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 3,
    title: "Funciona+ (suplementos)",
    fields: [
      { key: "q11", label: "11. ¿Cual suplemento desea impulsar primero?", type: "text", required: true },
      { key: "q12", label: "12. Beneficio principal de cada suplemento actual", type: "textarea", rows: 3, required: true },
      { key: "q13", label: "13. Precio actual de cada producto", type: "text", required: true },
      { key: "q14", label: "14. ¿Cual vende mas hoy?", type: "text", required: true },
      { key: "q15", label: "15. ¿Cual considera mas rentable hoy?", type: "text", required: true },
      { key: "q16", label: "16. ¿Tiene inventario disponible actualmente?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q17", label: "17. Tiempo promedio de entrega nacional", type: "text", required: true },
      { key: "q18", label: "18. ¿Que duda u objecion mas comun pone la gente antes de comprar?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 4,
    title: "Membresia",
    fields: [
      { key: "q19", label: "19. ¿Que resultado le gustaria ayudar a conseguir a las personas dentro de la membresia?", type: "textarea", rows: 3, required: true },
      { key: "q20", label: "20. ¿Que temas incluiria?", type: "textarea", rows: 3, required: true },
      {
        key: "q21",
        label: "21. ¿Como le gustaria manejarla?",
        type: "radio",
        required: true,
        options: ["Comunidad privada", "Clases en vivo", "Biblioteca grabada", "Mixto"],
      },
      {
        key: "q22",
        label: "22. ¿Le gustaria una membresia de nivel?",
        type: "radio",
        required: true,
        options: ["Accesible", "Intermedia", "Premium"],
      },
      { key: "q23", label: "23. ¿Ya hay personas interesadas en entrar?", type: "radio", required: true, options: ["Si", "No"] },
    ],
  },
  {
    id: 5,
    title: "Curso digital",
    fields: [
      { key: "q24", label: "24. ¿Cual seria el primer curso ideal para lanzar?", type: "text", required: true },
      { key: "q25", label: "25. ¿Que aprenderia o lograria una persona con ese curso?", type: "textarea", rows: 3, required: true },
      { key: "q26", label: "26. ¿Ya tiene material grabado o seria desde cero?", type: "text", required: true },
      {
        key: "q27",
        label: "27. ¿Le gustaria que el primer curso sea de nivel?",
        type: "radio",
        required: true,
        options: ["Entrada economica", "Intermedio", "Premium"],
      },
      { key: "q28", label: "28. Formato ideal:", type: "radio", required: true, options: ["Grabado", "En vivo", "Mixto"] },
      { key: "q29", label: "29. ¿Cree que ya tiene personas interesadas en comprarlo?", type: "radio", required: true, options: ["Si", "No"] },
    ],
  },
  {
    id: 6,
    title: "Autoridad y contenido",
    fields: [
      { key: "q30", label: "30. ¿Que cree que lo diferencia frente a otros profesionales del sector?", type: "textarea", rows: 3, required: true },
      { key: "q31", label: "31. ¿Que temas domina mas que la mayoria?", type: "textarea", rows: 3, required: true },
      { key: "q32", label: "32. ¿Tiene testimonios disponibles?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q33", label: "33. ¿Esta dispuesto a grabar contenido semanal?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q34", label: "34. ¿Cuantas horas por semana puede dedicar al proyecto?", type: "text", required: true },
    ],
  },
  {
    id: 7,
    title: "Crecimiento y publicidad",
    fields: [
      { key: "q35", label: "35. ¿Ha invertido antes en publicidad digital?", type: "radio", required: true, options: ["Si", "No"] },
      {
        key: "q36",
        label: "36. ¿Que rango mensual estaria comodo invirtiendo inicialmente en publicidad?",
        type: "radio",
        required: true,
        options: ["Bajo", "Medio", "Alto"],
      },
      { key: "q37", label: "37. ¿Que siente que hoy mas frena el crecimiento del negocio?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 8,
    title: "Activos disponibles",
    fields: [
      { key: "q38", label: "38. ¿Tiene logo en alta calidad?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q39", label: "39. ¿Tiene fotos profesionales suyas?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q40", label: "40. ¿Tiene fotos profesionales de productos?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q41", label: "41. ¿Tiene videos grabados reutilizables?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q42", label: "42. ¿Tiene base de datos de clientes (WhatsApp o correos)?", type: "radio", required: true, options: ["Si", "No"] },
    ],
  },
  {
    id: 9,
    title: "Operacion y comunicacion",
    fields: [
      { key: "q43", label: "43. ¿Quien puede apoyarlo internamente con materiales o gestion?", type: "textarea", rows: 3, required: true },
      { key: "q44", label: "44. Mejor canal de comunicacion", type: "text", required: true },
      { key: "q45", label: "45. Horarios ideales para reuniones", type: "text", required: true },
    ],
  },
  {
    id: 10,
    title: "Prioridades finales",
    fields: [
      { key: "q46", label: "46. Si solo resolvemos una cosa primero, ¿cual seria?", type: "textarea", rows: 3, required: true },
      { key: "q47", label: "47. ¿Que no le gustaria que ocurra con este proyecto?", type: "textarea", rows: 3, required: true },
      { key: "q48", label: "48. Si este proyecto sale muy bien, ¿que le gustaria haber logrado este ano?", type: "textarea", rows: 4, required: true },
    ],
  },
];

const initialForm = Object.fromEntries(BRIEF_SECTIONS.flatMap((section) => section.fields.map((field) => [field.key, ""])));

const inputBase =
  "w-full rounded-lg border bg-[#111111] px-3 py-2.5 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:ring-1 sm:text-base";
const borderNormal = "border-[#333333] focus:border-[#FFD600] focus:ring-[#FFD600]";
const borderError = "border-red-500 focus:border-red-500 focus:ring-red-500";

function validateStep(step, form) {
  const err = {};
  const section = BRIEF_SECTIONS[step - 1];
  if (!section) return err;
  section.fields.forEach((field) => {
    if (!field.required) return;
    const value = form[field.key];
    if (value == null || String(value).trim() === "") err[field.key] = "Este campo es obligatorio";
  });

  return err;
}

export default function BriefBelloPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const totalSteps = BRIEF_SECTIONS.length;
  const currentSection = BRIEF_SECTIONS[step - 1];

  const progressPct = useMemo(() => {
    if (step > totalSteps) return 100;
    return Math.round((step / totalSteps) * 100);
  }, [step, totalSteps]);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
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
    if (step < totalSteps) setStep((s) => s + 1);
  };

  const goPrev = () => {
    setSubmitError("");
    setErrors({});
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setSubmitError("");
    const e = validateStep(totalSteps, form);
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
      setStep(totalSteps + 1);
    } catch {
      setSubmitError("Error de red. Verifique su conexión.");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === totalSteps + 1) {
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
              Paso {step} de {totalSteps}
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-[#FFD600] transition-all duration-300 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-zinc-200">{currentSection?.title}</p>
        </div>

        <div className="mt-8 space-y-5">
          {currentSection?.fields.map((field) => (
            <div key={field.key}>
              {field.type === "radio" ? (
                <>
                  <span className="mb-2 block text-sm font-medium text-zinc-200">{field.label}</span>
                  <div className="space-y-2">
                    {field.options.map((opt) => (
                      <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#333333] bg-[#111111] px-3 py-2.5 has-[:checked]:border-[#FFD600]">
                        <input
                          type="radio"
                          name={field.key}
                          checked={form[field.key] === opt}
                          onChange={() => update(field.key, opt)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#FFD600]"
                        />
                        <span className="text-sm text-zinc-200">{opt}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : field.type === "textarea" ? (
                <>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-200">{field.label}</label>
                  <textarea
                    rows={field.rows || 4}
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className={fieldClass(field.key)}
                  />
                </>
              ) : (
                <>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-200">{field.label}</label>
                  <input type="text" value={form[field.key]} onChange={(e) => update(field.key, e.target.value)} className={fieldClass(field.key)} />
                </>
              )}
              {errors[field.key] && <p className="mt-1 text-xs text-red-400">{errors[field.key]}</p>}
            </div>
          ))}
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
          {step < totalSteps ? (
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
