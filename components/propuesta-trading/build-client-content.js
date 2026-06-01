export function buildClientContent(clienteCorto, options = {}) {
  const frictionContenidoDetail =
    options.frictionContenidoDetail ??
    "18 publicaciones en toda su historia. Instagram atrae interés, pero no hay una secuencia que convierta atención en demanda real.";
  const problemaItems = [
    "Sin landing page que presente su oferta y convierta visitantes.",
    "Sin VSL estratégico que explique el valor y el siguiente paso.",
    "Sin comunidad estructurada donde el prospecto llegue y confíe.",
    `Sin automatización — cada interacción depende de ${clienteCorto}.`,
    "Sin pauta activa ni creativos que traigan tráfico calificado.",
    "Sin arquitectura de ingresos: membresía, mentoría y curso.",
  ];

  const frictionItems = [
    {
      t: "Oferta invisible",
      d: "No existe una página que explique qué ofrece, para quién es y cuál es el siguiente paso. El prospecto llega al perfil y se va sin actuar.",
    },
    {
      t: "Sin comunidad centralizada",
      d: "Los seguidores no tienen un espacio donde convertirse en comunidad activa y pagada. El interés se pierde sin sistema que lo capture.",
    },
    {
      t: "Contenido sin sistema",
      d: frictionContenidoDetail,
    },
    {
      t: "Dependencia 100% manual",
      d: `Cada venta requiere atención directa. Sin automatización, el crecimiento está limitado por las horas disponibles de ${clienteCorto}.`,
    },
  ];

  const transformations = [
    {
      n: 1,
      before: `El prospecto llega al perfil y no sabe qué ofrece ${clienteCorto} ni cómo entrar. No hay un camino claro hacia la compra.`,
      after: `Landing page con VSL grabado por ${clienteCorto} — el prospecto llega, entiende la propuesta y tiene un CTA claro para actuar.`,
    },
    {
      n: 2,
      before:
        "Existe contenido en Instagram pero no está conectado a ningún sistema de venta. La atención no se convierte en demanda.",
      after:
        "Estrategia de 60 días en dos carriles: contenido orgánico para nutrir audiencia y pauta para convertirla en miembros y clientes.",
    },
    {
      n: 3,
      before:
        "No existe comunidad estructurada. Los seguidores interesados no tienen a dónde ir y se pierden sin sistema que los retenga.",
      after:
        "Comunidad Skool completa con canales de educación, análisis y retos — un hub que retiene miembros y los convierte en clientes recurrentes.",
    },
    {
      n: 4,
      before: `Cada venta depende de un mensaje manual de ${clienteCorto}. Sin sistema, el crecimiento está limitado por su tiempo disponible.`,
      after: `Automatización completa de bienvenida, nutrición y agenda — el sistema trabaja y convierte sin requerir atención constante de ${clienteCorto}.`,
    },
    {
      n: 5,
      before:
        "Sin pauta activa ni creativos probados, el alcance depende solo del orgánico y la audiencia no crece a la velocidad necesaria.",
      after:
        "Meta Ads con creativos específicos para traders Forex & Crypto — tráfico calificado directo a la landing y la comunidad Skool.",
    },
  ];

  const fases = [
    {
      num: 1,
      when: "Semana 1",
      title: "Base — guion y estructura",
      items: [
        "Guion VSL estratégico listo para grabar",
        "Diseño y estructura de landing(s)",
        "Configuración inicial de cuentas",
        "Arquitectura del embudo completo",
        "Setup Skool con canales base",
      ],
      result: `${clienteCorto} tiene el guion listo y el ecosistema tomando forma.`,
    },
    {
      num: 2,
      when: "Semanas 2–3",
      title: "Lanzamiento — landings y automatizaciones",
      items: [
        "Landing(s) publicadas con VSL",
        "Onboarding automatizado en Skool",
        "Bot de bienvenida activo",
        "Píxeles y primera campaña activa",
        "Agenda automática configurada",
      ],
      result: "El sistema empieza a captar miembros desde la semana 3.",
    },
    {
      num: 3,
      when: "Semanas 3–4",
      title: "Comunidad y contenido",
      items: [
        "Arranque del contenido orgánico",
        "Retos y dinámicas en Skool",
        "Ángulos creativos para pauta",
        "Primera sesión estratégica",
        "Ajuste según primeros datos",
      ],
      result: "Comunidad activa y pauta alimentando las entradas.",
    },
    {
      num: 4,
      when: "Mes 2",
      title: "Escala y cierre del proyecto",
      items: [
        "Ajuste de campañas según ROAS",
        "Segunda sesión estratégica",
        "Reporte final de métricas",
        "Plan del siguiente trimestre",
        "Entrega de todos los activos",
      ],
      result: "Sistema optimizado con datos reales y listo para escalar.",
    },
  ];

  return { problemaItems, frictionItems, transformations, fases };
}
