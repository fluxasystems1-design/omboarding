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
    "1. Como te gustaria que una mujer se sienta despues de seguirte?",
    "2. Que significa para ti vivir de forma consciente?",
    "3. Que valores quieres transmitir siempre con tu marca?",
    "4. Que hace especial tu forma de ensenar bienestar?",
    "5. Que mensaje quisieras dejar en cada contenido?",
    "6. Que tipo de vida quieres inspirar con tu marca?",
    "7. Que parte de tu historia personal sientes importante compartir mas?",
    "8. Que experiencias te llevaron a interesarte por el bienestar?",
    "9. Que actividad te hace sentir mas tu?",
    "10. Que cosas hoy cuidas mas en tu vida (energia, alimentacion, habitos, entorno, etc.)?",
    "11. Que tipo de mujer quieres atraer a tu comunidad?",
    "12. Que esta viviendo hoy esa mujer que quisieras ayudar a transformar?",
    "13. Que desea profundamente esa mujer?",
    "14. Que inseguridad o bloqueo vive hoy?",
    "15. Que tipo de energia o enfoque no conecta contigo?",
    "16. En que areas sientes que mas puedes ayudar?",
    "17. Que cambios has visto en alumnas o personas cercanas gracias a tu guia?",
    "18. Que resultado disfrutas mas ayudar a lograr?",
    "19. Si crearas una membresia, que transformacion ofreceria?",
    "20. Que incluiria idealmente?",
    "21. Como te gustaria que una mujer describiera esa membresia?",
    "22. La imaginas intima y exclusiva o abierta a muchas mujeres?",
    "23. Que valor mensual sientes justo para comenzar?",
    "24. Que reto sientes natural lanzar primero?",
    "25. Que resultado lograria una mujer con ese reto?",
    "26. Que curso digital te emocionaria ensenar?",
    "27. Preferirias vender siempre disponible o por lanzamientos especiales?",
    "28. Que valor sientes justo para comenzar?",
    "29. Que red social disfrutas mas usar hoy?",
    "30. Que contenido te fluye natural grabar?",
    "31. Que contenido no disfrutas hacer?",
    "32. Cuantas horas semanales podrias dedicar al crecimiento de la marca?",
    "33. Como quieres que se vea visualmente tu marca?",
    "34. Colores con los que conectas hoy",
    "35. Marcas, mujeres o estilos que te inspiran",
    "36. Que te impide hoy crecer mas rapido con tu marca?",
    "37. Que tan urgente quisieras mover este proyecto?",
    "38. Que meta economica te gustaria lograr en los proximos 12 meses?",
    "39. Tienes fotos profesionales tuyas?",
    "40. Tienes videos grabados utiles?",
    "41. Tienes base de datos de alumnas o clientas?",
    "42. Tienes logo o identidad visual actual?",
    "43. Si en 12 meses todo sale increible, como seria tu vida gracias a esta marca?",
    "44. Que te haria sentir orgullosa de haber construido esto?",
  ];
  const rows = questionLabels.map((label, index) => [`q${String(index + 1).padStart(2, "0")}`, label]);

  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido - Anak Karina Lozano</h1><table style="border-collapse:collapse;width:100%;max-width:700px;">`;

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
          subject: "Brief recibido - Anak Karina Lozano",
          html: buildEmailHtml(body),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return Response.json({ error: "No se pudo enviar el correo. Intente mas tarde." }, { status: 502 });
      }
    } else {
      console.log("Brief Anak Karina Lozano (Resend no configurado):", JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e.message || "Error al procesar la solicitud" }, { status: 500 });
  }
}
