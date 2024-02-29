// Container for toggle
const themeToggleBtn = document.querySelector('.theme-toggle');

// Keeps track of local storage
const theme = localStorage.getItem("theme");

// Loads information in the browser
theme && document.body.classList.add(theme)

// Handles toggling of theme
handleThemeToggle = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode")
    
  } else {
    localStorage.removeItem("theme");
}}

// Listens for "click" event; light/dark mode is activated
themeToggleBtn.addEventListener("click", handleThemeToggle);

