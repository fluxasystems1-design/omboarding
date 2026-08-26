function escapeHtml(str) {
  if (str == null || str === "") return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  return value != null ? value : "";
}

function buildEmailHtml(data) {
  const questionLabels = [
    "1. Tienes guia de marca o manual de identidad?",
    "2. Cuales son tus colores oficiales?",
    "3. Tienes tipografia definida?",
    "4. Como describes lo que haces en una sola frase?",
    "5. Que tres palabras definen tu forma de ayudar a tus clientas?",
    "6. Nombre para tu metodo propio: cual resuena mas?",
    "7. Si elegiste otra idea, cual seria?",
    "8. Que te hace elegirte a ti y no a otra nutricionista?",
    "9. Que servicios ofreces hoy?",
    "10. Taller El ciclo de la ansiedad: compras, resultados y feedback",
    "11. Has vendido algo digital antes? Como fue?",
    "12. Que te gustaria que fuera tu producto digital principal?",
    "13. Tienes contenido ya grabado que se pueda reutilizar?",
    "14. Describe a tu clienta ideal",
    "15. A quien le hablas hoy vs a quien quieres atraer?",
    "16. Que la hace buscar ayuda contigo?",
    "17. Que resultado quiere lograr en 30, 60 o 90 dias?",
    "18. Que objeciones te ponen antes de comprar?",
    "19. Como hablas tu normalmente?",
    "20. Horas semanales para grabar o crear contenido nuevo",
    "21. Comodidad grabando video/reels vs contenido estatico",
    "22. Producto evergreen de una vez vs contenido mensual",
    "23. Banco de fotos/videos propios en buena calidad?",
    "24. Fotos o video del taller de ansiedad?",
    "25. Testimonios reales de clientas?",
    "26. Logo en alta calidad (PNG/vector)?",
    "27. Acceso a Instagram (admin o quien publica)",
    "28. WhatsApp Business y numero dedicado",
    "29. Pagina web o solo Wix actual",
    "30. Plataforma de pagos o cursos (Hotmart, Bold, otro)",
    "31. Lista de correos o base de contactos",
    "32. Cuentas o creadoras que admiras en tu nicho",
    "33. Membresia o programa digital que te guste como formato",
    "34. Que NO quieres que tu marca se parezca",
    "35. Meta en 3 meses con este proyecto",
    "36. Meta en 6 a 12 meses",
    "37. Fecha en mente para lanzar el primer producto",
    "38. Precio de entrada y membresia (calibracion)",
  ];
  const rows = questionLabels.map((label, index) => [`q${String(index + 1).padStart(2, "0")}`, label]);

  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido - Maria Fernanda Cerquera</h1><table style="border-collapse:collapse;width:100%;max-width:700px;">`;

  for (const [key, label] of rows) {
    const val = formatValue(data[key]);
    html += `<tr><td style="border:1px solid #ddd;padding:8px;font-weight:bold;vertical-align:top;width:38%;">${escapeHtml(label)}</td>`;
    html += `<td style="border:1px solid #ddd;padding:8px;">${escapeHtml(val).replace(/\n/g, "<br/>")}</td></tr>`;
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
          subject: "Brief recibido - Maria Fernanda Cerquera",
          html: buildEmailHtml(body),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return Response.json({ error: "No se pudo enviar el correo. Intente mas tarde." }, { status: 502 });
      }
    } else {
      console.log("Brief Maria Fernanda Cerquera (Resend no configurado):", JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e.message || "Error al procesar la solicitud" }, { status: 500 });
  }
}
