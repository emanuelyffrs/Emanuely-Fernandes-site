/* ==========================================================================
   Emanuely Fernandes — portfolio
   Vanilla JavaScript. No dependencies, no external services.

   How the translation works
   --------------------------
   - Every translatable element in index.html carries data-i18n="some.key".
   - Translatable attributes (alt, aria-label, content) use
     data-i18n-attr="attribute:key;attribute:key".
   - The dictionary below holds every string in English ("en") and
     Brazilian Portuguese ("pt-BR"). To change a text, edit it here.
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-language';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'pt-BR'];

  var translations = {
    en: {
      'meta.title': 'Emanuely Fernandes | Technology, Data & Digital Operations',
      'meta.description': 'Portfolio of Emanuely Fernandes, an early-career professional exploring technology, data, digital operations and language quality.',

      'a11y.skip': 'Skip to content',
      'a11y.menu': 'Open or close the menu',
      'a11y.nav': 'Main navigation',
      'a11y.lang': 'Language',
      'a11y.newTab': ' (opens in a new tab)',
      'status.changed': 'Language changed to English.',

      'brand': 'Emanuely Fernandes',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.education': 'Education',
      'nav.contact': 'Contact',

      'home.hello': 'Hello, I’m',
      'home.headline': 'Technology, Data & Digital Operations',
      'home.intro': 'I’m an early-career professional exploring the intersection of technology, data, digital processes, and language quality. My experience combines administrative operations, information organization, and linguistic evaluation of AI-generated content. I’m continuously developing my technical knowledge and looking for opportunities to grow within the technology field.',
      'home.cta': 'Contact me',
      'home.profiles': 'Professional profiles',
      'home.art': 'Small pixel-art pink heart surrounded by hand-drawn sparkles',

      'about.title': 'About',
      'about.p1': 'I’m an early-career professional with experience in administrative operations, information organization, and language quality. My work has included reviewing AI-generated and machine-translated content, supporting digital workflows, and handling administrative processes.',
      'about.p2': 'I’m currently expanding my knowledge of technology, particularly data and programming. I enjoy learning new tools, understanding how information is structured, and finding practical solutions to everyday challenges.',
      'about.photoAlt': 'Portrait of Emanuely Fernandes',

      'projects.title': 'Featured project',
      'projects.stackLine': 'Python, LangChain & Gemini',
      'projects.purpose': 'A translation tool where the target language and the text are inputs rather than fixed in the code. Instead of a script that only translates one sentence into one language, a single chain can translate any text into whichever language is requested.',
      'projects.howTitle': 'How it works',
      'projects.how1': 'A chat prompt template holds a system instruction and a user message, with the language and the text as variables.',
      'projects.how2': 'The prompt is connected to Google’s Gemini model through the LangChain integration and then to a string output parser, forming one chain.',
      'projects.how3': 'The chain is exposed as an API with FastAPI and LangServe, and the Gemini API key is read from an environment variable instead of being written in the code.',
      'projects.learnTitle': 'What I practiced',
      'projects.learn': 'Building chains in LangChain, writing prompt templates with variables, calling a language model from Python, handling credentials with environment variables, and serving a model-backed endpoint.',
      'projects.toolsLabel': 'Tools used',
      'projects.repo': 'View repository on GitHub',
      'projects.codeLabel': 'Code excerpt from the project',
      'projects.codeCaption': 'The core of the chain, from ia_tradutora.py',

      'experience.title': 'Experience',
      'experience.intern.role': 'Administrative Assistant Intern',
      'experience.intern.b1': 'Customer service and public assistance.',
      'experience.intern.b2': 'Updating records and checking information.',
      'experience.intern.b3': 'Organizing administrative records.',
      'experience.intern.b4': 'Supporting administrative processes and digital systems.',
      'experience.assistant.role': 'Administrative Assistant',
      'experience.assistant.b1': 'Assistance with administrative routines.',
      'experience.assistant.b2': 'Customer service.',
      'experience.assistant.b3': 'Preparation and requests for Brazilian documentation for immigrant clients.',
      'experience.rws.role': 'Translator & Linguistic Reviewer',
      'experience.rws.b1': 'Translation and review of English-to-Brazilian Portuguese content.',
      'experience.rws.b2': 'Post-editing of machine-translated content (MTPE).',
      'experience.rws.b3': 'Evaluation and linguistic quality control of AI-generated content.',

      'skills.title': 'Skills & Technologies',
      'skills.data.title': 'Data & Technical Foundations',
      'skills.data.sql': 'SQL (developing)',
      'skills.data.python': 'Python (developing)',
      'skills.data.db': 'Database fundamentals',
      'skills.data.info': 'Information organization',
      'skills.ops.title': 'Digital & Administrative Operations',
      'skills.ops.office': 'Microsoft Office',
      'skills.ops.google': 'Google Workspace',
      'skills.ops.admin': 'Administrative processes',
      'skills.ops.records': 'Scheduling and record management',
      'skills.ops.service': 'Customer service',
      'skills.lang.title': 'Language & AI Quality',
      'skills.lang.translation': 'English-to-Brazilian Portuguese translation',
      'skills.lang.mtpe': 'Machine Translation Post-Editing (MTPE)',
      'skills.lang.review': 'Linguistic review',
      'skills.lang.eval': 'AI-generated content evaluation',
      'skills.lang.qa': 'Text quality assurance',

      'education.title': 'Education & Courses',
      'education.ads.title': 'Systems Analysis and Development (ADS)',
      'education.ads.school': 'Mackenzie Presbyterian University',
      'education.ads.status': '2027 – Currently pursuing',
      'education.python.title': 'Python',
      'education.sql.title': 'SQL',
      'education.hs.title': 'High School',
      'education.senac.title': 'Administrative Assistant',

      'languages.title': 'Languages',
      'languages.pt': 'Portuguese',
      'languages.ptLevel': 'Native',
      'languages.en': 'English',
      'languages.enLevel': 'Advanced',
      'languages.libras': 'Brazilian Sign Language (LIBRAS)',

      'contact.title': 'Contact',
      'contact.intro': 'The best way to reach me is by WhatsApp or email.',

      'footer.text': '© 2026 Emanuely Fernandes. Built by hand with HTML, CSS and JavaScript.',
      'footer.top': 'Back to top'
    },

    'pt-BR': {
      'meta.title': 'Emanuely Fernandes | Tecnologia, Dados e Operações Digitais',
      'meta.description': 'Portfólio de Emanuely Fernandes, profissional em início de carreira que explora tecnologia, dados, operações digitais e qualidade linguística.',

      'a11y.skip': 'Ir para o conteúdo',
      'a11y.menu': 'Abrir ou fechar o menu',
      'a11y.nav': 'Navegação principal',
      'a11y.lang': 'Idioma',
      'a11y.newTab': ' (abre em uma nova aba)',
      'status.changed': 'Idioma alterado para português do Brasil.',

      'brand': 'Emanuely Fernandes',

      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.experience': 'Experiência',
      'nav.skills': 'Habilidades',
      'nav.education': 'Formação',
      'nav.contact': 'Contato',

      'home.hello': 'Olá, eu sou',
      'home.headline': 'Tecnologia, Dados e Operações Digitais',
      'home.intro': 'Sou uma profissional em início de carreira que explora a interseção entre tecnologia, dados, processos digitais e qualidade linguística. Minha experiência combina operações administrativas, organização de informações e avaliação linguística de conteúdo gerado por IA. Estou sempre desenvolvendo meus conhecimentos técnicos e buscando oportunidades para crescer na área de tecnologia.',
      'home.cta': 'Entre em contato',
      'home.profiles': 'Perfis profissionais',
      'home.art': 'Pequeno coração rosa em pixel art cercado por brilhos desenhados à mão',

      'about.title': 'Sobre',
      'about.p1': 'Sou uma profissional em início de carreira, com experiência em operações administrativas, organização de informações e qualidade linguística. Meu trabalho já incluiu a revisão de conteúdo gerado por IA e traduzido por máquina, o apoio a fluxos de trabalho digitais e a execução de processos administrativos.',
      'about.p2': 'Atualmente, estou ampliando meus conhecimentos em tecnologia, principalmente em dados e programação. Gosto de aprender novas ferramentas, entender como as informações são estruturadas e encontrar soluções práticas para os desafios do dia a dia.',
      'about.photoAlt': 'Retrato de Emanuely Fernandes',

      'projects.title': 'Projeto em destaque',
      'projects.stackLine': 'Python, LangChain e Gemini',
      'projects.purpose': 'Uma ferramenta de tradução em que o idioma de destino e o texto são entradas, e não valores fixos no código. Em vez de um script que traduz apenas uma frase para um único idioma, uma mesma cadeia pode traduzir qualquer texto para o idioma solicitado.',
      'projects.howTitle': 'Como funciona',
      'projects.how1': 'Um template de prompt de chat reúne uma instrução de sistema e uma mensagem do usuário, com o idioma e o texto como variáveis.',
      'projects.how2': 'O prompt é conectado ao modelo Gemini, do Google, por meio da integração com o LangChain e depois a um parser de saída de texto, formando uma única cadeia.',
      'projects.how3': 'A cadeia é exposta como uma API com FastAPI e LangServe, e a chave de API do Gemini é lida de uma variável de ambiente, em vez de ficar escrita no código.',
      'projects.learnTitle': 'O que pratiquei',
      'projects.learn': 'Criação de cadeias no LangChain, escrita de templates de prompt com variáveis, chamada de um modelo de linguagem a partir do Python, uso de variáveis de ambiente para credenciais e disponibilização de um endpoint baseado em modelo.',
      'projects.toolsLabel': 'Ferramentas utilizadas',
      'projects.repo': 'Ver repositório no GitHub',
      'projects.codeLabel': 'Trecho de código do projeto',
      'projects.codeCaption': 'O núcleo da cadeia, em ia_tradutora.py',

      'experience.title': 'Experiência',
      'experience.intern.role': 'Estagiária de Assistente Administrativo',
      'experience.intern.b1': 'Atendimento ao cliente e ao público.',
      'experience.intern.b2': 'Atualização de registros e conferência de informações.',
      'experience.intern.b3': 'Organização de registros administrativos.',
      'experience.intern.b4': 'Apoio a processos administrativos e sistemas digitais.',
      'experience.assistant.role': 'Assistente Administrativa',
      'experience.assistant.b1': 'Apoio nas rotinas administrativas.',
      'experience.assistant.b2': 'Atendimento ao cliente.',
      'experience.assistant.b3': 'Preparação e solicitação de documentação brasileira para clientes imigrantes.',
      'experience.rws.role': 'Tradutora e Revisora Linguística',
      'experience.rws.b1': 'Tradução e revisão de conteúdo do inglês para o português do Brasil.',
      'experience.rws.b2': 'Pós-edição de conteúdo traduzido por máquina (MTPE).',
      'experience.rws.b3': 'Avaliação e controle de qualidade linguística de conteúdo gerado por IA.',

      'skills.title': 'Habilidades e Tecnologias',
      'skills.data.title': 'Dados e Fundamentos Técnicos',
      'skills.data.sql': 'SQL (em desenvolvimento)',
      'skills.data.python': 'Python (em desenvolvimento)',
      'skills.data.db': 'Fundamentos de banco de dados',
      'skills.data.info': 'Organização de informações',
      'skills.ops.title': 'Operações Digitais e Administrativas',
      'skills.ops.office': 'Microsoft Office',
      'skills.ops.google': 'Google Workspace',
      'skills.ops.admin': 'Processos administrativos',
      'skills.ops.records': 'Agendamento e gestão de registros',
      'skills.ops.service': 'Atendimento ao cliente',
      'skills.lang.title': 'Idiomas e Qualidade em IA',
      'skills.lang.translation': 'Tradução do inglês para o português do Brasil',
      'skills.lang.mtpe': 'Pós-edição de tradução automática (MTPE)',
      'skills.lang.review': 'Revisão linguística',
      'skills.lang.eval': 'Avaliação de conteúdo gerado por IA',
      'skills.lang.qa': 'Garantia de qualidade de textos',

      'education.title': 'Formação e Cursos',
      'education.ads.title': 'Análise e Desenvolvimento de Sistemas (ADS)',
      'education.ads.school': 'Universidade Presbiteriana Mackenzie',
      'education.ads.status': '2027 – Cursando',
      'education.python.title': 'Python',
      'education.sql.title': 'SQL',
      'education.hs.title': 'Ensino Médio',
      'education.senac.title': 'Assistente Administrativo',

      'languages.title': 'Idiomas',
      'languages.pt': 'Português',
      'languages.ptLevel': 'Nativo',
      'languages.en': 'Inglês',
      'languages.enLevel': 'Avançado',
      'languages.libras': 'Língua Brasileira de Sinais (LIBRAS)',

      'contact.title': 'Contato',
      'contact.intro': 'A melhor forma de falar comigo é por WhatsApp ou e-mail.',

      'footer.text': '© 2026 Emanuely Fernandes. Feito à mão com HTML, CSS e JavaScript.',
      'footer.top': 'Voltar ao topo'
    }
  };

  /* ---------- Language preference (safe when storage is blocked) ---------- */

  function readStoredLang() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.indexOf(value) !== -1 ? value : null;
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable: the choice simply is not remembered */
    }
  }

  /* ---------- Applying a language ---------- */

  function applyLanguage(lang, announce) {
    if (SUPPORTED.indexOf(lang) === -1) { lang = DEFAULT_LANG; }
    var dict = translations[lang];

    document.documentElement.setAttribute('lang', lang);
    document.title = dict['meta.title'];

    var textNodes = document.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(textNodes, function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) { el.textContent = dict[key]; }
    });

    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    Array.prototype.forEach.call(attrNodes, function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var index = pair.indexOf(':');
        if (index === -1) { return; }
        var attr = pair.slice(0, index).trim();
        var key = pair.slice(index + 1).trim();
        if (dict[key] !== undefined) { el.setAttribute(attr, dict[key]); }
      });
    });

    // The code excerpt is not text content, only its label changes.
    var code = document.querySelector('.code');
    if (code) { code.setAttribute('aria-label', dict['projects.codeLabel']); }

    var buttons = document.querySelectorAll('.lang-switch [data-lang]');
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    if (announce) {
      var status = document.getElementById('lang-status');
      if (status) { status.textContent = dict['status.changed']; }
    }
  }

  function setLanguage(lang) {
    applyLanguage(lang, true);
    storeLang(lang);
  }

  /* ---------- Mobile menu ---------- */

  function setupMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var panel = document.getElementById('site-nav');
    if (!toggle || !panel) { return; }

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('is-open', open);
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    panel.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('a')) { setOpen(false); }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) { setOpen(false); }
    });
  }

  /* ---------- Highlight the current section in the navigation ---------- */

  function setupActiveNav() {
    if (!('IntersectionObserver' in window)) { return; }

    var links = document.querySelectorAll('.nav-list a[href^="#"]');
    var byId = {};
    Array.prototype.forEach.call(links, function (link) {
      byId[link.getAttribute('href').slice(1)] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        Array.prototype.forEach.call(links, function (link) { link.removeAttribute('aria-current'); });
        var active = byId[entry.target.id];
        if (active) { active.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });

    document.querySelectorAll('main section[id]').forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Profile photo fallback ---------- */

  function setupPhoto() {
    var figure = document.getElementById('photo');
    if (!figure) { return; }
    var img = figure.querySelector('img');
    if (!img) { return; }

    function showPlaceholder() { figure.classList.add('photo--empty'); }

    img.addEventListener('error', showPlaceholder);
    if (img.complete && img.naturalWidth === 0) { showPlaceholder(); }
  }

  /* ---------- Start ---------- */

  function init() {
    var buttons = document.querySelectorAll('.lang-switch [data-lang]');
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    applyLanguage(readStoredLang() || DEFAULT_LANG, false);
    setupMenu();
    setupActiveNav();
    setupPhoto();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed only so the translation tables can be checked from a test page or console.
  window.__portfolioI18n = { translations: translations, applyLanguage: applyLanguage };
})();
