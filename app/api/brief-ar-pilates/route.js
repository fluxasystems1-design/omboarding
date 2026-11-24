function escapeHtml(str) {
  if (str == null || str === "") return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const LABELS = {
  brandName: "Nombre comercial",
  founder: "Fundadora",
  email: "Correo",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  address: "Dirección",
  hours: "Horario de atención",
  oneLine: "AR en una frase",
  feelings: "Sensaciones al entrar",
  feelingsOther: "Otra sensación",
  idealClient: "Clienta ideal",
  idealOther: "Otro perfil",
  whyAr: "Por qué elegir AR",
  style: "Estilo de página",
  styleOther: "Otro estilo",
  brandManual: "Manual de marca",
  brandColorsFonts: "Colores y tipografías",
  brandFiles: "Archivos de marca",
  references: "Referencias visuales",
  modalities: "Modalidades iniciales",
  modalitiesOther: "Otra modalidad",
  modalityCards: "Fichas de modalidades",
  schedules: "Horarios",
  schedulesFixed: "Horarios fijos o variables",
  schedulesWhoUpdates: "Quién actualiza horarios",
  rooms: "Salas / espacios",
  simultaneous: "Clases simultáneas",
  prepTime: "Tiempo de preparación entre clases",
  prepMinutes: "Minutos de preparación",
  instructors: "Instructoras",
  privateEvents: "Privadas / eventos",
  privateDetails: "Detalle privadas / eventos",
  products: "Productos a vender",
  productsOther: "Otro producto",
  plans: "Planes configurados",
  deductWhen: "Cuándo se descuenta la clase",
  cancelRecover: "Recupera sesión al cancelar a tiempo",
  unusedSessions: "Sesiones no usadas al vencer",
  multiModality: "Paquete multi-modalidad",
  multiModalityDetail: "Combinaciones de modalidades",
  payments: "Medios de pago",
  paymentsOther: "Otro medio de pago",
  afterPayment: "Después de un pago exitoso",
  transferWho: "Quién verifica transferencias",
  discounts: "Descuentos / promociones",
  invoice: "Factura electrónica",
  bookingFlow: "Recorrido de reserva",
  bookAhead: "Anticipación para reservar",
  bookAheadOther: "Otra anticipación",
  minBefore: "Mínimo antes de la clase",
  cancelBefore: "Cancelación hasta",
  cancelBeforeOther: "Otro plazo de cancelación",
  noShow: "No asistencia",
  studioCancel: "Si AR cancela",
  allowChange: "Cambios de horario",
  changeUntil: "Plazo para cambiar horario",
  waitlist: "Lista de espera",
  bookForOther: "Reservar para otra persona",
  courtesy: "Cortesías / gratuitas",
  alumnaFields: "Datos al registrarse",
  alumnaOther: "Otro dato de registro",
  existingClients: "Alumnas / paquetes existentes",
  existingDetail: "Detalle base existente",
  panelUsers: "Quién usa el panel",
  panelUsersOther: "Otro rol del panel",
  permsCreateClass: "Permiso: crear/editar clases",
  permsCancelClass: "Permiso: cancelar clases",
  permsRegister: "Permiso: registrar alumnas",
  permsManualBook: "Permiso: reservas manuales",
  permsAttendance: "Permiso: asistencias",
  permsPayments: "Permiso: pagos",
  permsPackages: "Permiso: paquetes",
  permsReports: "Permiso: reportes",
  panelPriorities: "Prioridades del panel",
  attendanceHow: "Cómo marcar asistencia",
  reportsNeeded: "Reportes frecuentes",
  reportsOther: "Otro reporte",
  mustHave: "Indispensables día 1",
  laterHave: "Más adelante",
  story: "Historia de AR",
  firstSeconds: "Primeros segundos",
  reason1: "Razón 1",
  reason2: "Razón 2",
  reason3: "Razón 3",
  highlight: "Info a destacar",
  testimonials: "Testimonios disponibles",
  faq: "FAQ",
  promoteFirst: "Primera promoción",
  promoteOther: "Otra oferta",
  offerDetail: "Detalle de la oferta",
  audience: "Audiencia de campaña",
  audienceOther: "Otro público",
  landingAction: "Acción principal landing",
  blockers: "Objeciones",
  blockersOther: "Otra objeción",
  mediaReady: "Fotos y videos",
  mediaLink: "Enlace de medios",
  launchGoal: "Objetivo del lanzamiento",
  monthGoal: "Meta primer mes",
  igToday: "Cómo responden hoy en IG",
  igTodayOther: "Otro flujo IG",
  igFaqs: "FAQ en DM",
  igFaqsOther: "Otra FAQ DM",
  igAutomate: "Respuestas a automatizar",
  keywords: "Palabras clave",
  keywordList: "Lista de palabras clave",
  tone: "Tono de mensajes",
  toneOther: "Otro tono",
  humanCases: "Casos humanos",
  metaConnected: "Meta Business conectado",
  notifications: "Notificaciones",
  channels: "Canales",
  reminderWhen: "Anticipación recordatorio",
  reminderOther: "Otro recordatorio",
  humanWho: "Quién atiende intervención humana",
  brandMessages: "Mensajes de marca a conservar",
  publicName: "Nombre público",
  publicAddress: "Dirección pública",
  publicPhone: "Teléfono público",
  publicEmail: "Correo público",
  publicHours: "Horario público",
  publicSocial: "Redes oficiales",
  publicMaps: "Google Maps",
  hasDomain: "Tiene dominio",
  domainDetail: "Detalle dominio",
  hasBizEmail: "Correo empresarial",
  platforms: "Plataformas activas",
  approveDesign: "Aprueba diseño",
  approvePrices: "Aprueba precios/reglas",
  adminAfter: "Administra post entrega",
  materialsReady: "Materiales listos",
  materialsMissing: "Materiales pendientes",
  launchConfirm: "Confirma lanzamiento 5 dic 2026",
  firstWeeks: "Prioridad primeras semanas",
  extraNotes: "Notas adicionales",
};

function buildEmailHtml(data) {
  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido — AR Pilates Studio</h1>`;
  html += `<p style="color:#666;">@arpilates.estudio · Brief de implementación · Partnersflux</p>`;
  html += `<p><strong>Fundadora:</strong> ${escapeHtml(data.founder || "")} · <strong>Correo:</strong> ${escapeHtml(data.email || "")}</p>`;
  html += `<table style="border-collapse:collapse;width:100%;max-width:760px;margin-top:16px;">`;

  for (const [key, label] of Object.entries(LABELS)) {
    const val = data[key];
    if (val == null || String(val).trim() === "") continue;
    html += `<tr><td style="border:1px solid #ddd;padding:8px;font-weight:bold;vertical-align:top;width:34%;">${escapeHtml(label)}</td>`;
    html += `<td style="border:1px solid #ddd;padding:8px;white-space:pre-wrap;">${escapeHtml(val).replace(/\n/g, "<br/>")}</td></tr>`;
  }

  html += `</table></body></html>`;
  return html;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: ["fluxasystems1@gmail.com"],
          subject: "Brief recibido — AR Pilates Studio",
          html: buildEmailHtml(body),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return Response.json({ error: "No se pudo enviar el correo. Intente más tarde." }, { status: 502 });
      }
    } else {
      console.log("Brief AR Pilates (Resend no configurado):", JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e.message || "Error al procesar la solicitud" }, { status: 500 });
  }
}
