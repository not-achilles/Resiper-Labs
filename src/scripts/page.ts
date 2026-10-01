/**
 * Page-level enhancements. Everything here is optional: without it, all
 * content is visible and all sections are reachable.
 *  - reveal: adds .is-in to [data-reveal] / [data-draw] as they enter view
 *  - readout: the fixed instrument label showing the current section
 *  - masthead: fixed-header state, active nav link and the mobile menu
 */

const reveal = (): void => {
  const targets = document.querySelectorAll<HTMLElement | SVGElement>("[data-reveal], [data-draw]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
  );
  targets.forEach((el) => io.observe(el));
};

const readout = (): void => {
  const noEl = document.querySelector<HTMLElement>("[data-readout-no]");
  const labelEl = document.querySelector<HTMLElement>("[data-readout-label]");
  const barEl = document.querySelector<HTMLElement>("[data-readout-bar]");
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
  if (!noEl || !labelEl || !barEl || sections.length === 0) return;

  let ticking = false;
  const update = (): void => {
    ticking = false;
    const probe = window.innerHeight * 0.85;
    let current = sections[0]!;
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= probe) current = s;
    }
    const no = current.dataset["section"] ?? "00";
    const label = current.dataset["label"] ?? "";
    if (noEl.textContent !== no) noEl.textContent = no;
    if (labelEl.textContent !== label) labelEl.textContent = label;

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    barEl.style.setProperty("--progress", progress.toFixed(4));

    const plate = document.querySelector<HTMLElement>("[data-plate]");
    if (plate) {
      const r = plate.getBoundingClientRect();
      const y = window.innerHeight - 32;
      document.documentElement.classList.toggle("is-on-plate", r.top < y && r.bottom > y);
    }
  };
  const request = (): void => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  update();
};

/**
 * Fixed header: shows its rule once the page scrolls, publishes its height
 * for anchor offsets, marks the nav link for the section in view, and runs
 * the narrow-screen Menu toggle.
 */
const masthead = (): void => {
  const header = document.querySelector<HTMLElement>("[data-masthead]");
  if (!header) return;
  const root = document.documentElement;
  const toggle = header.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const toggleLabel = header.querySelector<HTMLElement>("[data-nav-toggle-label]");
  const nav = header.querySelector<HTMLElement>("[data-nav]");
  const links = Array.from(header.querySelectorAll<HTMLAnchorElement>("[data-nav-target]"));
  const targets = links
    .map((a) => document.getElementById(a.dataset["navTarget"] ?? ""))
    .filter((el): el is HTMLElement => el !== null);

  const setOpen = (open: boolean): void => {
    header.classList.toggle("is-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    if (toggleLabel) toggleLabel.textContent = open ? "Close" : "Menu";
  };

  const measure = (): void => {
    if (header.classList.contains("is-open")) return;
    root.style.setProperty("--header-offset", `${header.offsetHeight}px`);
  };

  let ticking = false;
  const update = (): void => {
    ticking = false;
    header.classList.toggle("is-scrolled", window.scrollY > 4);

    // The section whose top has passed 40% of the viewport is "current"
    const probe = window.innerHeight * 0.4;
    let current: HTMLElement | null = null;
    for (const t of targets) {
      if (t.getBoundingClientRect().top <= probe) current = t;
    }
    // Once the last target has scrolled fully past, nothing is current
    if (current && current.getBoundingClientRect().bottom < header.offsetHeight) current = null;
    for (const a of links) {
      if (current && a.dataset["navTarget"] === current.id)
        a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    }
  };
  const request = (): void => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  if (toggle && nav) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    nav.addEventListener("click", (e) => {
      if ((e.target as Element).closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 48em)").addEventListener("change", (mq) => {
      if (mq.matches) setOpen(false);
    });
  }

  new ResizeObserver(measure).observe(header);
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  measure();
  update();
};

/**
 * Hero example cycle: switches the highlighted configuration of the area map
 * (one area, two, several). Pauses off-screen, when the tab is hidden, or via
 * the Pause button (WCAG 2.2.2). Never runs with reduced motion.
 */
const cycle = (): void => {
  const fig = document.querySelector<HTMLElement>("[data-cycle]");
  if (!fig) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const states = JSON.parse(fig.dataset["cycle"] ?? "[]") as {
    id: string;
    count: string;
    example: string;
  }[];
  if (states.length < 2) return;
  const maps = fig.querySelectorAll<SVGElement>("[data-cycle-target]");
  const countEl = fig.querySelector<HTMLElement>("[data-cycle-count]");
  const exampleEl = fig.querySelector<HTMLElement>("[data-cycle-example]");
  const toggle = fig.querySelector<HTMLButtonElement>("[data-cycle-toggle]");
  const label = fig.querySelector<HTMLElement>("[data-cycle-label]");

  let i = 0; // matches the static default rendered in the HTML
  let timer = 0;
  let userPaused = false;
  let visible = true;

  const show = (n: number): void => {
    const s = states[n]!;
    maps.forEach((m) => m.setAttribute("data-state", s.id));
    if (countEl) countEl.textContent = s.count;
    if (exampleEl) exampleEl.textContent = s.example;
  };
  const running = (): boolean => !userPaused && visible && !document.hidden;
  const sync = (): void => {
    window.clearInterval(timer);
    timer = 0;
    maps.forEach((m) => m.classList.toggle("is-paused", !running()));
    if (running()) {
      timer = window.setInterval(() => {
        i = (i + 1) % states.length;
        show(i);
      }, 3800);
    }
  };

  show(i);
  if (toggle && label) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      userPaused = !userPaused;
      label.textContent = userPaused ? "Play" : "Pause";
      sync();
    });
  }
  new IntersectionObserver(([e]) => {
    visible = e?.isIntersecting ?? false;
    sync();
  }).observe(fig);
  document.addEventListener("visibilitychange", sync);
};

reveal();
readout();
masthead();
cycle();
