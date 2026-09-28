/**
 * Page-level enhancements. Everything here is optional: without it, all
 * content is visible and all sections are reachable.
 *  - reveal: adds .is-in to [data-reveal] / [data-draw] as they enter view
 *  - readout: the fixed instrument label showing the current section
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
cycle();
