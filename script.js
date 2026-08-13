(function(){
  "use strict";

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================
     1. TRANSLATIONS
     ========================================================== */
  var translations = {
    ru: {
      "nav.about":"Обо мне", "nav.experience":"Опыт", "nav.projects":"Проекты",
      "nav.skills":"Навыки", "nav.contact":"Контакты", "nav.download":"Скачать CV",

      "hero.status":"Астана, Казахстан · открыт к сильным аналитическим и digital-проектам",
      "hero.line1":"Инженер, который",
      "hero.line2":"заговорил", "hero.line2b":"на языке данных.",
      "hero.lead":"Начинал с механических систем и инженерных расчётов в нефтегазовых проектах — сегодня строю Power BI-платформы, KPI-дашборды и модели данных, которые превращают промышленный хаос в управленческие решения.",
      "hero.cta1":"Скачать CV", "hero.cta2":"Смотреть проекты",
      "hero.role1":"Lead Specialist, Data & BI Analytics",
      "hero.role2":"Инженерный бэкграунд: механика, FEED/pre-FEED, CAPEX",
      "hero.role3":"KMG Engineering",

      "about.eyebrow":"Почему это редкое сочетание",
      "about.title":"Инженер по образованию. Аналитик по призванию.",
      "about.lead":"Я не пришёл в данные из университетского курса по BI — я пришёл туда через реальные инженерные задачи, где Excel и интуиция переставали справляться с масштабом. Это даёт мне то, чего часто не хватает «чистым» аналитикам: я понимаю происхождение данных — от датчика на объекте до цифры в отчёте.",
      "about.card1.title":"Лет на стыке инженерии и данных",
      "about.card1.text":"От механических систем в Корее до Power BI-платформ в казахстанском нефтегазе.",
      "about.card2.num":"Engineering + Data", "about.card2.title":"Редкое сочетание",
      "about.card2.text":"Понимаю технологический процесс так же хорошо, как модель данных, которая его описывает.",
      "about.card3.num":"Oil & Gas", "about.card3.title":"Промышленный контекст",
      "about.card3.text":"Работал с NCOC, KPO, TCO и месторождением Дунга — знаю специфику upstream-проектов изнутри.",
      "about.card4.num":"Self-Taught", "about.card4.title":"Power BI, DAX, SQL, Python",
      "about.card4.text":"Освоил стек самостоятельно — и теперь обучаю ему коллег как внутренний тренер компании.",
      "about.card5.num":"Digitalization", "about.card5.title":"От отчёта к системе",
      "about.card5.text":"Строю не разовые дашборды, а воспроизводимые системы отчётности и инструменты автоматизации.",
      "about.card6.num":"Complex → Simple", "about.card6.title":"Сложное → понятное",
      "about.card6.text":"Умею превращать инженерные данные в решения, понятные руководству за 30 секунд.",

      "flow.eyebrow":"Как это устроено", "flow.title":"Что я на самом деле строю",
      "flow.lead":"Не просто дашборды — цепочку, которая соединяет физический процесс на объекте с решением на столе руководителя.",
      "flow.n1":"Инженерия", "flow.n1sub":"FEED, CAPEX, объект",
      "flow.n2":"Промышленные данные", "flow.n2sub":"PI System / SCADA",
      "flow.n3":"SQL / модель данных", "flow.n3sub":"Power Query, DAX",
      "flow.n4":"Power BI", "flow.n4sub":"Дашборды, KPI",
      "flow.n5":"Решение", "flow.n5sub":"На столе руководителя",

      "exp.eyebrow":"Карьера", "exp.title":"Путь от механики к данным", "exp.now":"наст. время",
      "exp.i1.role":"Lead Specialist, Data & BI Analytics",
      "exp.i1.p1":"Спроектировал и внедрил единую executive KPI-платформу, консолидировав разрозненную отчётность в централизованную систему Power BI и сократив ручную подготовку данных на 50+ часов в год.",
      "exp.i1.p2":"Вёл и участвовал в 10+ масштабных кросс-функциональных проектах с NCOC, KPO, TCO и месторождением Дунга.",
      "exp.i1.p3":"Обеспечил $400K новых сервисных контрактов, спроектировав executive-уровня цифровые решения отчётности для KazMunayGas и полевых операторов.",
      "exp.i1.p4":"Создал и возглавил кросс-функциональную digital-рабочую группу, расширив покрытие мониторинга до 100% ключевых активов.",
      "exp.i1.p5":"Самостоятельно освоил Power BI, DAX, SQL и Python; стал внутренним тренером компании по Power BI.",
      "exp.i2.role":"Production Manager",
      "exp.i2.p1":"Оптимизировал производственные процессы и учёт затрат, повысив эффективность производства на 5–7% и сократив задержки в отчётности.",
      "exp.i3.role":"Data Analytics Engineer",
      "exp.i3.p1":"Поддерживал улучшение производственных процессов через анализ данных и оценку операционной эффективности — здесь начался переход от инженерии к аналитике.",
      "exp.i4.role":"Mechanical Engineer",
      "exp.i4.p1":"Улучшил планирование технического обслуживания механических систем, сократив внеплановые простои на ~10%.",
      "exp.edu.eyebrow":"Образование",
      "exp.edu1.role":"Master of Engineering & Project Management",
      "exp.edu1.text":"Фокус на управлении проектами, инженерной экономике, риск-менеджменте, аналитике данных и финансовом моделировании.",
      "exp.edu2.role":"Bachelor of Mechanical Engineering",
      "exp.edu2.text":"Фундамент в решении инженерных задач, интерпретации данных и оптимизации технических систем.",

      "proj.eyebrow":"Избранные проекты", "proj.title":"Проблема → Решение → Эффект",
      "proj.problem":"Проблема", "proj.solution":"Решение", "proj.impact":"Эффект",
      "proj.p1.title":"NCOC Executive KPI Platform", "proj.p1.cat":"Power BI / KPI / Executive Reporting",
      "proj.p1.problem":"Отчётность по ключевым показателям была разрознена между отделами и требовала ручной сборки перед каждым обзором.",
      "proj.p1.solution":"Единая централизованная Power BI-платформа с моделью данных, объединяющей производство, финансы и инженерные показатели.",
      "proj.p1.impact":"Сокращение ручной подготовки данных на 50+ часов в год и ускорение цикла принятия решений руководством.",
      "proj.p2.title":"Kashagan Budget Control Dashboard", "proj.p2.cat":"CAPEX / Budget / Cost Control",
      "proj.p2.problem":"Контроль бюджета крупного offshore-актива опирался на разрозненные Excel-файлы без единой картины план/факт.",
      "proj.p2.solution":"Инструмент бюджетного контроля с наглядной визуализацией CAPEX и отклонений по статьям.",
      "proj.p2.impact":"Прозрачность бюджета для команды планирования и более быстрая реакция на отклонения.",
      "proj.p3.title":"KPO SCADA–PI Integration", "proj.p3.cat":"Industrial Data / PI System / SCADA",
      "proj.p3.problem":"Производственные данные с объекта не были связаны с аналитическим слоем в реальном времени.",
      "proj.p3.solution":"Интеграция SCADA и PI System с отчётной моделью для сквозной видимости производственных показателей.",
      "proj.p3.impact":"Более быстрое обнаружение отклонений на объекте и меньше ручной сверки данных.",
      "proj.p4.title":"Offshore Cargo Transportation Study", "proj.p4.cat":"Logistics / Engineering Analysis",
      "proj.p4.problem":"Требовалась инженерная оценка логистики морских грузоперевозок для offshore-разработки.",
      "proj.p4.solution":"Структурированное исследование с сопоставлением вариантов и инженерным обоснованием.",
      "proj.p4.impact":"Обоснованная база для планирования и принятия решений по логистике проекта.",
      "proj.p5.title":"Enterprise Power BI Architecture", "proj.p5.cat":"Data Modeling / Digital Transformation",
      "proj.p5.problem":"22 дочерние организации KMG нуждались в единой BI-архитектуре вместо разрозненных решений.",
      "proj.p5.solution":"Комплексный документ архитектуры: модель данных, каталог DAX-мер и поэтапная дорожная карта внедрения.",
      "proj.p5.impact":"Единый стандарт для масштабирования Power BI по всей группе компаний.",

      "stack.eyebrow":"Инструменты", "stack.title":"Технологический стек",
      "stack.data":"Данные", "stack.industrial":"Промышленные системы", "stack.business":"Бизнес и управление",
      "stack.b1":"KPI и executive-отчётность", "stack.b2":"CAPEX / бюджетирование",
      "stack.b3":"FEED / pre-FEED", "stack.b4":"Стейкхолдер-менеджмент",
      "stack.digital":"Digital", "stack.d1":"AI-инструменты", "stack.d2":"Автоматизация отчётности",
      "stack.d3":"Внутреннее обучение Power BI",

      "numbers.eyebrow":"В цифрах", "numbers.title":"Измеримый эффект",
      "numbers.n1":"лет на стыке инженерии и данных",
      "numbers.n2":"крупных проектов с NCOC, KPO, TCO и Дунга",
      "numbers.n3":"новых сервисных контрактов благодаря цифровой отчётности",
      "numbers.n4":"часов ручной подготовки данных сэкономлено ежегодно",

      "notes.eyebrow":"Немного личного", "notes.title":"То, что не помещается в резюме",
      "notes.n1t":"Я не просто строю дашборды.",
      "notes.n1d":"Я строю системы, которые помогают людям понять, что на самом деле происходит.",
      "notes.n2t":"Я говорю и на языке инженеров, и на языке данных.",
      "notes.n2d":"Это позволяет мне быть переводчиком между технической командой и руководством.",
      "notes.n3t":"Мне нравится превращать хаотичный Excel в чистую аналитическую систему.",
      "notes.n3d":"Из десятков разрозненных файлов — в одну понятную модель данных.",
      "notes.n4t":"Хороший дашборд отвечает на вопрос, а не просто показывает данные.",
      "notes.n4d":"Это принцип, которому я следую в каждом проекте.",

      "quote.text":"«Лучшая аналитика — не та, где больше графиков. Та, что делает следующее решение очевидным.»",

      "contact.eyebrow":"Контакты", "contact.title":"Давайте построим что-то полезное.",
      "contact.lead":"Открыт к разговору о сложных задачах на стыке инженерии, данных и digital.",
      "footer.tag":"Сделано с интересом к деталям."
    },
    en: {
      "nav.about":"About", "nav.experience":"Experience", "nav.projects":"Projects",
      "nav.skills":"Skills", "nav.contact":"Contact", "nav.download":"Download CV",

      "hero.status":"Astana, Kazakhstan · open to ambitious analytics & digital projects",
      "hero.line1":"An engineer who",
      "hero.line2":"learned to speak", "hero.line2b":"the language of data.",
      "hero.lead":"I started with mechanical systems and engineering calculations on oil & gas projects — today I build Power BI platforms, KPI dashboards and data models that turn industrial complexity into management decisions.",
      "hero.cta1":"Download CV", "hero.cta2":"Explore my work",
      "hero.role1":"Lead Specialist, Data & BI Analytics",
      "hero.role2":"Engineering roots: mechanical systems, FEED/pre-FEED, CAPEX",
      "hero.role3":"KMG Engineering",

      "about.eyebrow":"Why this combination is rare",
      "about.title":"Engineer by training. Analyst by instinct.",
      "about.lead":"I didn't arrive at data through a BI course — I arrived through real engineering problems, where Excel and intuition stopped being enough. That gives me something most \"pure\" analysts don't have: I understand where the data actually comes from, from a sensor on site to a number in a report.",
      "about.card1.title":"Years across engineering and data",
      "about.card1.text":"From mechanical systems in Korea to Power BI platforms in Kazakhstan's oil & gas sector.",
      "about.card2.num":"Engineering + Data", "about.card2.title":"A rare combination",
      "about.card2.text":"I understand the process on site as well as the data model that describes it.",
      "about.card3.num":"Oil & Gas", "about.card3.title":"Industrial context",
      "about.card3.text":"Worked with NCOC, KPO, TCO and the Dunga field — I know upstream projects from the inside.",
      "about.card4.num":"Self-Taught", "about.card4.title":"Power BI, DAX, SQL, Python",
      "about.card4.text":"Learned the stack independently — and now train colleagues as the company's internal Power BI trainer.",
      "about.card5.num":"Digitalization", "about.card5.title":"From report to system",
      "about.card5.text":"I build repeatable reporting systems and automation tools, not one-off dashboards.",
      "about.card6.num":"Complex → Simple", "about.card6.title":"Complex made clear",
      "about.card6.text":"I turn engineering data into decisions management can grasp in 30 seconds.",

      "flow.eyebrow":"How it works", "flow.title":"What I actually build",
      "flow.lead":"Not just dashboards — a chain that connects the physical process on site to the decision on a manager's desk.",
      "flow.n1":"Engineering", "flow.n1sub":"FEED, CAPEX, the site",
      "flow.n2":"Industrial data", "flow.n2sub":"PI System / SCADA",
      "flow.n3":"SQL / data model", "flow.n3sub":"Power Query, DAX",
      "flow.n4":"Power BI", "flow.n4sub":"Dashboards, KPIs",
      "flow.n5":"Decision", "flow.n5sub":"On a manager's desk",

      "exp.eyebrow":"Career", "exp.title":"From mechanics to data", "exp.now":"present",
      "exp.i1.role":"Lead Specialist, Data & BI Analytics",
      "exp.i1.p1":"Designed and implemented a unified executive KPI platform, consolidating fragmented reporting into a centralized Power BI system and cutting manual data prep by 50+ hours a year.",
      "exp.i1.p2":"Led and contributed to 10+ large-scale cross-functional projects with NCOC, KPO, TCO and the Dunga field.",
      "exp.i1.p3":"Secured $400K in new service contracts by designing executive-level digital reporting solutions for KazMunayGas and field operators.",
      "exp.i1.p4":"Established and led a cross-functional digital working group, expanding monitoring coverage to 100% of key assets.",
      "exp.i1.p5":"Self-taught Power BI, DAX, SQL and Python; became the company's internal Power BI trainer.",
      "exp.i2.role":"Production Manager",
      "exp.i2.p1":"Streamlined production workflows and cost tracking, improving manufacturing efficiency by 5–7% and reducing reporting delays.",
      "exp.i3.role":"Data Analytics Engineer",
      "exp.i3.p1":"Supported manufacturing process improvement through data analysis and operational performance assessments — where the shift from engineering to analytics began.",
      "exp.i4.role":"Mechanical Engineer",
      "exp.i4.p1":"Improved mechanical maintenance planning, contributing to a ~10% reduction in unplanned downtime.",
      "exp.edu.eyebrow":"Education",
      "exp.edu1.role":"Master of Engineering & Project Management",
      "exp.edu1.text":"Focus on project management, engineering economics, risk management, data analytics and financial modeling.",
      "exp.edu2.role":"Bachelor of Mechanical Engineering",
      "exp.edu2.text":"Foundations in engineering problem-solving, data interpretation and technical systems optimization.",

      "proj.eyebrow":"Selected projects", "proj.title":"Problem → Solution → Impact",
      "proj.problem":"Problem", "proj.solution":"Solution", "proj.impact":"Impact",
      "proj.p1.title":"NCOC Executive KPI Platform", "proj.p1.cat":"Power BI / KPI / Executive Reporting",
      "proj.p1.problem":"KPI reporting was fragmented across departments and required manual assembly before every review.",
      "proj.p1.solution":"A single centralized Power BI platform with a data model unifying production, finance and engineering metrics.",
      "proj.p1.impact":"50+ hours of manual data prep saved annually and a faster management decision cycle.",
      "proj.p2.title":"Kashagan Budget Control Dashboard", "proj.p2.cat":"CAPEX / Budget / Cost Control",
      "proj.p2.problem":"Budget control for a major offshore asset relied on disconnected spreadsheets with no unified plan-vs-actual view.",
      "proj.p2.solution":"A budget control tool with clear visualization of CAPEX and line-item variances.",
      "proj.p2.impact":"Budget transparency for the planning team and faster reaction to variances.",
      "proj.p3.title":"KPO SCADA–PI Integration", "proj.p3.cat":"Industrial Data / PI System / SCADA",
      "proj.p3.problem":"Production data from the field wasn't connected to the analytics layer in real time.",
      "proj.p3.solution":"Integrated SCADA and PI System with the reporting model for end-to-end visibility of production metrics.",
      "proj.p3.impact":"Faster detection of field anomalies and less manual data reconciliation.",
      "proj.p4.title":"Offshore Cargo Transportation Study", "proj.p4.cat":"Logistics / Engineering Analysis",
      "proj.p4.problem":"An offshore development needed an engineering assessment of marine cargo logistics.",
      "proj.p4.solution":"A structured study comparing options with engineering justification.",
      "proj.p4.impact":"A solid basis for logistics planning and decision-making on the project.",
      "proj.p5.title":"Enterprise Power BI Architecture", "proj.p5.cat":"Data Modeling / Digital Transformation",
      "proj.p5.problem":"22 KMG subsidiaries needed a unified BI architecture instead of fragmented solutions.",
      "proj.p5.solution":"A comprehensive architecture document: data model, DAX measure catalog, and phased implementation roadmap.",
      "proj.p5.impact":"A single standard for scaling Power BI across the whole group of companies.",

      "stack.eyebrow":"Tools", "stack.title":"Tech stack",
      "stack.data":"Data", "stack.industrial":"Industrial systems", "stack.business":"Business & management",
      "stack.b1":"KPI & executive reporting", "stack.b2":"CAPEX / budgeting",
      "stack.b3":"FEED / pre-FEED", "stack.b4":"Stakeholder management",
      "stack.digital":"Digital", "stack.d1":"AI tools", "stack.d2":"Reporting automation",
      "stack.d3":"Internal Power BI training",

      "numbers.eyebrow":"By the numbers", "numbers.title":"Measurable impact",
      "numbers.n1":"years across engineering and data",
      "numbers.n2":"major projects with NCOC, KPO, TCO and Dunga",
      "numbers.n3":"in new service contracts from digital reporting",
      "numbers.n4":"hours of manual data prep saved every year",

      "notes.eyebrow":"A little personal", "notes.title":"A few things you might not know",
      "notes.n1t":"I don't just build dashboards.",
      "notes.n1d":"I build systems that help people understand what's actually happening.",
      "notes.n2t":"I speak both engineering and data.",
      "notes.n2d":"That lets me translate between technical teams and management.",
      "notes.n3t":"I like turning messy Excel files into clean analytical systems.",
      "notes.n3d":"Dozens of scattered files become one clear data model.",
      "notes.n4t":"A good dashboard answers a question, not just displays data.",
      "notes.n4d":"That's the principle I follow on every project.",

      "quote.text":"\u201cThe best analytics is not the one with the most charts. It's the one that makes the next decision obvious.\u201d",

      "contact.eyebrow":"Contact", "contact.title":"Let's build something useful.",
      "contact.lead":"Open to a conversation about hard problems at the intersection of engineering, data and digital.",
      "footer.tag":"Designed & built with curiosity."
    }
  };

  var currentLang = 'ru';

  function applyLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    var dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined){ el.textContent = dict[key]; }
    });
    document.querySelectorAll('.lang-switch button').forEach(function(btn){
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(function(btn){
    btn.addEventListener('click', function(){
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  /* ==========================================================
     2. STICKY NAV
     ========================================================== */
  var nav = document.getElementById('nav');
  function onScroll(){
    if(window.scrollY > 24){ nav.classList.add('is-scrolled'); }
    else{ nav.classList.remove('is-scrolled'); }
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* active section highlight */
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = document.querySelectorAll('.nav-links a');
  function highlightNav(){
    var pos = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    sections.forEach(function(sec){
      if(pos >= sec.offsetTop){ current = sec.id; }
    });
    navLinks.forEach(function(link){
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + current);
    });
  }
  document.addEventListener('scroll', highlightNav, { passive:true });
  highlightNav();

  /* ==========================================================
     3. MOBILE MENU
     ========================================================== */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function(){
    var isOpen = mobileMenu.classList.toggle('is-open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      mobileMenu.classList.remove('is-open');
      burger.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ==========================================================
     4. SCROLL REVEAL
     ========================================================== */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window && !prefersReducedMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ==========================================================
     5. HERO HEADLINE REVEAL
     ========================================================== */
  window.addEventListener('load', function(){
    document.querySelectorAll('.hero h1 .line span').forEach(function(span, i){
      if(prefersReducedMotion){
        span.style.transform = 'none'; span.style.opacity = '1'; return;
      }
      span.style.transition = 'transform 900ms cubic-bezier(.22,.61,.36,1) ' + (i*120) + 'ms, opacity 900ms ease ' + (i*120) + 'ms';
      requestAnimationFrame(function(){
        span.style.transform = 'translateY(0)';
        span.style.opacity = '1';
      });
    });
  });

  /* ==========================================================
     6. NUMBER COUNTERS
     ========================================================== */
  var counters = document.querySelectorAll('[data-count]');
  function animateCounter(el){
    var target = parseInt(el.getAttribute('data-count'), 10);
    if(prefersReducedMotion){ el.textContent = target; return; }
    var start = 0;
    var duration = 1100;
    var startTime = null;
    function step(ts){
      if(!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(start + (target - start) * eased);
      if(progress < 1){ requestAnimationFrame(step); }
      else{ el.textContent = target; }
    }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window){
    var counterIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function(el){ counterIO.observe(el); });
  } else {
    counters.forEach(function(el){ el.textContent = el.getAttribute('data-count'); });
  }

  /* ==========================================================
     7. CURSOR SPOTLIGHT (desktop, decorative, optional)
     ========================================================== */
  var spotlight = document.getElementById('spotlight');
  var isTouch = window.matchMedia('(hover: none)').matches;
  if(spotlight && !isTouch && !prefersReducedMotion){
    document.addEventListener('mousemove', function(e){
      spotlight.style.opacity = '1';
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', function(){
      spotlight.style.opacity = '0';
    });
  }

  /* ==========================================================
     8. MAGNETIC PRIMARY BUTTONS (desktop only, subtle)
     ========================================================== */
  if(!isTouch && !prefersReducedMotion){
    document.querySelectorAll('.btn-primary').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width/2;
        var y = e.clientY - rect.top - rect.height/2;
        btn.style.transform = 'translate(' + (x*0.12) + 'px,' + (y*0.28) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){
        btn.style.transform = '';
      });
    });
  }

})();
