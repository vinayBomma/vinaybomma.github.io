const apps = [
  { name: "Calry", slug: "calry", summary: "A calm nutrition tracker with AI meal logging, barcode scanning, and weekly insights.", badge: "Smart Food Tracker", theme: "emerald", category: "Health & Fitness" },
  { name: "Coulda", slug: "coulda", summary: "A procrastination-busting task app with roasts, streaks, reports, and modes.", badge: "Procrastination Coach", theme: "ember", category: "Productivity" },
  { name: "Toki", slug: "toki", summary: "A private offline journal with prompts, moods, lock, exports, and optional AI reflection.", badge: "Private Journal", theme: "paper", category: "Lifestyle" },
  { name: "Twister", slug: "twister", summary: "A tongue-twister challenge app with 100+ languages, recordings, streaks, and badges.", badge: "Tongue Twister Challenge", theme: "violet", category: "Education & Games" },
];

const appGrid = document.querySelector("#app-grid");

if (appGrid) {
  appGrid.innerHTML = apps
    .map(
      (app) => `
        <a class="home-app-card" data-theme="${app.theme}" href="/${app.slug}/" aria-label="Explore ${app.name}">
          <div class="card-top">
            <img class="app-icon" src="/assets/icons/${app.slug}.png" alt="${app.name} app icon" loading="lazy" />
            <span class="app-badge">${app.badge}</span>
          </div>
          <div class="home-card-preview">
            <img src="/assets/screenshots/${app.slug}/1.png" alt="${app.name} screenshot preview" loading="lazy" />
          </div>
          <div class="card-bottom">
            <div>
              <p class="section-label">${app.category}</p>
              <h3>${app.name}</h3>
              <p>${app.summary}</p>
              <span>Features · Screenshots · Privacy · Terms</span>
            </div>
            <span class="arrow">→</span>
          </div>
        </a>
      `,
    )
    .join("");
}
