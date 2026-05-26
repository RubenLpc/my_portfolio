// All portfolio content, bilingual (RO + EN)
const PORTFOLIO = {
  meta: {
    name: "Ruben Lupancu",
    role: { ro: "Computer Science Student · Web Developer", en: "Computer Science Student · Web Developer" },
    location: { ro: "Suceava, România", en: "Suceava, Romania" },
    coords: "47.6635° N, 26.2732° E",
    available: { ro: "Disponibil pentru proiecte", en: "Available for projects" }
  },

  nav: {
    about:      { ro: "Despre",       en: "About" },
    work:       { ro: "Proiecte",     en: "Work" },
    skills:     { ro: "Tehnologii",   en: "Stack" },
    journey:    { ro: "Traseu",       en: "Journey" },
    voices:     { ro: "Voci",         en: "Voices" },
    contact:    { ro: "Contact",      en: "Contact" },
    download:   { ro: "Descarcă CV",  en: "Download CV" }
  },

  hero: {
    eyebrow: { ro: "TRANSMISIUNE DESCHISĂ // 2026", en: "BROADCAST OPEN // 2026" },
    title_a: { ro: "Construiesc aplicații web",            en: "I build web apps" },
    title_b: { ro: "din colțul de est al galaxiei.",       en: "from the eastern arm of the galaxy." },
    sub: {
      ro: "Student la Computer Science (USV), 21 de ani, din Bucovina — nord-estul României. Trăiesc între React, Node și o coloană sonoră lo-fi. Construiesc lucruri care funcționează — și care arată bine în timp ce o fac.",
      en: "Computer Science student at USV, 21, from Bucovina — north-east Romania. I live between React, Node and a lo-fi soundtrack. I build things that work — and look good while doing it."
    },
    cta_primary:   { ro: "Vezi proiectele",     en: "See the work" },
    cta_secondary: { ro: "Hai să vorbim",       en: "Get in touch" },
    scroll_hint:   { ro: "Scroll pentru a explora", en: "Scroll to explore" },
    stats: [
      { value: "15+", label: { ro: "proiecte personale",  en: "personal projects" } },
      { value: "5",   label: { ro: "aplicații live",      en: "apps live now" } },
      { value: "4",   label: { ro: "ani de cod intensiv", en: "years coding hard" } },
      { value: "2",   label: { ro: "concursuri Assist",   en: "Assist hackathons" } }
    ]
  },

  about: {
    kicker: { ro: "DESPRE", en: "ABOUT" },
    headline: {
      ro: "Un dezvoltator născut printre munți, format printre linii de cod.",
      en: "A developer born among mountains, shaped between lines of code."
    },
    paras: {
      ro: [
        "Am 21 de ani și sunt din Suceava — un oraș liniștit în nordul României, aproape de Bucovina. Pasiunile mele orbitează în jurul a două lucruri: muzica și dezvoltarea web. Una îmi dă ritmul, cealaltă îmi dă structura.",
        "Am început să codez serios la Colegiul Național „Eudoxiu Hurmuzachi\" din Rădăuți, profil mate-info intensiv. Acolo am pus bazele cu C++ și am construit primele mele site-uri în HTML, CSS și JavaScript. Bacul l-am dat cu 10 la matematică și peste 9 la informatică.",
        "Adevăratul salt a venit în timpul facultății, prin două ediții ale concursului Assist Software Tech Challenge — încă de pe vremea când AI-ul nu rezolva totul pentru tine. Acolo am învățat ce înseamnă să lucrezi în echipă, mentorat real, deadline-uri reale și un backend care chiar trebuie să țină.",
        "Acum studiez la USV Suceava, FIESC, Computer Science. Îmi susțin licența anul acesta cu BucovinaStay — o platformă cu semantic search și chatbot pentru turiștii care vin în Bucovina."
      ],
      en: [
        "I'm 21 and I'm from Suceava — a quiet town in northern Romania, close to Bucovina. My passions orbit around two things: music and web development. One gives me rhythm, the other gives me structure.",
        "I started coding seriously at Eudoxiu Hurmuzachi National College in Rădăuți, intensive math-CS track. That's where I laid the foundations with C++ and built my first sites in HTML, CSS, and JavaScript. I finished my Baccalaureate with a 10 in math and above 9 in CS.",
        "The real leap came during university, through two editions of the Assist Software Tech Challenge — back when AI wouldn't just solve everything for you. That's where I learned what real teamwork, real mentoring, real deadlines, and a backend that actually has to hold up feel like.",
        "Right now I'm studying at USV Suceava, FIESC, Computer Science. I'm defending my thesis this year with BucovinaStay — a platform with semantic search and a chatbot for tourists coming to Bucovina."
      ]
    },
    quick: [
      { label: { ro: "Bază",       en: "Base" },        value: { ro: "Suceava, RO",            en: "Suceava, RO" } },
      { label: { ro: "Educație",   en: "Education" },   value: { ro: "USV · FIESC · CS",        en: "USV · FIESC · CS" } },
      { label: { ro: "Limbi",      en: "Languages" },   value: { ro: "Română, Engleză",         en: "Romanian, English" } },
      { label: { ro: "Off-screen", en: "Off-screen" },  value: { ro: "Muzică · Cărți · Drumeții", en: "Music · Books · Hiking" } }
    ]
  },

  projects: {
    kicker: { ro: "PROIECTE", en: "WORK" },
    headline: {
      ro: "Stații din rețea.",
      en: "Stations across the network."
    },
    subhead: {
      ro: "O selecție din portofoliu — nu toate, dar cele mai reprezentative. Cele marcate LIVE sunt accesibile chiar acum.",
      en: "A selection from the portfolio — not all, but the most representative ones. Those marked LIVE are reachable right now."
    },
    items: [
      {
        id: "bucovinastay",
        name: "BucovinaStay",
        year: "2026",
        tag: { ro: "Lucrare de licență", en: "Bachelor's thesis" },
        live: "https://bucovinastay-frontend1.onrender.com/",
        featured: true,
        glyph: "★",
        hue: 270,
        summary: {
          ro: "Platformă modernă cu semantic search și chatbot pentru explorarea cazărilor din Bucovina. Construită pentru valul anual de turiști.",
          en: "Modern platform with semantic search and a chatbot for exploring stays in Bucovina. Built for the annual tourist wave."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary", "Brevo", "Postman"]
      },
      {
        id: "ciocolaterie",
        name: "Ciocolaterie",
        year: "2025",
        tag: { ro: "E-commerce", en: "E-commerce" },
        live: "https://cioco-front.onrender.com/",
        glyph: "◆",
        hue: 18,
        summary: {
          ro: "Magazin online complet pentru o ciocolaterie — catalog, coș, checkout, panou admin.",
          en: "Complete online store for a chocolate shop — catalog, cart, checkout, admin panel."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary", "Brevo"]
      },
      {
        id: "renoberto",
        name: "Renoberto",
        year: "2025",
        tag: { ro: "Client — Belgia", en: "Client — Belgium" },
        live: "https://renoberto-front.onrender.com/#/",
        glyph: "◐",
        hue: 200,
        summary: {
          ro: "Website pentru o firmă de renovări din zona Bruxelles. Prezentare, formular de contact, galerie de proiecte.",
          en: "Website for a renovation company in the Brussels area. Showcase, contact form, project gallery."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary"]
      },
      {
        id: "spalatorie",
        name: "Spălătorie Pro",
        year: "2025",
        tag: { ro: "Client local", en: "Local client" },
        live: "https://spalatorie-front.onrender.com/",
        glyph: "◇",
        hue: 175,
        summary: {
          ro: "Site mic și curat pentru o spălătorie profesională de textile. Servicii, prețuri, contact.",
          en: "Small clean site for a professional textile laundry. Services, pricing, contact."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas"]
      },
      {
        id: "realestate-austria",
        name: "RealEstate App",
        year: "2025",
        tag: { ro: "Client — Austria", en: "Client — Austria" },
        live: "https://INLOCUIESTE-CU-URL-UL-TAU/",
        glyph: "▲",
        hue: 35,
        summary: {
          ro: "Aplicație imobiliară pentru o firmă din Austria — listări de proprietăți, filtre avansate de căutare și panou de administrare. Funcțională și în producție.",
          en: "Real estate app for an Austrian company — property listings, advanced search filters and an admin dashboard. Live and running in production."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary"]
      },
      {
        id: "my-portfolio-v1",
        name: "My Portfolio v1",
        year: "2023",
        tag: { ro: "Primul meu CV-site", en: "My first CV site" },
        live: "https://my-personal-site.tiiny.site",
        glyph: "✷",
        hue: 50,
        summary: {
          ro: "Primul meu site tip CV — construit cu cunoștințe minime de HTML, CSS, JS. Îl păstrez ca punct de referință.",
          en: "My first CV-style site — built with minimal HTML, CSS, JS knowledge. I keep it as a reference point."
        },
        stack: ["HTML", "CSS", "JavaScript"]
      },
      {
        id: "intelligentforms",
        name: "IntelligentForms",
        year: "2024",
        tag: { ro: "Assist Tech Challenge · Team Lead", en: "Assist Tech Challenge · Team Lead" },
        glyph: "◈",
        hue: 295,
        summary: {
          ro: "Aplicație construită în echipă sub mentorat Assist Software. Am fost team lead și am condus și implementarea backendului.",
          en: "App built in a team under Assist Software mentorship. I was team lead and also drove the backend implementation."
        },
        stack: ["Node.js", "Express", "MongoDB", "Team Lead"]
      },
      {
        id: "team-finder",
        name: "Team Finder",
        year: "2023",
        tag: { ro: "Assist Tech Challenge · Backend", en: "Assist Tech Challenge · Backend" },
        glyph: "◇",
        hue: 220,
        summary: {
          ro: "Prima aplicație serioasă în echipă, mentorată de Assist. Aplicația caută în firmă lucrători potriviți pentru proiectele noi. Eu am reprezentat backendul.",
          en: "My first serious team app, mentored by Assist. It finds the right people inside a company for new projects. I owned the backend."
        },
        stack: ["Node.js", "Express", "REST"]
      },
      {
        id: "notes",
        name: "Notes",
        year: "2024",
        tag: { ro: "Aplicație mobilă", en: "Mobile app" },
        glyph: "◑",
        hue: 140,
        summary: {
          ro: "Aplicație mobilă tip notițe, construită în React Native, cu server Node + Express și MongoDB. Sync și autentificare.",
          en: "Mobile notes app built in React Native, with a Node + Express server and MongoDB. Sync and auth."
        },
        stack: ["React Native", "Node.js", "Express", "MongoDB"]
      },
      {
        id: "instrumentemuzicale",
        name: "InstrumenteMuzicale",
        year: "2023",
        tag: { ro: "Proiect academic · C#", en: "Academic project · C#" },
        glyph: "♪",
        hue: 330,
        summary: {
          ro: "Aplicație de gestiune pentru un magazin de instrumente muzicale: stocuri, produse, comenzi. Construită în primul an de facultate, când am învățat C#.",
          en: "Inventory and management app for a musical instruments shop. Built in my first university year, when I learned C#."
        },
        stack: ["C#", ".NET", "WinForms"]
      }
    ]
  },

  skills: {
    kicker: { ro: "TEHNOLOGII", en: "STACK" },
    headline: {
      ro: "Instrumentele cu care îmi construiesc lumea.",
      en: "The tools I build my world with."
    },
    groups: [
      {
        label: { ro: "Frontend",   en: "Frontend" },
        items: ["React", "React Native", "JavaScript", "HTML", "CSS"]
      },
      {
        label: { ro: "Backend & Data", en: "Backend & Data" },
        items: ["Node.js", "Express", "MongoDB Atlas", "REST APIs", "Postman"]
      },
      {
        label: { ro: "Limbaje", en: "Languages" },
        items: ["JavaScript", "C++", "C", "C#", "Java", "Python"]
      },
      {
        label: { ro: "Servicii & Tools", en: "Services & Tools" },
        items: ["Cloudinary", "Brevo", "Render", "Git", "GitHub"]
      }
    ]
  },

  experience: {
    kicker: { ro: "TRASEU", en: "JOURNEY" },
    headline: {
      ro: "Stații de-a lungul orbitei.",
      en: "Stations along the orbit."
    },
    items: [
      {
        period: "2022 — prezent",
        period_en: "2022 — present",
        title: { ro: "Computer Science — Licență",                  en: "Computer Science — Bachelor's" },
        org:   { ro: "USV Suceava · FIESC",                          en: "USV Suceava · FIESC" },
        body:  {
          ro: "Studii de licență. Îmi susțin lucrarea anul acesta cu BucovinaStay.",
          en: "Undergraduate studies. Defending my thesis this year with BucovinaStay."
        }
      },
      {
        period: "2024",
        period_en: "2024",
        title: { ro: "Certificat Web Development",                   en: "Web Development Certificate" },
        org:   { ro: "Udemy · Dr. Angela Yu · 61,5 ore",             en: "Udemy · Dr. Angela Yu · 61.5 hours" },
        body:  {
          ro: "Complete 2024 Web Development Bootcamp — finalizat octombrie 2024.",
          en: "Complete 2024 Web Development Bootcamp — completed October 2024."
        }
      },
      {
        period: "2024",
        period_en: "2024",
        title: { ro: "IntelligentForms — Team Lead",                 en: "IntelligentForms — Team Lead" },
        org:   { ro: "Assist Software Tech Challenge",               en: "Assist Software Tech Challenge" },
        body:  {
          ro: "Lider de echipă și backend developer într-un proiect mentorat de Assist Software.",
          en: "Team lead and backend developer on a project mentored by Assist Software."
        }
      },
      {
        period: "2023",
        period_en: "2023",
        title: { ro: "Team Finder — Backend",                        en: "Team Finder — Backend" },
        org:   { ro: "Assist Software Tech Challenge",               en: "Assist Software Tech Challenge" },
        body:  {
          ro: "Prima experiență de echipă mentorată. Am construit backendul cu Node.js și Express.",
          en: "First mentored team experience. Built the backend with Node.js and Express."
        }
      },
      {
        period: "2018 — 2022",
        period_en: "2018 — 2022",
        title: { ro: "Mate-Info Intensiv — Liceu",                   en: "Math-CS Intensive — High School" },
        org:   { ro: "Col. Nat. „Eudoxiu Hurmuzachi\" · Rădăuți",      en: "Eudoxiu Hurmuzachi National College · Rădăuți" },
        body:  {
          ro: "Bacalaureat: 10 la matematică, peste 9 la informatică. C++ ca limbă maternă în acea perioadă.",
          en: "Baccalaureate: 10 in math, over 9 in CS. C++ as a mother tongue back then."
        }
      },
      {
        period: "2014 — 2018",
        period_en: "2014 — 2018",
        title: { ro: "Școala Gimnazială",                            en: "Middle School" },
        org:   { ro: "Satu Mare",                                    en: "Satu Mare" },
        body:  {
          ro: "Unde a început totul.",
          en: "Where it all started."
        }
      }
    ]
  },

  testimonials: {
    kicker: { ro: "VOCI", en: "VOICES" },
    headline: {
      ro: "Ce spun cei cu care am lucrat.",
      en: "What people I've worked with say."
    },
    note: {
      ro: "Spațiul de mai jos așteaptă cuvintele tale. Dacă am construit ceva împreună și vrei să apari aici, scrie-mi.",
      en: "The space below is waiting for your words. If we've built something together and you'd like to appear here, drop me a line."
    },
    items: [
      /*
      {
        quote: {
          ro: "Ruben a livrat site-ul exact cum îl voiam — curat, rapid și fără să trebuiască să explic de două ori. Am lucrat cu mai mulți developeri până acum, dar el e primul care a înțeles din prima ce contează pentru un client care nu e tehnic.",
          en: "Ruben delivered the site exactly as I wanted — clean, fast, and without having to explain things twice. I've worked with several developers before, but he's the first one who immediately understood what matters for a non-technical client."
        },
        author: { ro: "Roberto",              en: "Roberto" },
        role:   { ro: "Renoberto · Bruxelles", en: "Renoberto · Brussels" }
      },
      {
        quote: {
          ro: "Ca team lead pe IntelligentForms, Ruben a ținut echipa împreună chiar și când lucrurile se complicau. Nu e genul care dă vina pe alții — găsește soluții și merge mai departe. Mi-ar plăcea să lucrăm din nou împreună.",
          en: "As team lead on IntelligentForms, Ruben kept the team together even when things got complicated. He's not the type to blame others — he finds solutions and moves on. I'd love to work together again."
        },
        author: { ro: "Elias",                      en: "Elias" },
        role:   { ro: "IntelligentForms · Coechipier", en: "IntelligentForms · Teammate" }
      },
      {
        quote: {
          ro: "Știe să asculte și să transforme o idee vagă într-un produs real. Am colaborat pe un proiect de la zero și a fost implicat în fiecare pas — nu doar tehnic, ci și în deciziile de design și UX. Recomand cu drag.",
          en: "He knows how to listen and turn a vague idea into a real product. We collaborated on a project from scratch and he was involved at every step — not just technically, but also in design and UX decisions. Highly recommend."
        },
        author: { ro: "Alina",              en: "Alina" },
        role:   { ro: "Colaboratoare · USV", en: "Collaborator · USV" }
      }
      */
    ]
  },

  contact: {
    kicker: { ro: "CONTACT", en: "CONTACT" },
    headline: {
      ro: "Hai să construim ceva.",
      en: "Let's build something."
    },
    sub: {
      ro: "Sunt deschis la colaborări, freelance și proiecte interesante. Răspund de obicei în câteva ore.",
      en: "Open to collaborations, freelance and interesting projects. I usually reply within hours."
    },
    items: [
      { label: "Email",    value: "lupancuruben2@gmail.com", href: "mailto:lupancuruben2@gmail.com" },
      { label: "Phone",    value: "+40 753 851 305",          href: "tel:+40753851305" },
      { label: "WhatsApp", value: "+40 753 851 305",          href: "https://wa.me/40753851305" },
      { label: "GitHub",   value: "RubenLpc",                 href: "https://github.com/RubenLpc" },
      { label: "LinkedIn", value: "Ruben Lupancu",            href: "https://www.linkedin.com/in/ruben-lupancu/" }
    ],
    cta: { ro: "Scrie-mi un email", en: "Send me an email" }
  },

  footer: {
    line: {
      ro: "Construit de mână în Suceava · transmis din colțul de est al galaxiei",
      en: "Hand-built in Suceava · broadcast from the eastern arm of the galaxy"
    }
  }
};

export default PORTFOLIO;
