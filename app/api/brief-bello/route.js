function escapeHtml(str) {
  if (str == null || str === "") return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data) {
  const rows = [
    ["colores", "Colores de marca"],
    ["fuentes", "Fuentes / tipografías"],
    ["tono", "Tono de marca"],
    ["percepcion", "Percepción deseada"],
    ["suplemento1", "Magnesio"],
    ["suplemento2", "Omega 3"],
    ["suplemento3", "Creatina"],
    ["descripcionSupl", "Descripción suplementos"],
    ["variantesSupl", "Variantes suplementos"],
    ["cursos", "Cursos"],
    ["libros", "Libros"],
    ["precioConsulta", "Precio consulta 1:1"],
    ["duracionConsulta", "Duración sesión"],
    ["modalidad", "Modalidad"],
    ["tieneCalendly", "Calendly / herramienta"],
    ["linkCalendly", "Link Calendly / otra"],
    ["accesos", "Accesos seleccionados"],
    ["accesosFaltantes", "Accesos faltantes / ayuda"],
    ["infoAdicional", "Información adicional"],
    ["resultadoEsperado", "Resultado esperado (3 meses)"],
  ];

  const accesosVal = Array.isArray(data.accesos) ? data.accesos.join(", ") : data.accesos || "";

  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido — Dr. Leonardo Bello</h1><table style="border-collapse:collapse;width:100%;max-width:640px;">`;

  for (const [key, label] of rows) {
    const val = key === "accesos" ? accesosVal : data[key];
    html += `<tr><td style="border:1px solid #ddd;padding:8px;font-weight:bold;vertical-align:top;width:35%;">${escapeHtml(label)}</td>`;
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
          to: ["jessica@fluxamethod.com"],
          subject: "Brief recibido — Dr. Leonardo Bello",
          html: buildEmailHtml(body),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return Response.json({ error: "No se pudo enviar el correo. Intente más tarde." }, { status: 502 });
      }
    } else {
      console.log("Brief Dr. Leonardo Bello (Resend no configurado):", JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e.message || "Error al procesar la solicitud" }, { status: 500 });
  }
}
