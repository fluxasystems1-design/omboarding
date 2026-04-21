function escapeHtml(str) {
  if (str == null || str === "") return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data) {
  const questionLabels = [
    "1. Nombre principal de la marca que desea impulsar",
    "2. ¿Que linea desea crecer primero?",
    "3. ¿Cual es hoy su principal fuente de ingresos?",
    "4. ¿Que resultado principal le gustaria lograr en los proximos 90 dias?",
    "5. ¿Que meta importante le gustaria alcanzar este ano con la marca?",
    "6. ¿Que tan urgente le gustaria mover este proyecto?",
    "7. ¿Cuales son hoy sus redes sociales mas activas?",
    "8. ¿Cual red siente que mejor le funciona actualmente?",
    "9. ¿Que tipo de personas mas le compran o consultan hoy?",
    "10. ¿Que tipo de audiencia le gustaria atraer mas?",
    "11. ¿Cual suplemento desea impulsar primero?",
    "12. Beneficio principal de cada suplemento actual",
    "13. Precio actual de cada producto",
    "14. ¿Cual vende mas hoy?",
    "15. ¿Cual considera mas rentable hoy?",
    "16. ¿Tiene inventario disponible actualmente?",
    "17. Tiempo promedio de entrega nacional",
    "18. ¿Que duda u objecion mas comun pone la gente antes de comprar?",
    "19. ¿Que resultado le gustaria ayudar a conseguir a las personas dentro de la membresia?",
    "20. ¿Que temas incluiria?",
    "21. ¿Como le gustaria manejarla?",
    "22. ¿Le gustaria una membresia de nivel?",
    "23. ¿Ya hay personas interesadas en entrar?",
    "24. ¿Cual seria el primer curso ideal para lanzar?",
    "25. ¿Que aprenderia o lograria una persona con ese curso?",
    "26. ¿Ya tiene material grabado o seria desde cero?",
    "27. ¿Le gustaria que el primer curso sea de nivel?",
    "28. Formato ideal",
    "29. ¿Cree que ya tiene personas interesadas en comprarlo?",
    "30. ¿Que cree que lo diferencia frente a otros profesionales del sector?",
    "31. ¿Que temas domina mas que la mayoria?",
    "32. ¿Tiene testimonios disponibles?",
    "33. ¿Esta dispuesto a grabar contenido semanal?",
    "34. ¿Cuantas horas por semana puede dedicar al proyecto?",
    "35. ¿Ha invertido antes en publicidad digital?",
    "36. ¿Que rango mensual estaria comodo invirtiendo inicialmente en publicidad?",
    "37. ¿Que siente que hoy mas frena el crecimiento del negocio?",
    "38. ¿Tiene logo en alta calidad?",
    "39. ¿Tiene fotos profesionales suyas?",
    "40. ¿Tiene fotos profesionales de productos?",
    "41. ¿Tiene videos grabados reutilizables?",
    "42. ¿Tiene base de datos de clientes (WhatsApp o correos)?",
    "43. ¿Quien puede apoyarlo internamente con materiales o gestion?",
    "44. Mejor canal de comunicacion",
    "45. Horarios ideales para reuniones",
    "46. Si solo resolvemos una cosa primero, ¿cual seria?",
    "47. ¿Que no le gustaria que ocurra con este proyecto?",
    "48. Si este proyecto sale muy bien, ¿que le gustaria haber logrado este ano?",
  ];
  const rows = questionLabels.map((label, index) => [`q${String(index + 1).padStart(2, "0")}`, label]);

  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">`;
  html += `<h1>Brief recibido — Dr. Leonardo Bello</h1><table style="border-collapse:collapse;width:100%;max-width:640px;">`;

  for (const [key, label] of rows) {
    const val = data[key];
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
          to: ["fluxasystems1@gmail.com"],
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
