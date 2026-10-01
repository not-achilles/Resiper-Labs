/**
 * Resiper Labs: site copy (specialist data direction).
 *
 * Content rules:
 *  - Resiper Labs is a specialist data engineering company: data management,
 *    consolidation, data platforms, semantic layer & analytics, AI on data,
 *    IoT & real-time data. Infrastructure appears only as supporting cloud
 *    infrastructure for data workloads.
 *  - Factual statements are owner-confirmed. Everything else is method,
 *    principle or capability language that implies no track record.
 *  - Examples are labelled illustrative and contain no invented numbers.
 *  - No invented clients, numbers, testimonials, partnerships or certifications.
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
  title: "Resiper Labs · Data engineering, analytics, AI on data and IoT",
  description:
    "Resiper Labs consolidates enterprise and machine data, builds data platforms on Microsoft Fabric, Databricks and AWS, gives data one business meaning, and puts analytics and AI to work on it.",
};

export const nav = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/#method", label: "Approach" },
  { href: "/#engage", label: "Engage" },
  { href: "/#contact", label: "Contact" },
];

/** source: owner, 2026-10-01 (exact wording) */
export const footer = {
  closing: "Tell us about your Data",
};

/* ─── Capabilities ────────────────────────────────────────── */

export type CapNo = "01" | "02" | "03" | "04" | "05" | "06";

/** Stages of the conceptual data journey (not a sequence clients must buy). */
export type Stage =
  "sources" | "consolidate" | "foundation" | "semantic" | "intelligence" | "action";

export interface Capability {
  no: CapNo;
  slug: string;
  name: string;
  line: string;
  problem: string;
  intro: string;
  keywords: string[];
  groups: { title: string; items: string[] }[];
  tech: string;
  related: { no: CapNo; why: string }[];
  example: { title: string; text: string };
  /** Where it sits in the data journey (for the journey glyph) */
  place: { stages: Stage[]; iot?: boolean; governance?: boolean };
}

/** source: owner business direction, 2026-09-28 (confirmed niche areas + Sales Pitch) */
export const capabilities: Capability[] = [
  {
    no: "01",
    slug: "data-management",
    name: "Data Management",
    line: "Data that is governed, documented and fit to use.",
    problem:
      "Nobody is quite sure which data is correct, who owns it, or whether it can be trusted for a decision.",
    intro:
      "We set up the architecture, ownership and rules that keep data accurate, secure and understood, so every other use of it rests on something reliable.",
    keywords: ["Data architecture", "Governance", "Data quality", "Master data", "Lineage"],
    groups: [
      {
        title: "Architecture",
        items: ["Data architecture and modelling", "Data standards and naming conventions"],
      },
      {
        title: "Governance",
        items: [
          "Data ownership and stewardship",
          "Access rules and handling of sensitive data",
          "Lineage: where data comes from and how it changes",
        ],
      },
      {
        title: "Quality",
        items: ["Data quality rules and monitoring", "Master data management"],
      },
    ],
    tech: "Across Microsoft Fabric, Databricks and AWS environments",
    related: [
      { no: "02", why: "Consolidation needs agreed rules for matching and cleaning data." },
      { no: "04", why: "Governed data is what makes shared business definitions trustworthy." },
      { no: "05", why: "AI should only read data whose origin and quality are known." },
    ],
    example: {
      title: "One revenue figure",
      text: "Three departments report different revenue totals. A shared definition, a named owner and quality checks give everyone the same number.",
    },
    place: { stages: [], governance: true },
  },
  {
    no: "02",
    slug: "data-consolidation",
    name: "Data Consolidation",
    line: "Scattered data, brought into one coherent environment.",
    problem:
      "Data sits in ERPs, CRMs, spreadsheets, plant systems and cloud applications that were never designed to work together.",
    intro:
      "We build batch and real-time pipelines that bring data out of each system, reconcile it, and land it in one place in a consistent shape.",
    keywords: ["Data pipelines", "ETL / ELT", "Integration", "Reconciliation", "Migration"],
    groups: [
      {
        title: "Ingestion",
        items: [
          "Batch and real-time data pipelines (ETL / ELT)",
          "Connections to ERP, CRM, files and cloud applications",
        ],
      },
      {
        title: "Reconciliation",
        items: [
          "Matching and de-duplicating records across systems",
          "Consolidation into a single, query-ready model",
        ],
      },
      {
        title: "Migration",
        items: [
          "Moving on-premises data estates to the cloud",
          "Consolidating legacy databases and reporting stores",
        ],
      },
    ],
    tech: "AWS · Databricks · Microsoft Fabric",
    related: [
      {
        no: "01",
        why: "Consolidation follows the data rules and ownership agreed in data management.",
      },
      { no: "03", why: "Consolidated data lands in a data lake, lakehouse or warehouse." },
      { no: "06", why: "Machine data can be consolidated alongside business data." },
    ],
    example: {
      title: "One customer view",
      text: "Customer records held separately in the ERP, the CRM and the billing system are matched and combined into one view of each customer.",
    },
    place: { stages: ["consolidate"] },
  },
  {
    no: "03",
    slug: "data-platforms",
    name: "Data Platforms",
    line: "The right home for data: data lake, lakehouse or Fabric Data Warehouse.",
    problem:
      "Data platforms that grew by accident: hard to scale, costly to run, and slow to answer new questions.",
    intro:
      "We design and build the platform that fits your data and your team, whether that is a data lake or lakehouse, a Microsoft Fabric Data Warehouse, or a combination, on the cloud you use.",
    keywords: [
      "Data lake",
      "Lakehouse",
      "Fabric Data Warehouse",
      "Cloud data platforms",
      "Data engineering",
    ],
    groups: [
      {
        title: "Data lake & lakehouse",
        items: ["Data lake and lakehouse architecture", "Raw, processed and archive data zones"],
      },
      {
        title: "Fabric Data Warehouse",
        items: [
          "Microsoft Fabric Data Warehouse design and build",
          "Migration of existing warehouses and Power BI estates to Microsoft Fabric",
        ],
      },
      {
        title: "Cloud data platforms",
        items: ["Data platforms on AWS and Databricks", "Cloud infrastructure for data workloads"],
      },
      {
        title: "Data engineering",
        items: ["Orchestration and scheduling", "Performance and cost tuning"],
      },
    ],
    tech: "Microsoft Fabric · Fabric Data Warehouse · Databricks · AWS",
    related: [
      { no: "02", why: "Pipelines feed the platform from every source system." },
      { no: "04", why: "The semantic layer sits on top of the platform." },
      { no: "05", why: "AI works on data held and prepared in the platform." },
    ],
    example: {
      title: "A warehouse that has outgrown its server",
      text: "A reporting database that no longer keeps up moves into a Fabric Data Warehouse, and the existing Power BI reports are reconnected to it.",
    },
    place: { stages: ["foundation"] },
  },
  {
    no: "04",
    slug: "semantic-layer",
    name: "Semantic Layer & Analytics",
    line: "One business meaning for every number.",
    problem:
      "The same term means different things in different systems and teams, so the same question gets different answers.",
    intro:
      "We build the semantic layer: shared business definitions and models that sit between the data and every report, dashboard and AI tool, so everyone works from the same meaning.",
    keywords: [
      "Business definitions",
      "Semantic models",
      "Power BI",
      "Microsoft Fabric",
      "Analytics",
    ],
    groups: [
      {
        title: "Semantic layer",
        items: [
          "Business definitions and metrics",
          "Semantic models",
          "Consistent hierarchies, calculations and access rules",
        ],
      },
      {
        title: "Analytics",
        items: [
          "Power BI reports and dashboards",
          "Power BI and Microsoft Fabric architecture",
          "Self-service analytics on governed data",
        ],
      },
      {
        title: "Decision support",
        items: ["Forecasting and trend analysis", "Anomaly detection"],
      },
    ],
    tech: "Power BI · Microsoft Fabric",
    related: [
      { no: "01", why: "Definitions are only as good as the governance behind them." },
      { no: "03", why: "Semantic models are built on the data platform." },
      { no: "05", why: "AI uses the same definitions, so its answers match the reports." },
    ],
    example: {
      title: "What counts as an active customer",
      text: "'Active customer' is defined once, with its rule, and every report, dashboard and AI query uses that same definition.",
    },
    place: { stages: ["semantic", "intelligence"] },
  },
  {
    no: "05",
    slug: "ai-on-data",
    name: "AI on Data",
    line: "AI that works on your data, not around it.",
    problem:
      "AI pilots that look impressive but give unreliable answers, because the data underneath them is scattered or inconsistent.",
    intro:
      "We build AI on top of a governed data foundation and semantic layer. People can ask questions of their data, get assisted analysis, and automate the decisions the data supports.",
    keywords: [
      "Conversational data",
      "Applied AI",
      "Machine learning",
      "AI agents",
      "Data-driven automation",
    ],
    groups: [
      {
        title: "Conversational data",
        items: [
          "Ask questions of your data in plain language",
          "Answers grounded in governed data and business definitions",
        ],
      },
      {
        title: "Applied AI",
        items: [
          "Machine learning for forecasting, classification and anomaly detection",
          "AI-assisted analysis and summarisation",
          "Understanding documents and unstructured text",
        ],
      },
      {
        title: "Agents & automation",
        items: [
          "AI agents where the task and the data justify them",
          "Automation triggered by trusted data",
          "Human review designed into automated steps",
        ],
      },
      {
        title: "Assurance",
        items: [
          "Evaluation for accuracy, cost and latency",
          "Deployment in your environment or through enterprise APIs",
        ],
      },
    ],
    tech: "Microsoft Fabric · Databricks · AWS",
    related: [
      { no: "03", why: "AI reads from the data platform, not from each source system." },
      { no: "04", why: "The semantic layer gives AI the same meaning your reports use." },
      { no: "06", why: "Machine data lets AI detect and predict what happens on the floor." },
    ],
    example: {
      title: "A question in plain language",
      text: "A sales manager asks which regions are behind plan this quarter. The answer comes from the governed sales model, using the agreed definition of 'plan'.",
    },
    place: { stages: ["intelligence", "action"] },
  },
  {
    no: "06",
    slug: "iot",
    name: "IoT & Real-Time Data",
    line: "Machine and device data, connected to the systems that need it.",
    problem:
      "Machines and sites produce a constant stream of data that stays on the shop floor, disconnected from the rest of the business.",
    intro:
      "We collect data from devices, sensors and industrial systems, move it in real time, and bring it into the same data environment as the rest of the business, where it can be analysed and acted on.",
    keywords: [
      "Device data",
      "Machine data",
      "Real-time ingestion",
      "Real-time analytics",
      "Alerts",
    ],
    groups: [
      {
        title: "Device & machine data",
        items: [
          "Sensor and device data collection",
          "Integration with PLCs, historians and plant systems",
        ],
      },
      {
        title: "Real-time",
        items: [
          "Streaming ingestion, from the edge to the cloud",
          "Real-time monitoring and operational analytics",
          "Alerts when readings move out of range",
        ],
      },
      {
        title: "Connected to the business",
        items: [
          "Combining machine data with ERP and maintenance data",
          "History kept for analysis and AI",
        ],
      },
    ],
    tech: "AWS · Microsoft Fabric · Databricks",
    related: [
      { no: "02", why: "Machine data is consolidated with business data." },
      { no: "03", why: "Readings are stored in the platform for history and analysis." },
      { no: "05", why: "Models use machine data to detect and predict issues." },
    ],
    example: {
      title: "A motor drifting out of range",
      text: "Vibration readings from a motor stream in real time. When they drift out of range, maintenance is alerted with the machine's history attached.",
    },
    place: { stages: ["action"], iot: true },
  },
];

export const capByNo = (no: CapNo): Capability => capabilities.find((c) => c.no === no)!;

/* ─── Home ────────────────────────────────────────────────── */

export const hero = {
  kicker: [
    "Data management",
    "Consolidation",
    "Data platforms",
    "Semantic layer",
    "AI on data",
    "IoT",
  ],
  headline: "Engineering data into decisions",
  statement:
    "Resiper Labs is a specialist data engineering company. We consolidate data from scattered systems and machines, build the platforms that hold it, give it one business meaning, and put analytics and AI to work on top of it.",
  figure: {
    label: "Fig. 0",
    title: "One meaning",
    caption:
      "Different systems name the same thing differently. Consolidated and defined once, it means the same thing to every report, dashboard, AI tool and alert. Field names are illustrative.",
  },
  /** Illustrative examples for the hero figure. Invented field names; no client data. */
  states: [
    {
      id: "a",
      term: "Customer",
      definition: ["One record per customer,", "matched across systems"],
      sources: [
        ["ERP", "CUST_NO"],
        ["CRM", "account_id"],
        ["Billing", "client_ref"],
        ["Spreadsheet", "Customer Name"],
      ],
    },
    {
      id: "b",
      term: "Product",
      definition: ["One code and hierarchy across", "sales, stock and finance"],
      sources: [
        ["ERP", "ITEM_CODE"],
        ["Warehouse", "sku"],
        ["E-commerce", "product_id"],
        ["Finance", "prod_ref"],
      ],
    },
    {
      id: "c",
      term: "Machine",
      definition: ["One asset ID linking sensor", "readings to maintenance history"],
      sources: [
        ["Sensor", "LN2-MTR-07"],
        ["Historian", "TAG_4471"],
        ["Maintenance", "ASSET-0231"],
        ["ERP", "EQUIP_NO"],
      ],
    },
  ],
  consumers: ["Reports", "Dashboards", "AI", "Alerts"],
};

export const problem = {
  heading: "Data is everywhere. Usable data is not.",
  body: [
    "In most organisations, data is spread across ERPs, CRMs, spreadsheets, cloud applications and the machines on the floor. Each system has its own formats, and its own names for the same things.",
    "So reports disagree, simple questions take days to answer, and AI tools give confident answers built on inconsistent data. The problem is rarely a lack of data. It is the missing layer that makes data usable.",
  ],
  symptoms: [
    "The same question gets three different answers",
    "Reports are rebuilt by hand every month",
    "Machine data never leaves the plant",
    "AI pilots nobody trusts enough to use",
  ],
};

export const capabilitiesSection = {
  heading: "Six specialisms. One discipline: data.",
  note: "Engage us for one of them, or for several. Open a capability for its scope.",
};

/** Conceptual data journey. Not a sequence every client must buy. */
export const journey = {
  heading: "The data journey.",
  intro:
    "How data becomes useful, from the systems where it starts to the decisions and actions it supports. Most clients need part of this journey, not all of it.",
  stages: [
    { id: "sources" as Stage, name: "Sources", sub: "ERP · CRM · files · cloud apps", cap: "" },
    {
      id: "consolidate" as Stage,
      name: "Consolidate",
      sub: "Pipelines · reconciliation",
      cap: "02",
    },
    {
      id: "foundation" as Stage,
      name: "Foundation",
      sub: "Data lake · Fabric Data Warehouse",
      cap: "03",
    },
    { id: "semantic" as Stage, name: "Semantic layer", sub: "One business meaning", cap: "04" },
    {
      id: "intelligence" as Stage,
      name: "Analytics & AI",
      sub: "Reports · AI on data",
      cap: "04 · 05",
    },
    {
      id: "action" as Stage,
      name: "Action",
      sub: "Decisions and alerts",
      cap: "",
    },
  ],
  iot: { name: "IoT & real-time data", sub: "Devices · sensors · machines", cap: "06" },
  governance: {
    name: "Data management",
    sub: "Architecture · governance · quality",
    cap: "01",
  },
  figure: {
    label: "Fig. 1",
    title: "The data journey",
    caption:
      "Business data and machine data follow the same path to usefulness. Data management governs every stage. A client may need one stage or several.",
  },
};

export const foundation = {
  heading: "AI is only as good as the data under it.",
  lede: "Analytics and AI inherit every inconsistency in the data they read. That is why we start with the data, and build analytics and AI on top of it.",
  rows: [
    ["Each system defines 'customer' differently", "One definition, used by every report and tool"],
    [
      "AI answers vary with the source it happens to read",
      "AI answers come from governed, consistent data",
    ],
    ["Machine data stays on the shop floor", "Machine data sits alongside business data"],
    [
      "Every new question starts a new data project",
      "New questions use data that is already prepared",
    ],
  ],
};

export const examples = {
  heading: "What it looks like in practice.",
  intro:
    "Three illustrative examples of the kind of work we do. They show the shape of the work, not results from a specific client.",
  items: [
    {
      title: "Reporting everyone agrees on",
      steps: [
        "Fragmented data in ERP, CRM and spreadsheets",
        "Consolidated into one data environment",
        "Semantic model with agreed definitions",
        "Business reporting in Power BI",
      ],
      caps: ["02", "03", "04"] as CapNo[],
    },
    {
      title: "Machine data that raises an alert",
      steps: [
        "Machine and sensor data",
        "Real-time ingestion",
        "Real-time analytics",
        "Operational alert to the maintenance team",
      ],
      caps: ["06", "04"] as CapNo[],
    },
    {
      title: "Asking questions of business data",
      steps: [
        "Business data from core systems",
        "Governed data foundation",
        "Semantic layer",
        "AI query and analysis in plain language",
      ],
      caps: ["01", "03", "04", "05"] as CapNo[],
    },
  ],
};

/** source: leadership approval to name Apollo Tyres as a client (2026-09-28). Name only. */
export const clients = {
  label: "Client",
  names: ["Apollo Tyres"],
  note: "Named with permission.",
};

/** Method, in customer-friendly language. */
export const methodIntro = {
  heading: "Four steps, whatever the size of the job.",
  lede: "The same four steps apply to a data consolidation, a Fabric Data Warehouse or an AI-on-data pilot. Each step ends with something you can review before the next one begins.",
  io: ["In — a business need", "Out — a result you can verify"],
  loop: "What we measure shapes the next step: scale, adjust or stop",
};

export const method = [
  {
    no: "01",
    name: "Understand",
    text: "We start with your business: the decisions that matter, the data behind them today, and how we will both know it worked.",
    output: "Agreed goals and success measures",
  },
  {
    no: "02",
    name: "Architect",
    text: "We look at your systems and data as they are and design the target architecture around them, reusing what works.",
    output: "A design and a plan you can review",
  },
  {
    no: "03",
    name: "Build",
    text: "We build pipelines, platforms, models and AI in stages you can see and test, not in one big reveal at the end.",
    output: "Working data systems in your environment",
  },
  {
    no: "04",
    name: "Measure",
    text: "We check the result against the goals agreed at the start, then decide with you what comes next.",
    output: "Evidence for the next decision",
  },
];

/** Engagement stages. No durations, pricing or response times are published. */
export const engageIntro = {
  heading: "Start where you are.",
  lede: "Five ways to work with us. Start at whichever stage fits: many clients begin with a discovery workshop; others arrive with a design already agreed, or need support for a data platform that is already running.",
};

export const engagements = [
  {
    no: "01",
    name: "Discovery Workshop",
    purpose: "Align on the business goals, the data involved and the priorities.",
    bring: "The people who own the process and the data",
    leave: "A prioritised set of opportunities and a shared view of success",
  },
  {
    no: "02",
    name: "Architecture Assessment",
    purpose: "Review your data estate as it is today and pinpoint the gaps that matter.",
    bring: "Access to systems, documentation and data owners",
    leave: "A current-state map, the gaps that matter, and a recommended target architecture",
  },
  {
    no: "03",
    name: "Proof of Value",
    purpose: "Prove an outcome on your own data before committing to scale.",
    bring: "A defined use case and access to the data it needs",
    leave: "A working result and the evidence to decide whether to proceed",
  },
  {
    no: "04",
    name: "Design & Delivery",
    purpose: "Design and build pipelines, platforms, models and AI: the implementation itself.",
    bring: "A decision to proceed and a named owner on your side",
    leave: "Working, documented data systems in your environment",
  },
  {
    no: "05",
    name: "Operate & Support",
    purpose: "Run, monitor and support the data platform and what depends on it.",
    bring: "Access and an agreed way to raise issues",
    leave: "Pipelines, models and reports that stay maintained and supported",
  },
];

export const contact = {
  heading: "Tell us about your data.",
  text: "Where it lives, what you need from it, and what is getting in the way. We will tell you honestly whether we can help, and where we would start.",
};

/* ─── Capabilities page ───────────────────────────────────── */

export const capabilitiesPage = {
  title: "Capabilities · Resiper Labs",
  description:
    "Data management, data consolidation, data platforms and Fabric Data Warehouse, semantic layer and analytics, AI on data, and IoT and real-time data.",
  heading: "Six data specialisms, from raw data to AI.",
  intro:
    "Each capability stands on its own, and many engagements start with one. Together they cover the full journey from scattered data to decisions, analytics and AI.",
};
