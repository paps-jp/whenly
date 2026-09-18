import type { Messages } from "./ja";

export const es: Messages = {
  meta: {
    siteTitle: "whenly | Coordina fechas y asistencia gratis, sin registro",
    siteDescription:
      "Encuentra la mejor fecha para cenas, reuniones y clubes sin registrarte. Crea el evento con un clic; los participantes abren el enlace y eligen ○△×. Gratis.",
    keywords: [
      "coordinar fechas",
      "organizar quedadas",
      "confirmar asistencia",
      "encuesta de fechas",
      "app para organizar eventos",
      "sin registro",
      "reunión de exalumnos",
      "fiesta de boda",
      "fiesta de bienvenida",
      "despedida",
      "club",
      "organizar reuniones",
    ],
  },
  common: {
    login: "Iniciar sesión",
    signup: "Crear cuenta",
    logout: "Cerrar sesión",
    register: "Registrarse",
    save: "Guardar",
    saving: "Guardando...",
    saved: "Guardado",
    delete: "Eliminar",
    copy: "Copiar",
    copied: "Copiado ✓",
    processing: "Procesando...",
    print: "Imprimir",
    guest: "Invitado",
    unnamed: "(sin nombre)",
    nobodyYet: "Nadie todavía",
    backToTop: "← Volver al inicio",
    backToLogin: "← Volver al inicio de sesión",
    backToDashboard: "← Volver al panel",
    backToEvents: "← Volver a los eventos",
    backToMyPage: "← Volver a mi página",
    forgotPassword: "¿Olvidaste tu contraseña?",
    noAccount: "¿No tienes cuenta?",
    haveAccount: "¿Ya tienes cuenta?",
    tryNow: "¿Quieres probarlo ahora mismo?",
    startWithoutAccount: "Empezar sin cuenta",
    name: "Nombre",
    nameOptional: "Nombre (opcional)",
    email: "Correo electrónico",
    password: "Contraseña",
    passwordHint: "Mínimo 8 caracteres",
    copyright: "© PAPS",
    language: "Idioma",
    listSeparator: ", ",
  },
  home: {
    tagline:
      "Una app para coordinar fechas: el organizador propone opciones y los participantes responden con un simple sí o no",
    description:
      "Para cenas, reuniones de exalumnos, fiestas de boda, bienvenidas y despedidas, clubes, reuniones y cualquier ocasión en la que necesites coordinar fechas y gestionar la asistencia. Los participantes responden con solo abrir el enlace, sin iniciar sesión ni crear una cuenta.",
    organizerTitle: "Organizadores",
    organizerDescription: "Crea un evento y añade fechas candidatas",
    participantTitle: "Participantes",
    participantDescription: "Únete y responde desde el enlace que te compartieron",
  },
  start: {
    metaTitle: "Empezar sin cuenta",
    metaDescription:
      "Crea un evento para coordinar fechas al instante con un solo clic, sin registrarte.",
    title: "Empezar sin cuenta",
    description: "Pulsa el botón y podrás crear un evento de inmediato.",
    startButton: "Empezar a crear un evento",
    note: "* El evento se gestiona mediante la sesión guardada en este navegador. No podrás gestionarlo desde otros dispositivos ni añadir un correo electrónico más adelante.",
    makeAccountPrompt: "¿Prefieres crear una cuenta con tu correo?",
  },
  auth: {
    organizerLogin: "Acceso para organizadores",
    organizerSignup: "Registro de organizador",
    participantLogin: "Acceso para participantes",
    participantSignup: "Registro de participante",
    forgotMetaTitle: "Restablecer contraseña",
    forgotOrganizerTitle: "Restablecer contraseña (organizador)",
    forgotParticipantTitle: "Restablecer contraseña (participante)",
    forgotDescription: "Introduce el correo electrónico con el que te registraste.",
    forgotSent:
      "Si el correo electrónico introducido está registrado, te hemos enviado un enlace para restablecer la contraseña. Revisa tu bandeja de entrada.",
    sendResetMail: "Enviar correo de restablecimiento",
    resetTitle: "Establecer nueva contraseña",
    resetInvalid:
      "Este enlace no es válido o ha caducado. Solicita de nuevo el restablecimiento de contraseña.",
    toLoginPage: "Ir al inicio de sesión",
    newPassword: "Nueva contraseña",
    newPasswordConfirm: "Nueva contraseña (confirmar)",
    passwordMismatch: "Las contraseñas no coinciden",
    resetSubmit: "Establecer nueva contraseña",
  },
  dashboard: {
    title: "Panel",
    greeting: "{name}",
    guestWarning:
      "⚠️ Estás usando whenly sin cuenta. Tus eventos solo se pueden gestionar desde la sesión de este navegador. Si cierras sesión o borras las cookies, perderás el acceso a estos eventos de forma permanente.",
    upgradeLink: "Crear una cuenta para conservar tus eventos →",
    newEvent: "+ Crear nuevo evento",
    memberApprovals: "Aprobación de participantes",
    pendingBadge: "{n}",
    eventsHeading: "Tus eventos",
    noEvents: "Aún no hay eventos. Empieza con «Crear nuevo evento».",
    dateCount: "{n} fecha(s)",
    approvalRequired: "Requiere aprobación",
    anyoneCanAnswer: "Cualquiera puede responder",
    finishedHistory: "Ver eventos finalizados ({n})",
    deleteEventConfirm:
      "¿Eliminar «{title}»? Esta acción no se puede deshacer. También se eliminarán todas las fechas y respuestas.",
    logoutGuestConfirm:
      "Estás usando whenly sin cuenta. Si cierras sesión, perderás el acceso a estos eventos de forma permanente. ¿Continuar?",
  },
  newEvent: {
    title: "Crear nuevo evento",
    titleLabel: "Título",
    titlePlaceholder: "Ej.: Salida de equipo",
    commentLabel: "Comentario (opcional)",
    commentPlaceholder: "Punto de encuentro, qué traer, etc.",
    aiChecking: "Comprobando si está disponible el relleno automático de fechas con IA…",
    aiLabel: "Rellenar fechas con IA (opcional)",
    aiHelp:
      "Escribe libremente, por ejemplo «el viernes y el sábado de la próxima semana, el viernes por la mañana y por la tarde», y las fechas de abajo se rellenarán automáticamente. Podrás revisarlas y editarlas después. Las repeticiones sin fecha de fin, como «todos los días» o «los fines de semana», se expanden a las próximas 4 semanas a partir de hoy.",
    aiPlaceholder:
      "Ej.: El viernes y el sábado de la próxima semana. El viernes con dos franjas: mañana y tarde.",
    aiGenerating: "Generando...",
    aiButton: "Rellenar con IA",
    aiUnavailable:
      "El relleno automático de fechas con IA no está disponible en este momento por alta demanda. Inténtalo de nuevo más tarde.",
    datesLabel: "Fechas",
    datesHelp:
      "Puedes añadir varias fechas. Si añades franjas horarias a una fecha (ej.: mañana / tarde), los participantes responderán por cada franja por separado. Las fechas sin franjas reciben una única respuesta.",
    removeDate: "Eliminar fecha",
    removeDateAria: "Eliminar esta fecha",
    dayCommentPlaceholder: "Comentario para esta fecha (opcional)",
    slotPlaceholder: "Ej.: Mañana / Tarde / A partir de las 19:00",
    removeSlotAria: "Eliminar esta franja",
    addSlot: "+ Añadir franjas horarias a esta fecha (opcional)",
    exampleHint:
      "Ej.: 4 de sept. como fecha única / 5 de sept. con las franjas «Mañana» y «Tarde»",
    addDate: "+ Añadir fecha",
    duplicate: "+ Duplicar",
    requireLoginLabel: "Exigir inicio de sesión y aprobación para participar",
    requireLoginHelp:
      "Si está desactivado, cualquiera podrá responder sin iniciar sesión (el nombre es opcional).",
    create: "Crear",
  },
  eventDetail: {
    urlEditWarning:
      "⚠️ Cualquiera que conozca la URL de esta página puede editar este evento. No la compartas con terceros.",
    editUrlLabel: "URL de edición (esta página)",
    editUrlHint: "Guárdala en marcadores para volver a editar sin iniciar sesión.",
    lockedNotice:
      "🔒 Solo tú, con la sesión iniciada, puedes editar este evento (compartir la URL no permite editarlo).",
    shareUrlLabel: "URL para compartir con los participantes",
  },
  settings: {
    deleteDayConfirm: "¿Eliminar {date}? También se eliminarán todas las respuestas de esta fecha.",
    upcomingTab: "Próximas ({n})",
    historyTab: "Pasadas ({n})",
    noUpcomingDates: "No hay fechas próximas.",
    noPastDates: "No hay fechas pasadas.",
    prevMonth: "← Mes anterior",
    nextMonth: "Mes siguiente →",
    commentPlaceholder: "Comentario (opcional)",
    optionsTitle: "Opciones de respuesta",
    optionsHelp:
      "Por defecto son ○/△/×, pero puedes cambiarlas libremente y usar entre 1 y {max} opciones (ej.: OK / No / Quizás).",
    optionRemoveConfirm:
      "«{label}» ya se usa en {count} respuesta(s). Si la eliminas, esas respuestas también se eliminarán. ¿Continuar?",
    newOptionPlaceholder: "Ej.: Quizás",
    addOption: "+ Añadir opción",
    requireLogin: "Exigir inicio de sesión y aprobación para participar",
    showNames: "Permitir que los participantes vean los nombres y respuestas de los demás",
    allowMultiple: "Permitir seleccionar varias opciones por fecha o franja",
    allowUrlEdit: "Permitir editar sin iniciar sesión a quien conozca la URL de edición",
    allowUrlEditConfirm:
      "Si lo desactivas, conocer la URL de edición ya no será suficiente; solo se podrá editar desde tu sesión iniciada. ¿Continuar?",
    participationHeading: "Respuestas por fecha",
    addDatesTitle: "Añadir fechas (opcional)",
    addDatesHelp:
      "Usa «+ Añadir fecha» o «+ Duplicar» para añadir fechas. Si pulsas Duplicar varias veces, se seguirán añadiendo fechas con el intervalo de las dos últimas.",
    saved: "Guardado ✓",
  },
  members: {
    title: "Aprobación de participantes",
    pendingHeading: "Pendientes de aprobación",
    noPending: "No hay participantes pendientes de aprobación.",
    approve: "Aprobar",
    reject: "Rechazar",
    approvedHeading: "Participantes aprobados ({n})",
    noneYet: "Nadie todavía.",
    rejectedHeading: "Rechazados",
  },
  upgrade: {
    metaTitle: "Crear cuenta",
    title: "Crear una cuenta",
    description:
      "Registra un correo electrónico y una contraseña para conservar tus eventos actuales e iniciar sesión desde otros dispositivos.",
    submit: "Crear cuenta",
  },
  share: {
    pendingApproval:
      "Esperando la aprobación del organizador. Podrás responder cuando te aprueben.",
    rejected: "Tu participación no fue aprobada.",
    namesShown: "* Se muestran los nombres y respuestas de los demás participantes.",
    namesHidden:
      "* Solo se muestra el número de participantes; los nombres y respuestas de los demás permanecen ocultos.",
    multipleHint: " Puedes seleccionar varias opciones. Pulsa de nuevo para deseleccionar.",
    noUpcomingDates: "No hay fechas próximas.",
    pastHistory: "Ver fechas pasadas ({n})",
    answer: "Responder",
    saveAnswers: "Guardar",
    unanswered: "Sin respuesta",
    yourAnswer: "Tu respuesta: {answer}",
    conflictPrompt: "Alguien ya respondió con el nombre «{name}». ¿Eres tú?",
    yesMe: "Sí, soy yo",
    notMe: "No, es otra persona",
    loginRequired: "Para responder necesitas iniciar sesión o crear una cuenta.",
    namePlaceholder: "Ej.: María García",
    createNewPrompt: "¿Eres nuevo aquí?",
    countBadge: "{label} {n}",
  },
  calendar: {
    title: "Sincronizar con el calendario",
    description:
      "Las fechas que respondiste pueden sincronizarse automáticamente con tu calendario (pueden tardar desde unos minutos hasta varias horas en aparecer).",
    google: "Añadir a Google Calendar",
    outlookCom: "Añadir a Outlook.com",
    office365: "Añadir a Outlook (trabajo o centro educativo)",
    apple: "Añadir al calendario del iPhone",
    copyUrl: "Copiar la URL directamente",
  },
  memberPage: {
    title: "Mi página",
    pendingNotice: "Esperando la aprobación de {n} organizador(es)",
    noOrganizers:
      "Aún no te has unido a ningún organizador. Abre la URL de un evento compartido para unirte.",
    organizerEvents: "Eventos de {name}",
    organizerEventsUnnamed: "Eventos del organizador",
    noEvents: "Aún no hay eventos.",
    answered: "Respondidas {answered}/{total}",
  },
  landing: {
    heroTitle: "Coordina fechas y confirma asistencia gratis, sin registro y desde ya",
    heroLead:
      "El organizador propone fechas y los participantes responden con ○△×. Nada más. Sirve para cenas, reuniones de exalumnos, fiestas de boda, bienvenidas, despedidas, clubes, juntas y cualquier plan que necesite una fecha y saber quién viene.",
    heroCta: "Crear un evento gratis",
    heroNote: "Sin registro ni instalación. Comparte tus fechas candidatas en unos 30 segundos.",
    howHeading: "Cómo funciona: 3 pasos",
    step1Title: "Añade las fechas candidatas",
    step1Body:
      "Escribe el nombre del evento y las fechas que tienes en mente. Si lo necesitas, añade franjas horarias como \"mañana / tarde\", o escribe \"el viernes y el sábado que viene\" y deja que la IA las rellene.",
    step2Title: "Comparte el enlace",
    step2Body:
      "Envía el enlace para participantes por LINE, correo, Slack o cualquier chat. Los participantes pueden abrirlo sin crear una cuenta.",
    step3Title: "Responde con ○△× y mira el recuento",
    step3Body:
      "Los participantes eligen ○△× para cada candidata y la asistencia de cada fecha se calcula al instante. Las respuestas se pueden cambiar cuando quieras.",
    featuresHeading: "Por qué eligen whenly",
    feature1Title: "Sin inicio de sesión ni registro",
    feature1Body:
      "Tanto organizadores como participantes pueden usarlo sin cuenta. No hace falta recopilar direcciones de correo.",
    feature2Title: "Franjas horarias dentro de un mismo día",
    feature2Body:
      "Define varias candidatas en un mismo día, como \"5 de septiembre mañana / tarde\", y recoge respuestas para cada franja.",
    feature3Title: "Opciones de respuesta personalizables",
    feature3Body:
      "No solo ○△×: usa \"Sí / No / Quizás\", \"OK / NG\" o lo que prefieras, con hasta 10 opciones.",
    feature4Title: "Modo con aprobación y visibilidad de nombres",
    feature4Body:
      "Elige entre un evento abierto en el que cualquiera puede responder y uno en el que solo responden quienes apruebe el organizador. También puedes ocultar los nombres y mostrar solo el número de asistentes.",
    feature5Title: "Sincronización con calendario e impresión",
    feature5Body:
      "Sincroniza las fechas que respondiste con Google Calendar, Outlook o el calendario del iPhone, e imprime la tabla de asistencia en A4 tal cual.",
    feature6Title: "Fechas rellenadas con IA",
    feature6Body:
      "Genera fechas candidatas a partir de texto libre como \"todos los lunes a partir de las 19:00\". La interfaz está disponible en 12 idiomas.",
    useCasesHeading: "Casos de uso habituales",
    useCase1: "Coordinar cenas y quedadas",
    useCase2: "Confirmar asistencia a reuniones de exalumnos",
    useCase3: "Gestionar la asistencia a fiestas de boda",
    useCase4: "Elegir fecha para bienvenidas y despedidas",
    useCase5: "Días de actividad de clubes, equipos y AMPA",
    useCase6: "Coordinar reuniones de trabajo",
    useCase7: "Recoger turnos de voluntariado y eventos",
    useCase8: "Confirmar asistencia a clases y talleres",
    securityHeading: "Por qué es seguro usarlo",
    security1Title: "Sin datos personales",
    security1Body: "Los participantes solo escriben un nombre (opcional). No se necesita correo ni teléfono.",
    security2Title: "Controla quién puede editar",
    security2Body:
      "La edición puede limitarse a quienes conocen la URL de edición o solo al organizador con sesión iniciada.",
    security3Title: "Conexión cifrada",
    security3Body: "Todo el tráfico se cifra mediante HTTPS.",
    faqHeading: "Preguntas frecuentes",
    faq1Q: "¿De verdad es gratis?",
    faq1A:
      "Sí. Crear eventos, responder, ver el recuento y sincronizar con el calendario son funciones gratuitas.",
    faq2Q: "¿Los participantes necesitan una cuenta?",
    faq2A:
      "No. Abren el enlace compartido y escriben un nombre (opcional) para responder. Solo se pide iniciar sesión a los participantes cuando el organizador activa el modo con aprobación.",
    faq3Q: "¿El organizador también puede usarlo sin iniciar sesión?",
    faq3A:
      "Sí. Pulsa \"Empezar sin cuenta\" para crear un evento al momento. Más adelante puedes registrar un correo y una contraseña para gestionarlo también desde otros dispositivos.",
    faq4Q: "¿Las candidatas son solo fechas o también puedo indicar franjas horarias?",
    faq4A:
      "Puedes añadir a cada fecha franjas como \"mañana\", \"tarde\" o \"a partir de las 19:00\". Las fechas con franjas se responden franja por franja.",
    faq5Q: "¿Se pueden cambiar las respuestas más tarde?",
    faq5A: "Sí. Vuelve a abrir el mismo enlace y podrás cambiar tus respuestas en cualquier momento.",
    faq6Q: "¿Puedo añadir a mi calendario las fechas que respondí?",
    faq6A:
      "Suscríbete a tu URL de calendario personal en Google Calendar, Outlook o el calendario del iPhone y las fechas que respondiste se sincronizarán automáticamente.",
    faq7Q: "¿En qué se diferencia de otras herramientas para coordinar fechas?",
    faq7A:
      "Franjas horarias dentro de cada fecha, opciones de respuesta personalizables, modo con aprobación, nombres ocultos, sincronización con calendario, relleno con IA y 12 idiomas, todo gratis.",
    ctaHeading: "Comparte tus fechas candidatas ahora",
    ctaBody: "Sin registro ni instalación. Con un clic tienes la página de tu evento.",
    navHome: "Inicio",
  },
  useCasePage: {
    breadcrumbUseCases: "Casos de uso",
    painsHeading: "¿Te suena?",
    solutionsHeading: "Así lo resuelve whenly",
    tipsHeading: "Consejos para sacarle partido",
    relatedHeading: "Otros casos de uso",
  },
  useCases: {
    nomikai: {
      title: "Coordina cenas y quedadas gratis, sin registro",
      description:
        "Para quien organiza cenas y quedadas: añade fechas candidatas, comparte el enlace y los invitados responden ○△× sin iniciar sesión. Recuento automático, franjas horarias y modo con aprobación, todo gratis.",
      heading: "Coordinar cenas, quedadas y afterworks",
      lead:
        "Lo más pesado de organizar es ir preguntando a cada uno cuándo puede. Con whenly añades las fechas candidatas y envías un solo enlace; los invitados marcan ○△× sin cuenta y el recuento se actualiza al instante.",
      pain1: "Preguntas en el grupo de WhatsApp, las respuestas se pierden entre mensajes y ya no sabes quién ha contestado",
      pain2: "Respuestas condicionales como \"solo a partir de las 21:00\" o \"me apunto a la segunda ronda\" son difíciles de ordenar",
      pain3: "Cada vez que añades o cambias una fecha tienes que volver a preguntar a todos",
      solution1Title: "Pregunta fechas y franjas horarias de una vez",
      solution1Body:
        "Añade franjas a cada fecha, como \"viernes desde las 21:00\" o \"sábado 20:00 / 22:00\", y las respuestas condicionales se convierten en candidatas normales.",
      solution2Title: "Los invitados solo abren el enlace y ponen su nombre",
      solution2Body:
        "No hace falta cuenta y el nombre es opcional, así que la gente responde sin pensárselo. Las respuestas se pueden cambiar después.",
      solution3Title: "Asistentes por fecha, contados automáticamente",
      solution3Body:
        "El número de ○△× y los nombres se muestran por candidata, así que sabes enseguida para cuántos reservar. Puedes añadir fechas en cualquier momento.",
      tip1: "Limita las candidatas a 3–5 fechas para que responda más gente. Con demasiadas opciones, la respuesta se deja para luego.",
      tip2: "Si muestras los nombres de los participantes, la gente se anima más al ver quién va.",
      faq1Q: "¿Los invitados necesitan algo más que WhatsApp?",
      faq1A:
        "No. Pega el enlace compartido en el grupo y los invitados lo abren en el navegador. No hay que instalar ninguna app.",
      faq2Q: "¿Y si cambia el número de personas después de reservar?",
      faq2A:
        "Los invitados pueden cambiar su respuesta cuando quieran y el organizador lo ve al momento. Un recordatorio antes de la fecha límite ayuda a cerrar el número.",
    },
    dousoukai: {
      title: "Confirma asistencia a reuniones de exalumnos gratis",
      description:
        "Para quien organiza reuniones de exalumnos y antiguos compañeros: recoge confirmaciones con un solo enlace aunque cada uno use un canal distinto. Sin inicio de sesión, con nombres ocultos o modo con aprobación. Gratis.",
      heading: "Confirmación de asistencia a reuniones de exalumnos",
      lead:
        "Pedir a alguien con quien no hablas desde hace años que instale una app resulta incómodo. Con whenly solo abren el enlace para confirmar, y tú ves de un vistazo quién ha respondido.",
      pain1: "Cada uno usa un canal distinto (correo, WhatsApp, redes sociales) y reunir las respuestas es un suplicio",
      pain2: "Pasar \"asiste / no sabe / no asiste\" a una lista a mano lleva tiempo",
      pain3: "Con mucha gente es difícil saber quién no ha respondido todavía",
      solution1Title: "Un solo enlace vale para cualquier canal",
      solution1Body:
        "Envía el mismo enlace por el canal que sea. Los participantes responden desde el navegador sin instalar nada.",
      solution2Title: "Cambia las opciones a \"Asisto / No lo sé / No asisto\"",
      solution2Body:
        "Las opciones de respuesta se personalizan por completo, así que puedes usar las palabras que encajen con una reunión de antiguos alumnos.",
      solution3Title: "Nombres y respuestas en una sola lista",
      solution3Body:
        "La vista del organizador muestra quién respondió a cada candidata, así que actualizar la lista y detectar a quien falta lleva segundos.",
      tip1: "Separa la cena y la copa de después en franjas horarias para ver quién se une más tarde.",
      tip2: "Puedes elegir si los participantes ven los nombres de los demás. Si la privacidad preocupa, muestra solo el número de asistentes.",
      faq1Q: "¿Acabaré recopilando datos personales?",
      faq1A:
        "Los participantes solo escriben un nombre (opcional). No se pide correo ni teléfono, y el organizador tampoco los ve.",
      faq2Q: "¿Alguien puede responder haciéndose pasar por otro?",
      faq2A:
        "En modo con aprobación solo responden los participantes aprobados por el organizador. Incluso en modo abierto, si alguien intenta responder con un nombre que ya contestó, aparece una comprobación de identidad.",
    },
    nijikai: {
      title: "Gestiona la asistencia a fiestas de boda gratis",
      description:
        "Para fiestas de boda, celebraciones y aniversarios: coordina la fecha y controla la asistencia final. Los invitados no inician sesión y el organizador tiene una lista de asistencia imprimible. Gratis.",
      heading: "Asistencia a fiestas de boda y celebraciones",
      lead:
        "Cuando te encargan organizar la fiesta, todo empieza por elegir la fecha y saber quién viene. Con whenly la votación de fechas y la confirmación final viven en el mismo enlace.",
      pain1: "La parte de la novia y la del novio usan canales distintos y acabas con dos listas",
      pain2: "Reunir todas las respuestas antes de que el local pida el número final es un estrés",
      pain3: "Tienes que rehacer la lista de invitados para el control de acceso el día de la fiesta",
      solution1Title: "Las dos familias en un solo evento",
      solution1Body:
        "Comparte el enlace con cada parte y todas las respuestas aparecen en una misma pantalla.",
      solution2Title: "Sabes quién no ha respondido antes de la fecha límite",
      solution2Body:
        "Los nombres de quienes responden se muestran por candidata, así que solo tienes que insistir a quienes faltan.",
      solution3Title: "Imprime la lista de asistencia tal cual",
      solution3Body:
        "El botón de imprimir genera una lista de asistencia en A4 que sirve directamente para el control de acceso.",
      tip1: "Controla los pagos cambiando las opciones a \"Asiste (pagado) / Asiste (pendiente) / No asiste\".",
      tip2: "La sincronización con calendario deja la fecha en la agenda de los invitados, así se les olvida a menos gente.",
      faq1Q: "¿Sirve para confirmar asistencia después de enviar las invitaciones?",
      faq1A:
        "Sí. Registra solo la fecha del evento y pon las opciones \"Asisto / No asisto\" para sustituir la tarjeta de respuesta.",
      faq2Q: "¿Puedo recopilar los datos de contacto de los invitados?",
      faq2A:
        "whenly no tiene ninguna función para recopilar datos de contacto. Está diseñado para no guardar datos personales, así que los invitados pueden usarlo con tranquilidad.",
    },
    kangeikai: {
      title: "Elige fecha para bienvenidas y despedidas gratis",
      description:
        "Para bienvenidas y despedidas en la oficina: da prioridad a la agenda del homenajeado y recoge igualmente la disponibilidad de todo el equipo. Sin inicio de sesión ni correo electrónico. Gratis.",
      heading: "Coordinar bienvenidas y despedidas en el trabajo",
      lead:
        "Quieres ajustarte a la agenda del homenajeado y a la vez saber cuándo puede todo el equipo. Con whenly listas las fechas candidatas y compartes el enlace; quién puede venir cada día aparece en una sola vista.",
      pain1: "Si preguntas por correo a todo el departamento, las respuestas se entierran y el recuento se eterniza",
      pain2: "El mejor día para el homenajeado y el mejor día para la mayoría no coinciden",
      pain3: "Los invitados externos no pueden usar el chat interno de la empresa",
      solution1Title: "Asistentes por candidata de un vistazo",
      solution1Body: "Los ○△× se cuentan por candidata, así que el día con más gente salta a la vista.",
      solution2Title: "Construye las candidatas en torno al homenajeado",
      solution2Body:
        "Pregunta primero al homenajeado, registra luego las candidatas y solo tendrás que preguntar al resto una vez. Puedes añadir fechas más tarde.",
      solution3Title: "Los externos solo necesitan el enlace",
      solution3Body:
        "No hace falta cuenta, así que quien está fuera de la empresa puede responder desde un simple correo.",
      tip1: "Usa el campo de comentario de cada fecha para notas como \"último día en la oficina\" y ayudar a decidir.",
      tip2: "Con el modo con aprobación solo responden las personas aprobadas por el organizador, aunque el enlace se reenvíe.",
      faq1Q: "¿Tengo que registrar un correo de empresa?",
      faq1A:
        "Ni organizadores ni participantes necesitan correo electrónico. El organizador puede empezar al momento desde \"Empezar sin cuenta\".",
      faq2Q: "¿Y si no quiero que los participantes vean las respuestas de los demás?",
      faq2A:
        "Oculta los nombres de los participantes y los demás solo verán el número de asistentes. El organizador lo sigue viendo todo.",
    },
    circle: {
      title: "Días de actividad para clubes, equipos y AMPA gratis",
      description:
        "Para clubes, equipos deportivos, AMPA y asociaciones: recoge la disponibilidad para entrenamientos semanales y turnos de una sola vez. Sin inicio de sesión y con respuestas por franja horaria. Gratis.",
      heading: "Días de actividad de clubes, equipos y AMPA",
      lead:
        "Entrenamientos semanales y turnos rotativos significan hacer la misma pregunta cada semana. Con whenly registras cuatro semanas de candidatas de golpe y los miembros responden en una sola sentada.",
      pain1: "Preguntar la disponibilidad todas las semanas es un fastidio",
      pain2: "Por la mañana pueden unos miembros y por la tarde otros",
      pain3: "Cada cambio de miembros obliga a recopilar contactos otra vez",
      solution1Title: "Registra candidatas repetidas en bloque",
      solution1Body:
        "El botón Duplicar añade fechas con el mismo intervalo una tras otra. O escribe \"todos los sábados a las 10:00\" y deja que la IA las rellene.",
      solution2Title: "Recoge respuestas por franja horaria",
      solution2Body:
        "Añade franjas como \"mañana / tarde\" a una fecha y verás quién puede en cada una.",
      solution3Title: "Solo responden los miembros aprobados",
      solution3Body:
        "En modo con aprobación, quien no sea miembro puede abrir el enlace pero no responder. Las altas y bajas se gestionan aprobando o rechazando.",
      tip1: "Las fechas pasadas se mueven al historial automáticamente, así que puedes seguir usando el mismo evento.",
      tip2: "Los miembros pueden sincronizar las fechas que respondieron con su propio calendario.",
      faq1Q: "¿Cuántas semanas puedo registrar?",
      faq1A:
        "No hay límite de fechas. Con el relleno por IA, las repeticiones sin fecha de fin se expanden a cuatro semanas desde hoy.",
      faq2Q: "¿Pueden responder padres y madres que no se manejan bien con el móvil?",
      faq2A:
        "Abren el enlace, tocan ○△× y guardan. No hay que instalar apps ni crear cuentas.",
    },
    kaigi: {
      title: "Coordina reuniones de trabajo gratis, sin registro",
      description:
        "Para reuniones internas y con clientes: envía horarios candidatos y la otra parte responde sin iniciar sesión. Los resultados se sincronizan con Google Calendar y Outlook. Gratis.",
      heading: "Coordinar reuniones de trabajo",
      lead:
        "En vez de intercambiar horarios por correo una y otra vez, envíalos en un solo enlace. La otra parte elige lo que le viene bien sin registrarse y el resultado puede ir a su calendario.",
      pain1: "Escribir horarios candidatos en correos y cruzar las respuestas es ineficiente",
      pain2: "Cuantos más asistentes, más difícil es encontrar un hueco que valga para todos",
      pain3: "La gente se olvida de apuntar la hora acordada en su calendario",
      solution1Title: "Propón fechas con franjas horarias",
      solution1Body:
        "Franjas como \"10 de septiembre, 10:00 / 14:00\" pueden ser candidatas, ideal para fijar la hora de una reunión.",
      solution2Title: "Compara los ○△× de todos lado a lado",
      solution2Body:
        "Las respuestas se listan por candidata, así que localizas enseguida el hueco en el que todos son ○, o en el que un △ lo haría posible.",
      solution3Title: "Sincroniza las fechas elegidas con el calendario",
      solution3Body:
        "Los asistentes se suscriben una vez en Google Calendar, Outlook o el calendario del iPhone y las fechas que respondieron aparecen automáticamente.",
      tip1: "Cambia las opciones a \"Disponible / Flexible / No disponible\" para un lenguaje más profesional.",
      tip2: "Permite editar a quien conozca la URL de edición y un coorganizador podrá gestionarlo contigo.",
      faq1Q: "¿Puedo usarlo con personas de fuera de mi empresa?",
      faq1A: "Sí. Abren el enlace y responden. No hace falta registrar ninguna cuenta.",
      faq2Q: "¿Reserva salas de reuniones o envía invitaciones?",
      faq2A:
        "whenly se centra en encontrar la fecha y contar la asistencia. Envía la invitación de la hora acordada desde tu calendario habitual.",
    },
    volunteer: {
      title: "Turnos de voluntariado y eventos gratis, sin registro",
      description:
        "Para grupos de voluntariado y equipos de eventos: crea turnos por franja horaria en cada fecha y recoge quién puede cubrir cada uno, sin inicio de sesión. Gratis.",
      heading: "Turnos de voluntariado y eventos",
      lead:
        "Los turnos que abarcan varios días y franjas horarias son difíciles de mantener al día en una hoja de cálculo. Con whenly cada persona marca ○△× en las candidatas de fecha × franja y ves el recuento por turno.",
      pain1: "Con tantas combinaciones de fecha y hora, la hoja de turnos es difícil de mantener",
      pain2: "La rotación constante hace que gestionar los contactos sea una carga",
      pain3: "No ves en tiempo real cuánta gente hay en cada turno",
      solution1Title: "Crea turnos por franja horaria en cada fecha",
      solution1Body:
        "Añade franjas como \"mañana / tarde / noche\" a cada fecha y recoge respuestas por turno.",
      solution2Title: "Recuento y nombres por turno al instante",
      solution2Body:
        "La vista del organizador muestra los ○△× y los nombres por turno, así que los turnos con poca gente saltan a la vista.",
      solution3Title: "Sin datos de contacto que guardar",
      solution3Body: "Los voluntarios responden solo con su nombre. No tienes datos personales que gestionar.",
      tip1: "Escribe la regla \"○ = puedo cubrirlo / △ = flexible / × = no puedo\" en el comentario del evento para que las respuestas sean coherentes.",
      tip2: "El modo con aprobación limita las respuestas a los voluntarios registrados.",
      faq1Q: "¿Los voluntarios pueden añadir sus turnos a su calendario?",
      faq1A: "Sí. Tras suscribirse a la URL de calendario, los turnos marcados con ○ aparecen como eventos de todo el día.",
      faq2Q: "¿Cuántas personas pueden responder?",
      faq2A: "No hay límite.",
    },
    lesson: {
      title: "Confirma asistencia a clases y talleres gratis",
      description:
        "Para clases, talleres y academias: el profesor registra las fechas y los alumnos o sus padres marcan ○ en los días que asisten, sin iniciar sesión. Con sincronización de calendario. Gratis.",
      heading: "Asistencia a clases y talleres",
      lead:
        "Con clases de recuperación y sesiones de asistencia libre, saber quién viene cada vez cuesta trabajo. Con whenly listas las fechas y los alumnos o sus padres eligen sus días desde el enlace.",
      pain1: "Contactas con los participantes antes de cada clase para confirmar",
      pain2: "Las respuestas de los padres llegan una a una y el recuento se alarga",
      pain3: "Los alumnos olvidan a qué días se apuntaron",
      solution1Title: "Presenta todas las fechas del mes de una vez",
      solution1Body:
        "Duplicar añade el mismo día de la semana de forma consecutiva. También puedes dividir una fecha en franjas horarias.",
      solution2Title: "Los participantes escriben su nombre y marcan ○",
      solution2Body:
        "No hace falta cuenta. Los padres que respondan por su hijo pueden usar el nombre del niño.",
      solution3Title: "Los días de asistencia se sincronizan con el calendario",
      solution3Body:
        "Con la sincronización de calendario, los días que respondió cada participante aparecen en Google Calendar o en el calendario del iPhone.",
      tip1: "Oculta los nombres de los participantes y los demás alumnos solo verán el número de asistentes.",
      tip2: "Si hay plazas limitadas, indícalo en el comentario de la fecha, por ejemplo \"máx. 6\".",
      faq1Q: "¿Pueden usarlo participantes sin smartphone?",
      faq1A:
        "Pueden responder desde el navegador de un ordenador. También puedes confirmar de viva voz con la lista impresa e introducir tú las respuestas.",
      faq2Q: "¿Tiene algún coste?",
      faq2A: "Todas las funciones son gratuitas.",
    },
  },
  errors: {
    titleRequired: "Introduce un título",
    addAtLeastOneDate: "Añade al menos una fecha",
    dateRequired: "Introduce una fecha",
    invalidDate: "El formato de la fecha no es válido",
    eventNotFound: "Evento no encontrado",
    loginRequired: "Debes iniciar sesión",
    optionsAtLeastOne: "Se necesita al menos una opción",
    optionsMax: "Usa como máximo {max} opciones",
    nameRequired: "Introduce tu nombre",
    invalidEmail: "El formato del correo electrónico no es válido",
    passwordTooShort: "La contraseña debe tener al menos 8 caracteres",
    passwordRequired: "Introduce tu contraseña",
    emailTaken: "Este correo electrónico ya está registrado",
    invalidCredentials: "Correo electrónico o contraseña incorrectos",
    identityFailed: "No se pudo verificar tu identidad",
    accountNotFound: "Cuenta no encontrada",
    alreadyRegistered: "Esta cuenta ya está registrada",
    resetLinkInvalid:
      "Este enlace ha caducado o ya se ha utilizado. Solicita de nuevo el restablecimiento de contraseña.",
    unknownError: "Se produjo un error desconocido",
    optionsChanged: "Las opciones han cambiado. Recarga la página",
    noMultipleAnswers: "Este evento no permite selección múltiple",
    noPermission: "No tienes permiso para responder",
    aiEmpty: "Describe tu agenda",
    aiNoSchedule: "No se pudo interpretar ninguna fecha. Sé un poco más específico.",
    aiFailed: "El relleno automático con IA falló. Inténtalo de nuevo más tarde.",
  },
  mail: {
    resetSubject: "[whenly] Restablecimiento de contraseña",
    resetBody:
      "Hemos recibido una solicitud para restablecer tu contraseña.\n\nEstablece una nueva contraseña en el plazo de 1 hora usando el siguiente enlace.\n\n{url}\n\nSi no has solicitado este cambio, puedes ignorar este correo.",
  },
};
