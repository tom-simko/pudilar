export type Locale = 'en' | 'sk';

export interface InvestmentArea {
  title: string;
  text: string;
  microLabel: string;
}

export interface Principle {
  title: string;
  text: string;
}

export interface LegalCopy {
  title: string;
  intro: string;
  operator: string;
  privacy: string[];
  disclaimer: string[];
  intellectualProperty: string;
  lastUpdated: string;
}

export interface SiteCopy {
  localeLabel: string;
  homePath: string;
  legalPath: string;
  alternateHomePath: string;
  alternateLegalPath: string;
  nav: {
    approach: string;
    areas: string;
    principles: string;
    company: string;
    legal: string;
  };
  header: {
    menu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    intro: string;
    primaryLink: string;
    secondaryLabel: string;
    visualCaption: string;
    visualLabels: {
      heading: string;
      realAssets: string;
      privateCompanies: string;
      publicMarkets: string;
      digitalAssets: string;
      core: string;
      footer: string;
    };
  };
  approach: {
    label: string;
    heading: string;
    paragraphs: string[];
    motifLabel: string;
  };
  areas: {
    label: string;
    heading: string;
    intro: string;
    items: InvestmentArea[];
  };
  principles: {
    label: string;
    heading: string;
    items: Principle[];
  };
  company: {
    label: string;
    heading: string;
    paragraphs: string[];
    supportingStatement: string;
  };
  closing: {
    heading: string;
    body: string;
    link: string;
  };
  footer: {
    description: string;
    registeredOffice: string;
    country: string;
    companyId: string;
    taxId: string;
    vatId: string;
    register: string;
    registerName: string;
    section: string;
    insertNumber: string;
    established: string;
    establishedDate: string;
    legalLink: string;
    copyright: string;
  };
  legal: LegalCopy;
}

export const legalDetails = {
  name: 'Pudilar s. r. o.',
  street: 'Landererova 7743/8',
  locality: '811 09 Bratislava – mestská časť Staré Mesto',
  country: 'Slovak Republic',
  companyId: '55632190',
  taxId: '2122036719',
  vatId: 'SK2122036719',
  registerName: 'Commercial Register of the District Court Žilina',
  registerSection: 'Sro',
  registerInsert: '82698/L',
  established: '22 July 2023',
  establishedIso: '2023-07-22',
  website: 'pudilar.com',
} as const;

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    localeLabel: 'English',
    homePath: '/',
    legalPath: '/legal/',
    alternateHomePath: '/sk/',
    alternateLegalPath: '/sk/pravne-informacie/',
    nav: {
      approach: 'Approach',
      areas: 'Investment areas',
      principles: 'Principles',
      company: 'Company',
      legal: 'Legal',
    },
    header: {
      menu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Change language',
    },
    hero: {
      eyebrow: 'PRIVATE INVESTMENT COMPANY',
      titleLines: ['Patient capital.', 'Independent thinking.'],
      intro:
        'Pudilar is a privately held investment company allocating its own capital across real assets, private companies, public markets and digital assets. We focus on durable value, disciplined decisions and a long-term horizon.',
      primaryLink: 'Explore our approach',
      secondaryLabel: 'Based in Bratislava, investing across asset classes.',
      visualCaption: 'An illustrative investment universe, not a representation of current holdings.',
      visualLabels: {
        heading: 'CAPITAL ALLOCATION',
        realAssets: 'REAL ASSETS',
        privateCompanies: 'PRIVATE COMPANIES',
        publicMarkets: 'PUBLIC MARKETS',
        digitalAssets: 'DIGITAL ASSETS',
        core: 'DISCIPLINED ALLOCATION',
        footer: 'LONG-TERM VALUE / DISCIPLINED DECISIONS',
      },
    },
    approach: {
      label: 'APPROACH',
      heading: 'Across cycles, not trends.',
      paragraphs: [
        'Markets change. Our framework remains consistent: understand the asset, assess the downside, preserve flexibility and invest only when the expected return justifies the risk.',
        'We do not measure progress by how often capital is deployed. We prefer a small number of well-considered decisions over activity for its own sake.',
      ],
      motifLabel: 'A consistent framework through changing conditions',
    },
    areas: {
      label: 'INVESTMENT AREAS',
      heading: 'One framework. Different forms of value.',
      intro:
        'We consider opportunities across asset classes while applying the same fundamental questions to each: What creates value? What can permanently impair capital? What must be true for the investment to succeed?',
      items: [
        {
          title: 'Real assets',
          text: 'Real estate and other asset-backed opportunities offering tangible value, resilient cash flows or clear operational potential.',
          microLabel: 'TANGIBLE VALUE',
        },
        {
          title: 'Private companies',
          text: 'Direct investments and selected partnerships in businesses with capable operators, sound economics and room to grow.',
          microLabel: 'LONG-TERM OWNERSHIP',
        },
        {
          title: 'Public markets',
          text: 'Liquid equities and other listed instruments where quality, valuation and timing create an attractive balance of risk and potential return.',
          microLabel: 'LIQUID OPPORTUNITY',
        },
        {
          title: 'Digital assets',
          text: 'A selective and risk-aware allocation to digital assets and infrastructure with meaningful long-term potential.',
          microLabel: 'ASYMMETRIC POTENTIAL',
        },
        {
          title: 'Opportunistic capital',
          text: 'Special situations, structured opportunities and periods when liquidity itself is the most valuable position.',
          microLabel: 'FLEXIBLE CAPITAL',
        },
      ],
    },
    principles: {
      label: 'PRINCIPLES',
      heading: 'How we allocate capital.',
      items: [
        {
          title: 'Protect the downside',
          text: 'Return matters only when considered together with the possibility of permanent capital loss.',
        },
        {
          title: 'Understand before acting',
          text: 'We invest only where we can form a clear view of the asset, its economics and the forces that may affect it.',
        },
        {
          title: 'Conviction over activity',
          text: 'Patience is a position. We are comfortable waiting when the opportunity is not sufficiently attractive.',
        },
        {
          title: 'Preserve flexibility',
          text: 'Liquidity, simple structures and independent decision-making allow us to respond when conditions change.',
        },
        {
          title: 'Think like an owner',
          text: 'We favour decisions that strengthen long-term value rather than optimise a single quarter or market narrative.',
        },
      ],
    },
    company: {
      label: 'COMPANY',
      heading: 'Built for clear decisions.',
      paragraphs: [
        'Pudilar was established in 2023 as a private investment company based in Bratislava. We operate with a compact structure, direct accountability and the freedom to act patiently.',
        'Our mandate is intentionally broad. This allows capital to move toward the opportunities offering the strongest combination of understandable value, attractive potential return and acceptable risk.',
      ],
      supportingStatement:
        'Long-term orientation does not mean holding every asset forever. It means making each decision with a complete view of its long-term consequences.',
    },
    closing: {
      heading: 'Capital should have a reason.',
      body: 'Every investment begins with a clear question: why should this opportunity create value, and what could prove that view wrong?',
      link: 'Review our principles',
    },
    footer: {
      description: 'A privately held investment company allocating its own capital across multiple asset classes.',
      registeredOffice: 'Registered office',
      country: 'Slovak Republic',
      companyId: 'Company ID',
      taxId: 'Tax ID',
      vatId: 'VAT ID',
      register: 'Commercial Register',
      registerName: 'Commercial Register of the District Court Žilina',
      section: 'Section',
      insertNumber: 'Insert No.',
      established: 'Established',
      establishedDate: '22 July 2023',
      legalLink: 'Legal information and privacy',
      copyright: 'All rights reserved.',
    },
    legal: {
      title: 'Legal information and privacy',
      intro: 'This page provides the legal identification of the website operator, information about the operation of this website and an important investment disclaimer.',
      operator: 'Website operator',
      privacy: [
        'Pudilar does not intentionally collect personal data through this website. The website does not contain user accounts, contact forms, advertising pixels or analytics tools.',
        'The website does not set non-essential cookies. It may store a language preference locally in your browser so your preferred version opens by default; this preference is not transmitted to Pudilar. The hosting provider and normal internet infrastructure may process limited technical information, such as an IP address or request logs, as required to deliver and secure the website.',
        'When following a link to another website, the privacy terms of that website apply.',
      ],
      disclaimer: [
        'The content of this website is provided for general information only. It does not constitute investment advice, financial advice, legal advice, tax advice, an offer, a solicitation, a recommendation or an invitation to buy or sell any asset, security or financial instrument.',
        'Pudilar invests its own capital and does not use this website to offer investment products or investment services to the public.',
        'Investments involve risk. Asset values can increase or decrease, and capital may be lost. References to investment areas describe the company’s general field of interest and do not represent current holdings, commitments, performance or future results.',
        'Nothing on this website is a promise or guarantee of a return.',
      ],
      intellectualProperty: 'Unless stated otherwise, the text, visual identity, graphics and original website materials are owned by Pudilar s. r. o. They may not be reproduced or used commercially without prior permission.',
      lastUpdated: 'Last updated',
    },
  },
  sk: {
    localeLabel: 'Slovenčina',
    homePath: '/sk/',
    legalPath: '/sk/pravne-informacie/',
    alternateHomePath: '/',
    alternateLegalPath: '/legal/',
    nav: {
      approach: 'Prístup',
      areas: 'Investičné oblasti',
      principles: 'Princípy',
      company: 'Spoločnosť',
      legal: 'Právne informácie',
    },
    header: {
      menu: 'Otvoriť menu',
      closeMenu: 'Zavrieť menu',
      language: 'Zmeniť jazyk',
    },
    hero: {
      eyebrow: 'SÚKROMNÁ INVESTIČNÁ SPOLOČNOSŤ',
      titleLines: ['Trpezlivý kapitál.', 'Nezávislé rozhodovanie.'],
      intro: 'Pudilar je súkromná investičná spoločnosť, ktorá investuje vlastný kapitál do reálnych aktív, súkromných spoločností, verejných trhov a digitálnych aktív. Zameriavame sa na dlhodobú hodnotu, disciplinované rozhodovanie a dlhý investičný horizont.',
      primaryLink: 'Spoznajte náš prístup',
      secondaryLabel: 'Sídlo v Bratislave. Investície naprieč rôznymi triedami aktív.',
      visualCaption: 'Ilustratívne investičné oblasti, nie zobrazenie aktuálneho portfólia.',
      visualLabels: {
        heading: 'ALOKÁCIA KAPITÁLU',
        realAssets: 'REÁLNE AKTÍVA',
        privateCompanies: 'SÚKROMNÉ SPOLOČNOSTI',
        publicMarkets: 'VEREJNÉ TRHY',
        digitalAssets: 'DIGITÁLNE AKTÍVA',
        core: 'DISCIPLINOVANÁ ALOKÁCIA',
        footer: 'DLHODOBÁ HODNOTA / DISCIPLINOVANÉ ROZHODNUTIA',
      },
    },
    approach: {
      label: 'PRÍSTUP',
      heading: 'Naprieč cyklami, nie podľa trendov.',
      paragraphs: [
        'Trhy sa menia. Náš rámec zostáva rovnaký: porozumieť aktívu, posúdiť možné straty, zachovať si flexibilitu a investovať len vtedy, keď očakávaný výnos zodpovedá podstupovanému riziku.',
        'Pokrok nemeriame podľa toho, ako často investujeme. Uprednostňujeme menší počet premyslených rozhodnutí pred aktivitou bez jasného dôvodu.',
      ],
      motifLabel: 'Rovnaký rámec v meniacich sa podmienkach',
    },
    areas: {
      label: 'INVESTIČNÉ OBLASTI',
      heading: 'Jeden rámec. Rôzne formy hodnoty.',
      intro: 'Príležitosti posudzujeme naprieč rôznymi triedami aktív. Pri každej si kladieme rovnaké základné otázky: Čo vytvára hodnotu? Čo môže natrvalo poškodiť kapitál? Čo musí platiť, aby bola investícia úspešná?',
      items: [
        {
          title: 'Reálne aktíva',
          text: 'Nehnuteľnosti a iné aktívami kryté príležitosti s hmatateľnou hodnotou, odolnými peňažnými tokmi alebo jasným priestorom na prevádzkové zlepšenie.',
          microLabel: 'HMATATEĽNÁ HODNOTA',
        },
        {
          title: 'Súkromné spoločnosti',
          text: 'Priame investície a vybrané partnerstvá v spoločnostiach so schopnými ľuďmi, zdravou ekonomikou a priestorom na rast.',
          microLabel: 'DLHODOBÉ VLASTNÍCTVO',
        },
        {
          title: 'Verejné trhy',
          text: 'Likvidné akcie a iné verejne obchodované nástroje, pri ktorých kvalita, ocenenie a načasovanie vytvárajú atraktívny pomer rizika a možného výnosu.',
          microLabel: 'LIKVIDNÉ PRÍLEŽITOSTI',
        },
        {
          title: 'Digitálne aktíva',
          text: 'Selektívna a rizikovo riadená alokácia do digitálnych aktív a infraštruktúry so zaujímavým dlhodobým potenciálom.',
          microLabel: 'ASYMETRICKÝ POTENCIÁL',
        },
        {
          title: 'Príležitostný kapitál',
          text: 'Špeciálne situácie, štruktúrované príležitosti a obdobia, keď je najhodnotnejšou pozíciou samotná likvidita.',
          microLabel: 'FLEXIBILNÝ KAPITÁL',
        },
      ],
    },
    principles: {
      label: 'PRINCÍPY',
      heading: 'Ako rozhodujeme o kapitále.',
      items: [
        {
          title: 'Najprv chrániť kapitál',
          text: 'Výnos má význam len v spojení s rizikom trvalej straty kapitálu.',
        },
        {
          title: 'Najprv porozumieť, potom konať',
          text: 'Investujeme len tam, kde si vieme vytvoriť jasný pohľad na aktívum, jeho ekonomiku a faktory, ktoré ho môžu ovplyvniť.',
        },
        {
          title: 'Presvedčenie namiesto aktivity',
          text: 'Aj trpezlivosť je pozícia. Dokážeme počkať, keď príležitosť nie je dostatočne atraktívna.',
        },
        {
          title: 'Zachovať flexibilitu',
          text: 'Likvidita, jednoduché štruktúry a nezávislé rozhodovanie nám umožňujú reagovať na meniace sa podmienky.',
        },
        {
          title: 'Rozmýšľať ako vlastník',
          text: 'Uprednostňujeme rozhodnutia, ktoré podporujú dlhodobú hodnotu, nie výsledok jedného štvrťroka alebo krátkodobý trhový príbeh.',
        },
      ],
    },
    company: {
      label: 'SPOLOČNOSŤ',
      heading: 'Vytvorená pre jasné rozhodnutia.',
      paragraphs: [
        'Pudilar vznikol v roku 2023 ako súkromná investičná spoločnosť so sídlom v Bratislave. Fungujeme s kompaktnou štruktúrou, priamou zodpovednosťou a slobodou konať trpezlivo.',
        'Náš investičný rámec je zámerne široký. Kapitál tak môžeme smerovať k príležitostiam s najlepšou kombináciou zrozumiteľnej hodnoty, atraktívneho možného výnosu a prijateľného rizika.',
      ],
      supportingStatement: 'Dlhodobé uvažovanie neznamená držať každé aktívum navždy. Znamená posudzovať každé rozhodnutie so zreteľom na jeho dlhodobé dôsledky.',
    },
    closing: {
      heading: 'Kapitál má mať dôvod.',
      body: 'Každá investícia začína jasnou otázkou: prečo by mala táto príležitosť vytvárať hodnotu a čo môže ukázať, že tento pohľad nie je správny?',
      link: 'Pozrite si naše princípy',
    },
    footer: {
      description: 'Súkromná investičná spoločnosť investujúca vlastný kapitál naprieč viacerými triedami aktív.',
      registeredOffice: 'Sídlo',
      country: 'Slovenská republika',
      companyId: 'IČO',
      taxId: 'DIČ',
      vatId: 'IČ DPH',
      register: 'Obchodný register',
      registerName: 'Obchodný register Okresného súdu Žilina',
      section: 'Oddiel',
      insertNumber: 'Vložka č.',
      established: 'Založená',
      establishedDate: '22. júla 2023',
      legalLink: 'Právne informácie a ochrana súkromia',
      copyright: 'Všetky práva vyhradené.',
    },
    legal: {
      title: 'Právne informácie a ochrana súkromia',
      intro: 'Táto stránka obsahuje identifikačné údaje prevádzkovateľa, informácie o fungovaní webovej stránky a dôležité upozornenie týkajúce sa investícií.',
      operator: 'Prevádzkovateľ webovej stránky',
      privacy: [
        'Pudilar prostredníctvom tejto webovej stránky zámerne nezhromažďuje osobné údaje. Stránka neobsahuje používateľské účty, kontaktné formuláre, reklamné pixely ani analytické nástroje.',
        'Webová stránka nepoužíva žiadne súbory cookie, ktoré nie sú technicky nevyhnutné. V prehliadači môže lokálne uložiť preferenciu jazyka, aby sa pri ďalšej návšteve predvolene otvorila preferovaná verzia; táto preferencia sa spoločnosti Pudilar neodosiela. Poskytovateľ hostingu a bežná internetová infraštruktúra môžu v nevyhnutnom rozsahu spracúvať technické informácie, napríklad IP adresu alebo záznamy požiadaviek, aby mohli stránku doručiť a zabezpečiť.',
        'Po otvorení odkazu na inú webovú stránku sa uplatňujú podmienky ochrany súkromia danej stránky.',
      ],
      disclaimer: [
        'Obsah tejto webovej stránky slúži len na všeobecné informačné účely. Nejde o investičné, finančné, právne ani daňové poradenstvo, ponuku, výzvu, odporúčanie ani pozvanie na kúpu alebo predaj aktíva, cenného papiera alebo finančného nástroja.',
        'Pudilar investuje vlastný kapitál a prostredníctvom tejto webovej stránky neponúka verejnosti investičné produkty ani investičné služby.',
        'Investovanie je spojené s rizikom. Hodnota aktív môže rásť aj klesať a môže dôjsť k strate kapitálu. Uvedené investičné oblasti opisujú všeobecné oblasti záujmu spoločnosti. Nezobrazujú aktuálne portfólio, záväzky, výkonnosť ani budúce výsledky.',
        'Žiadna informácia na tejto stránke nie je prísľubom ani zárukou výnosu.',
      ],
      intellectualProperty: 'Ak nie je uvedené inak, texty, vizuálna identita, grafika a pôvodné materiály tejto webovej stránky sú vlastníctvom spoločnosti Pudilar s. r. o. Bez predchádzajúceho súhlasu ich nemožno reprodukovať ani používať na komerčné účely.',
      lastUpdated: 'Posledná aktualizácia',
    },
  },
};
