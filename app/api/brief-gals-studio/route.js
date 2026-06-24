function escapeHtml(str) {
  if (str == null || str === "") return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const QUESTION_LABELS = [
  "¿Tienes guía de marca o manual de identidad?",
  "¿Cuáles son tus colores oficiales?",
  "¿Tienes tipografía definida?",
  "¿Cómo describes GAL'S Studio en una sola frase?",
  "¿Qué tres palabras definen la experiencia de estar en GAL'S?",
  "¿A quién le hablas — quién es tu cliente ideal?",
  "¿Qué la hace elegirte a ti y no a otro estudio?",
  "¿Qué servicios quieres mostrar en la home principal?",
  "¿Cómo describes cada experiencia que ofreces?",
  "¿Cuál es tu servicio más vendido hoy?",
  "¿Cuál es el que más quieres posicionar?",
  "¿Tienes precios definidos o prefieres que el sistema lleve directo a reserva?",
  "¿Qué incluye exactamente cada experiencia o clase?",
  "¿Cuál es el paso que quieres que dé alguien cuando llega a tu página — reservar, escribirte, comprar?",
  "¿Tienes WhatsApp Business activo con número fijo?",
  "¿Tienes Bewe configurado con tus servicios y precios cargados?",
  "¿Qué preguntas te hace la gente antes de reservar?",
  "¿Qué objeciones tiene la gente antes de comprar — precio, tiempo, ubicación?",
  "¿Qué le dices hoy a alguien que te pregunta por primera vez?",
  "¿Tienes fotos profesionales del estudio?",
  "¿Tienes video del estudio o de clases en movimiento?",
  "¿Tienes fotos tuyas que transmitan tu marca personal?",
  "¿Hay frases o testimonios de alumnas que puedas compartir?",
  "¿Cómo hablas tú — formal, cercana, inspiracional?",
  "¿Hay palabras o frases que NO quieres que aparezcan en tu comunicación?",
  "¿Tienes 2 o 3 páginas web que te gusten visualmente — de cualquier industria?",
  "¿Hay alguna marca de bienestar que admires y por qué?",
  "¿Cómo quieres que se sienta alguien cuando entra a tu página?",
  "¿Cuántas alumnas activas quieres tener en 6 meses?",
  "¿Cuánto quieres que esté generando GAL'S mensualmente en 6 meses?",
  "¿Y en un año?",
  "¿Qué producto o servicio quieres que sea tu fuente principal de ingresos?",
  "¿Quieres que GAL'S sea solo presencial o también digital — clases online, membresías, productos?",
  "¿Te imaginas expandiendo el estudio — más sedes, más instructoras?",
  "¿Qué tan conocida quieres ser fuera de Colombia?",
  "¿Hay un sueño detrás de GAL'S que todavía no has dicho en público?",
  "¿Cómo quieres que te recuerden las mujeres que pasan por GAL'S?",
  "¿Qué tiene que pasar en los próximos 90 días para que sientas que esto valió la pena?",
  "Logo en PNG fondo transparente y versión oscura",
  "Credenciales de acceso a Bewe",
  "Número de WhatsApp Business",
  "Dominio propio si tiene — o definir dónde va a vivir la página",
  "Acceso a Instagram @galstudio___ para revisar contenido existente",
  "Fotos y videos organizados en Drive o carpeta compartida",
];

function buildEmailHtml(data) {
  const rows = QUESTION_LABELS.map((label, index) => [`q${String(index + 1).padStart(2, "0")}`, label]);

  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido — GAL'S Studio (Natalia Galvis)</h1>`;
  html += `<p style="color:#666;">@galstudio___ · Metas de marca y arranque digital</p>`;
  html += `<table style="border-collapse:collapse;width:100%;max-width:720px;margin-top:16px;">`;

  for (const [key, label] of rows) {
    const val = data[key];
    html += `<tr><td style="border:1px solid #ddd;padding:8px;font-weight:bold;vertical-align:top;width:38%;">${escapeHtml(label)}</td>`;
    html += `<td style="border:1px solid #ddd;padding:8px;">${escapeHtml(val != null ? val : "").replace(/\n/g, "<br/>")}</td></tr>`;
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
          subject: "Brief recibido — GAL'S Studio (Natalia Galvis)",
          html: buildEmailHtml(body),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return Response.json({ error: "No se pudo enviar el correo. Intente más tarde." }, { status: 502 });
      }
    } else {
      console.log("Brief GAL'S Studio (Resend no configurado):", JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e.message || "Error al procesar la solicitud" }, { status: 500 });
  }
}
