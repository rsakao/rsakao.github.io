(() => {
  const data = window.PORTFOLIO;
  if (!data) return;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  setText("[data-site-name]", data.siteName);
  setText("[data-owner]", data.owner);
  setText("[data-availability]", data.availability);
  setText("[data-mission]", data.mission);
  setText("[data-hero-description]", data.heroDescription);
  setText("[data-year]", new Date().getFullYear());

  document.title = `${data.owner} | AI Product Builder`;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[name="description"]').content = `${data.mission} — ${data.heroDescription}`;

  const bio = document.querySelector("[data-bio]");
  data.bio.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    bio.append(node);
  });

  const facts = document.querySelector("[data-profile-facts]");
  data.facts.forEach(({ label, value }) => {
    const wrapper = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    wrapper.append(term, description);
    facts.append(wrapper);
  });

  const stack = document.querySelector("[data-stack]");
  data.stack.forEach((item) => {
    const node = document.createElement("span");
    node.textContent = item;
    stack.append(node);
  });

  const projects = document.querySelector("[data-projects]");
  data.projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";

    const number = document.createElement("span");
    number.className = "project-index";
    number.textContent = String(index + 1).padStart(2, "0");

    const titleBlock = document.createElement("div");
    titleBlock.className = "project-title";
    const title = document.createElement("h3");
    title.textContent = project.title;
    const category = document.createElement("p");
    category.textContent = project.category;
    titleBlock.append(title, category);

    if (project.status) {
      const status = document.createElement("span");
      status.className = "project-status";
      status.textContent = project.status;
      titleBlock.append(status);
    }

    const summary = document.createElement("p");
    summary.className = "project-summary";
    summary.textContent = project.summary;

    const links = document.createElement("div");
    links.className = "project-links";
    (project.links || []).filter(({ url }) => url).forEach(({ label, url }) => {
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = url;
      link.textContent = `${label} ↗`;
      if (url.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      links.append(link);
    });

    card.append(number, titleBlock, summary, links);
    projects.append(card);
  });

  const achievements = document.querySelector("[data-achievements]");
  data.achievements.forEach((achievement) => {
    const item = document.createElement("li");
    item.className = "achievement-item";
    const year = document.createElement("time");
    year.textContent = achievement.year;
    const body = document.createElement("div");
    const title = document.createElement("h3");
    const detail = document.createElement("p");
    title.textContent = achievement.title;
    detail.textContent = achievement.detail;
    body.append(title, detail);
    item.append(year, body);
    achievements.append(item);
  });

  const socialLinks = document.querySelector("[data-social-links]");
  data.socialLinks.filter(({ url }) => url).forEach(({ label, url }) => {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${label} ↗`;
    socialLinks.append(link);
  });

  const header = document.querySelector("[data-header]");
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  }
})();
