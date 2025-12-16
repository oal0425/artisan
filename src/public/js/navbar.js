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
});
