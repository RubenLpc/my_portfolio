// All portfolio content, bilingual (RO + EN)
const PORTFOLIO = {
  meta: {
    name: "Ruben Lupancu",
    role: { ro: "Software Engineer · Master Securitate Cibernetică", en: "Software Engineer · Cybersecurity MSc" },
    location: { ro: "Suceava, România", en: "Suceava, Romania" },
    coords: "47.6635° N, 26.2732° E",
    available: { ro: "Deschis la roluri remote", en: "Open to remote roles" }
  },

  nav: {
    about:      { ro: "Despre",       en: "About" },
    work:       { ro: "Proiecte",     en: "Work" },
    skills:     { ro: "Tehnologii",   en: "Stack" },
    journey:    { ro: "Parcurs",      en: "Journey" },
    voices:     { ro: "Recomandări",  en: "Recommendations" },
    contact:    { ro: "Contact",      en: "Contact" },
    download:   { ro: "Descarcă CV",  en: "Download CV" }
  },

  hero: {
    eyebrow: { ro: "SUCEAVA, RO // DESCHIS LA REMOTE", en: "SUCEAVA, RO // OPEN TO REMOTE WORK" },
    title_a: { ro: "Construiesc aplicații web.",           en: "I build web apps." },
    title_b: { ro: "Acum învăț și cum să le sparg.",       en: "Now I'm learning how to break them." },
    sub: {
      ro: "Sunt Ruben, am 22 de ani și sunt din Suceava. Vara asta am terminat Computer Science la USV, iar din octombrie fac masterul de Securitate Cibernetică. Din 2025 lucrez freelance, mai ales cu React și Node, pentru firme mici din România, Belgia și Austria.",
      en: "I'm Ruben, 22, from Suceava in north-east Romania. I finished my Computer Science degree at USV this summer and started a Master's in Cybersecurity in October. Since 2025 I've been freelancing, mostly with React and Node, for small businesses in Romania, Belgium and Austria."
    },
    cta_primary:   { ro: "Vezi proiectele",     en: "See my work" },
    cta_secondary: { ro: "Scrie-mi",            en: "Get in touch" },
    scroll_hint:   { ro: "Scroll în jos",       en: "Scroll down" },
    stats: [
      { value: "15+", label: { ro: "proiecte construite",       en: "projects built" } },
      { value: "5",   label: { ro: "aplicații live",            en: "apps live now" } },
      { value: "2",   label: { ro: "ediții Assist Tech Challenge", en: "Assist Tech Challenges" } },
      { value: "1st", label: { ro: "loc, contribuție tehnică 2024", en: "place, technical contribution 2024" } }
    ]
  },

  about: {
    kicker: { ro: "DESPRE", en: "ABOUT" },
    headline: {
      ro: "Pe scurt, despre mine.",
      en: "The short version."
    },
    paras: {
      ro: [
        "Am 22 de ani și sunt din zona Sucevei. Când nu scriu cod, de obicei ascult muzică.",
        "Am început să programez serios în liceu, la Colegiul Național „Eudoxiu Hurmuzachi\" din Rădăuți, la mate-info intensiv. Acolo am făcut mult C++ și primele site-uri în HTML, CSS și JavaScript. La bac am luat 10 la mate și peste 9 la info.",
        "Cel mai mult am învățat din Assist Software Tech Challenge, la care am participat de două ori. În 2023 am scris backendul pentru Intelligent Forms, o aplicație care completează formulare publice pe baza unei poze cu buletinul. În 2024 am condus o echipă de patru oameni pe Team Finder și am luat locul 1 la contribuția tehnică individuală.",
        "Am stat și trei veri în Cooperstown, New York, cu Work & Travel, la Otesaga Resort. Nu are legătură cu programarea, dar acolo mi-am pus engleza la punct și am învățat să nu intru în panică atunci când totul se întâmplă deodată.",
        "Am terminat licența în iulie 2026, cu BucovinaStay, o platformă de cazări din Bucovina cu căutare semantică și un chatbot. Acum sunt la master, iau proiecte freelance și caut un rol de junior remote, pe full-stack sau AppSec."
      ],
      en: [
        "I'm 22 and I'm from the Suceava area, in the north-east of Romania. When I'm not writing code, I'm usually listening to music.",
        "I started programming seriously in high school, at Eudoxiu Hurmuzachi National College in Rădăuți, on the intensive math and CS track. That's where I wrote a lot of C++ and built my first sites in HTML, CSS and JavaScript. I got a 10 in math and above 9 in CS at the Baccalaureate.",
        "I learned the most from the Assist Software Tech Challenge, which I did twice. In 2023 I wrote the backend for Intelligent Forms, an app that fills in public forms from a photo of your ID card. In 2024 I led a team of four on Team Finder and won first place for individual technical contribution.",
        "I also spent three summers in Cooperstown, New York, working at the Otesaga Resort on a J-1 visa. Nothing to do with code, but it's where my English got good and where I learned not to panic when everything happens at once.",
        "I graduated in July 2026 with BucovinaStay as my thesis, a booking platform for Bucovina with semantic search and a chatbot. Now I'm doing my Master's, taking freelance work, and looking for a remote junior role in full-stack or AppSec."
      ]
    },
    quick: [
      { label: { ro: "Bază",       en: "Base" },        value: { ro: "Suceava, RO",                 en: "Suceava, RO" } },
      { label: { ro: "Educație",   en: "Education" },   value: { ro: "USV · Master Securitate",     en: "USV · MSc Cybersecurity" } },
      { label: { ro: "Limbi",      en: "Languages" },   value: { ro: "Română, Engleză",             en: "Romanian, English" } },
      { label: { ro: "Off-screen", en: "Off-screen" },  value: { ro: "Muzică · Cărți · Drumeții",   en: "Music · Books · Hiking" } }
    ]
  },

  projects: {
    kicker: { ro: "PROIECTE", en: "WORK" },
    headline: {
      ro: "Ce am construit.",
      en: "Things I've built."
    },
    subhead: {
      ro: "Nu sunt toate, dar sunt cele de care sunt cel mai mulțumit. Cele marcate LIVE le poți deschide acum.",
      en: "Not everything, just the ones I'm happiest with. The ones marked LIVE you can open right now."
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
          ro: "Platformă de cazări pentru Bucovina. Poți căuta în cuvintele tale („o cabană liniștită lângă mănăstiri”) și există un chatbot care răspunde la întrebări despre zonă.",
          en: "A booking platform for Bucovina. You can search in plain words (\"a quiet cabin near the monasteries\") and there's a chatbot that answers questions about the area."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary", "Brevo", "Postman"]
      },
      {
        id: "fidelia",
        name: "Fidelia Immo",
        year: "2025",
        tag: { ro: "Client, Austria", en: "Client, Austria" },
        live: "https://fidelia.immo/",
        glyph: "▲",
        hue: 35,
        summary: {
          ro: "Site imobiliar pentru o firmă din Austria. Listări de proprietăți, filtre de căutare și un panou de administrare din care clientul își pune singur anunțurile.",
          en: "Real estate site for a company in Austria. Property listings, search filters and an admin panel where the client manages their own listings."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary"]
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
          ro: "Magazin online pentru o ciocolaterie: catalog, coș, checkout și panou de admin pentru produse și comenzi.",
          en: "Online store for a chocolate shop: catalog, cart, checkout and an admin panel for products and orders."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary", "Brevo"]
      },
      {
        id: "renoberto",
        name: "Renoberto",
        year: "2025",
        tag: { ro: "Client, Belgia", en: "Client, Belgium" },
        live: "https://renoberto-front.onrender.com/#/",
        glyph: "◐",
        hue: 200,
        summary: {
          ro: "Site pentru o firmă de renovări de lângă Bruxelles, cu galerie de lucrări și formular de contact.",
          en: "Website for a renovation company near Brussels, with a project gallery and a contact form."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Cloudinary"]
      },
      {
        id: "spalatorie",
        name: "Spălătorie Pro",
        year: "2025",
        tag: { ro: "Client local", en: "Local client" },
        live: "https://spalatorie.onrender.com/",
        glyph: "◇",
        hue: 175,
        summary: {
          ro: "Site simplu pentru o spălătorie profesională de textile: servicii, prețuri, contact.",
          en: "A simple site for a professional textile laundry: services, prices, contact."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas"]
      },
      {
        id: "team-finder",
        name: "Team Finder",
        year: "2024",
        tag: { ro: "Assist Tech Challenge · Team Lead", en: "Assist Tech Challenge · Team Lead" },
        glyph: "◈",
        hue: 220,
        summary: {
          ro: "Aplicație care găsește oamenii potriviți dintr-o firmă pentru un proiect nou. Am condus echipa (frontend, backend, QA, design) și am scris cod pe ambele părți. Locul 1 la contribuția tehnică individuală.",
          en: "An app that finds the right people inside a company for a new project. I led the team (frontend, backend, QA, design) and wrote code on both sides. First place for individual technical contribution."
        },
        stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Team Lead"]
      },
      {
        id: "intelligentforms",
        name: "Intelligent Forms",
        year: "2023",
        tag: { ro: "Assist Tech Challenge · Backend", en: "Assist Tech Challenge · Backend" },
        glyph: "◇",
        hue: 295,
        summary: {
          ro: "Completează automat formulare publice după o poză cu buletinul. Eu am făcut backendul: API-ul REST și baza de date.",
          en: "Fills in public forms automatically from a photo of your ID card. I built the backend: the REST API and the database."
        },
        stack: ["Node.js", "Express", "PostgreSQL", "REST"]
      },
      {
        id: "notes",
        name: "Notes",
        year: "2024",
        tag: { ro: "Aplicație mobilă", en: "Mobile app" },
        glyph: "◑",
        hue: 140,
        summary: {
          ro: "Aplicație de notițe pe mobil, făcută în React Native, cu cont și sincronizare printr-un server Node.",
          en: "A notes app for mobile, built in React Native, with accounts and sync through a Node server."
        },
        stack: ["React Native", "Node.js", "Express", "MongoDB"]
      },
      {
        id: "instrumentemuzicale",
        name: "InstrumenteMuzicale",
        year: "2023",
        tag: { ro: "Proiect de facultate · C#", en: "University project · C#" },
        glyph: "♪",
        hue: 330,
        summary: {
          ro: "Aplicație de gestiune pentru un magazin de instrumente muzicale: produse, stocuri, comenzi. Am făcut-o în primul an, când învățam C#.",
          en: "Management app for a music instrument shop: products, stock, orders. I made it in first year while learning C#."
        },
        stack: ["C#", ".NET", "WinForms"]
      },
      {
        id: "my-portfolio-v1",
        name: "My Portfolio v1",
        year: "2023",
        tag: { ro: "Primul meu site", en: "My first site" },
        live: "https://my-personal-site.tiiny.site",
        glyph: "✷",
        hue: 50,
        summary: {
          ro: "Primul meu site de prezentare, făcut doar cu HTML, CSS și puțin JavaScript. Îl țin aici ca să se vadă de unde am plecat.",
          en: "My first personal site, made with just HTML, CSS and a bit of JavaScript. I keep it here to show where I started."
        },
        stack: ["HTML", "CSS", "JavaScript"]
      }
    ]
  },

  skills: {
    kicker: { ro: "TEHNOLOGII", en: "STACK" },
    headline: {
      ro: "Cu ce lucrez.",
      en: "What I work with."
    },
    groups: [
      {
        label: { ro: "Frontend",   en: "Frontend" },
        items: ["React", "React Native", "JavaScript", "HTML", "CSS"]
      },
      {
        label: { ro: "Backend & Date", en: "Backend & Data" },
        items: ["Node.js", "Express", "MongoDB Atlas", "PostgreSQL", "REST APIs", "Postman"]
      },
      {
        label: { ro: "Limbaje", en: "Languages" },
        items: ["JavaScript", "C++", "C", "C#", "Java", "Python", "SQL"]
      },
      {
        label: { ro: "Servicii & Tools", en: "Services & Tools" },
        items: ["Git", "GitHub", "Render", "Cloudinary", "Brevo"]
      }
    ]
  },

  experience: {
    kicker: { ro: "PARCURS", en: "JOURNEY" },
    headline: {
      ro: "Cum am ajuns aici.",
      en: "How I got here."
    },
    items: [
      {
        period: "oct. 2026 — prezent",
        period_en: "Oct 2026 — present",
        title: { ro: "Master, Securitate Cibernetică",               en: "MSc Cybersecurity" },
        org:   { ro: "Universitatea Ștefan cel Mare, Suceava",       en: "Ștefan cel Mare University, Suceava" },
        body:  {
          ro: "Abia am început. Securitatea rețelelor, criptografie, protecția datelor.",
          en: "Just started. Network security, cryptography, data protection."
        }
      },
      {
        period: "2025 — prezent",
        period_en: "2025 — present",
        title: { ro: "Full-Stack Developer, freelance",              en: "Freelance Full-Stack Developer" },
        org:   { ro: "Independent",                                  en: "Self-employed" },
        body:  {
          ro: "Site-uri și aplicații web pentru firme mici din România, Belgia și Austria. Mă ocup de tot, de la prima discuție cu clientul până la deploy.",
          en: "Websites and web apps for small businesses in Romania, Belgium and Austria. I handle everything from the first call with the client to deployment."
        }
      },
      {
        period: "2022 — 2026",
        period_en: "2022 — 2026",
        title: { ro: "Licență, Computer Science",                    en: "BSc Computer Science" },
        org:   { ro: "USV Suceava · FIESC",                          en: "USV Suceava · FIESC" },
        body:  {
          ro: "Terminată în iulie 2026. Lucrarea de licență: BucovinaStay.",
          en: "Graduated July 2026. Thesis project: BucovinaStay."
        }
      },
      {
        period: "verile 2024, 2025, 2026",
        period_en: "Summers 2024, 2025, 2026",
        title: { ro: "Recreation Attendant (Work & Travel)",          en: "Recreation Attendant (J-1)" },
        org:   { ro: "Otesaga Resort Hotel · Cooperstown, NY",       en: "Otesaga Resort Hotel · Cooperstown, NY" },
        body:  {
          ro: "Trei sezoane la rând, reangajat în fiecare an. Lucru zilnic cu clienți din SUA și cu o echipă internațională.",
          en: "Three seasons in a row, rehired every year. Working every day with American guests and an international team."
        }
      },
      {
        period: "2024",
        period_en: "2024",
        title: { ro: "Team Finder, Team Lead",                       en: "Team Finder, Team Lead" },
        org:   { ro: "Assist Software Tech Challenge",               en: "Assist Software Tech Challenge" },
        body:  {
          ro: "Am condus o echipă de patru și am lucrat atât pe frontend (React), cât și pe backend (Node, Express, MongoDB). Locul 1 la contribuția tehnică individuală.",
          en: "Led a team of four and worked on both the frontend (React) and the backend (Node, Express, MongoDB). First place for individual technical contribution."
        }
      },
      {
        period: "2024",
        period_en: "2024",
        title: { ro: "Certificat Web Development",                   en: "Web Development Certificate" },
        org:   { ro: "Udemy · Dr. Angela Yu · 61,5 ore",             en: "Udemy · Dr. Angela Yu · 61.5 hours" },
        body:  {
          ro: "The Complete Web Development Bootcamp, terminat în octombrie 2024.",
          en: "The Complete Web Development Bootcamp, finished in October 2024."
        }
      },
      {
        period: "2023",
        period_en: "2023",
        title: { ro: "Intelligent Forms, Backend",                   en: "Intelligent Forms, Backend" },
        org:   { ro: "Assist Software Tech Challenge",               en: "Assist Software Tech Challenge" },
        body:  {
          ro: "Prima experiență într-o echipă cu mentori din industrie. Am făcut backendul cu Node.js, Express și PostgreSQL.",
          en: "My first time on a team with industry mentors. I built the backend with Node.js, Express and PostgreSQL."
        }
      },
      {
        period: "2018 — 2022",
        period_en: "2018 — 2022",
        title: { ro: "Liceu, mate-info intensiv",                    en: "High school, math & CS track" },
        org:   { ro: "Col. Nat. „Eudoxiu Hurmuzachi\" · Rădăuți",    en: "Eudoxiu Hurmuzachi National College · Rădăuți" },
        body:  {
          ro: "Bac: 10 la matematică, peste 9 la informatică. Pe atunci scriam aproape numai C++.",
          en: "Baccalaureate: 10 in math, above 9 in CS. Back then I wrote almost nothing but C++."
        }
      }
    ]
  },

  testimonials: {
    kicker: { ro: "RECOMANDĂRI", en: "RECOMMENDATIONS" },
    headline: {
      ro: "Ce spun cei cu care am lucrat.",
      en: "What people I've worked with say."
    },
    note: {
      ro: "Încă nu am adăugat nimic aici. Dacă am lucrat împreună și vrei să scrii două rânduri, dă-mi un mesaj.",
      en: "Nothing here yet. If we've worked together and you'd like to write a couple of lines, send me a message."
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
      ro: "Hai să vorbim.",
      en: "Let's talk."
    },
    sub: {
      ro: "Caut un rol de junior remote (full-stack sau AppSec, merge și contract/B2B) și iau în continuare proiecte freelance. Pot lucra pe fus orar american. De obicei răspund în aceeași zi.",
      en: "I'm looking for a remote junior role (full-stack or AppSec, contract/B2B is fine) and I still take freelance projects. I can work US hours. I usually reply the same day."
    },
    items: [
      { label: "Email",    value: "lupancuruben2@gmail.com", href: "mailto:lupancuruben2@gmail.com" },
      { label: "Phone",    value: "+40 753 851 305",          href: "tel:+40753851305" },
      { label: "WhatsApp", value: "+40 753 851 305",          href: "https://wa.me/40753851305" },
      { label: "GitHub",   value: "RubenLpc",                 href: "https://github.com/RubenLpc" },
      { label: "LinkedIn", value: "Ruben Lupancu",            href: "https://www.linkedin.com/in/ruben-lupancu/" }
    ],
    cta: { ro: "Trimite-mi un email", en: "Send me an email" }
  },

  footer: {
    line: {
      ro: "Făcut de mână în Suceava",
      en: "Hand-built in Suceava"
    }
  }
};

export default PORTFOLIO;
