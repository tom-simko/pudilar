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
        'Pudilar is a privately held investment company that invests its own capital across real assets, private companies, public markets and digital assets. We look for durable value, make decisions with discipline and take a long view.',
      primaryLink: 'See how we invest',
      secondaryLabel: 'Based in Bratislava. Investing across asset classes.',
      visualCaption: 'An abstract study of time, discipline and compounding.',
    },
    approach: {
      label: 'APPROACH',
      heading: 'A framework for changing markets.',
      paragraphs: [
        'Markets change. We start with the asset, test the downside, keep room to adapt and invest only when the expected return justifies the risk.',
        'We do not measure progress by how often we put capital to work. A small number of well-considered decisions matters more than activity for its own sake.',
      ],
      motifLabel: 'The framework holds when conditions change',
    },
    areas: {
      label: 'INVESTMENT AREAS',
      heading: 'The same questions, across different assets.',
      intro:
        'Across asset classes, we ask the same questions: What creates value? What could permanently impair capital? What must be true for the investment to work?',
      items: [
        {
          title: 'Real assets',
          text: 'Real estate and other asset-backed opportunities where value is tangible, cash flows can be resilient or operations can improve.',
          microLabel: 'TANGIBLE VALUE',
        },
        {
          title: 'Private companies',
          text: 'Direct investments and selected partnerships with businesses that have capable operators, sound economics and room to grow.',
          microLabel: 'LONG-TERM OWNERSHIP',
        },
        {
          title: 'Public markets',
          text: 'Liquid equities and other listed instruments where quality, valuation and timing offer a reasonable balance between risk and potential return.',
          microLabel: 'LIQUID OPPORTUNITY',
        },
        {
          title: 'Digital assets',
          text: 'A selective, risk-aware allocation to digital assets and infrastructure with long-term potential.',
          microLabel: 'ASYMMETRIC POTENTIAL',
        },
        {
          title: 'Opportunistic capital',
          text: 'Special situations, structured opportunities and periods when holding liquidity is the better position.',
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
          text: 'A return matters only alongside the risk of permanent capital loss.',
        },
        {
          title: 'Understand before acting',
          text: 'We invest only when we can explain the asset, its economics and the forces that could change the case.',
        },
        {
          title: 'Conviction over activity',
          text: 'Patience is a position. We can wait when the opportunity does not justify the risk.',
        },
        {
          title: 'Preserve flexibility',
          text: 'Liquidity, simple structures and independent decisions leave room to respond when conditions change.',
        },
        {
          title: 'Think like an owner',
          text: 'We favour decisions that build long-term value over decisions shaped by a single quarter or a market narrative.',
        },
      ],
    },
    company: {
      label: 'COMPANY',
      heading: 'A compact structure for clear decisions.',
      paragraphs: [
        'Pudilar was established in 2023 as a private investment company based in Bratislava. We operate with a compact structure, direct accountability and the freedom to act patiently.',
        'Our mandate is intentionally broad. It lets capital move toward opportunities with understandable value, potential return and acceptable risk.',
      ],
      supportingStatement:
        'A long-term view does not mean holding every asset forever. It means considering the full consequences of each decision.',
    },
    closing: {
      heading: 'Capital should have a reason.',
      body: 'Every investment begins with a clear question: why should this opportunity create value, and what could prove that view wrong?',
      link: 'See our principles',
    },
    footer: {
      description: 'Pudilar invests its own capital across multiple asset classes.',
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
      intro: 'This page sets out who operates the website, how it works and the investment disclaimer that applies to its content.',
      operator: 'Website operator',
      privacy: [
        'Pudilar does not intentionally collect personal data through this website. There are no user accounts, contact forms, advertising pixels or analytics tools.',
        'The website does not set non-essential cookies. It may store a language preference in your browser so your preferred version opens by default; that preference is not sent to Pudilar. The hosting provider and ordinary internet infrastructure may process limited technical information, such as an IP address or request logs, as needed to deliver and secure the site.',
        'When following a link to another website, the privacy terms of that website apply.',
      ],
      disclaimer: [
        'This website is for general information. It is not investment, financial, legal or tax advice, and it is not an offer, solicitation, recommendation or invitation to buy or sell any asset, security or financial instrument.',
        'Pudilar invests its own capital. This website does not offer investment products or investment services to the public.',
        'Investments involve risk. Asset values may rise or fall, and capital may be lost. The investment areas described here reflect Pudilar’s general field of interest; they do not show current holdings, commitments, performance or future results.',
        'Nothing on this website is a promise or guarantee of a return.',
      ],
      intellectualProperty: 'Unless stated otherwise, Pudilar s. r. o. owns the text, visual identity, graphics and original website materials. They may not be reproduced or used commercially without prior permission.',
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
      titleLines: ['Trpezlivý kapitál.', 'Nezávislé uvažovanie.'],
      intro: 'Pudilar je súkromná investičná spoločnosť, ktorá investuje vlastný kapitál naprieč reálnymi aktívami, súkromnými spoločnosťami, verejnými trhmi a digitálnymi aktívami. Hľadáme trvalú hodnotu, rozhodujeme sa disciplinovane a uvažujeme v dlhom horizonte.',
      primaryLink: 'Pozrite si, ako investujeme',
      secondaryLabel: 'Sídlo máme v Bratislave. Investujeme naprieč triedami aktív.',
      visualCaption: 'Abstraktné zobrazenie času, disciplíny a postupného zhodnocovania.',
    },
    approach: {
      label: 'PRÍSTUP',
      heading: 'Rámec pre meniace sa trhy.',
      paragraphs: [
        'Trhy sa menia. Začíname pri aktíve, preverujeme možné straty, nechávame si priestor na zmenu a investujeme len vtedy, keď očakávaný výnos zodpovedá riziku.',
        'Pokrok nemeriame podľa toho, ako často dávame kapitál do práce. Viac nám záleží na niekoľkých premyslených rozhodnutiach než na aktivite pre samotnú aktivitu.',
      ],
      motifLabel: 'Rámec, ktorý drží aj v meniacich sa podmienkach',
    },
    areas: {
      label: 'INVESTIČNÉ OBLASTI',
      heading: 'Rovnaké otázky, rôzne aktíva.',
      intro: 'Príležitosti posudzujeme naprieč triedami aktív, no pri každej si kladieme rovnaké otázky: Čo vytvára hodnotu? Čo môže natrvalo poškodiť kapitál? Čo musí platiť, aby investícia fungovala?',
      items: [
        {
          title: 'Reálne aktíva',
          text: 'Nehnuteľnosti a iné príležitosti kryté aktívami, pri ktorých je hodnota hmatateľná, peňažné toky môžu byť odolné alebo existuje priestor na prevádzkové zlepšenie.',
          microLabel: 'HMATATEĽNÁ HODNOTA',
        },
        {
          title: 'Súkromné spoločnosti',
          text: 'Priame investície a vybrané partnerstvá so spoločnosťami, ktoré majú schopné vedenie, zdravú ekonomiku a priestor na rast.',
          microLabel: 'DLHODOBÉ VLASTNÍCTVO',
        },
        {
          title: 'Verejné trhy',
          text: 'Likvidné akcie a iné verejne obchodované nástroje, pri ktorých kvalita, ocenenie a načasovanie ponúkajú rozumný pomer rizika a možného výnosu.',
          microLabel: 'LIKVIDNÉ PRÍLEŽITOSTI',
        },
        {
          title: 'Digitálne aktíva',
          text: 'Selektívna a rizikovo riadená alokácia do digitálnych aktív a infraštruktúry s dlhodobým potenciálom.',
          microLabel: 'ASYMETRICKÝ POTENCIÁL',
        },
        {
          title: 'Príležitostný kapitál',
          text: 'Špeciálne situácie, štruktúrované príležitosti a obdobia, keď je držba likvidity lepšou pozíciou.',
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
          text: 'Výnos má zmysel len spolu s rizikom trvalej straty kapitálu.',
        },
        {
          title: 'Najprv porozumieť, potom konať',
          text: 'Investujeme len vtedy, keď rozumieme aktívu, jeho ekonomike a silám, ktoré ho môžu ovplyvniť.',
        },
        {
          title: 'Presvedčenie pred aktivitou',
          text: 'Trpezlivosť je pozícia. Dokážeme počkať, keď príležitosť neopodstatňuje podstúpené riziko.',
        },
        {
          title: 'Zachovať flexibilitu',
          text: 'Likvidita, jednoduché štruktúry a nezávislé rozhodovanie nám nechávajú priestor reagovať, keď sa podmienky zmenia.',
        },
        {
          title: 'Uvažovať ako vlastník',
          text: 'Uprednostňujeme rozhodnutia, ktoré budujú dlhodobú hodnotu, pred rozhodnutiami prispôsobenými jednému štvrťroku alebo trhovému príbehu.',
        },
      ],
    },
    company: {
      label: 'SPOLOČNOSŤ',
      heading: 'Kompaktná štruktúra pre jasné rozhodnutia.',
      paragraphs: [
        'Pudilar vznikol v roku 2023 ako súkromná investičná spoločnosť so sídlom v Bratislave. Fungujeme s kompaktnou štruktúrou, priamou zodpovednosťou a slobodou konať trpezlivo.',
        'Náš investičný rámec je zámerne široký. Kapitál tak môžeme smerovať k príležitostiam s kombináciou zrozumiteľnej hodnoty, možného výnosu a prijateľného rizika.',
      ],
      supportingStatement: 'Dlhodobý pohľad neznamená držať každé aktívum navždy. Znamená zvažovať úplné dôsledky každého rozhodnutia.',
    },
    closing: {
      heading: 'Kapitál má mať dôvod.',
      body: 'Každá investícia začína jasnou otázkou: prečo by mala táto príležitosť vytvárať hodnotu a čo by mohlo ukázať, že sa mýlime?',
      link: 'Pozrite si princípy',
    },
    footer: {
      description: 'Pudilar investuje vlastný kapitál naprieč viacerými triedami aktív.',
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
      intro: 'Táto stránka uvádza, kto web prevádzkuje, ako funguje a aké investičné upozornenie sa vzťahuje na jej obsah.',
      operator: 'Prevádzkovateľ webovej stránky',
      privacy: [
        'Pudilar prostredníctvom tejto webovej stránky zámerne nezhromažďuje osobné údaje. Stránka neobsahuje používateľské účty, kontaktné formuláre, reklamné pixely ani analytické nástroje.',
        'Webová stránka nepoužíva súbory cookie, ktoré nie sú technicky nevyhnutné. V prehliadači môže uložiť preferenciu jazyka, aby sa pri ďalšej návšteve otvorila preferovaná verzia; táto preferencia sa spoločnosti Pudilar neodosiela. Poskytovateľ hostingu a bežná internetová infraštruktúra môžu v nevyhnutnom rozsahu spracúvať obmedzené technické informácie, napríklad IP adresu alebo záznamy požiadaviek, aby mohli stránku doručiť a zabezpečiť.',
        'Po otvorení odkazu na inú webovú stránku sa uplatňujú podmienky ochrany súkromia danej stránky.',
      ],
      disclaimer: [
        'Táto webová stránka slúži na všeobecné informačné účely. Nejde o investičné, finančné, právne ani daňové poradenstvo, ponuku, výzvu, odporúčanie ani pozvanie na kúpu alebo predaj aktíva, cenného papiera alebo finančného nástroja.',
        'Pudilar investuje vlastný kapitál. Prostredníctvom tejto webovej stránky neponúka verejnosti investičné produkty ani investičné služby.',
        'Investovanie je spojené s rizikom. Hodnota aktív môže rásť aj klesať a môže dôjsť k strate kapitálu. Uvedené investičné oblasti odrážajú všeobecnú oblasť záujmu spoločnosti. Nezobrazujú aktuálne portfólio, záväzky, výkonnosť ani budúce výsledky.',
        'Žiadna informácia na tejto stránke nie je prísľubom ani zárukou výnosu.',
      ],
      intellectualProperty: 'Ak nie je uvedené inak, texty, vizuálna identita, grafika a pôvodné materiály tejto webovej stránky vlastní spoločnosť Pudilar s. r. o. Bez predchádzajúceho súhlasu ich nemožno reprodukovať ani používať na komerčné účely.',
      lastUpdated: 'Posledná aktualizácia',
    },
  },
};
