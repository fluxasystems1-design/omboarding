"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const BRIEF_SECTIONS = [
  {
    id: 1,
    title: "Esencia de marca",
    fields: [
      { key: "q01", label: "1. Como te gustaria que una mujer se sienta despues de seguirte?", type: "textarea", rows: 3, required: true },
      { key: "q02", label: "2. Que significa para ti vivir de forma consciente?", type: "textarea", rows: 3, required: true },
      { key: "q03", label: "3. Que valores quieres transmitir siempre con tu marca?", type: "textarea", rows: 3, required: true },
      { key: "q04", label: "4. Que hace especial tu forma de ensenar bienestar?", type: "textarea", rows: 3, required: true },
      { key: "q05", label: "5. Que mensaje quisieras dejar en cada contenido?", type: "textarea", rows: 3, required: true },
      { key: "q06", label: "6. Que tipo de vida quieres inspirar con tu marca?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 2,
    title: "Tu historia y energia",
    fields: [
      { key: "q07", label: "7. Que parte de tu historia personal sientes importante compartir mas?", type: "textarea", rows: 3, required: true },
      { key: "q08", label: "8. Que experiencias te llevaron a interesarte por el bienestar?", type: "textarea", rows: 3, required: true },
      { key: "q09", label: "9. Que actividad te hace sentir mas tu?", type: "text", required: true },
      { key: "q10", label: "10. Que cosas hoy cuidas mas en tu vida (energia, alimentacion, habitos, entorno, etc.)?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 3,
    title: "Mujer ideal a quien quieres ayudar",
    fields: [
      { key: "q11", label: "11. Que tipo de mujer quieres atraer a tu comunidad?", type: "textarea", rows: 3, required: true },
      { key: "q12", label: "12. Que esta viviendo hoy esa mujer que quisieras ayudar a transformar?", type: "textarea", rows: 3, required: true },
      { key: "q13", label: "13. Que desea profundamente esa mujer?", type: "textarea", rows: 3, required: true },
      { key: "q14", label: "14. Que inseguridad o bloqueo vive hoy?", type: "textarea", rows: 3, required: true },
      { key: "q15", label: "15. Que tipo de energia o enfoque no conecta contigo?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 4,
    title: "Transformaciones que puedes generar",
    fields: [
      {
        key: "q16",
        label: "16. En que areas sientes que mas puedes ayudar?",
        type: "checkbox",
        required: true,
        options: [
          "Movimiento / cuerpo",
          "Postura",
          "Energia",
          "Habitos",
          "Autoestima",
          "Bienestar emocional",
          "Feminidad",
          "Alimentacion consciente",
          "Balance de vida",
        ],
      },
      { key: "q17", label: "17. Que cambios has visto en alumnas o personas cercanas gracias a tu guia?", type: "textarea", rows: 3, required: true },
      { key: "q18", label: "18. Que resultado disfrutas mas ayudar a lograr?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 5,
    title: "Membresia digital",
    fields: [
      { key: "q19", label: "19. Si crearas una membresia, que transformacion ofreceria?", type: "textarea", rows: 3, required: true },
      {
        key: "q20",
        label: "20. Que incluiria idealmente?",
        type: "checkbox",
        required: true,
        options: [
          "Clases barre / pilates",
          "Rutinas cortas",
          "Lives semanales",
          "Comunidad privada",
          "Habitos conscientes",
          "Recetas",
          "Meditaciones",
          "Acompanamiento",
        ],
      },
      { key: "q21", label: "21. Como te gustaria que una mujer describiera esa membresia?", type: "textarea", rows: 3, required: true },
      {
        key: "q22",
        label: "22. La imaginas intima y exclusiva o abierta a muchas mujeres?",
        type: "radio",
        required: true,
        options: ["Intima y exclusiva", "Abierta a muchas mujeres", "Mixta"],
      },
      { key: "q23", label: "23. Que valor mensual sientes justo para comenzar?", type: "text", required: true },
    ],
  },
  {
    id: 6,
    title: "Cursos / retos digitales",
    fields: [
      {
        key: "q24",
        label: "24. Que reto sientes natural lanzar primero?",
        type: "radio",
        required: true,
        options: [
          "21 dias bienestar femenino",
          "Reinicio de habitos",
          "Cuerpo fuerte y elegante",
          "Energia femenina real",
          "Pilates en casa",
          "Otro",
        ],
      },
      { key: "q25", label: "25. Que resultado lograria una mujer con ese reto?", type: "textarea", rows: 3, required: true },
      { key: "q26", label: "26. Que curso digital te emocionaria ensenar?", type: "textarea", rows: 3, required: true },
      {
        key: "q27",
        label: "27. Preferirias vender siempre disponible o por lanzamientos especiales?",
        type: "radio",
        required: true,
        options: ["Siempre disponible", "Lanzamientos especiales"],
      },
      { key: "q28", label: "28. Que valor sientes justo para comenzar?", type: "text", required: true },
    ],
  },
  {
    id: 7,
    title: "Contenido y redes",
    fields: [
      { key: "q29", label: "29. Que red social disfrutas mas usar hoy?", type: "text", required: true },
      {
        key: "q30",
        label: "30. Que contenido te fluye natural grabar?",
        type: "checkbox",
        required: true,
        options: ["Lifestyle", "Ejercicio", "Recetas", "Reflexiones", "Habitos", "Rutinas", "Viajes inspiracion"],
      },
      { key: "q31", label: "31. Que contenido no disfrutas hacer?", type: "textarea", rows: 3, required: true },
      { key: "q32", label: "32. Cuantas horas semanales podrias dedicar al crecimiento de la marca?", type: "text", required: true },
    ],
  },
  {
    id: 8,
    title: "Imagen y estetica",
    fields: [
      {
        key: "q33",
        label: "33. Como quieres que se vea visualmente tu marca?",
        type: "checkbox",
        required: true,
        options: ["Femenina", "Limpia", "Premium", "Natural", "Sofisticada", "Suave", "Poderosa"],
      },
      { key: "q34", label: "34. Colores con los que conectas hoy", type: "text", required: true },
      { key: "q35", label: "35. Marcas, mujeres o estilos que te inspiran", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 9,
    title: "Crecimiento y negocio",
    fields: [
      { key: "q36", label: "36. Que te impide hoy crecer mas rapido con tu marca?", type: "textarea", rows: 3, required: true },
      {
        key: "q37",
        label: "37. Que tan urgente quisieras mover este proyecto?",
        type: "radio",
        required: true,
        options: ["Inmediato", "Este mes", "Proximos meses"],
      },
      { key: "q38", label: "38. Que meta economica te gustaria lograr en los proximos 12 meses?", type: "text", required: true },
    ],
  },
  {
    id: 10,
    title: "Activos disponibles",
    fields: [
      { key: "q39", label: "39. Tienes fotos profesionales tuyas?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q40", label: "40. Tienes videos grabados utiles?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q41", label: "41. Tienes base de datos de alumnas o clientas?", type: "radio", required: true, options: ["Si", "No"] },
      { key: "q42", label: "42. Tienes logo o identidad visual actual?", type: "radio", required: true, options: ["Si", "No"] },
    ],
  },
  {
    id: 11,
    title: "Vision final",
    fields: [
      { key: "q43", label: "43. Si en 12 meses todo sale increible, como seria tu vida gracias a esta marca?", type: "textarea", rows: 4, required: true },
      { key: "q44", label: "44. Que te haria sentir orgullosa de haber construido esto?", type: "textarea", rows: 4, required: true },
    ],
  },
];

const initialForm = Object.fromEntries(
  BRIEF_SECTIONS.flatMap((section) =>
    section.fields.map((field) => [field.key, field.type === "checkbox" ? [] : ""])
  )
);

const inputBase =
  "w-full rounded-xl border bg-[#201626] px-3 py-2.5 text-sm text-white placeholder:text-[#9b7ca3] focus:outline-none focus:ring-1 sm:text-base";
const borderNormal = "border-[#5f3a66] focus:border-[#F9A8D4] focus:ring-[#F9A8D4]";
const borderError = "border-red-400 focus:border-red-400 focus:ring-red-400";
const WHATSAPP_URL = "https://wa.me/573116425337";

function validateStep(step, form) {
  const err = {};
  const section = BRIEF_SECTIONS[step - 1];
  if (!section) return err;

  section.fields.forEach((field) => {
    if (!field.required) return;
    const value = form[field.key];
    if (Array.isArray(value)) {
      if (value.length === 0) err[field.key] = "Selecciona al menos una opcion";
      return;
    }
    if (value == null || String(value).trim() === "") err[field.key] = "Este campo es obligatorio";
  });

  return err;
}

function toggleCheckboxValue(current, value) {
  if (!Array.isArray(current)) return [value];
  if (current.includes(value)) return current.filter((item) => item !== value);
  return [...current, value];
}

export default function BriefAnakKarinaLozanoPage() {
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

  useEffect(() => {
    if (step !== totalSteps + 1) return;
    const timeout = window.setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 1200);
    return () => window.clearTimeout(timeout);
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
      const res = await fetch("/api/brief-anak-karina-lozano", {
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
      setSubmitError("Error de red. Verifique su conexion.");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === totalSteps + 1) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#220f1f] via-[#150a16] to-black px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <div className="check-bounce mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#F9A8D4] bg-[#261425] shadow-[0_0_30px_rgba(249,168,212,0.45)]">
            <svg className="h-10 w-10 text-[#F9A8D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path className="check-draw" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-pink-100 sm:text-3xl">Gracias, Anak Karina</h1>
          <p className="mt-4 text-sm leading-relaxed text-pink-100/80 sm:text-base">
            Tu brief ya fue enviado con exito. Te estamos redirigiendo a WhatsApp para continuar.
          </p>
          <a
            href={WHATSAPP_URL}
            className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-[#F9A8D4] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#2a1026] shadow-[0_0_22px_rgba(249,168,212,0.45)] sm:w-auto"
          >
            Continuar en WhatsApp
          </a>
          <Link href="/" className="mt-4 text-xs text-pink-200/60 underline-offset-2 hover:underline">
            Volver al inicio
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
    <main className="min-h-screen bg-gradient-to-b from-[#220f1f] via-[#150a16] to-black px-4 pb-12 pt-8 text-white sm:px-6 sm:pt-12">
      <div className="mx-auto max-w-xl rounded-2xl border border-pink-300/25 bg-[#160e16]/90 p-5 shadow-[0_0_40px_rgba(249,168,212,0.12)] sm:p-7">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">Brief de arranque</p>
        <h1 className="mt-2 text-center text-xl font-extrabold text-pink-100 sm:text-2xl">Anak Karina Lozano</h1>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-xs text-pink-100/70">
            <span>
              Paso {step} de {totalSteps}
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#3a223a]">
            <div className="h-full rounded-full bg-[#F9A8D4] transition-all duration-300 ease-out" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-pink-100">{currentSection?.title}</p>
        </div>

        <div className="mt-8 space-y-5">
          {currentSection?.fields.map((field) => (
            <div key={field.key}>
              {field.type === "radio" ? (
                <>
                  <span className="mb-2 block text-sm font-medium text-pink-100">{field.label}</span>
                  <div className="space-y-2">
                    {field.options.map((opt) => (
                      <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#5f3a66] bg-[#201626] px-3 py-2.5 has-[:checked]:border-[#F9A8D4]">
                        <input
                          type="radio"
                          name={field.key}
                          checked={form[field.key] === opt}
                          onChange={() => update(field.key, opt)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#F9A8D4]"
                        />
                        <span className="text-sm text-pink-100/90">{opt}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : field.type === "checkbox" ? (
                <>
                  <span className="mb-2 block text-sm font-medium text-pink-100">{field.label}</span>
                  <div className="space-y-2">
                    {field.options.map((opt) => (
                      <label key={opt} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#5f3a66] bg-[#201626] px-3 py-2.5 has-[:checked]:border-[#F9A8D4]">
                        <input
                          type="checkbox"
                          checked={Array.isArray(form[field.key]) && form[field.key].includes(opt)}
                          onChange={() => update(field.key, toggleCheckboxValue(form[field.key], opt))}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#F9A8D4]"
                        />
                        <span className="text-sm text-pink-100/90">{opt}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : field.type === "textarea" ? (
                <>
                  <label className="mb-1.5 block text-sm font-medium text-pink-100">{field.label}</label>
                  <textarea
                    rows={field.rows || 4}
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className={fieldClass(field.key)}
                  />
                </>
              ) : (
                <>
                  <label className="mb-1.5 block text-sm font-medium text-pink-100">{field.label}</label>
                  <input type="text" value={form[field.key]} onChange={(e) => update(field.key, e.target.value)} className={fieldClass(field.key)} />
                </>
              )}
              {errors[field.key] && <p className="mt-1 text-xs text-red-300">{errors[field.key]}</p>}
            </div>
          ))}
        </div>

        {submitError && <p className="mt-6 text-center text-sm text-red-300">{submitError}</p>}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={step === 1}
            className="order-2 rounded-xl border border-[#5f3a66] bg-transparent px-5 py-3 text-sm font-bold text-pink-100 transition enabled:hover:border-pink-300/70 disabled:cursor-not-allowed disabled:opacity-40 sm:order-1"
          >
            Anterior
          </button>
          {step < totalSteps ? (
            <button
              type="button"
              onClick={goNext}
              className="order-1 rounded-xl bg-[#F9A8D4] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#2a1026] shadow-[0_0_18px_rgba(249,168,212,0.35)] sm:order-2 sm:ml-auto"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="order-1 rounded-xl bg-[#F9A8D4] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#2a1026] shadow-[0_0_18px_rgba(249,168,212,0.35)] disabled:opacity-60 sm:order-2 sm:ml-auto"
            >
              {submitting ? "Enviando..." : "Enviar"}
            </button>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-pink-100/70">
          <Link href="/" className="text-pink-200 underline-offset-2 hover:underline">
            Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}
