document.addEventListener("DOMContentLoaded", () => {
  //--------------------------
  // DARK MODE TOGGLE BUTTON
  //--------------------------

  const toggleButton = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  toggleButton.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    toggleButton.textContent =
      newTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

  //--------------------------
  // LOAD LOCATIONS BY AJAX THE AYAX
  //--------------------------
  fetch("/api/locationsApi")
    .then((res) => res.json())
    .then((locations) => {
      const container = document.getElementById("location-cards");

      locations.forEach((loc) => {
        container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <img src="${loc.image}" class="card-img-top" alt="${loc.name}">
                        <div class="card-body">
                            <h5 class="card-title"> ${loc.name}</h5>
                            <p class="card-text">${loc.description}</p>
                        </div>
                    </div>
                </div>
            `;
      });
    });
});
