import type { Messages } from "./ja";

export const pt: Messages = {
  meta: {
    siteTitle: "whenly | Combine datas e confirme presença grátis, sem login",
    siteDescription:
      "Encontre a melhor data para happy hours, reuniões e grupos sem cadastro. Crie o evento com um clique; os participantes abrem o link e escolhem ○△×. Grátis.",
    keywords: [
      "marcar data",
      "combinar horário",
      "confirmar presença",
      "enquete de datas",
      "app para organizar eventos",
      "sem login",
      "reencontro de turma",
      "festa de casamento",
      "festa de boas-vindas",
      "despedida",
      "grupo",
      "agendar reunião",
    ],
  },
  common: {
    login: "Entrar",
    signup: "Criar conta",
    logout: "Sair",
    register: "Cadastrar",
    save: "Salvar",
    saving: "Salvando...",
    saved: "Salvo",
    delete: "Excluir",
    copy: "Copiar",
    copied: "Copiado ✓",
    processing: "Processando...",
    print: "Imprimir",
    guest: "Convidado",
    unnamed: "(sem nome)",
    nobodyYet: "Ninguém ainda",
    backToTop: "← Voltar ao início",
    backToLogin: "← Voltar ao login",
    backToDashboard: "← Voltar ao painel",
    backToEvents: "← Voltar aos eventos",
    backToMyPage: "← Voltar à minha página",
    forgotPassword: "Esqueceu sua senha?",
    noAccount: "Não tem uma conta?",
    haveAccount: "Já tem uma conta?",
    tryNow: "Quer experimentar agora?",
    startWithoutAccount: "Começar sem conta",
    name: "Nome",
    nameOptional: "Nome (opcional)",
    email: "E-mail",
    password: "Senha",
    passwordHint: "Mínimo de 8 caracteres",
    copyright: "© PAPS",
    language: "Idioma",
    listSeparator: ", ",
  },
  home: {
    tagline:
      "Um app para combinar datas: o organizador propõe as opções e os participantes respondem com um simples sim ou não",
    description:
      "Para happy hours, reencontros, festas de casamento, boas-vindas e despedidas, grupos, reuniões e qualquer ocasião em que você precise combinar datas e controlar a presença. Os participantes respondem só de abrir o link, sem login nem cadastro.",
    organizerTitle: "Organizadores",
    organizerDescription: "Crie um evento e adicione as datas possíveis",
    participantTitle: "Participantes",
    participantDescription: "Participe e responda pelo link que você recebeu",
  },
  start: {
    metaTitle: "Começar sem conta",
    metaDescription:
      "Crie um evento para combinar datas na hora, com um único clique e sem cadastro.",
    title: "Começar sem conta",
    description: "Basta apertar o botão para criar um evento imediatamente.",
    startButton: "Começar a criar um evento",
    note: "* O evento é gerenciado pela sessão salva neste navegador. Não é possível gerenciá-lo de outros dispositivos nem adicionar um e-mail depois.",
    makeAccountPrompt: "Prefere criar uma conta com seu e-mail?",
  },
  auth: {
    organizerLogin: "Login do organizador",
    organizerSignup: "Cadastro de organizador",
    participantLogin: "Login do participante",
    participantSignup: "Cadastro de participante",
    forgotMetaTitle: "Redefinir senha",
    forgotOrganizerTitle: "Redefinir senha (organizador)",
    forgotParticipantTitle: "Redefinir senha (participante)",
    forgotDescription: "Informe o e-mail cadastrado.",
    forgotSent:
      "Se o e-mail informado estiver cadastrado, enviamos um link para redefinir a senha. Verifique sua caixa de entrada.",
    sendResetMail: "Enviar e-mail de redefinição",
    resetTitle: "Definir nova senha",
    resetInvalid:
      "Este link é inválido ou expirou. Solicite a redefinição de senha novamente.",
    toLoginPage: "Ir para o login",
    newPassword: "Nova senha",
    newPasswordConfirm: "Nova senha (confirmar)",
    passwordMismatch: "As senhas não coincidem",
    resetSubmit: "Definir nova senha",
  },
  dashboard: {
    title: "Painel",
    greeting: "{name}",
    guestWarning:
      "⚠️ Você está usando o whenly sem conta. Seus eventos só podem ser gerenciados pela sessão deste navegador. Se você sair ou limpar os cookies, perderá o acesso a esses eventos permanentemente.",
    upgradeLink: "Criar uma conta para manter seus eventos →",
    newEvent: "+ Criar novo evento",
    memberApprovals: "Aprovação de participantes",
    pendingBadge: "{n}",
    eventsHeading: "Seus eventos",
    noEvents: "Nenhum evento ainda. Comece por \"Criar novo evento\".",
    dateCount: "{n} data(s)",
    approvalRequired: "Requer aprovação",
    anyoneCanAnswer: "Qualquer um pode responder",
    finishedHistory: "Ver eventos encerrados ({n})",
    deleteEventConfirm:
      "Excluir \"{title}\"? Esta ação não pode ser desfeita. Todas as datas e respostas também serão excluídas.",
    logoutGuestConfirm:
      "Você está usando o whenly sem conta. Se sair, perderá o acesso a esses eventos permanentemente. Continuar?",
  },
  newEvent: {
    title: "Criar novo evento",
    titleLabel: "Título",
    titlePlaceholder: "Ex.: Confraternização da equipe",
    commentLabel: "Comentário (opcional)",
    commentPlaceholder: "Ponto de encontro, o que levar etc.",
    aiChecking: "Verificando se o preenchimento automático de datas com IA está disponível…",
    aiLabel: "Preencher datas com IA (opcional)",
    aiHelp:
      "Escreva livremente, por exemplo \"sexta e sábado da semana que vem, sexta de manhã e à tarde\", e as datas abaixo serão preenchidas automaticamente. Você pode revisar e editar depois. Repetições sem data final, como \"todo dia\" ou \"fins de semana\", são expandidas para as próximas 4 semanas a partir de hoje.",
    aiPlaceholder:
      "Ex.: Sexta e sábado da semana que vem. Sexta com dois horários: manhã e tarde.",
    aiGenerating: "Gerando...",
    aiButton: "Preencher com IA",
    aiUnavailable:
      "O preenchimento automático de datas com IA está indisponível no momento devido à alta demanda. Tente novamente mais tarde.",
    datesLabel: "Datas",
    datesHelp:
      "Você pode adicionar várias datas. Se adicionar horários a uma data (ex.: manhã / tarde), os participantes respondem para cada horário separadamente. Datas sem horários recebem uma única resposta.",
    removeDate: "Remover data",
    removeDateAria: "Remover esta data",
    dayCommentPlaceholder: "Comentário para esta data (opcional)",
    slotPlaceholder: "Ex.: Manhã / Tarde / A partir das 19h",
    removeSlotAria: "Remover este horário",
    addSlot: "+ Adicionar horários a esta data (opcional)",
    exampleHint:
      "Ex.: 4 de set. como data única / 5 de set. com os horários \"Manhã\" e \"Tarde\"",
    addDate: "+ Adicionar data",
    duplicate: "+ Duplicar",
    requireLoginLabel: "Exigir login e aprovação para participar",
    requireLoginHelp:
      "Se desativado, qualquer pessoa pode responder sem login (informar o nome é opcional).",
    create: "Criar",
  },
  eventDetail: {
    urlEditWarning:
      "⚠️ Qualquer pessoa que conheça a URL desta página pode editar este evento. Não a compartilhe com terceiros.",
    editUrlLabel: "URL de edição (esta página)",
    editUrlHint: "Salve nos favoritos para voltar a editar sem fazer login.",
    lockedNotice:
      "🔒 Somente você, logado, pode editar este evento (compartilhar a URL não permite edição).",
    shareUrlLabel: "URL de compartilhamento para participantes",
  },
  settings: {
    deleteDayConfirm: "Excluir {date}? Todas as respostas desta data também serão excluídas.",
    upcomingTab: "Próximas ({n})",
    historyTab: "Passadas ({n})",
    noUpcomingDates: "Nenhuma data futura.",
    noPastDates: "Nenhuma data passada.",
    prevMonth: "← Mês anterior",
    nextMonth: "Próximo mês →",
    commentPlaceholder: "Comentário (opcional)",
    optionsTitle: "Opções de resposta",
    optionsHelp:
      "O padrão é ○/△/×, mas você pode alterá-las livremente e usar de 1 a {max} opções (ex.: OK / Não / Talvez).",
    optionRemoveConfirm:
      "\"{label}\" já é usada em {count} resposta(s). Ao excluí-la, essas respostas também serão excluídas. Continuar?",
    newOptionPlaceholder: "Ex.: Talvez",
    addOption: "+ Adicionar opção",
    requireLogin: "Exigir login e aprovação para participar",
    showNames: "Permitir que os participantes vejam os nomes e respostas uns dos outros",
    allowMultiple: "Permitir selecionar várias opções por data ou horário",
    allowUrlEdit: "Permitir edição sem login para quem conhece a URL de edição",
    allowUrlEditConfirm:
      "Se desativar, conhecer a URL de edição não será mais suficiente; apenas a sua sessão logada poderá editar. Continuar?",
    participationHeading: "Respostas por data",
    addDatesTitle: "Adicionar datas (opcional)",
    addDatesHelp:
      "Use \"+ Adicionar data\" ou \"+ Duplicar\" para adicionar datas. Apertar Duplicar repetidamente continua adicionando datas com o intervalo das duas últimas.",
    saved: "Salvo ✓",
  },
  members: {
    title: "Aprovação de participantes",
    pendingHeading: "Aguardando aprovação",
    noPending: "Nenhum participante aguardando aprovação.",
    approve: "Aprovar",
    reject: "Recusar",
    approvedHeading: "Participantes aprovados ({n})",
    noneYet: "Ninguém ainda.",
    rejectedHeading: "Recusados",
  },
  upgrade: {
    metaTitle: "Criar conta",
    title: "Criar uma conta",
    description:
      "Cadastre um e-mail e uma senha para manter seus eventos atuais e fazer login de outros dispositivos.",
    submit: "Criar conta",
  },
  share: {
    pendingApproval:
      "Aguardando a aprovação do organizador. Você poderá responder assim que for aprovado.",
    rejected: "Sua participação não foi aprovada.",
    namesShown: "* Os nomes e respostas dos outros participantes ficam visíveis.",
    namesHidden:
      "* Apenas o número de participantes é exibido; os nomes e respostas dos outros ficam ocultos.",
    multipleHint: " Você pode selecionar várias opções. Toque de novo para desmarcar.",
    noUpcomingDates: "Nenhuma data futura.",
    pastHistory: "Ver datas passadas ({n})",
    answer: "Responder",
    saveAnswers: "Salvar",
    unanswered: "Sem resposta",
    yourAnswer: "Sua resposta: {answer}",
    conflictPrompt: "Alguém já respondeu com o nome \"{name}\". É você?",
    yesMe: "Sim, sou eu",
    notMe: "Não, é outra pessoa",
    loginRequired: "Para responder, faça login ou crie uma conta.",
    namePlaceholder: "Ex.: Ana Silva",
    createNewPrompt: "É novo por aqui?",
    countBadge: "{label} {n}",
  },
  calendar: {
    title: "Sincronizar com o calendário",
    description:
      "As datas que você respondeu podem ser sincronizadas automaticamente com o seu calendário (pode levar de alguns minutos a algumas horas para aparecer).",
    google: "Adicionar ao Google Agenda",
    outlookCom: "Adicionar ao Outlook.com",
    office365: "Adicionar ao Outlook (trabalho ou escola)",
    apple: "Adicionar ao Calendário do iPhone",
    copyUrl: "Copiar a URL diretamente",
  },
  memberPage: {
    title: "Minha página",
    pendingNotice: "Aguardando aprovação de {n} organizador(es)",
    noOrganizers:
      "Você ainda não participa de nenhum organizador. Abra a URL de um evento compartilhado para participar.",
    organizerEvents: "Eventos de {name}",
    organizerEventsUnnamed: "Eventos do organizador",
    noEvents: "Nenhum evento ainda.",
    answered: "Respondidas {answered}/{total}",
  },
  landing: {
    heroTitle: "Combine datas e confirme presença grátis, sem login e na hora",
    heroLead:
      "O organizador propõe as datas e os participantes respondem com ○△×. Só isso. Serve para happy hours, reencontros, festas de casamento, boas-vindas, despedidas, grupos, reuniões e qualquer plano que precise de uma data e de saber quem vai.",
    heroCta: "Criar um evento grátis",
    heroNote: "Sem cadastro nem instalação. Compartilhe as datas candidatas em cerca de 30 segundos.",
    howHeading: "Como funciona: 3 passos",
    step1Title: "Adicione as datas candidatas",
    step1Body:
      "Digite o nome do evento e as datas que você tem em mente. Se precisar, adicione faixas de horário como \"manhã / tarde\", ou escreva \"sexta e sábado da semana que vem\" e deixe a IA preencher.",
    step2Title: "Compartilhe o link",
    step2Body:
      "Envie o link para participantes por LINE, e-mail, Slack ou qualquer chat. Os participantes abrem sem criar conta.",
    step3Title: "Responda com ○△× e veja a contagem",
    step3Body:
      "Os participantes escolhem ○△× para cada candidata e a presença de cada data é somada na hora. As respostas podem ser alteradas quando quiser.",
    featuresHeading: "Por que escolhem o whenly",
    feature1Title: "Sem login nem cadastro",
    feature1Body:
      "Organizadores e participantes usam sem conta. Não é preciso coletar endereços de e-mail.",
    feature2Title: "Faixas de horário dentro de um mesmo dia",
    feature2Body:
      "Defina várias candidatas em um único dia, como \"5 de setembro manhã / tarde\", e colete respostas para cada faixa.",
    feature3Title: "Opções de resposta personalizáveis",
    feature3Body:
      "Não só ○△×: use \"Sim / Não / Talvez\", \"OK / NG\" ou o que preferir, com até 10 opções.",
    feature4Title: "Modo com aprovação e visibilidade dos nomes",
    feature4Body:
      "Escolha entre um evento aberto, em que qualquer pessoa responde, e um em que só respondem os aprovados pelo organizador. Também dá para ocultar os nomes e mostrar apenas o número de pessoas.",
    feature5Title: "Sincronização com calendário e impressão",
    feature5Body:
      "Sincronize as datas que você respondeu com o Google Calendar, Outlook ou o calendário do iPhone, e imprima a tabela de presença em A4 do jeito que está.",
    feature6Title: "Datas preenchidas por IA",
    feature6Body:
      "Gere datas candidatas a partir de texto livre como \"toda segunda a partir das 19h\". A interface está disponível em 12 idiomas.",
    useCasesHeading: "Casos de uso comuns",
    useCase1: "Combinar happy hours e encontros",
    useCase2: "Confirmar presença em reencontros e reuniões de ex-alunos",
    useCase3: "Controlar a presença em festas de casamento",
    useCase4: "Escolher a data de boas-vindas e despedidas",
    useCase5: "Dias de atividade de grupos, times e associações de pais",
    useCase6: "Marcar reuniões de trabalho",
    useCase7: "Organizar turnos de voluntários e eventos",
    useCase8: "Confirmar presença em aulas e cursos",
    securityHeading: "Por que é seguro usar",
    security1Title: "Sem dados pessoais",
    security1Body: "Os participantes só informam um nome (opcional). Não é preciso e-mail nem telefone.",
    security2Title: "Controle quem pode editar",
    security2Body:
      "A edição pode ser limitada a quem conhece a URL de edição ou apenas ao organizador logado.",
    security3Title: "Conexão criptografada",
    security3Body: "Todo o tráfego é criptografado via HTTPS.",
    faqHeading: "Perguntas frequentes",
    faq1Q: "É grátis mesmo?",
    faq1A:
      "Sim. Criar eventos, responder, ver a contagem e sincronizar com o calendário são funções gratuitas.",
    faq2Q: "Os participantes precisam de conta?",
    faq2A:
      "Não. Eles abrem o link compartilhado e informam um nome (opcional) para responder. O login só é pedido aos participantes quando o organizador ativa o modo com aprovação.",
    faq3Q: "O organizador também pode usar sem fazer login?",
    faq3A:
      "Sim. Toque em \"Começar sem conta\" para criar um evento na hora. Depois você pode cadastrar um e-mail e uma senha para gerenciá-lo também de outros dispositivos.",
    faq4Q: "As candidatas são só datas ou posso indicar faixas de horário?",
    faq4A:
      "Você pode adicionar a cada data faixas como \"manhã\", \"tarde\" ou \"a partir das 19h\". Datas com faixas são respondidas faixa por faixa.",
    faq5Q: "Dá para mudar as respostas depois?",
    faq5A: "Sim. Abra o mesmo link de novo e altere suas respostas quando quiser.",
    faq6Q: "Posso colocar no meu calendário as datas que respondi?",
    faq6A:
      "Assine sua URL de calendário pessoal no Google Calendar, Outlook ou calendário do iPhone e as datas que você respondeu serão sincronizadas automaticamente.",
    faq7Q: "Qual a diferença para outras ferramentas de agendamento?",
    faq7A:
      "Faixas de horário dentro de cada data, opções de resposta personalizáveis, modo com aprovação, nomes ocultos, sincronização com calendário, preenchimento por IA e 12 idiomas, tudo grátis.",
    ctaHeading: "Compartilhe suas datas candidatas agora",
    ctaBody: "Sem cadastro nem instalação. Um clique e a página do seu evento está pronta.",
    navHome: "Início",
  },
  useCasePage: {
    breadcrumbUseCases: "Casos de uso",
    painsHeading: "Parece familiar?",
    solutionsHeading: "Como o whenly resolve",
    tipsHeading: "Dicas para aproveitar melhor",
    relatedHeading: "Outros casos de uso",
  },
  useCases: {
    nomikai: {
      title: "Combine happy hours e encontros grátis, sem login",
      description:
        "Para quem organiza happy hours e encontros: adicione datas candidatas, envie o link e os convidados respondem ○△× sem fazer login. Contagem automática, faixas de horário e modo com aprovação, tudo grátis.",
      heading: "Combinar happy hours e encontros",
      lead:
        "A parte mais chata de organizar é ficar cobrando a disponibilidade de cada um. Com o whenly você adiciona as datas candidatas e manda um único link; os convidados marcam ○△× sem conta e a contagem atualiza na hora.",
      pain1: "Você pergunta no grupo do WhatsApp, as respostas somem no meio das mensagens e você perde o controle de quem já respondeu",
      pain2: "Respostas condicionais como \"só depois das 19h\" ou \"chego na segunda rodada\" são difíceis de organizar",
      pain3: "Toda vez que adiciona ou muda uma data, precisa perguntar de novo para todo mundo",
      solution1Title: "Pergunte datas e horários de uma vez só",
      solution1Body:
        "Adicione faixas a cada data, como \"sexta a partir das 19h\" ou \"sábado 18h / 20h\", e as respostas condicionais viram candidatas normais.",
      solution2Title: "Os convidados só abrem o link e colocam o nome",
      solution2Body:
        "Não precisa de conta e o nome é opcional, então as pessoas respondem sem pensar duas vezes. As respostas podem ser alteradas depois.",
      solution3Title: "Número de pessoas por data, somado automaticamente",
      solution3Body:
        "A quantidade de ○△× e os nomes aparecem por candidata, então você sabe na hora quantos lugares reservar. Dá para adicionar datas a qualquer momento.",
      tip1: "Limite as candidatas a 3–5 datas para aumentar a taxa de resposta. Com opções demais, as pessoas deixam para depois.",
      tip2: "Mostrar os nomes dos participantes anima mais gente a ir quando veem quem já confirmou.",
      faq1Q: "Os convidados precisam de algo além do WhatsApp?",
      faq1A:
        "Não. Cole o link compartilhado no grupo e os convidados abrem no navegador. Não precisa instalar nenhum app.",
      faq2Q: "E se o número de pessoas mudar depois de reservar o lugar?",
      faq2A:
        "Os convidados podem mudar a resposta a qualquer momento e o organizador vê na hora. Um lembrete antes do prazo ajuda a fechar o número.",
    },
    dousoukai: {
      title: "Confirme presença em reencontros e reuniões de ex-alunos",
      description:
        "Para quem organiza reencontros de turma e ex-alunos: colete confirmações com um único link mesmo que cada um use um canal diferente. Sem login, com nomes ocultos ou modo com aprovação. Grátis.",
      heading: "Confirmação de presença em reencontros e reuniões de ex-alunos",
      lead:
        "Pedir para alguém com quem você não fala há anos instalar um app é constrangedor. Com o whenly a pessoa só abre o link para confirmar, e você vê de relance quem já respondeu.",
      pain1: "Cada um usa um canal diferente (e-mail, WhatsApp, redes sociais) e juntar as respostas é um trabalhão",
      pain2: "Passar \"vai / talvez / não vai\" para uma lista à mão leva tempo",
      pain3: "Com muita gente, fica difícil saber quem ainda não respondeu",
      solution1Title: "Um único link serve para qualquer canal",
      solution1Body:
        "Mande o mesmo link pelo canal que for. Os participantes respondem pelo navegador sem instalar nada.",
      solution2Title: "Troque as opções para \"Vou / Talvez / Não vou\"",
      solution2Body:
        "As opções de resposta são totalmente personalizáveis, então você pode usar as palavras que combinam com um reencontro.",
      solution3Title: "Nomes e respostas em uma lista só",
      solution3Body:
        "A tela do organizador mostra quem respondeu a cada candidata, então atualizar a lista e achar quem falta leva segundos.",
      tip1: "Separe o jantar e o \"esquenta\" ou a balada depois em faixas de horário para ver quem chega mais tarde.",
      tip2: "Você escolhe se os participantes veem os nomes uns dos outros. Se privacidade for uma preocupação, mostre só o número de pessoas.",
      faq1Q: "Vou acabar coletando dados pessoais?",
      faq1A:
        "Os participantes só informam um nome (opcional). Não é pedido e-mail nem telefone, e o organizador também não vê esses dados.",
      faq2Q: "Alguém pode responder se passando por outra pessoa?",
      faq2A:
        "No modo com aprovação, só respondem os participantes aprovados pelo organizador. Mesmo no modo aberto, se alguém tenta responder com um nome que já respondeu, aparece uma verificação de identidade.",
    },
    nijikai: {
      title: "Controle a presença em festas de casamento grátis",
      description:
        "Para festas de casamento, comemorações e aniversários: combine a data e acompanhe a presença final. Os convidados não fazem login e o organizador tem uma lista de presença para imprimir. Grátis.",
      heading: "Presença em festas de casamento e comemorações",
      lead:
        "Quando você assume a organização da festa, tudo começa por escolher a data e saber quem vai. Com o whenly a votação de datas e a confirmação final ficam no mesmo link.",
      pain1: "O lado da noiva e o lado do noivo usam canais diferentes e você acaba com duas listas",
      pain2: "Reunir todas as respostas antes do prazo que o espaço dá para o número final é estressante",
      pain3: "Você precisa refazer a lista de convidados para a recepção no dia da festa",
      solution1Title: "As duas famílias em um único evento",
      solution1Body:
        "Compartilhe o link com cada lado e todas as respostas aparecem em uma só tela.",
      solution2Title: "Saiba quem não respondeu antes do prazo",
      solution2Body:
        "Os nomes de quem respondeu aparecem por candidata, então você só precisa cobrar quem ainda falta.",
      solution3Title: "Imprima a lista de presença do jeito que está",
      solution3Body:
        "O botão de imprimir gera uma lista de presença em A4 que serve direto como lista da recepção.",
      tip1: "Controle o pagamento trocando as opções para \"Vai (pago) / Vai (pendente) / Não vai\".",
      tip2: "A sincronização com calendário deixa a data na agenda dos convidados, e menos gente esquece.",
      faq1Q: "Serve para confirmar presença depois de enviar os convites?",
      faq1A:
        "Sim. Cadastre só a data do evento e coloque as opções \"Vou / Não vou\" para substituir o cartão de resposta.",
      faq2Q: "Posso coletar os contatos dos convidados?",
      faq2A:
        "O whenly não tem função para coletar contatos. Ele foi feito para não guardar dados pessoais, então os convidados podem usar tranquilos.",
    },
    kangeikai: {
      title: "Escolha a data de boas-vindas e despedidas grátis",
      description:
        "Para boas-vindas e despedidas no trabalho: priorize a agenda do homenageado e ainda assim colete a disponibilidade de toda a equipe. Sem login e sem e-mail. Grátis.",
      heading: "Combinar boas-vindas e despedidas no trabalho",
      lead:
        "Você quer encaixar a agenda do homenageado e ainda ouvir a equipe inteira. Com o whenly você lista as datas candidatas e compartilha o link; quem pode ir em cada dia aparece em uma única tela.",
      pain1: "Perguntar por e-mail para o departamento inteiro enterra as respostas e atrasa a contagem",
      pain2: "O melhor dia para o homenageado e o melhor dia para a maioria não batem",
      pain3: "Convidados de fora não podem usar o chat interno da empresa",
      solution1Title: "Número de pessoas por candidata de relance",
      solution1Body: "Os ○△× são somados por candidata, então o dia com mais gente fica óbvio.",
      solution2Title: "Monte as candidatas em torno do homenageado",
      solution2Body:
        "Pergunte primeiro ao homenageado, cadastre as candidatas depois, e você só precisa perguntar ao resto uma vez. Dá para adicionar datas mais tarde.",
      solution3Title: "Quem é de fora só precisa do link",
      solution3Body:
        "Não precisa de conta, então quem está fora da empresa responde a partir de um simples e-mail.",
      tip1: "Use o campo de comentário de cada data para avisos como \"último dia no escritório\" e ajudar as pessoas a decidir.",
      tip2: "Com o modo com aprovação, só quem foi aprovado pelo organizador responde, mesmo que o link seja encaminhado.",
      faq1Q: "Preciso cadastrar um e-mail corporativo?",
      faq1A:
        "Nem organizadores nem participantes precisam de e-mail. O organizador pode começar na hora em \"Começar sem conta\".",
      faq2Q: "E se eu não quiser que os participantes vejam as respostas uns dos outros?",
      faq2A:
        "Oculte os nomes dos participantes e os outros só veem o número de pessoas. O organizador continua vendo tudo.",
    },
    circle: {
      title: "Dias de atividade para grupos, times e associações de pais",
      description:
        "Para grupos, times esportivos, associações de pais e comunidades: colete a disponibilidade para treinos semanais e escalas de uma vez só. Sem login e com respostas por faixa de horário. Grátis.",
      heading: "Dias de atividade de grupos, times e associações de pais",
      lead:
        "Treinos semanais e escalas de plantão significam fazer a mesma pergunta toda semana. Com o whenly você cadastra quatro semanas de candidatas de uma vez e os membros respondem em uma sentada.",
      pain1: "Perguntar a disponibilidade toda santa semana é cansativo",
      pain2: "De manhã alguns membros podem, à tarde são outros",
      pain3: "Cada mudança de membros obriga a coletar contatos de novo",
      solution1Title: "Cadastre candidatas recorrentes em lote",
      solution1Body:
        "O botão Duplicar vai adicionando datas com o mesmo intervalo. Ou escreva \"todo sábado a partir das 10h\" e deixe a IA preencher.",
      solution2Title: "Colete respostas por faixa de horário",
      solution2Body:
        "Adicione faixas como \"manhã / tarde\" a uma data e veja quem pode em cada uma.",
      solution3Title: "Só membros aprovados respondem",
      solution3Body:
        "No modo com aprovação, quem não é membro abre o link mas não consegue responder. Entradas e saídas são gerenciadas aprovando ou recusando.",
      tip1: "Datas passadas vão para o histórico automaticamente, então você pode continuar usando o mesmo evento.",
      tip2: "Os membros podem sincronizar as datas que responderam com o próprio calendário.",
      faq1Q: "Quantas semanas posso cadastrar?",
      faq1A:
        "Não há limite de datas. No preenchimento por IA, repetições sem data final são expandidas para quatro semanas a partir de hoje.",
      faq2Q: "Pais que não têm muita intimidade com celular conseguem responder?",
      faq2A:
        "Eles abrem o link, tocam em ○△× e salvam. Não precisa instalar app nem criar conta.",
    },
    kaigi: {
      title: "Marque reuniões de trabalho grátis, sem login",
      description:
        "Para reuniões internas e com clientes: envie horários candidatos e a outra parte responde sem fazer login. Os resultados sincronizam com o Google Calendar e o Outlook. Grátis.",
      heading: "Marcar reuniões de trabalho",
      lead:
        "Em vez de trocar horários por e-mail sem parar, mande todos em um único link. A outra parte escolhe o que funciona sem se cadastrar, e o resultado pode ir para o calendário dela.",
      pain1: "Escrever horários candidatos em e-mails e cruzar as respostas é ineficiente",
      pain2: "Quanto mais participantes, mais difícil achar um horário que sirva para todos",
      pain3: "As pessoas esquecem de colocar o horário combinado no calendário",
      solution1Title: "Proponha datas com faixas de horário",
      solution1Body:
        "Faixas como \"10 de setembro, 10h / 14h\" podem ser candidatas, o que é ideal para definir o horário de uma reunião.",
      solution2Title: "Compare os ○△× de todos lado a lado",
      solution2Body:
        "As respostas ficam listadas por candidata, então você acha rápido o horário em que todos são ○, ou em que um △ resolveria.",
      solution3Title: "Sincronize as datas escolhidas com o calendário",
      solution3Body:
        "Os participantes assinam uma vez no Google Calendar, Outlook ou calendário do iPhone e as datas que responderam aparecem automaticamente.",
      tip1: "Troque as opções para \"Disponível / Flexível / Indisponível\" para uma linguagem mais profissional.",
      tip2: "Permita a edição para quem conhece a URL de edição e um coorganizador pode gerenciar junto com você.",
      faq1Q: "Posso usar com pessoas de fora da minha empresa?",
      faq1A: "Sim. Elas abrem o link e respondem. Não precisa cadastrar conta.",
      faq2Q: "Ele reserva sala de reunião ou envia convites?",
      faq2A:
        "O whenly foca em encontrar a data e somar a presença. Envie o convite do horário combinado pelo calendário que você já usa.",
    },
    volunteer: {
      title: "Turnos de voluntários e eventos grátis, sem login",
      description:
        "Para grupos de voluntários e equipes de eventos: crie turnos por faixa de horário em cada data e colete quem pode cobrir cada um, sem login. Grátis.",
      heading: "Turnos de voluntários e eventos",
      lead:
        "Turnos que abrangem vários dias e horários são difíceis de manter atualizados em uma planilha. Com o whenly cada pessoa marca ○△× nas candidatas de data × horário e você vê a contagem por turno.",
      pain1: "Tantas combinações de data e horário deixam a planilha de turnos difícil de manter",
      pain2: "A rotatividade alta faz da gestão de contatos um peso",
      pain3: "Você não vê em tempo real quantas pessoas há em cada turno",
      solution1Title: "Crie turnos por faixa de horário em cada data",
      solution1Body:
        "Adicione faixas como \"manhã / tarde / noite\" a cada data e colete respostas por turno.",
      solution2Title: "Contagem e nomes por turno na hora",
      solution2Body:
        "A tela do organizador mostra os ○△× e os nomes por turno, então os turnos com pouca gente se destacam.",
      solution3Title: "Sem contatos para guardar",
      solution3Body: "Os voluntários respondem só com o nome. Não há dados pessoais para você gerenciar.",
      tip1: "Escreva a regra \"○ = posso cobrir / △ = flexível / × = não posso\" no comentário do evento para as respostas ficarem consistentes.",
      tip2: "O modo com aprovação limita as respostas aos voluntários cadastrados.",
      faq1Q: "Os voluntários podem adicionar os turnos ao calendário deles?",
      faq1A: "Sim. Depois de assinar a URL de calendário, os turnos marcados com ○ aparecem como eventos de dia inteiro.",
      faq2Q: "Quantas pessoas podem responder?",
      faq2A: "Não há limite.",
    },
    lesson: {
      title: "Confirme presença em aulas e cursos grátis, sem login",
      description:
        "Para aulas, cursos e escolas: o professor cadastra as datas e os alunos ou responsáveis marcam ○ nos dias em que vão, sem login. Com sincronização de calendário. Grátis.",
      heading: "Presença em aulas e cursos",
      lead:
        "Com aulas de reposição e turmas de participação livre, saber quem vem a cada vez dá trabalho. Com o whenly você lista as datas e os alunos ou responsáveis escolhem os dias pelo link.",
      pain1: "Você entra em contato com os participantes antes de cada aula para confirmar",
      pain2: "As respostas dos responsáveis chegam uma a uma e a contagem demora",
      pain3: "Os alunos esquecem em quais dias se inscreveram",
      solution1Title: "Apresente todas as datas do mês de uma vez",
      solution1Body:
        "Duplicar adiciona o mesmo dia da semana em sequência. Você também pode dividir uma data em faixas de horário.",
      solution2Title: "Os participantes colocam o nome e marcam ○",
      solution2Body:
        "Não precisa de conta. Responsáveis que respondem pelo filho podem usar o nome da criança.",
      solution3Title: "Os dias de presença sincronizam com o calendário",
      solution3Body:
        "Com a sincronização de calendário, os dias que cada participante respondeu aparecem no Google Calendar ou no calendário do iPhone.",
      tip1: "Oculte os nomes dos participantes e os outros alunos veem só o número de pessoas.",
      tip2: "Se houver limite de vagas, anote no comentário da data, por exemplo \"máx. 6\".",
      faq1Q: "Participantes sem smartphone conseguem usar?",
      faq1A:
        "Eles podem responder pelo navegador de um computador. Você também pode confirmar de viva voz com a lista impressa e inserir as respostas por conta própria.",
      faq2Q: "Tem algum custo?",
      faq2A: "Todas as funções são gratuitas.",
    },
  },
  errors: {
    titleRequired: "Informe um título",
    addAtLeastOneDate: "Adicione pelo menos uma data",
    dateRequired: "Informe uma data",
    invalidDate: "O formato da data é inválido",
    eventNotFound: "Evento não encontrado",
    loginRequired: "É necessário fazer login",
    optionsAtLeastOne: "É necessária pelo menos uma opção",
    optionsMax: "Use no máximo {max} opções",
    nameRequired: "Informe seu nome",
    invalidEmail: "O formato do e-mail é inválido",
    passwordTooShort: "A senha deve ter pelo menos 8 caracteres",
    passwordRequired: "Informe sua senha",
    emailTaken: "Este e-mail já está cadastrado",
    invalidCredentials: "E-mail ou senha incorretos",
    identityFailed: "Falha na verificação de identidade",
    accountNotFound: "Conta não encontrada",
    alreadyRegistered: "Esta conta já está cadastrada",
    resetLinkInvalid:
      "Este link expirou ou já foi usado. Solicite a redefinição de senha novamente.",
    unknownError: "Ocorreu um erro desconhecido",
    optionsChanged: "As opções foram alteradas. Recarregue a página",
    noMultipleAnswers: "Este evento não permite seleção múltipla",
    noPermission: "Você não tem permissão para responder",
    aiEmpty: "Descreva sua programação",
    aiNoSchedule: "Não foi possível identificar nenhuma data. Seja um pouco mais específico.",
    aiFailed: "O preenchimento automático com IA falhou. Tente novamente mais tarde.",
  },
  mail: {
    resetSubject: "[whenly] Redefinição de senha",
    resetBody:
      "Recebemos uma solicitação para redefinir sua senha.\n\nDefina uma nova senha em até 1 hora usando o link abaixo.\n\n{url}\n\nSe você não fez esta solicitação, pode ignorar este e-mail.",
  },
};
