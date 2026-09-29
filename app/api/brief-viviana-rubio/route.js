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
    "1. Guia de marca @nutricionista.vivianarubio y/o @nutrixionfuncional",
    "2. Colores oficiales (marca personal y Nutrixion)",
    "3. Tipografia definida",
    "4. Frase de lo que hace (ortomolecular, metabolismo, terapias)",
    "5. Tres palabras que definen su acompanamiento",
    "6. Nombre del metodo propio que resuena",
    "7. Otra idea de nombre de metodo",
    "8. Diferenciacion vs otra nutricionista",
    "9. Oferta actual (Ibagué, online, terapias, Nutrixion)",
    "10. Como se vende @nutrixionfuncional hoy",
    "11. Volumen consultas presencial/online y dependencia de WhatsApp",
    "12. Producto digital de entrada y conexion con membresia",
    "13. Contenido grabado reutilizable",
    "14. Clienta ideal (empresaria/profesional, frustraciones)",
    "15. Seguidores actuales vs audiencia deseada para landing/membresia",
    "16. Problema que la trae primero",
    "17. Resultado en 30/60/90 dias",
    "18. Objeciones antes de agendar o comprar",
    "19. Tono de comunicacion",
    "20. Horas semanales para contenido (ademas de consultas)",
    "21. Comodidad con video/reels vs fotos/producto",
    "22. Evergreen de una vez vs contenido mensual",
    "23. Banco de fotos/videos (consultorio, camara, Nutrixion)",
    "24. Fotos/video de producto Nutrixion para landing/ads",
    "25. Testimonios consulta o Nutrixion",
    "26. Logo alta calidad marca personal y/o Nutrixion",
    "27. Admin Instagram ambas cuentas",
    "28. wa.link/chsnoe Business y numero dedicado",
    "29. Confirmacion: sin homepage, solo IG/WhatsApp",
    "30. Plataforma de pagos actual",
    "31. Base de contactos para reactivar",
    "32. Referentes nutricion funcional / bienestar empresarial",
    "33. Membresia o programa digital de referencia",
    "34. Que NO quiere que parezca su marca",
    "35. Meta 3 meses",
    "36. Meta 6 a 12 meses",
    "37. Fecha de lanzamiento producto/membresia",
    "38. Precio entrada y membresia mensual (calibracion)",
  ];
  const rows = questionLabels.map((label, index) => [`q${String(index + 1).padStart(2, "0")}`, label]);

  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido - Viviana Rubio</h1><table style="border-collapse:collapse;width:100%;max-width:700px;">`;

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
          subject: "Brief recibido - Viviana Rubio",
          html: buildEmailHtml(body),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return Response.json({ error: "No se pudo enviar el correo. Intente mas tarde." }, { status: 502 });
      }
    } else {
      console.log("Brief Viviana Rubio (Resend no configurado):", JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e.message || "Error al procesar la solicitud" }, { status: 500 });
  }
}
