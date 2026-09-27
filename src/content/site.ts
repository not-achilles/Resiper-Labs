/**
 * Resiper Labs: site copy.
 *
 * Content rules:
 *  - Factual statements are owner-confirmed. Everything else is method,
 *    principle or capability language that implies no track record.
 *  - The six areas are capability territories. Clients engage one or several;
 *    nothing may imply a mandatory sequence through them.
 *  - No invented clients, numbers, testimonials, partnerships or certifications.
 *
 * Owner-pending values are `null` and render a visible TODO(OWNER) marker,
 * which blocks deployment until they are provided.
 */

export const company = {
  /** source: owner */
  legalName: "Resiper Labs Private Limited",
  /** source: owner */
  brand: "Resiper Labs",
  /** source: owner, 2026-09-27 */
  emails: [
    { label: "Sales", address: "sales@resiperlabs.com" },
    { label: "Support", address: "support@resiperlabs.com" },
  ],
  /** source: owner, 2026-09-27. `tel` is the dialable form of `display`. */
  phones: [
    { display: "+91 7827308070", tel: "+917827308070" },
    { display: "+91 7080308070", tel: "+917080308070" },
  ],
  /** source: owner, 2026-09-27. CIN is intentionally not shown (owner decision). */
  registeredOffice: "Gurgaon, Haryana" as string | null,
};

export const meta = {
  title: "Resiper Labs · Technology engineering company",
  description:
    "Resiper Labs designs, builds and supports infrastructure, cyber security, applications, data, AI and connected industrial systems: one area at a time, or several together.",
};

export const nav = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/#method", label: "Approach" },
  { href: "/#engage", label: "Engage" },
  { href: "/#contact", label: "Contact" },
];

/* ─── Capability areas ────────────────────────────────────── */

export type PillarNo = "01" | "02" | "03" | "04" | "05" | "06";

export interface Pillar {
  no: PillarNo;
  slug: string;
  name: string;
  /** Name broken for diagrams */
  lines: string[];
  /** Three short examples shown inside diagram zones */
  keys: string[];
  line: string;
  problem: string;
  intro: string;
  keywords: string[];
  groups: { title: string; items: string[] }[];
  related: { no: PillarNo; why: string }[];
  starts: string[];
  platforms?: string;
}

/** source: business architecture §3 */
export const pillars: Pillar[] = [
  {
    no: "01",
    slug: "infrastructure",
    name: "Infrastructure & Networks",
    lines: ["Infrastructure", "& Networks"],
    keys: ["Data centres", "Compute · Storage", "Networks"],
    line: "The physical and virtual foundation business systems run on.",
    problem:
      "Systems that are slow, fragile or out of capacity, and data centres and networks that need to be built, modernised or managed.",
    intro:
      "We design, build and manage data centres, compute, storage and networks, and keep them resilient once they are running.",
    keywords: [
      "Data centres",
      "Compute",
      "Storage",
      "Virtualisation",
      "Networks",
      "Backup & recovery",
      "Infrastructure management",
    ],
    groups: [
      {
        title: "Data centre",
        items: [
          "Data centre design and build-out",
          "Power systems",
          "Structured and passive cabling",
          "Networking and IT equipment",
        ],
      },
      {
        title: "Compute & storage",
        items: [
          "Server and storage platforms",
          "Server and storage virtualisation",
          "Hyperconverged infrastructure",
        ],
      },
      {
        title: "Networks",
        items: [
          "Enterprise network design and implementation",
          "Wireless networks",
          "Network management systems",
          "Communication systems and command-and-control centres",
        ],
      },
      {
        title: "Resilience",
        items: ["Backup", "Data protection", "Platform and data migration"],
      },
      {
        title: "Operations",
        items: [
          "Server and operating-system administration",
          "Virtualisation administration",
          "Storage, backup and network infrastructure management",
        ],
      },
    ],
    related: [
      {
        no: "02",
        why: "Perimeter, network and endpoint security are designed with the network, not after it.",
      },
      { no: "03", why: "Applications and databases need platforms sized and tuned for them." },
      { no: "06", why: "Plant and site equipment depends on reliable networks to connect." },
    ],
    starts: [
      "A data centre build, expansion or refresh",
      "Consolidating servers onto virtualised or hyperconverged platforms",
      "A network redesign or upgrade",
      "Backup and recovery that has never been tested",
    ],
  },
  {
    no: "02",
    slug: "security",
    name: "Cyber Security",
    lines: ["Cyber", "Security"],
    keys: ["Firewalls", "Access control", "SIEM · VAPT"],
    line: "Protection for networks, devices, applications and data.",
    problem:
      "Exposure to attacks, data leaks and compliance gaps, which often stay invisible until they are tested.",
    intro:
      "We design and implement security controls across networks, endpoints, identities, applications and data, and we test them.",
    keywords: [
      "Firewalls",
      "Endpoint protection",
      "Access control",
      "Data loss prevention",
      "SIEM",
      "VAPT",
    ],
    groups: [
      {
        title: "Network",
        items: [
          "Firewalls",
          "Intrusion prevention",
          "Network segmentation",
          "Web security",
          "Wireless security",
        ],
      },
      {
        title: "Endpoint & messaging",
        items: ["Antivirus and anti-malware", "Email security", "Mobile device security"],
      },
      {
        title: "Identity & data",
        items: ["Access control", "Data loss prevention", "Behavioural analytics"],
      },
      {
        title: "Applications",
        items: ["Application security", "Security of application and IT infrastructure"],
      },
      {
        title: "Assurance",
        items: [
          "Vulnerability assessment and penetration testing (VAPT)",
          "Security information and event management (SIEM)",
          "Risk analysis and mitigation",
          "Cloud security",
          "Support for regulatory compliance",
        ],
      },
    ],
    related: [
      { no: "01", why: "Firewalls, segmentation and wireless security live in the network." },
      { no: "03", why: "Application security and access control protect business systems." },
      { no: "04", why: "Data loss prevention and access rules protect sensitive data." },
      {
        no: "06",
        why: "Connected equipment widens the attack surface and needs the same controls.",
      },
    ],
    starts: [
      "A vulnerability assessment and penetration test",
      "Centralising security monitoring with a SIEM",
      "Segmenting a flat network",
      "Controlling access to sensitive data",
    ],
  },
  {
    no: "03",
    slug: "applications",
    name: "Applications & Enterprise Systems",
    lines: ["Applications &", "Enterprise systems"],
    keys: ["ERP", "Custom applications", "Databases"],
    line: "The software the business runs on: built, migrated, integrated and supported.",
    problem:
      "Business software that is outdated, disconnected or hard to change, from ERP to the custom applications teams depend on.",
    intro:
      "We build custom applications, implement and extend enterprise systems such as ERP, and move existing applications onto modern platforms without losing what works.",
    keywords: [
      "Application development",
      "Migration & porting",
      "ERP",
      "Databases",
      "Middleware",
      "Application support",
    ],
    groups: [
      {
        title: "Build",
        items: [
          "Custom application development",
          "Configuration and extension of off-the-shelf software",
          "Interfaces designed for the people who use them",
        ],
      },
      {
        title: "Modernise",
        items: ["Application migration", "Application porting between platforms"],
      },
      {
        title: "Enterprise systems",
        items: ["ERP solutions", "Database platforms", "Integration between enterprise systems"],
      },
      {
        title: "Platforms",
        items: [
          "Application servers and middleware",
          "Web servers and load balancing",
          "File and database server platforms",
        ],
      },
      {
        title: "Run",
        items: ["Application support", "Application performance management"],
      },
    ],
    related: [
      { no: "01", why: "Applications run on infrastructure that has to be right for them." },
      { no: "04", why: "Most reporting and analytics starts from application data." },
      {
        no: "05",
        why: "Automation acts inside business applications, for example by raising an order in the ERP.",
      },
    ],
    starts: [
      "Moving a business-critical application to a new platform",
      "Extending or integrating an ERP",
      "Replacing a spreadsheet-driven process with an application",
      "Stabilising an application that is slow or unreliable",
    ],
  },
  {
    no: "04",
    slug: "data",
    name: "Data & Analytics",
    lines: ["Data &", "Analytics"],
    keys: ["Data platforms", "Warehousing", "Power BI · Fabric"],
    line: "Data that is consolidated, trusted and put in front of the people who decide.",
    problem:
      "Data scattered across systems and spreadsheets, reports nobody fully trusts, and decisions made later than they should be.",
    intro:
      "We engineer the pipelines, warehouses and models that bring scattered data together, and the reporting and analytics that turn it into decisions.",
    keywords: [
      "Data engineering",
      "Data warehousing",
      "Power BI",
      "Microsoft Fabric",
      "Real-time analytics",
    ],
    groups: [
      {
        title: "Data foundations",
        items: [
          "Batch and real-time data pipelines",
          "Data lake and lakehouse architecture",
          "Data warehousing",
          "Data consolidation and migration",
        ],
      },
      {
        title: "Governance",
        items: ["Master data management", "Lineage and data quality"],
      },
      {
        title: "Analytics & BI",
        items: [
          "Power BI architecture and reporting",
          "Migration from Power BI to Microsoft Fabric",
          "Descriptive and diagnostic analytics",
          "Real-time operational analytics",
        ],
      },
      {
        title: "Decision intelligence",
        items: ["Predictive and prescriptive analytics", "Forecasting and anomaly detection"],
      },
    ],
    related: [
      { no: "03", why: "ERP and business applications are usually the main sources." },
      { no: "05", why: "Models and AI depend on data that is consolidated and trusted." },
      { no: "06", why: "Equipment and sensor data can be analysed alongside business data." },
    ],
    starts: [
      "Consolidating data spread across systems and spreadsheets",
      "A Power BI estate that needs an architecture",
      "Moving to Microsoft Fabric",
      "Making operational data available in real time",
    ],
    platforms: "AWS · Databricks · Microsoft Fabric · Power BI",
  },
  {
    no: "05",
    slug: "ai",
    name: "AI & Automation",
    lines: ["AI &", "Automation"],
    keys: ["Machine learning", "Vision · Language", "Agents · Workflows"],
    line: "Machine learning and applied AI, put to work inside real processes.",
    problem:
      "Repetitive or judgement-heavy work that could be assisted or automated, and AI pilots that never reached everyday use.",
    intro:
      "We build models and AI systems where they earn their place, from vision and language to optimisation and agents, and connect them to the workflows that act on them.",
    keywords: [
      "Machine learning",
      "Computer vision",
      "NLP",
      "Optimisation",
      "AI agents",
      "Workflow automation",
    ],
    groups: [
      {
        title: "Machine learning",
        items: [
          "Machine learning and deep learning models",
          "Planning, scheduling and optimisation",
          "Expert systems",
        ],
      },
      {
        title: "Perception & language",
        items: ["Computer vision", "Natural language processing", "Speech recognition"],
      },
      {
        title: "Applied AI & agents",
        items: [
          "Generative AI applications",
          "AI agents and agentic workflows",
          "Workflow automation across enterprise systems",
          "Human review designed into automated steps",
        ],
      },
      {
        title: "Assurance",
        items: [
          "Model evaluation on accuracy, cost and latency",
          "Deployment on your infrastructure or through enterprise APIs",
        ],
      },
    ],
    related: [
      { no: "04", why: "Models need data that is consolidated and trusted." },
      { no: "03", why: "Automated decisions have to land in the applications people use." },
      { no: "06", why: "Vision and models can act on equipment and inspection data." },
    ],
    starts: [
      "A repetitive, rules-heavy process that consumes skilled time",
      "Visual inspection that depends on people watching",
      "Scheduling or planning done by hand",
      "An AI pilot that never reached production",
    ],
  },
  {
    no: "06",
    slug: "connected",
    name: "Connected & Industrial Systems",
    lines: ["Connected &", "Industrial systems"],
    keys: ["IoT · IIoT", "Industrial automation", "Robotics · Drones"],
    line: "Machines, sites and field operations brought into the business, and automated.",
    problem:
      "Machines, sites and field operations whose data never reaches the business, and physical processes still run by hand.",
    intro:
      "We connect equipment and sites to the rest of the enterprise, collect and analyse their data in real time, and build the automation that acts on the operation.",
    keywords: ["IoT", "IIoT", "Real-time data", "Industrial automation", "Robotics", "Drones"],
    groups: [
      {
        title: "Connected devices",
        items: [
          "IoT and IIoT deployments",
          "Real-time data collection from devices and machines",
          "Edge-to-cloud data pipelines",
          "Integration with PLCs, historians and plant systems",
        ],
      },
      {
        title: "Industrial automation",
        items: [
          "Industrial automation",
          "Autonomous mobile robots",
          "Robotics design and integration",
        ],
      },
      {
        title: "Aerial systems",
        // Specific drone applications to be confirmed before listing.
        items: ["Drone-based systems for industrial data capture"],
      },
    ],
    related: [
      { no: "01", why: "Devices depend on site networks and edge infrastructure." },
      { no: "02", why: "Connected equipment has to be secured like any other system." },
      { no: "04", why: "Equipment data becomes useful when it joins the data platform." },
    ],
    starts: [
      "Machine data that is collected but never used",
      "Connecting plant systems to enterprise systems",
      "Monitoring equipment and sites in real time",
      "Automating movement or handling on the floor",
    ],
  },
];

export const pillarByNo = (no: PillarNo): Pillar => pillars.find((p) => p.no === no)!;

/* ─── Home ────────────────────────────────────────────────── */

/** source: positioning v3 */
export const hero = {
  kicker: ["Infrastructure", "Security", "Applications", "Data", "AI", "Connected systems"],
  headline: "Enterprise technology, engineered to work together",
  statement:
    "Resiper Labs is an engineering-led technology company. We design, build and support infrastructure, security, applications, data, AI and connected industrial systems: one area at a time, or several together when a problem crosses boundaries.",
  figure: {
    label: "Fig. 0",
    title: "Where we work",
    caption:
      "Six capability areas across the enterprise technology environment. The highlighted combinations are examples: an engagement may involve one area or several.",
  },
  /** Example configurations cycled in the hero map. Illustrative only. */
  states: [
    { id: "a", count: "One area", example: "e.g. an ERP migration", areas: ["03"] as PillarNo[] },
    {
      id: "b",
      count: "Two areas",
      example: "e.g. a secure network redesign",
      areas: ["01", "02"] as PillarNo[],
    },
    {
      id: "c",
      count: "Several areas",
      example: "e.g. putting equipment data to work",
      areas: ["06", "01", "02", "04", "05"] as PillarNo[],
    },
  ],
};

export const intro = {
  heading: "An engineering-led technology company.",
  body: [
    "We work on the technology organisations run on: data centres and networks, the security around them, business applications and ERP, data and reporting, AI and automation, and the machines and equipment in plants and in the field.",
    "Some clients need one of these done well. Others have a problem that crosses several. We do both, and when several areas are involved, we make sure they work together.",
  ],
  modes: [
    {
      k: "One area",
      v: "A specific project: a network redesign, a security assessment, an ERP migration or a reporting platform.",
    },
    {
      k: "Several areas",
      v: "A problem that crosses technology boundaries, engineered as one piece of work.",
    },
    {
      k: "Ongoing support",
      v: "Administration, maintenance and support of what is already running.",
    },
  ],
};

export const areasSection = {
  heading: "From infrastructure to intelligence.",
  note: "Six capability areas. Engage us for one, or for several. Open an area to see its scope.",
};

/**
 * Illustrative scenario. Labelled as an example on the page; names no client
 * and states no result. Must never read as a fixed sequence.
 */
export const scenario = {
  heading: "When the problem crosses boundaries.",
  intro:
    "A real business problem rarely belongs to one technology area. The scenario below is illustrative: it shows how several areas can work together on one problem. It is not a sequence every project follows.",
  problem: "Catch equipment faults before they stop production.",
  steps: [
    {
      no: "1",
      layer: "06" as PillarNo,
      tag: "Machine signal",
      text: "A sensor on a production machine detects vibration drifting out of range.",
    },
    {
      no: "2",
      layer: "01" as PillarNo,
      tag: "Site network",
      text: "The reading travels over the site network to on-site compute and storage.",
    },
    {
      no: "3",
      layer: "02" as PillarNo,
      tag: "Security controls",
      text: "Access is controlled and the traffic is inspected on the way.",
    },
    {
      no: "4",
      layer: "04" as PillarNo,
      tag: "Data platform",
      text: "It lands in the data platform, alongside the machine's maintenance history from the ERP.",
    },
    {
      no: "5",
      layer: "05" as PillarNo,
      tag: "Anomaly model",
      text: "A model recognises the pattern as an early sign of failure.",
    },
    {
      no: "6",
      layer: "03" as PillarNo,
      tag: "ERP work order",
      text: "A work order is raised in the ERP and the spare part is reserved.",
    },
    {
      no: "7",
      layer: "03" as PillarNo,
      tag: "Maintenance team",
      text: "The maintenance team is notified and the repair is scheduled before the machine fails.",
    },
  ],
  figure: {
    label: "Fig. 1",
    title: "One problem, several areas",
    caption:
      "Illustrative scenario. This problem touches all six areas; many touch only one or two.",
  },
  others: {
    heading: "Other problems touch fewer areas",
    items: [
      { text: "Replacing ageing servers", areas: ["01"] as PillarNo[] },
      { text: "Securing remote access for staff", areas: ["01", "02"] as PillarNo[] },
      { text: "Faster, trusted month-end reporting", areas: ["03", "04"] as PillarNo[] },
      { text: "Automating invoice processing", areas: ["03", "05"] as PillarNo[] },
    ],
  },
};

/** source: positioning (method and belief; no track record implied) */
export const principles = [
  {
    no: "01",
    rule: "Architecture outlives the project.",
    text: "We design for the estate you will run for years, not only for go-live. What we build is documented and built to be maintained by the people who inherit it.",
  },
  {
    no: "02",
    rule: "One owner across the boundaries.",
    text: "When a problem crosses technology areas, most failures happen at the edges. We take responsibility for how the parts work together, not only for our own part.",
  },
  {
    no: "03",
    rule: "Secure by design.",
    text: "Access control, segmentation, data protection and audit trails are designed in from the first drawing, not added after an incident.",
  },
  {
    no: "04",
    rule: "Validate before you scale.",
    text: "Migrations are rehearsed, data is reconciled, pilots are measured and models are tested on your own data before anything is rolled out widely.",
  },
  {
    no: "05",
    rule: "Delivered, documented, handed over.",
    text: "Transparent implementation and deliberate knowledge transfer, so your team understands, and can operate, what was built.",
  },
];

/** Method, in customer-friendly language. */
export const methodIntro = {
  heading: "Four steps, whatever the size of the job.",
  lede: "The same four steps apply to a network upgrade, an ERP migration or an AI pilot. Each step ends with something you can review before the next one begins.",
  io: ["In — a business need", "Out — a result you can verify"],
  loop: "What we measure shapes the next step: scale, adjust or stop",
};

export const method = [
  {
    no: "01",
    name: "Understand",
    text: "We start with your business: what is happening today, what should happen instead, and how we will both know it worked.",
    output: "Agreed goals and success measures",
  },
  {
    no: "02",
    name: "Architect",
    text: "We look at what you already have and design the solution around it, reusing what works.",
    output: "A design and a plan you can review",
  },
  {
    no: "03",
    name: "Build",
    text: "We implement in stages you can see and test, not in one big reveal at the end.",
    output: "Working systems in your environment",
  },
  {
    no: "04",
    name: "Measure",
    text: "We check the result against the goals agreed at the start, then decide with you what comes next.",
    output: "Evidence for the next decision",
  },
];

/**
 * Engagement stages. No durations, pricing or response times are published.
 */
export const engageIntro = {
  heading: "Start where you are.",
  lede: "Five ways to work with us. Start at whichever stage fits: many clients begin with a discovery workshop; others arrive with a design already agreed, or need support for systems that are already running.",
};

export const engagements = [
  {
    no: "01",
    name: "Discovery Workshop",
    purpose: "Align on the business goals, the systems involved and the priorities.",
    bring: "The people who own the process and the systems",
    leave: "A prioritised set of opportunities and a shared view of success",
  },
  {
    no: "02",
    name: "Architecture Assessment",
    purpose: "Review what you have today and pinpoint the gaps that matter.",
    bring: "Access to systems, documentation and their owners",
    leave: "A current-state map, the gaps that matter, and a recommended target architecture",
  },
  {
    no: "03",
    name: "Proof of Value",
    purpose: "Prove an outcome on your own systems and data before committing to scale.",
    bring: "A defined use case and access to what it needs",
    leave: "A working result and the evidence to decide whether to proceed",
  },
  {
    no: "04",
    name: "Design & Delivery",
    purpose: "Design, build, migrate and integrate: the implementation itself.",
    bring: "A decision to proceed and a named owner on your side",
    leave: "Working, documented systems in your environment",
  },
  {
    no: "05",
    name: "Operate & Support",
    purpose: "Administer, maintain and support what is running.",
    bring: "Access and an agreed way to raise issues",
    leave: "Systems that stay maintained, monitored and supported",
  },
];

export const contact = {
  heading: "Tell us what needs to work better.",
  text: "Whether it is one system or several, describe the problem. We will tell you honestly whether we can help, and where we would start.",
};

/* ─── Capabilities page ───────────────────────────────────── */

export const capabilitiesPage = {
  title: "Capabilities · Resiper Labs",
  description:
    "Infrastructure and networks, cyber security, applications and enterprise systems, data and analytics, AI and automation, and connected industrial systems.",
  heading: "Six capability areas across enterprise technology.",
  intro:
    "Each area stands on its own, and most engagements start with one. When a problem crosses areas, we engineer the pieces to work together.",
  lifecycle: ["Design", "Build", "Migrate", "Integrate", "Support"],
};
