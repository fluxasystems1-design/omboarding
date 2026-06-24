"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const GALS_LOGO = "/imagenes/gals-studio-logo.png";
const FLUXA_PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const PROPOSAL_URL = "/propuesta-natalia";

function BriefPartnersLogos() {
  return (
    <div className="gals-brief-partners">
      <div className="gals-brief-logo-wrap gals-brief-logo-wrap--gals">
        <Image
          src={GALS_LOGO}
          alt="GAL'S Studio"
          fill
          priority
          sizes="(max-width: 640px) 42vw, 200px"
          className="gals-brief-logo-img gals-brief-logo-img--gals"
        />
      </div>
      <span className="gals-brief-partners-plus" aria-hidden>
        +
      </span>
      <div className="gals-brief-logo-wrap gals-brief-logo-wrap--fluxa">
        <Image
          src={FLUXA_PARTNERS_LOGO}
          alt="Fluxa Partners"
          fill
          priority
          sizes="(max-width: 640px) 42vw, 200px"
          className="gals-brief-logo-img gals-brief-logo-img--fluxa"
        />
      </div>
    </div>
  );
}

const BRIEF_SECTIONS = [
  {
    id: 1,
    title: "Identidad y marca",
    fields: [
      { key: "q01", label: "¿Tienes guía de marca o manual de identidad?", type: "textarea", rows: 2, required: true },
      { key: "q02", label: "¿Cuáles son tus colores oficiales?", type: "text", required: true },
      { key: "q03", label: "¿Tienes tipografía definida?", type: "text", required: true },
      { key: "q04", label: "¿Cómo describes GAL'S Studio en una sola frase?", type: "textarea", rows: 2, required: true },
      { key: "q05", label: "¿Qué tres palabras definen la experiencia de estar en GAL'S?", type: "text", required: true },
      { key: "q06", label: "¿A quién le hablas — quién es tu cliente ideal?", type: "textarea", rows: 3, required: true },
      { key: "q07", label: "¿Qué la hace elegirte a ti y no a otro estudio?", type: "textarea", rows: 3, required: true },
    ],
  },
  {
    id: 2,
    title: "Productos y servicios",
    fields: [
      { key: "q08", label: "¿Qué servicios quieres mostrar en la home principal?", type: "textarea", rows: 3, required: true },
      { key: "q09", label: "¿Cómo describes cada experiencia que ofreces?", type: "textarea", rows: 4, required: true },
      { key: "q10", label: "¿Cuál es tu servicio más vendido hoy?", type: "text", required: true },
      { key: "q11", label: "¿Cuál es el que más quieres posicionar?", type: "text", required: true },
      {
        key: "q12",
        label: "¿Tienes precios definidos o prefieres que el sistema lleve directo a reserva?",
        type: "radio",
        required: true,
        options: ["Precios visibles en la web", "Solo reserva / contacto", "Mixto según servicio"],
      },
      { key: "q13", label: "¿Qué incluye exactamente cada experiencia o clase?", type: "textarea", rows: 4, required: true },
    ],
  },
  {
    id: 3,
    title: "Conversión y sistema de ventas",
    fields: [
      {
        key: "q14",
        label: "¿Cuál es el paso que quieres que dé alguien cuando llega a tu página — reservar, escribirte, comprar?",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q15",
        label: "¿Tienes WhatsApp Business activo con número fijo?",
        type: "radio",
        required: true,
        options: ["Sí", "No", "En proceso"],
      },
      {
        key: "q16",
        label: "¿Tienes Bewe configurado con tus servicios y precios cargados?",
        type: "radio",
        required: true,
        options: ["Sí", "No", "Parcialmente"],
      },
      { key: "q17", label: "¿Qué preguntas te hace la gente antes de reservar?", type: "textarea", rows: 3, required: true },
      {
        key: "q18",
        label: "¿Qué objeciones tiene la gente antes de comprar — precio, tiempo, ubicación?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q19",
        label: "¿Qué le dices hoy a alguien que te pregunta por primera vez?",
        type: "textarea",
        rows: 3,
        required: true,
      },
    ],
  },
  {
    id: 4,
    title: "Contenido y comunicación",
    fields: [
      {
        key: "q20",
        label: "¿Tienes fotos profesionales del estudio?",
        type: "radio",
        required: true,
        options: ["Sí", "No", "Algunas"],
      },
      {
        key: "q21",
        label: "¿Tienes video del estudio o de clases en movimiento?",
        type: "radio",
        required: true,
        options: ["Sí", "No", "Algunos"],
      },
      {
        key: "q22",
        label: "¿Tienes fotos tuyas que transmitan tu marca personal?",
        type: "radio",
        required: true,
        options: ["Sí", "No", "Algunas"],
      },
      { key: "q23", label: "¿Hay frases o testimonios de alumnas que puedas compartir?", type: "textarea", rows: 3, required: true },
      {
        key: "q24",
        label: "¿Cómo hablas tú — formal, cercana, inspiracional?",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q25",
        label: "¿Hay palabras o frases que NO quieres que aparezcan en tu comunicación?",
        type: "textarea",
        rows: 2,
        required: true,
      },
    ],
  },
  {
    id: 5,
    title: "Referencias y visión",
    fields: [
      {
        key: "q26",
        label: "¿Tienes 2 o 3 páginas web que te gusten visualmente — de cualquier industria?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      { key: "q27", label: "¿Hay alguna marca de bienestar que admires y por qué?", type: "textarea", rows: 3, required: true },
      {
        key: "q28",
        label: "¿Cómo quieres que se sienta alguien cuando entra a tu página?",
        type: "textarea",
        rows: 3,
        required: true,
      },
    ],
  },
  {
    id: 6,
    title: "Metas y visión de marca",
    fields: [
      { key: "q29", label: "¿Cuántas alumnas activas quieres tener en 6 meses?", type: "text", required: true },
      { key: "q30", label: "¿Cuánto quieres que esté generando GAL'S mensualmente en 6 meses?", type: "text", required: true },
      { key: "q31", label: "¿Y en un año?", type: "text", required: true },
      {
        key: "q32",
        label: "¿Qué producto o servicio quieres que sea tu fuente principal de ingresos?",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q33",
        label: "¿Quieres que GAL'S sea solo presencial o también digital — clases online, membresías, productos?",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q34",
        label: "¿Te imaginas expandiendo el estudio — más sedes, más instructoras?",
        type: "textarea",
        rows: 2,
        required: true,
      },
      { key: "q35", label: "¿Qué tan conocida quieres ser fuera de Colombia?", type: "textarea", rows: 2, required: true },
      {
        key: "q36",
        label: "¿Hay un sueño detrás de GAL'S que todavía no has dicho en público?",
        type: "textarea",
        rows: 3,
        required: true,
      },
      {
        key: "q37",
        label: "¿Cómo quieres que te recuerden las mujeres que pasan por GAL'S?",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q38",
        label: "¿Qué tiene que pasar en los próximos 90 días para que sientas que esto valió la pena?",
        type: "textarea",
        rows: 3,
        required: true,
      },
    ],
  },
  {
    id: 7,
    title: "Accesos técnicos",
    fields: [
      {
        key: "q39",
        label: "Logo en PNG fondo transparente y versión oscura (enlace o indicar cómo lo enviarás)",
        type: "textarea",
        rows: 2,
        required: true,
      },
      { key: "q40", label: "Credenciales de acceso a Bewe", type: "textarea", rows: 2, required: true },
      { key: "q41", label: "Número de WhatsApp Business", type: "text", required: true },
      {
        key: "q42",
        label: "Dominio propio si tiene — o definir dónde va a vivir la página",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q43",
        label: "Acceso a Instagram @galstudio___ para revisar contenido existente",
        type: "textarea",
        rows: 2,
        required: true,
      },
      {
        key: "q44",
        label: "Fotos y videos organizados en Drive o carpeta compartida",
        type: "textarea",
        rows: 2,
        required: true,
      },
    ],
  },
];

const initialForm = Object.fromEntries(
  BRIEF_SECTIONS.flatMap((section) => section.fields.map((field) => [field.key, ""]))
);

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

export default function GalsStudioBriefPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
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

  const inputClass = (key) => `gals-brief-input ${errors[key] ? "gals-brief-input--error" : ""}`;

  const goNext = () => {
    setSubmitError("");
    const e = validateStep(step, form);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    if (step < totalSteps) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const goPrev = () => {
    setSubmitError("");
    setErrors({});
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
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
      const res = await fetch("/api/brief-gals-studio", {
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
      <main className="gals-brief-page px-4 py-12 sm:px-6 sm:py-16">
        <div className="gals-brief-ambient" aria-hidden>
          <div className="gals-brief-orb gals-brief-orb--1" />
          <div className="gals-brief-orb gals-brief-orb--2" />
          <div className="gals-brief-orb gals-brief-orb--3" />
        </div>
        <div className="gals-brief-shell mx-auto flex max-w-lg flex-col items-center text-center">
          <BriefPartnersLogos />
          <div className="gals-brief-success-ring mb-6 mt-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#8da0c6] bg-white shadow-[0_12px_40px_rgba(141,160,198,0.35)]">
            <svg className="h-10 w-10 text-[#6f84ad]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path className="gals-brief-check-draw" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#463939] sm:text-3xl">¡Gracias, Natalia!</h1>
          <p className="mt-4 text-sm leading-relaxed text-[#666] sm:text-base">
            Recibimos tu brief completo. Nos pondremos en contacto en las próximas 24 horas hábiles para confirmar el
            kick-off de GAL&apos;S Studio.
          </p>
          <p className="mt-6 text-base font-semibold text-[#6f84ad]">Bienvenida a Fluxa Systems.</p>
          <Link
            href={PROPOSAL_URL}
            className="gals-brief-btn-primary mt-10 inline-flex w-full max-w-xs items-center justify-center px-6 py-3.5 text-sm sm:w-auto"
          >
            Volver a la propuesta
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="gals-brief-page px-4 pb-14 pt-8 sm:px-6 sm:pt-12">
      <div className="gals-brief-ambient" aria-hidden>
        <div className="gals-brief-orb gals-brief-orb--1" />
        <div className="gals-brief-orb gals-brief-orb--2" />
        <div className="gals-brief-orb gals-brief-orb--3" />
      </div>

      <div className="gals-brief-shell mx-auto max-w-xl">
        <div className="flex flex-col items-center text-center">
          <BriefPartnersLogos />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f84ad]">Brief de arranque</p>
          <h1 className="mt-2 text-xl font-bold text-[#463939] sm:text-2xl">GAL&apos;S Studio · Natalia Galvis</h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#666]">
            Metas de marca, servicios, conversión y accesos — para activar tu ecosistema digital con precisión.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[#e4e0ec] bg-white/80 p-5 shadow-[0_8px_32px_rgba(141,160,198,0.12)] backdrop-blur-sm sm:p-6">
          <div className="mb-2 flex items-center justify-between text-xs text-[#666]">
            <span className="flex items-center gap-2">
              <span className="gals-brief-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#8da0c6]" />
              Paso {step} de {totalSteps}
            </span>
            <span className="font-medium text-[#6f84ad]">{progressPct}%</span>
          </div>
          <div className="gals-brief-progress-track">
            <div className="gals-brief-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-[#463939]">{currentSection?.title}</p>
        </div>

        <div
          key={step}
          className={`gals-brief-step mt-8 space-y-5 ${direction < 0 ? "gals-brief-step--back" : ""}`}
        >
          {currentSection?.fields.map((field, index) => (
            <div key={field.key} className="gals-brief-field" style={{ "--field-i": index }}>
              {field.type === "radio" ? (
                <>
                  <span className="mb-2 block text-sm font-medium text-[#463939]">{field.label}</span>
                  <div className="space-y-2">
                    {field.options.map((opt) => (
                      <label key={opt} className="gals-brief-radio">
                        <input
                          type="radio"
                          name={field.key}
                          checked={form[field.key] === opt}
                          onChange={() => update(field.key, opt)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#6f84ad]"
                        />
                        <span className="text-sm text-[#454545]">{opt}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : field.type === "textarea" ? (
                <>
                  <label className="mb-1.5 block text-sm font-medium text-[#463939]">{field.label}</label>
                  <textarea
                    rows={field.rows || 4}
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className={inputClass(field.key)}
                  />
                </>
              ) : (
                <>
                  <label className="mb-1.5 block text-sm font-medium text-[#463939]">{field.label}</label>
                  <input
                    type="text"
                    value={form[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    className={inputClass(field.key)}
                  />
                </>
              )}
              {errors[field.key] && <p className="mt-1 text-xs text-red-500">{errors[field.key]}</p>}
            </div>
          ))}
        </div>

        {submitError && <p className="mt-6 text-center text-sm text-red-500">{submitError}</p>}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={step === 1}
            className="gals-brief-btn-ghost order-2 px-5 py-3 text-sm sm:order-1"
          >
            Anterior
          </button>
          {step < totalSteps ? (
            <button type="button" onClick={goNext} className="gals-brief-btn-primary order-1 px-5 py-3 text-sm sm:order-2 sm:ml-auto">
              Siguiente
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="gals-brief-btn-primary order-1 px-5 py-3 text-sm sm:order-2 sm:ml-auto"
            >
              {submitting ? "Enviando…" : "Enviar brief"}
            </button>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-[#999]">
          <Link href={PROPOSAL_URL} className="font-medium text-[#6f84ad] underline-offset-2 hover:underline">
            Volver a la propuesta
          </Link>
        </p>
      </div>
    </main>
  );
}
