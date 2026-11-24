"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const AR_LOGO = "/imagenes/ar-pilates/logo.png?v=2";
const PROPOSAL_URL = "/propuesta-ar-pilates";
const DEFINE = "Lo definimos juntas";

const SECTIONS = [
  { id: 1, title: "Conozcamos AR", note: "Queremos que tu página se sienta tan especial como tu estudio." },
  { id: 2, title: "Organicemos tus clases", note: "Esta información será la base del calendario de reservas." },
  { id: 3, title: "Paquetes, precios y pagos", note: "Vamos a definir qué podrán comprar tus alumnas." },
  { id: 4, title: "Reservas y dashboard", note: "Que reserven fácil y que tú lleves el control." },
  { id: 5, title: "Homepage y landing", note: "Una experiencia digital que represente tu marca y venda clases." },
  { id: 6, title: "Automatizaciones y comunicación", note: "La información correcta, sin escribir cada mensaje a mano." },
  { id: 7, title: "Preparemos el lanzamiento", note: "Estamos a un paso de darle vida a tu experiencia digital." },
];

const emptyModality = () => ({
  name: "",
  description: "",
  forWho: "",
  duration: "",
  capacity: "",
  levels: "",
  room: "",
  instructors: "",
  individual: "",
  restrictions: "",
  bring: "",
});

const emptySchedule = () => ({
  modality: "",
  day: "",
  start: "",
  end: "",
  instructor: "",
  room: "",
  seats: "",
});

const emptyInstructor = () => ({
  name: "",
  modalities: "",
  availability: "",
  systemAccess: "",
  seeBookings: "",
  markAttendance: "",
  photoBio: "",
});

const emptyPlan = () => ({
  name: "",
  price: "",
  sessions: "",
  validity: "",
  validityStart: "",
  modalities: "",
  maxPerDay: "",
  maxFuture: "",
  transferable: "",
  freeze: "",
  share: "",
  renew: "",
  promo: "",
});

const emptyRoom = () => ({ name: "", capacity: "", modalities: "" });

function BriefLogo() {
  return (
    <div className="ar-brief-partners mx-auto">
      <div className="ar-brief-logo-wrap ar-brief-logo-wrap--solo">
        <Image src={AR_LOGO} alt="AR Pilates Studio" fill priority sizes="180px" className="ar-brief-logo-img" />
      </div>
    </div>
  );
}

function FieldLabel({ children, hint }) {
  return (
    <div className="mb-3">
      <span className="ar-brief-label">{children}</span>
      {hint ? <span className="ar-brief-hint">{hint}</span> : null}
    </div>
  );
}

function toggleList(list, value) {
  const set = new Set(list || []);
  if (set.has(value)) set.delete(value);
  else set.add(value);
  return Array.from(set);
}

export default function ArPilatesBriefPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    brandName: "AR Pilates Studio",
    founder: "",
    email: "",
    whatsapp: "",
    instagram: "@arpilates.estudio",
    address: "Calle 8 Sur #38B-24, Ciudad Montes, Bogotá",
    hours: "",
    oneLine: "",
    feelings: [],
    feelingsOther: "",
    idealClient: [],
    idealOther: "",
    whyAr: "",
    style: "",
    styleOther: "",
    brandManual: "",
    brandColorsFonts: "",
    brandFiles: "",
    references: "",
    modalities: ["Pilates Reformer", "Pilates Mat", "Hot Barre", "Jumping Fitness"],
    modalitiesOther: "",
    modalityCards: [emptyModality()],
    schedules: [emptySchedule()],
    schedulesFixed: "",
    schedulesWhoUpdates: "",
    rooms: [emptyRoom()],
    simultaneous: "",
    prepTime: "",
    prepMinutes: "",
    instructors: [emptyInstructor()],
    privateEvents: "",
    privateDetails: "",
    products: [],
    productsOther: "",
    plans: [emptyPlan()],
    deductWhen: "",
    cancelRecover: "",
    unusedSessions: "",
    multiModality: "",
    multiModalityDetail: "",
    payments: [],
    paymentsOther: "",
    afterPayment: "",
    transferWho: "",
    discounts: [],
    invoice: "",
    bookingFlow: "",
    bookAhead: "",
    bookAheadOther: "",
    minBefore: "",
    cancelBefore: "",
    cancelBeforeOther: "",
    noShow: "",
    studioCancel: "",
    allowChange: "",
    changeUntil: "",
    waitlist: "",
    bookForOther: "",
    courtesy: "",
    alumnaFields: [],
    alumnaOther: "",
    existingClients: "",
    existingDetail: "",
    panelUsers: [],
    panelUsersOther: "",
    permsCreateClass: "",
    permsCancelClass: "",
    permsRegister: "",
    permsManualBook: "",
    permsAttendance: "",
    permsPayments: "",
    permsPackages: "",
    permsReports: "",
    panelPriorities: [],
    attendanceHow: "",
    reportsNeeded: [],
    reportsOther: "",
    mustHave: "",
    laterHave: "",
    story: "",
    firstSeconds: "",
    reason1: "",
    reason2: "",
    reason3: "",
    highlight: [],
    testimonials: [],
    faq: "",
    promoteFirst: "",
    promoteOther: "",
    offerDetail: "",
    audience: [],
    audienceOther: "",
    landingAction: "",
    blockers: [],
    blockersOther: "",
    mediaReady: "",
    mediaLink: "",
    launchGoal: "",
    monthGoal: "",
    igToday: "",
    igTodayOther: "",
    igFaqs: [],
    igFaqsOther: "",
    igAutomate: [],
    keywords: "",
    keywordList: "PILATES, HORARIOS, PRECIOS, RESERVAR, UBICACIÓN",
    tone: "",
    toneOther: "",
    humanCases: "",
    metaConnected: "",
    notifications: [],
    channels: [],
    reminderWhen: "",
    reminderOther: "",
    humanWho: "",
    brandMessages: "",
    publicName: "AR Pilates Studio",
    publicAddress: "Calle 8 Sur #38B-24, Ciudad Montes, Bogotá",
    publicPhone: "",
    publicEmail: "",
    publicHours: "",
    publicSocial: "@arpilates.estudio",
    publicMaps: "",
    hasDomain: "",
    domainDetail: "",
    hasBizEmail: "",
    platforms: [],
    approveDesign: "",
    approvePrices: "",
    adminAfter: "",
    materialsReady: [],
    materialsMissing: "",
    launchConfirm: "",
    firstWeeks: "",
    extraNotes: "",
  });

  const totalSteps = SECTIONS.length;
  const current = SECTIONS[step - 1];
  const progressPct = useMemo(() => (step > totalSteps ? 100 : Math.round((step / totalSteps) * 100)), [step, totalSteps]);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const inputClass = (key) => `ar-brief-input ${errors[key] ? "ar-brief-input--error" : ""}`;

  const validateStep = (s) => {
    const err = {};
    if (s === 1) {
      if (!form.founder.trim()) err.founder = "Obligatorio";
      if (!form.email.trim()) err.email = "Obligatorio";
      if (!form.whatsapp.trim()) err.whatsapp = "Obligatorio";
      if (!form.oneLine.trim()) err.oneLine = "Obligatorio";
    }
    if (s === 7) {
      if (!form.approveDesign.trim()) err.approveDesign = "Obligatorio";
      if (!form.launchConfirm) err.launchConfirm = "Obligatorio";
    }
    return err;
  };

  const goNext = () => {
    setSubmitError("");
    const e = validateStep(step);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    if (step < totalSteps) {
      setDirection(1);
      setStep((n) => n + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goPrev = () => {
    setSubmitError("");
    setErrors({});
    if (step > 1) {
      setDirection(-1);
      setStep((n) => n - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setSubmitError("");
    const e = validateStep(totalSteps);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        ...form,
        feelings: form.feelings.join(", "),
        idealClient: form.idealClient.join(", "),
        modalities: form.modalities.join(", "),
        products: form.products.join(", "),
        payments: form.payments.join(", "),
        discounts: form.discounts.join(", "),
        alumnaFields: form.alumnaFields.join(", "),
        panelUsers: form.panelUsers.join(", "),
        panelPriorities: form.panelPriorities.join(", "),
        reportsNeeded: form.reportsNeeded.join(", "),
        highlight: form.highlight.join(", "),
        testimonials: form.testimonials.join(", "),
        audience: form.audience.join(", "),
        blockers: form.blockers.join(", "),
        igFaqs: form.igFaqs.join(", "),
        igAutomate: form.igAutomate.join(", "),
        notifications: form.notifications.join(", "),
        channels: form.channels.join(", "),
        platforms: form.platforms.join(", "),
        materialsReady: form.materialsReady.join(", "),
        modalityCards: JSON.stringify(form.modalityCards, null, 2),
        schedules: JSON.stringify(form.schedules, null, 2),
        rooms: JSON.stringify(form.rooms, null, 2),
        instructors: JSON.stringify(form.instructors, null, 2),
        plans: JSON.stringify(form.plans, null, 2),
      };
      const res = await fetch("/api/brief-ar-pilates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) {
        setSubmitError(data.error || "No se pudo enviar. Intenta de nuevo.");
        return;
      }
      setStep(totalSteps + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Error de red. Verifica tu conexión.");
    } finally {
      setSubmitting(false);
    }
  };

  const renderChecks = (key, options, max) => (
    <div className="ar-brief-options">
      {options.map((opt) => (
        <label key={opt} className="ar-brief-check">
          <input
            type="checkbox"
            checked={(form[key] || []).includes(opt)}
            onChange={() => {
              const currentList = form[key] || [];
              if (!currentList.includes(opt) && max && currentList.length >= max) return;
              update(key, toggleList(currentList, opt));
            }}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#8f7a66]"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );

  const renderRadios = (key, options) => (
    <div className="ar-brief-options">
      {options.map((opt) => (
        <label key={opt} className="ar-brief-radio">
          <input
            type="radio"
            name={key}
            checked={form[key] === opt}
            onChange={() => update(key, opt)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#8f7a66]"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );

  if (step === totalSteps + 1) {
    return (
      <main className="ar-brief-page px-4 py-12 sm:px-6 sm:py-16">
        <div className="ar-brief-ambient" aria-hidden>
          <div className="ar-brief-beam" />
          <div className="ar-brief-orb ar-brief-orb--1" />
          <div className="ar-brief-orb ar-brief-orb--2" />
          <div className="ar-brief-orb ar-brief-orb--3" />
          <div className="ar-brief-orb ar-brief-orb--4" />
          <div className="ar-brief-ring ar-brief-ring--1" />
          <div className="ar-brief-ring ar-brief-ring--2" />
        </div>
        <div className="ar-brief-shell mx-auto flex max-w-lg flex-col items-center text-center">
          <BriefLogo />
          <div className="mb-6 mt-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#b7a089] bg-white shadow-[0_12px_40px_rgba(183,160,137,0.35)]">
            <svg className="h-10 w-10 text-[#8f7a66]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path className="ar-brief-check-draw" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#141210] sm:text-3xl">¡Ya tenemos el punto de partida de AR!</h1>
          <p className="mt-4 text-sm leading-relaxed text-[#6f655c] sm:text-base">
            Gracias por compartir tu visión. Con esta información prepararemos tu página, estructuraremos las clases,
            configuraremos las reservas y definiremos las automatizaciones del lanzamiento.
          </p>
          <p className="mt-6 text-sm font-semibold text-[#8f7a66]">
            Siguiente paso: revisar juntas los pendientes y comenzar la implementación.
          </p>
          <Link
            href={PROPOSAL_URL}
            className="ar-brief-btn-primary mt-10 inline-flex w-full max-w-xs items-center justify-center px-6 py-3.5 text-sm sm:w-auto"
          >
            Volver a la propuesta
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="ar-brief-page px-4 pb-14 pt-8 sm:px-6 sm:pt-12">
      <div className="ar-brief-ambient" aria-hidden>
        <div className="ar-brief-beam" />
        <div className="ar-brief-orb ar-brief-orb--1" />
        <div className="ar-brief-orb ar-brief-orb--2" />
        <div className="ar-brief-orb ar-brief-orb--3" />
        <div className="ar-brief-orb ar-brief-orb--4" />
        <div className="ar-brief-ring ar-brief-ring--1" />
        <div className="ar-brief-ring ar-brief-ring--2" />
      </div>

      <div className="ar-brief-shell mx-auto max-w-xl">
        <div className="ar-brief-hero-copy flex flex-col items-center text-center">
          <BriefLogo />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f7a66]">Brief de implementación</p>
          <h1 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#141210] sm:text-2xl">AR Pilates Studio</h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#6f655c]">
            Vamos a construir la experiencia digital de AR. Si algo aún no está definido, escribe «{DEFINE}».
          </p>
        </div>

        <div className="ar-brief-progress-card mt-10">
          <div className="mb-2 flex items-center justify-between text-xs text-[#6f655c]">
            <span className="flex items-center gap-2">
              <span className="ar-brief-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#b7a089]" />
              Paso {step} de {totalSteps}
            </span>
            <span className="font-semibold text-[#8f7a66]">{progressPct}%</span>
          </div>
          <div className="ar-brief-progress-track">
            <div className="ar-brief-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-4 text-center text-sm font-semibold tracking-[-0.01em] text-[#141210]">
            0{step} — {current.title}
          </p>
          <p className="mt-1 text-center text-xs leading-relaxed text-[#6f655c]">{current.note}</p>
        </div>

        <div key={step} className={`ar-brief-step mt-7 space-y-4 ${direction < 0 ? "ar-brief-step--back" : ""}`}>
          {step === 1 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>Datos de tu marca</FieldLabel>
                <div className="space-y-3">
                  <input className={inputClass("brandName")} value={form.brandName} onChange={(e) => update("brandName", e.target.value)} placeholder="Nombre comercial" />
                  <input className={inputClass("founder")} value={form.founder} onChange={(e) => update("founder", e.target.value)} placeholder="Nombre de la fundadora *" />
                  {errors.founder && <p className="text-xs text-red-500">{errors.founder}</p>}
                  <input className={inputClass("email")} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Correo de contacto *" />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  <input className={inputClass("whatsapp")} value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="WhatsApp empresarial *" />
                  {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp}</p>}
                  <input className={inputClass("instagram")} value={form.instagram} onChange={(e) => update("instagram", e.target.value)} placeholder="Instagram" />
                  <input className={inputClass("address")} value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Dirección" />
                  <input className={inputClass("hours")} value={form.hours} onChange={(e) => update("hours", e.target.value)} placeholder="Horario general de atención" />
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel>¿Cómo describirías AR en una frase?</FieldLabel>
                <textarea rows={2} className={inputClass("oneLine")} value={form.oneLine} onChange={(e) => update("oneLine", e.target.value)} />
                {errors.oneLine && <p className="mt-1 text-xs text-red-500">{errors.oneLine}</p>}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel hint="Máximo tres">¿Qué quieres que sientan las mujeres cuando entren a AR?</FieldLabel>
                {renderChecks("feelings", ["Tranquilidad", "Motivación", "Exclusividad", "Confianza", "Energía", "Cercanía", "Comunidad", "Bienestar", "Otra"], 3)}
                {form.feelings.includes("Otra") && (
                  <input className={`${inputClass("feelingsOther")} mt-2`} value={form.feelingsOther} onChange={(e) => update("feelingsOther", e.target.value)} placeholder="Otra sensación" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>¿Quién es tu clienta ideal?</FieldLabel>
                {renderChecks("idealClient", [
                  "Mujeres que empiezan a ejercitarse",
                  "Mujeres que ya practican Pilates",
                  "Mujeres que buscan bienestar",
                  "Mujeres que quieren fortalecer su cuerpo",
                  "Personas que buscan clases de bajo impacto",
                  "Hombres y mujeres",
                  "Otro",
                ])}
                {form.idealClient.includes("Otro") && (
                  <input className={`${inputClass("idealOther")} mt-2`} value={form.idealOther} onChange={(e) => update("idealOther", e.target.value)} placeholder="Otro" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>¿Por qué elegirían AR y no otro estudio?</FieldLabel>
                <textarea rows={3} className={inputClass("whyAr")} value={form.whyAr} onChange={(e) => update("whyAr", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>¿Qué estilo te gustaría para tu página?</FieldLabel>
                {renderRadios("style", ["Minimalista y elegante", "Femenino y cálido", "Deportivo y moderno", "Similar a la estética actual de Instagram", "Otro"])}
                {form.style === "Otro" && (
                  <input className={`${inputClass("styleOther")} mt-2`} value={form.styleOther} onChange={(e) => update("styleOther", e.target.value)} placeholder="Describe el estilo" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Tienes manual de marca?</FieldLabel>
                {renderRadios("brandManual", ["Sí, completo", "Solo logo y colores", "Todavía no"])}
                {(form.brandManual === "Sí, completo" || form.brandManual === "Solo logo y colores") && (
                  <div className="mt-3 space-y-2">
                    <textarea rows={2} className={inputClass("brandColorsFonts")} value={form.brandColorsFonts} onChange={(e) => update("brandColorsFonts", e.target.value)} placeholder="Colores y tipografías" />
                    <input className={inputClass("brandFiles")} value={form.brandFiles} onChange={(e) => update("brandFiles", e.target.value)} placeholder="Enlace a Drive / carpeta con archivos" />
                  </div>
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel hint="Opcional">Comparte hasta tres páginas o estudios que te encanten visualmente</FieldLabel>
                <textarea rows={3} className={inputClass("references")} value={form.references} onChange={(e) => update("references", e.target.value)} placeholder="Enlaces" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>¿Qué modalidades ofrecerás inicialmente?</FieldLabel>
                {renderChecks("modalities", ["Pilates Reformer", "Pilates Mat", "Hot Barre", "Jumping Fitness", "Otra"])}
                {form.modalities.includes("Otra") && (
                  <input className={`${inputClass("modalitiesOther")} mt-2`} value={form.modalitiesOther} onChange={(e) => update("modalitiesOther", e.target.value)} placeholder="Otra modalidad" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel hint="Una ficha por modalidad">Configura cada modalidad</FieldLabel>
                <div className="space-y-3">
                  {form.modalityCards.map((card, i) => (
                    <div key={i} className="ar-brief-card space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8f7a66]">Modalidad {i + 1}</p>
                      {[
                        ["name", "Nombre de la modalidad"],
                        ["description", "Descripción breve para la web"],
                        ["forWho", "¿Para quién está recomendada?"],
                        ["duration", "Duración (minutos)"],
                        ["capacity", "Capacidad máxima"],
                        ["levels", "Niveles: Principiante / Intermedio / Avanzado / Todos"],
                        ["room", "Sala"],
                        ["instructors", "Instructoras que pueden dictarla"],
                        ["individual", "¿Se puede comprar individualmente?"],
                        ["restrictions", "Restricciones o recomendaciones"],
                        ["bring", "¿Qué debe llevar la alumna?"],
                      ].map(([k, ph]) => (
                        <input
                          key={k}
                          className="ar-brief-input"
                          value={card[k]}
                          onChange={(e) => {
                            const next = [...form.modalityCards];
                            next[i] = { ...next[i], [k]: e.target.value };
                            update("modalityCards", next);
                          }}
                          placeholder={ph}
                        />
                      ))}
                    </div>
                  ))}
                  <button type="button" className="ar-brief-btn-add" onClick={() => update("modalityCards", [...form.modalityCards, emptyModality()])}>
                    + Agregar modalidad
                  </button>
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel>Organicemos tus horarios</FieldLabel>
                <div className="space-y-3">
                  {form.schedules.map((row, i) => (
                    <div key={i} className="ar-brief-card space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8f7a66]">Horario {i + 1}</p>
                      {[
                        ["modality", "Modalidad"],
                        ["day", "Día de la semana"],
                        ["start", "Hora de inicio"],
                        ["end", "Hora de finalización"],
                        ["instructor", "Instructora"],
                        ["room", "Sala"],
                        ["seats", "Cupos disponibles"],
                      ].map(([k, ph]) => (
                        <input
                          key={k}
                          className="ar-brief-input"
                          value={row[k]}
                          onChange={(e) => {
                            const next = [...form.schedules];
                            next[i] = { ...next[i], [k]: e.target.value };
                            update("schedules", next);
                          }}
                          placeholder={ph}
                        />
                      ))}
                    </div>
                  ))}
                  <button type="button" className="ar-brief-btn-add" onClick={() => update("schedules", [...form.schedules, emptySchedule()])}>
                    + Agregar otro horario
                  </button>
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>¿Los horarios serán los mismos cada semana?</FieldLabel>
                {renderRadios("schedulesFixed", ["Sí, son fijos", "Algunos cambian", "Se publicarán semanalmente"])}
                {(form.schedulesFixed === "Algunos cambian" || form.schedulesFixed === "Se publicarán semanalmente") && (
                  <input className={`${inputClass("schedulesWhoUpdates")} mt-2`} value={form.schedulesWhoUpdates} onChange={(e) => update("schedulesWhoUpdates", e.target.value)} placeholder="¿Quién actualiza los horarios?" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>¿Cuántos espacios físicos tiene AR?</FieldLabel>
                <div className="space-y-3">
                  {form.rooms.map((room, i) => (
                    <div key={i} className="ar-brief-card space-y-2">
                      <input className="ar-brief-input" value={room.name} onChange={(e) => { const next = [...form.rooms]; next[i] = { ...next[i], name: e.target.value }; update("rooms", next); }} placeholder="Nombre de la sala" />
                      <input className="ar-brief-input" value={room.capacity} onChange={(e) => { const next = [...form.rooms]; next[i] = { ...next[i], capacity: e.target.value }; update("rooms", next); }} placeholder="Capacidad" />
                      <input className="ar-brief-input" value={room.modalities} onChange={(e) => { const next = [...form.rooms]; next[i] = { ...next[i], modalities: e.target.value }; update("rooms", next); }} placeholder="Modalidades permitidas" />
                    </div>
                  ))}
                  <button type="button" className="ar-brief-btn-add" onClick={() => update("rooms", [...form.rooms, emptyRoom()])}>
                    + Agregar sala
                  </button>
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>¿Puedes dictar dos clases simultáneamente?</FieldLabel>
                {renderRadios("simultaneous", ["Sí, en salas diferentes", "No", "Depende de las modalidades"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Necesitas tiempo entre clases para preparar el espacio?</FieldLabel>
                {renderRadios("prepTime", ["No", "Sí"])}
                {form.prepTime === "Sí" && (
                  <input className={`${inputClass("prepMinutes")} mt-2`} value={form.prepMinutes} onChange={(e) => update("prepMinutes", e.target.value)} placeholder="Minutos entre clases" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel>Información de instructoras</FieldLabel>
                <div className="space-y-3">
                  {form.instructors.map((row, i) => (
                    <div key={i} className="ar-brief-card space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8f7a66]">Instructora {i + 1}</p>
                      {[
                        ["name", "Nombre"],
                        ["modalities", "Modalidades que dicta"],
                        ["availability", "Días y horarios disponibles"],
                        ["systemAccess", "¿Tendrá acceso al sistema?"],
                        ["seeBookings", "¿Podrá consultar sus reservas?"],
                        ["markAttendance", "¿Podrá marcar asistencias?"],
                        ["photoBio", "Foto / descripción breve (enlace o notas)"],
                      ].map(([k, ph]) => (
                        <input
                          key={k}
                          className="ar-brief-input"
                          value={row[k]}
                          onChange={(e) => {
                            const next = [...form.instructors];
                            next[i] = { ...next[i], [k]: e.target.value };
                            update("instructors", next);
                          }}
                          placeholder={ph}
                        />
                      ))}
                    </div>
                  ))}
                  <button type="button" className="ar-brief-btn-add" onClick={() => update("instructors", [...form.instructors, emptyInstructor()])}>
                    + Agregar instructora
                  </button>
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 8 }}>
                <FieldLabel>¿Ofrecerás clases privadas o eventos especiales?</FieldLabel>
                {renderRadios("privateEvents", ["Sí", "No", "Más adelante"])}
                {form.privateEvents === "Sí" && (
                  <textarea rows={3} className={`${inputClass("privateDetails")} mt-2`} value={form.privateDetails} onChange={(e) => update("privateDetails", e.target.value)} placeholder="Duración, capacidad, precio y cómo se reserva" />
                )}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>¿Qué productos vas a vender?</FieldLabel>
                {renderChecks("products", [
                  "Primera clase de prueba",
                  "Clase individual",
                  "Paquete de 4 clases",
                  "Paquete de 8 clases",
                  "Paquete de 12 clases",
                  "Paquete personalizado",
                  "Membresía mensual",
                  "Clase privada",
                  "Otro",
                ])}
                {form.products.includes("Otro") && (
                  <input className={`${inputClass("productsOther")} mt-2`} value={form.productsOther} onChange={(e) => update("productsOther", e.target.value)} placeholder="Otro producto" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel>Configura tus planes</FieldLabel>
                <div className="space-y-3">
                  {form.plans.map((plan, i) => (
                    <div key={i} className="ar-brief-card space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8f7a66]">Plan {i + 1}</p>
                      {[
                        ["name", "Nombre comercial"],
                        ["price", "Precio final en COP"],
                        ["sessions", "Cantidad de sesiones"],
                        ["validity", "Duración o vigencia"],
                        ["validityStart", "Desde cuándo cuenta la vigencia"],
                        ["modalities", "Modalidades que permite"],
                        ["maxPerDay", "Máx. reservas por día"],
                        ["maxFuture", "Máx. reservas futuras simultáneas"],
                        ["transferable", "¿Es transferible?"],
                        ["freeze", "¿Admite congelamiento?"],
                        ["share", "¿Permite compartir sesiones?"],
                        ["renew", "¿Se puede renovar?"],
                        ["promo", "¿Tiene promoción vigente?"],
                      ].map(([k, ph]) => (
                        <input
                          key={k}
                          className="ar-brief-input"
                          value={plan[k]}
                          onChange={(e) => {
                            const next = [...form.plans];
                            next[i] = { ...next[i], [k]: e.target.value };
                            update("plans", next);
                          }}
                          placeholder={ph}
                        />
                      ))}
                    </div>
                  ))}
                  <button type="button" className="ar-brief-btn-add" onClick={() => update("plans", [...form.plans, emptyPlan()])}>
                    + Agregar plan
                  </button>
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel>¿Cómo se descuentan las clases de un paquete?</FieldLabel>
                {renderRadios("deductWhen", ["Al confirmar la reserva", "Al registrar asistencia", "Necesito recomendación"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>Si cancela a tiempo, ¿recupera su sesión?</FieldLabel>
                {renderRadios("cancelRecover", ["Sí", "No", "Por definir"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>¿Qué pasa con sesiones no usadas al vencer?</FieldLabel>
                {renderRadios("unusedSessions", ["Se pierden", "Se pueden recuperar bajo condiciones", "Se acumulan", "Por definir"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>¿Un mismo paquete sirve para varias modalidades?</FieldLabel>
                {renderRadios("multiModality", ["Sí", "No", "Solo combinaciones específicas"])}
                {form.multiModality === "Solo combinaciones específicas" && (
                  <textarea rows={2} className={`${inputClass("multiModalityDetail")} mt-2`} value={form.multiModalityDetail} onChange={(e) => update("multiModalityDetail", e.target.value)} placeholder="Modalidades permitidas" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Qué medios de pago aceptará AR?</FieldLabel>
                {renderChecks("payments", ["Transferencia bancaria", "Bre-B", "Tarjeta débito o crédito", "Efectivo en el estudio", "Pasarela de pagos", "Otro"])}
                {form.payments.includes("Otro") && (
                  <input className={`${inputClass("paymentsOther")} mt-2`} value={form.paymentsOther} onChange={(e) => update("paymentsOther", e.target.value)} placeholder="Otro medio" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel>¿Qué debería suceder después de un pago exitoso?</FieldLabel>
                {renderRadios("afterPayment", ["Activar el paquete automáticamente", "Registrar el pago y esperar confirmación administrativa", "Por definir"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 8 }}>
                <FieldLabel>Si pagan por transferencia, ¿quién verifica?</FieldLabel>
                <input className={inputClass("transferWho")} value={form.transferWho} onChange={(e) => update("transferWho", e.target.value)} placeholder="Nombre o rol" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 9 }}>
                <FieldLabel>¿Quieres ofrecer descuentos o promociones?</FieldLabel>
                {renderChecks("discounts", ["Primera clase", "Paquete de bienvenida", "Plan de amigas", "Código promocional", "No por ahora"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 10 }}>
                <FieldLabel hint="La facturación electrónica no viene automática en el sistema contratado">¿Necesitas emitir factura electrónica?</FieldLabel>
                {renderRadios("invoice", ["Sí", "No", "Estoy en proceso de definirlo"])}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>Recorrido ideal de reserva</FieldLabel>
                {renderRadios("bookingFlow", [
                  "La alumna se registra, compra un paquete y reserva",
                  "Elige primero la clase y después paga",
                  "Reserva y paga presencialmente",
                  "Necesito recomendación",
                ])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel>¿Con cuánta anticipación puede reservar?</FieldLabel>
                {renderRadios("bookAhead", ["Hasta 7 días antes", "Hasta 15 días antes", "Hasta 30 días antes", "Otro"])}
                {form.bookAhead === "Otro" && (
                  <input className={`${inputClass("bookAheadOther")} mt-2`} value={form.bookAheadOther} onChange={(e) => update("bookAheadOther", e.target.value)} placeholder="Indica el plazo" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel>Tiempo mínimo para reservar antes de la clase</FieldLabel>
                <input className={inputClass("minBefore")} value={form.minBefore} onChange={(e) => update("minBefore", e.target.value)} placeholder="Ej. 60 minutos / 2 horas" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>¿Hasta cuánto tiempo antes puede cancelar?</FieldLabel>
                {renderRadios("cancelBefore", ["4 horas", "6 horas", "12 horas", "24 horas", "Otro"])}
                {form.cancelBefore === "Otro" && (
                  <input className={`${inputClass("cancelBeforeOther")} mt-2`} value={form.cancelBeforeOther} onChange={(e) => update("cancelBeforeOther", e.target.value)} placeholder="Indica el plazo" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>Si no asiste</FieldLabel>
                {renderRadios("noShow", ["Pierde su sesión", "Puede recuperarla", "Se revisa cada caso"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>Si AR cancela una clase</FieldLabel>
                {renderRadios("studioCancel", ["Se devuelve automáticamente la sesión", "Se ofrece otro horario", "Administración gestiona el caso"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Permitir cambios de horario?</FieldLabel>
                {renderRadios("allowChange", ["Sí", "No"])}
                {form.allowChange === "Sí" && (
                  <input className={`${inputClass("changeUntil")} mt-2`} value={form.changeUntil} onChange={(e) => update("changeUntil", e.target.value)} placeholder="¿Hasta cuánto tiempo antes?" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel>¿Lista de espera?</FieldLabel>
                {renderRadios("waitlist", ["Sí", "No", "Más adelante"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 8 }}>
                <FieldLabel>¿Reservar para otra persona?</FieldLabel>
                {renderRadios("bookForOther", ["Solo titular", "Otra persona", "Ambas opciones"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 9 }}>
                <FieldLabel>¿Reservas gratuitas o cortesías?</FieldLabel>
                {renderRadios("courtesy", ["Sí", "No"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 10 }}>
                <FieldLabel>Datos al registrarse</FieldLabel>
                {renderChecks("alumnaFields", ["Nombre y apellido", "Correo electrónico", "WhatsApp", "Fecha de nacimiento", "Contacto de emergencia", "Otra"])}
                {form.alumnaFields.includes("Otra") && (
                  <input className={`${inputClass("alumnaOther")} mt-2`} value={form.alumnaOther} onChange={(e) => update("alumnaOther", e.target.value)} placeholder="Otro dato" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 11 }}>
                <FieldLabel>¿Ya tienes alumnas o paquetes vendidos?</FieldLabel>
                {renderRadios("existingClients", ["No, empezamos desde cero", "Sí, tengo algunas alumnas", "Sí, tengo paquetes activos"])}
                {form.existingClients !== "" && form.existingClients !== "No, empezamos desde cero" && (
                  <textarea rows={2} className={`${inputClass("existingDetail")} mt-2`} value={form.existingDetail} onChange={(e) => update("existingDetail", e.target.value)} placeholder="Cantidad aproximada y si tienes archivo para importar" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 12 }}>
                <FieldLabel>¿Quién usará el panel?</FieldLabel>
                {renderChecks("panelUsers", ["Propietaria", "Recepción", "Instructoras", "Administradora", "Otro"])}
                {form.panelUsers.includes("Otro") && (
                  <input className={`${inputClass("panelUsersOther")} mt-2`} value={form.panelUsersOther} onChange={(e) => update("panelUsersOther", e.target.value)} placeholder="Otro rol" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 13 }}>
                <FieldLabel hint="Indica roles autorizados en cada línea">Permisos del panel</FieldLabel>
                <div className="space-y-2">
                  {[
                    ["permsCreateClass", "Crear o editar clases"],
                    ["permsCancelClass", "Cancelar clases"],
                    ["permsRegister", "Registrar alumnas"],
                    ["permsManualBook", "Crear reservas manuales"],
                    ["permsAttendance", "Registrar asistencias"],
                    ["permsPayments", "Revisar pagos"],
                    ["permsPackages", "Modificar paquetes"],
                    ["permsReports", "Consultar reportes"],
                  ].map(([k, label]) => (
                    <input key={k} className="ar-brief-input" value={form[k]} onChange={(e) => update(k, e.target.value)} placeholder={label} />
                  ))}
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 14 }}>
                <FieldLabel hint="Elige hasta cinco">¿Qué quieres ver al entrar al panel?</FieldLabel>
                {renderChecks(
                  "panelPriorities",
                  [
                    "Clases del día",
                    "Cupos disponibles",
                    "Reservas confirmadas",
                    "Total de alumnas",
                    "Paquetes activos",
                    "Sesiones próximas a vencer",
                    "Ventas del día",
                    "Ingresos del mes",
                    "Clases más reservadas",
                    "Asistencia por instructora",
                  ],
                  5
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 15 }}>
                <FieldLabel>¿Cómo marcar asistencia?</FieldLabel>
                {renderRadios("attendanceHow", ["Recepción confirma la llegada", "La instructora marca la asistencia", "Check-in digital", "Aún por definir"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 16 }}>
                <FieldLabel>Reportes frecuentes</FieldLabel>
                {renderChecks("reportsNeeded", ["Reservas por fecha", "Asistencia", "Paquetes vendidos", "Ingresos registrados", "Ocupación por modalidad", "Otro"])}
                {form.reportsNeeded.includes("Otro") && (
                  <input className={`${inputClass("reportsOther")} mt-2`} value={form.reportsOther} onChange={(e) => update("reportsOther", e.target.value)} placeholder="Otro reporte" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 17 }}>
                <FieldLabel>Indispensables desde el primer día</FieldLabel>
                <textarea rows={3} className={inputClass("mustHave")} value={form.mustHave} onChange={(e) => update("mustHave", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 18 }}>
                <FieldLabel>Me gustaría tenerlas más adelante</FieldLabel>
                <textarea rows={3} className={inputClass("laterHave")} value={form.laterHave} onChange={(e) => update("laterHave", e.target.value)} />
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>Historia de AR Pilates</FieldLabel>
                <textarea rows={4} className={inputClass("story")} value={form.story} onChange={(e) => update("story", e.target.value)} placeholder="Cómo nació el estudio y qué te motivó" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel>¿Qué debe entender una mujer en los primeros segundos?</FieldLabel>
                <textarea rows={3} className={inputClass("firstSeconds")} value={form.firstSeconds} onChange={(e) => update("firstSeconds", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel>Tres razones para entrenar en AR</FieldLabel>
                <div className="space-y-2">
                  <input className={inputClass("reason1")} value={form.reason1} onChange={(e) => update("reason1", e.target.value)} placeholder="Razón 1" />
                  <input className={inputClass("reason2")} value={form.reason2} onChange={(e) => update("reason2", e.target.value)} placeholder="Razón 2" />
                  <input className={inputClass("reason3")} value={form.reason3} onChange={(e) => update("reason3", e.target.value)} placeholder="Razón 3" />
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>¿Qué información quieres destacar?</FieldLabel>
                {renderChecks("highlight", ["Modalidades", "Instalaciones", "Instructoras", "Horarios", "Paquetes", "Ubicación", "Testimonios", "Otra"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>Testimonios o experiencias disponibles</FieldLabel>
                {renderChecks("testimonials", ["Videos", "Fotografías", "Reseñas escritas", "Todavía ninguno"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>Preguntas frecuentes (pregunta + respuesta)</FieldLabel>
                <textarea rows={4} className={inputClass("faq")} value={form.faq} onChange={(e) => update("faq", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Qué te gustaría promocionar primero?</FieldLabel>
                {renderRadios("promoteFirst", ["Primera clase de prueba", "Paquete de bienvenida", "Clase Reformer", "Todas las modalidades", "Otra oferta"])}
                {form.promoteFirst === "Otra oferta" && (
                  <input className={`${inputClass("promoteOther")} mt-2`} value={form.promoteOther} onChange={(e) => update("promoteOther", e.target.value)} placeholder="Describe la oferta" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel>Precio, beneficio y vigencia de esa oferta</FieldLabel>
                <textarea rows={3} className={inputClass("offerDetail")} value={form.offerDetail} onChange={(e) => update("offerDetail", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 8 }}>
                <FieldLabel>¿A quién queremos atraer?</FieldLabel>
                {renderChecks("audience", [
                  "Mujeres cerca de Ciudad Montes",
                  "Mujeres de otras zonas de Bogotá",
                  "Personas interesadas en Pilates",
                  "Personas que buscan una actividad física diferente",
                  "Otro público",
                ])}
                {form.audience.includes("Otro público") && (
                  <input className={`${inputClass("audienceOther")} mt-2`} value={form.audienceOther} onChange={(e) => update("audienceOther", e.target.value)} placeholder="Otro público" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 9 }}>
                <FieldLabel>Acción principal al entrar a la landing</FieldLabel>
                {renderRadios("landingAction", ["Reservar una clase", "Comprar un paquete", "Hablar por WhatsApp", "Registrarse para recibir información"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 10 }}>
                <FieldLabel>Dudas que pueden impedir una reserva</FieldLabel>
                {renderChecks("blockers", [
                  "Precio",
                  "Ubicación",
                  "No conocer la modalidad",
                  "Pensar que necesita experiencia previa",
                  "Horarios",
                  "No conocer el estudio",
                  "Otra",
                ])}
                {form.blockers.includes("Otra") && (
                  <input className={`${inputClass("blockersOther")} mt-2`} value={form.blockersOther} onChange={(e) => update("blockersOther", e.target.value)} placeholder="Otra duda" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 11 }}>
                <FieldLabel>¿Tienes fotografías y videos propios?</FieldLabel>
                {renderRadios("mediaReady", ["Sí, suficientes", "Tengo algunos", "Necesito producirlos"])}
                <input className={`${inputClass("mediaLink")} mt-2`} value={form.mediaLink} onChange={(e) => update("mediaLink", e.target.value)} placeholder="Enlace a Drive / carpeta (opcional)" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 12 }}>
                <FieldLabel>Objetivo principal del lanzamiento digital</FieldLabel>
                {renderRadios("launchGoal", ["Generar primeras reservas", "Vender paquetes", "Dar a conocer AR", "Una combinación de los anteriores"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 13 }}>
                <FieldLabel>Meta del primer mes (reservas o ventas)</FieldLabel>
                <input className={inputClass("monthGoal")} value={form.monthGoal} onChange={(e) => update("monthGoal", e.target.value)} placeholder="Número o «Necesito asesoría»" />
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>Cuando alguien pregunta por las clases en Instagram</FieldLabel>
                {renderRadios("igToday", ["Respondo personalmente", "Me ayuda alguien del equipo", "Todavía recibimos pocas consultas", "Otro"])}
                {form.igToday === "Otro" && (
                  <input className={`${inputClass("igTodayOther")} mt-2`} value={form.igTodayOther} onChange={(e) => update("igTodayOther", e.target.value)} placeholder="Cuéntanos" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel>Preguntas frecuentes en DM</FieldLabel>
                {renderChecks("igFaqs", ["Precios", "Horarios", "Ubicación", "Modalidades", "Cómo reservar", "Qué incluye una clase", "Otra"])}
                {form.igFaqs.includes("Otra") && (
                  <input className={`${inputClass("igFaqsOther")} mt-2`} value={form.igFaqsOther} onChange={(e) => update("igFaqsOther", e.target.value)} placeholder="Otra pregunta" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel>¿Qué respuestas quieres automatizar?</FieldLabel>
                {renderChecks("igAutomate", [
                  "Mensaje inicial",
                  "Información de modalidades",
                  "Precios y paquetes",
                  "Horarios",
                  "Ubicación",
                  "Enlace de reserva",
                  "Contacto con una persona",
                ])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>¿Activar respuestas por palabras clave?</FieldLabel>
                {renderRadios("keywords", ["Sí", "No"])}
                {form.keywords === "Sí" && (
                  <textarea rows={2} className={`${inputClass("keywordList")} mt-2`} value={form.keywordList} onChange={(e) => update("keywordList", e.target.value)} placeholder="Palabras clave" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>Tono de los mensajes de AR</FieldLabel>
                {renderRadios("tone", ["Cercano y femenino", "Elegante y profesional", "Energético y motivador", "Natural e informal", "Otro"])}
                {form.tone === "Otro" && (
                  <input className={`${inputClass("toneOther")} mt-2`} value={form.toneOther} onChange={(e) => update("toneOther", e.target.value)} placeholder="Describe el tono" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>¿En qué casos prefieres que responda una persona?</FieldLabel>
                <textarea rows={3} className={inputClass("humanCases")} value={form.humanCases} onChange={(e) => update("humanCases", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Instagram conectado a Facebook y Meta Business?</FieldLabel>
                {renderRadios("metaConnected", ["Sí", "No", "No estoy segura"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel>Notificaciones para alumnas</FieldLabel>
                {renderChecks("notifications", [
                  "Compra confirmada",
                  "Reserva confirmada",
                  "Recordatorio previo a la clase",
                  "Cambio o cancelación",
                  "Paquete próximo a vencer",
                  "Sesiones próximas a agotarse",
                  "Invitación a renovar",
                ])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 8 }}>
                <FieldLabel>Canales de envío</FieldLabel>
                {renderChecks("channels", ["Correo electrónico", "WhatsApp", "Notificaciones de la plataforma", "Por definir"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 9 }}>
                <FieldLabel>Anticipación de recordatorios</FieldLabel>
                {renderRadios("reminderWhen", ["2 horas", "12 horas", "24 horas", "Otro"])}
                {form.reminderWhen === "Otro" && (
                  <input className={`${inputClass("reminderOther")} mt-2`} value={form.reminderOther} onChange={(e) => update("reminderOther", e.target.value)} placeholder="Indica el plazo" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 10 }}>
                <FieldLabel>¿Quién atiende lo que requiera intervención humana?</FieldLabel>
                <input className={inputClass("humanWho")} value={form.humanWho} onChange={(e) => update("humanWho", e.target.value)} placeholder="Nombre o rol" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 11 }}>
                <FieldLabel hint="Opcional">Mensajes de marca que quieras conservar</FieldLabel>
                <textarea rows={3} className={inputClass("brandMessages")} value={form.brandMessages} onChange={(e) => update("brandMessages", e.target.value)} />
              </div>
            </>
          )}

          {step === 7 && (
            <>
              <div className="ar-brief-field" style={{ "--field-i": 0 }}>
                <FieldLabel>Información pública de AR</FieldLabel>
                <div className="space-y-2">
                  <input className={inputClass("publicName")} value={form.publicName} onChange={(e) => update("publicName", e.target.value)} placeholder="Nombre comercial" />
                  <input className={inputClass("publicAddress")} value={form.publicAddress} onChange={(e) => update("publicAddress", e.target.value)} placeholder="Dirección" />
                  <input className={inputClass("publicPhone")} value={form.publicPhone} onChange={(e) => update("publicPhone", e.target.value)} placeholder="Teléfono de atención" />
                  <input className={inputClass("publicEmail")} value={form.publicEmail} onChange={(e) => update("publicEmail", e.target.value)} placeholder="Correo de contacto" />
                  <input className={inputClass("publicHours")} value={form.publicHours} onChange={(e) => update("publicHours", e.target.value)} placeholder="Horario de funcionamiento" />
                  <input className={inputClass("publicSocial")} value={form.publicSocial} onChange={(e) => update("publicSocial", e.target.value)} placeholder="Redes oficiales" />
                  <input className={inputClass("publicMaps")} value={form.publicMaps} onChange={(e) => update("publicMaps", e.target.value)} placeholder="Google Maps (si existe)" />
                </div>
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 1 }}>
                <FieldLabel>¿Ya tienes dominio web?</FieldLabel>
                {renderRadios("hasDomain", ["Sí", "No"])}
                {form.hasDomain === "Sí" && (
                  <input className={`${inputClass("domainDetail")} mt-2`} value={form.domainDetail} onChange={(e) => update("domainDetail", e.target.value)} placeholder="Dominio y proveedor" />
                )}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 2 }}>
                <FieldLabel>¿Tienes correo empresarial?</FieldLabel>
                {renderRadios("hasBizEmail", ["Sí", "No"])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 3 }}>
                <FieldLabel>Cuentas ya activas</FieldLabel>
                {renderChecks("platforms", [
                  "Meta Business Suite",
                  "Página de Facebook vinculada",
                  "Plataforma de pagos",
                  "Google Analytics",
                  "Google Business Profile",
                  "Otra",
                ])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 4 }}>
                <FieldLabel>¿Quién aprueba el diseño de la web?</FieldLabel>
                <input className={inputClass("approveDesign")} value={form.approveDesign} onChange={(e) => update("approveDesign", e.target.value)} placeholder="Nombre y correo *" />
                {errors.approveDesign && <p className="mt-1 text-xs text-red-500">{errors.approveDesign}</p>}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 5 }}>
                <FieldLabel>¿Quién aprueba precios, paquetes y reglas?</FieldLabel>
                <input className={inputClass("approvePrices")} value={form.approvePrices} onChange={(e) => update("approvePrices", e.target.value)} placeholder="Nombre y correo" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 6 }}>
                <FieldLabel>¿Quién administra el sistema después de la entrega?</FieldLabel>
                <input className={inputClass("adminAfter")} value={form.adminAfter} onChange={(e) => update("adminAfter", e.target.value)} placeholder="Nombre y rol" />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 7 }}>
                <FieldLabel>Materiales listos</FieldLabel>
                {renderChecks("materialsReady", [
                  "Logo",
                  "Paleta y tipografías",
                  "Fotografías",
                  "Videos",
                  "Precios",
                  "Horarios",
                  "Información de instructoras",
                  "Descripciones de clases",
                  "Políticas de reservas",
                  "Políticas de privacidad y tratamiento de datos",
                  "Otro",
                ])}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 8 }}>
                <FieldLabel>Materiales que aún necesitamos preparar</FieldLabel>
                <textarea rows={3} className={inputClass("materialsMissing")} value={form.materialsMissing} onChange={(e) => update("materialsMissing", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 9 }}>
                <FieldLabel>¿Confirmamos el lanzamiento digital del 5 de diciembre de 2026?</FieldLabel>
                {renderRadios("launchConfirm", ["Sí", "Necesito revisar un pendiente", "Debemos acordar una fecha ajustada"])}
                {errors.launchConfirm && <p className="mt-1 text-xs text-red-500">{errors.launchConfirm}</p>}
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 10 }}>
                <FieldLabel>Lo más importante para ti en las primeras semanas</FieldLabel>
                <textarea rows={3} className={inputClass("firstWeeks")} value={form.firstWeeks} onChange={(e) => update("firstWeeks", e.target.value)} />
              </div>
              <div className="ar-brief-field" style={{ "--field-i": 11 }}>
                <FieldLabel>¿Algo adicional que debamos conocer?</FieldLabel>
                <textarea rows={3} className={inputClass("extraNotes")} value={form.extraNotes} onChange={(e) => update("extraNotes", e.target.value)} />
              </div>
            </>
          )}
        </div>

        {submitError && <p className="mt-6 text-center text-sm text-red-500">{submitError}</p>}

        <div className="ar-brief-nav-row mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button type="button" onClick={goPrev} disabled={step === 1} className="ar-brief-btn-ghost order-2 px-5 py-3 text-sm sm:order-1">
            Anterior
          </button>
          {step < totalSteps ? (
            <button type="button" onClick={goNext} className="ar-brief-btn-primary order-1 px-5 py-3 text-sm sm:order-2 sm:ml-auto">
              Siguiente
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} disabled={submitting} className="ar-brief-btn-primary order-1 px-5 py-3 text-sm sm:order-2 sm:ml-auto">
              {submitting ? "Enviando…" : "Enviar brief"}
            </button>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-[#999]">
          <Link href={PROPOSAL_URL} className="font-medium text-[#8f7a66] underline-offset-2 hover:underline">
            Volver a la propuesta
          </Link>
        </p>
      </div>
    </main>
  );
}
