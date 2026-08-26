"use client";

import { useEffect, useMemo, useState } from "react";

const BRIEF_SECTIONS = [
  {
    id: 1,
    title: "Identidad y marca",
    fields: [
      { key: "q01", label: "Tienes guia de marca o manual de identidad?", type: "textarea", rows: 2, required: true },
      { key: "q02", label: "Cuales son tus colores oficiales?", type: "text", required: true },
      { key: "q03", label: "Tienes tipografia definida?", type: "text", required: true },
      { key: "q04", label: "Como describes lo que haces en una sola frase?", type: "textarea", rows: 2, required: true },
      { key: "q05", label: "Que tres palabras definen tu forma de ayudar a tus clientas?", type: "text", required: true },
      {
        key: "q06",
        label: "De estas opciones de nombre para tu metodo propio, cual resuena mas contigo?",
        type: "radio",
        required: true,
        options: [
          "Metodo Equilibrio Emocional",
          "Sistema Come sin Culpa",
          "Metodo Reconexion",
          "Otra idea (escribela abajo)",
        ],
      },
      { key: "q07", label: "Si elegiste otra idea, cual seria?", type: "textarea", rows: 2, required: false },
      { key: "q08", label: "Que te hace elegirte a ti y no a otra nutricionista?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 2,
    title: "Servicios y producto digital",
    fields: [
      {
        key: "q09",
        label: "Que servicios ofreces hoy? (consultas 1:1, talleres, planes, etc.)",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q10",
        label: 'Cuentanos del taller "El ciclo de la ansiedad": cuantas personas compraron, como les fue, que feedback recibiste?',
        type: "textarea",
        rows: 4,
        required: true,
      },
      {
        key: "q11",
        label: "Has vendido algo digital antes (guia, PDF, curso)? Como fue?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q12",
        label: "Que te gustaria que fuera tu producto digital principal? (guia, reto, programa grabado, membresia)",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q13",
        label: "Tienes contenido ya grabado que se pueda reutilizar?",
        type: "textarea",
        rows: 3,
        required: true,
      },
    ],
  },
  {
    id: 3,
    title: "Cliente ideal y posicionamiento",
    fields: [
      {
        key: "q14",
        label: "Describe a tu clienta ideal: edad, situacion de vida, que la frustra hoy",
        type: "textarea",
        rows: 4,
        required: true,
      },
      {
        key: "q15",
        label: "A quien le hablas: es la misma persona que sigue tu Instagram hoy, o alguien distinto al que quieres atraer?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q16",
        label: "Que la hace buscar ayuda contigo? (ansiedad y comida, digestion, deporte, otro)",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q17",
        label: "Que resultado quiere lograr en 30, 60 o 90 dias?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      { key: "q18", label: "Que objeciones te ponen antes de comprar?", type: "textarea", rows: 3, required: true },
      {
        key: "q19",
        label: "Como hablas tu normalmente? (formal, cercana, con humor, directa)",
        type: "text",
        required: true,
      },
    ],
  },
  {
    id: 4,
    title: "Capacidad real de produccion",
    fields: [
      {
        key: "q20",
        label: "Cuantas horas a la semana puedes dedicar realmente a grabar o crear contenido nuevo?",
        type: "text",
        required: true,
      },
      {
        key: "q21",
        label: "Te sientes comoda grabando video/reels tu misma, o prefieres contenido mas estatico (fotos + texto)?",
        type: "radio",
        required: true,
        options: ["Comoda grabando video/reels", "Prefiero fotos + texto", "Mixto"],
      },
      {
        key: "q22",
        label: "Prefieres grabar todo el producto de una vez (evergreen) o ir soltando contenido cada mes?",
        type: "radio",
        required: true,
        options: [
          "Todo de una vez (evergreen, no depende de mi despues)",
          "Contenido mensual (mas fresco, requiere mi tiempo constante)",
          "No estoy segura aun",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Contenido y activos existentes",
    fields: [
      {
        key: "q23",
        label: "Tienes banco de fotos/videos propios en buena calidad? (perfil, consultorio, comida, hablando a camara)",
        type: "radio",
        required: true,
        options: ["Si, tengo buen banco", "Tengo algo, pero falta", "No, casi nada"],
      },
      {
        key: "q24",
        label: "Tienes fotos o video del taller de ansiedad ya realizado?",
        type: "radio",
        required: true,
        options: ["Si", "Parcialmente", "No"],
      },
      {
        key: "q25",
        label: "Tienes testimonios reales de clientas (texto, audio o video)?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q26",
        label: "Logo en alta calidad: lo tienes en PNG o vector?",
        type: "radio",
        required: true,
        options: ["Si, PNG y/o vector", "Solo PNG basico", "No lo tengo"],
      },
    ],
  },
  {
    id: 6,
    title: "Automatizacion y accesos tecnicos",
    fields: [
      { key: "q27", label: "Acceso a Instagram (admin o quien publica)", type: "textarea", rows: 2, required: true },
      { key: "q28", label: "Usas WhatsApp Business? Tienes numero dedicado?", type: "textarea", rows: 2, required: true },
      { key: "q29", label: "Tienes pagina web o solo el Wix actual?", type: "text", required: true },
      {
        key: "q30",
        label: "Usas alguna plataforma de pagos o cursos? (Hotmart, Bold, otro)",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q31",
        label: "Tienes lista de correos o base de contactos de clientas anteriores?",
        type: "textarea",
        rows: 2,
        required: true,
      },
    ],
  },
  {
    id: 7,
    title: "Referentes, metas y expectativa de precio",
    fields: [
      {
        key: "q32",
        label: "Que cuentas o creadoras admiras en tu nicho? (estilo, no para copiar, para entender tu norte)",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q33",
        label: "Hay alguna membresia o programa digital que te guste como formato?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q34",
        label: "Que NO quieres que tu marca se parezca? (evitar ciertos estilos o tonos)",
        type: "textarea",
        rows: 3,
        required: true,
      },
      { key: "q35", label: "Cual es tu meta en 3 meses con este proyecto?", type: "textarea", rows: 2, required: true },
      {
        key: "q36",
        label: "Cual es tu meta en 6 a 12 meses? (ingresos recurrentes, dejar de vender solo tiempo, escalar)",
        type: "textarea",
        rows: 3,
        required: true,
      },
      { key: "q37", label: "Tienes fecha en mente para lanzar el primer producto?", type: "text", required: true },
      {
        key: "q38",
        label: "Que precio tienes en mente para tu producto de entrada y para la membresia? (no es definitivo, solo para calibrar expectativa)",
        type: "textarea",
        rows: 2,
        required: true,
      },
    ],
  },
];

const initialForm = Object.fromEntries(
  BRIEF_SECTIONS.flatMap((section) =>
    section.fields.map((field) => [field.key, field.type === "checkbox" ? [] : ""])
  )
);

const WHATSAPP_URL = "https://wa.me/573116425337";

const FLOATING_FOODS = [
  { emoji: "🥑", className: "mafe-brief-food--1" },
  { emoji: "🥗", className: "mafe-brief-food--2" },
  { emoji: "🫐", className: "mafe-brief-food--3" },
  { emoji: "🥦", className: "mafe-brief-food--4" },
  { emoji: "🍋", className: "mafe-brief-food--5" },
  { emoji: "🍓", className: "mafe-brief-food--6" },
  { emoji: "🌿", className: "mafe-brief-food--7" },
  { emoji: "🥕", className: "mafe-brief-food--8" },
];

function BriefAmbient() {
  return (
    <div className="mafe-brief-ambient" aria-hidden>
      <div className="mafe-brief-mesh" />
      <div className="mafe-brief-orb mafe-brief-orb--1" />
      <div className="mafe-brief-orb mafe-brief-orb--2" />
      <div className="mafe-brief-orb mafe-brief-orb--3" />
      {FLOATING_FOODS.map((item) => (
        <span key={item.className} className={`mafe-brief-food ${item.className}`}>
          <span className="mafe-brief-food__emoji">{item.emoji}</span>
        </span>
      ))}
      <svg className="mafe-brief-leaf mafe-brief-leaf--1" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 8 4 12 4 17c0 2.2 1.8 4 4 4 3 0 5-2 8-6 3 4 5 6 8 6 2.2 0 4-1.8 4-4 0-5-3-9-8-14-1-.9-2-.9-3 0z"
          fill="#3f6b52"
        />
      </svg>
      <svg className="mafe-brief-leaf mafe-brief-leaf--2" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 8 4 12 4 17c0 2.2 1.8 4 4 4 3 0 5-2 8-6 3 4 5 6 8 6 2.2 0 4-1.8 4-4 0-5-3-9-8-14-1-.9-2-.9-3 0z"
          fill="#5a8f6e"
        />
      </svg>
      <svg className="mafe-brief-leaf mafe-brief-leaf--3" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 8 4 12 4 17c0 2.2 1.8 4 4 4 3 0 5-2 8-6 3 4 5 6 8 6 2.2 0 4-1.8 4-4 0-5-3-9-8-14-1-.9-2-.9-3 0z"
          fill="#3f6b52"
        />
      </svg>
    </div>
  );
}

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

export default function BriefMafeCerqueraPage() {
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

  const inputBase =
    "w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-[#1c2b22] placeholder:text-[#93a098] focus:outline-none focus:ring-1 sm:text-base";
  const borderNormal = "border-[rgba(28,43,34,0.15)] focus:border-[#3f6b52] focus:ring-[#3f6b52]";
  const borderError = "border-red-400 focus:border-red-400 focus:ring-red-400";

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
      const res = await fetch("/api/brief-mafe-cerquera", {
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
      <main className="mafe-brief-page px-4 py-10 sm:px-6">
        <BriefAmbient />
        <div className="mafe-brief-shell mx-auto flex max-w-lg flex-col items-center text-center">
          <div className="mafe-brief-card--success w-full rounded-2xl p-8 sm:p-10">
            <div className="mafe-brief-check-bounce mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#3f6b52] bg-white shadow-[0_8px_28px_rgba(42,77,58,0.14)]">
              <svg className="h-10 w-10 text-[#3f6b52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path className="mafe-brief-check-draw" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl font-semibold sm:text-3xl">Gracias, Mafer</h1>
            <p className="mt-4 text-sm leading-relaxed text-[#66756c] sm:text-base">
              Tu brief ya fue enviado con exito. Te estamos redirigiendo a WhatsApp para continuar.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#3f6b52] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(42,77,58,0.2)] sm:w-auto"
            >
              Continuar en WhatsApp
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mafe-brief-page px-4 pb-12 pt-8 sm:px-6 sm:pt-12">
      <BriefAmbient />
      <div className="mafe-brief-shell mx-auto max-w-xl rounded-2xl p-5 sm:p-7 mafe-brief-card">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#3f6b52]">Brief de arranque</p>
        <h1 className="mt-2 text-center font-serif text-xl font-semibold sm:text-2xl">Maria Fernanda Cerquera</h1>
        <p className="mt-2 text-center text-xs leading-relaxed text-[#66756c] sm:text-sm">
          Objetivo: entender identidad, servicios, clienta ideal y capacidad real de produccion antes de disenar el
          producto digital y la estrategia de marca.
        </p>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-xs text-[#66756c]">
            <span>
              Paso {step} de {totalSteps}
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e8ece4]">
            <div
              className="mafe-brief-progress-fill h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="mafe-brief-step-title mt-3 text-center text-sm font-semibold">{currentSection?.title}</p>
        </div>

        <div className="mt-8 space-y-5">
          {currentSection?.fields.map((field) => (
            <div key={field.key}>
              {field.type === "radio" ? (
                <>
                  <span className="mb-2 block text-sm font-medium">{field.label}</span>
                  <div className="space-y-2">
                    {field.options.map((opt) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-start gap-3 rounded-xl border border-[rgba(28,43,34,0.12)] bg-[#f7f8f5] px-3 py-2.5 has-[:checked]:border-[#3f6b52] has-[:checked]:bg-[rgba(63,107,82,0.06)]"
                      >
                        <input
                          type="radio"
                          name={field.key}
                          checked={form[field.key] === opt}
                          onChange={() => update(field.key, opt)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#3f6b52]"
                        />
                        <span className="text-sm text-[#3d4a42]">{opt}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : field.type === "checkbox" ? (
                <>
                  <span className="mb-2 block text-sm font-medium">{field.label}</span>
                  <div className="space-y-2">
                    {field.options.map((opt) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-start gap-3 rounded-xl border border-[rgba(28,43,34,0.12)] bg-[#f7f8f5] px-3 py-2.5 has-[:checked]:border-[#3f6b52] has-[:checked]:bg-[rgba(63,107,82,0.06)]"
                      >
                        <input
                          type="checkbox"
                          checked={Array.isArray(form[field.key]) && form[field.key].includes(opt)}
                          onChange={() => update(field.key, toggleCheckboxValue(form[field.key], opt))}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#3f6b52]"
                        />
                        <span className="text-sm text-[#3d4a42]">{opt}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : field.type === "textarea" ? (
                <>
                  <label className="mb-1.5 block text-sm font-medium">{field.label}</label>
                  <textarea
                    rows={field.rows || 4}
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className={fieldClass(field.key)}
                  />
                </>
              ) : (
                <>
                  <label className="mb-1.5 block text-sm font-medium">{field.label}</label>
                  <input
                    type="text"
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className={fieldClass(field.key)}
                  />
                </>
              )}
              {errors[field.key] && <p className="mt-1 text-xs text-red-600">{errors[field.key]}</p>}
            </div>
          ))}
        </div>

        {submitError && <p className="mt-6 text-center text-sm text-red-600">{submitError}</p>}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={step === 1}
            className="order-2 rounded-full border border-[rgba(28,43,34,0.2)] bg-transparent px-5 py-3 text-sm font-semibold transition enabled:hover:border-[#3f6b52] disabled:cursor-not-allowed disabled:opacity-40 sm:order-1"
          >
            Anterior
          </button>
          {step < totalSteps ? (
            <button
              type="button"
              onClick={goNext}
              className="order-1 rounded-full bg-[#3f6b52] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(42,77,58,0.2)] sm:order-2 sm:ml-auto"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="order-1 rounded-full bg-[#3f6b52] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(42,77,58,0.2)] disabled:opacity-60 sm:order-2 sm:ml-auto"
            >
              {submitting ? "Enviando..." : "Enviar"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
