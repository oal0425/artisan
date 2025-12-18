const fetchLocations = () => {
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
};

const fetchArtisans = () => {
  fetch("/api/artisansApi")
    .then((res) => res.json())
    .then((artisans) => {
      const container = document.getElementById("artisan-cards");
      artisans.forEach((artisan) => {
        container.innerHTML += `
        <div class="col-md-4 mb-4">
              <div class="card shadow-sm h-100">
                  <img src="${artisan.image}" class="card-img-top" alt="${artisan.name}">
                  <div class="card-body">
                    <h5 class="card-title"> ${artisan.name}</h5>
                    <p class="card-text">${artisan.specialty}</p>
                  </div>
              </div>
        </div>
      `;
      });
    });
};

const fetchProducts = () =>{
  fetch("/api/productsApi")
  .then((res) => res.json())
  .then((products) =>{
    const container = document.getElementById("product-cards");
    products.forEach((product) => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
              <div class="card shadow-sm h-100">
                  <img src="${product.image}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                    <h5 class="card-title"> ${product.name}</h5>
                    <h6 class="card-price"> ${product.price}</h6>
                    <p class="card-text">${product.description}</p>
                  </div>
              </div>
        </div>
      `;
    })
  })
}

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

  fetchLocations();
  fetchArtisans();
  fetchProducts();
});
