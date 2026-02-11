const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;

if (initialDark) {
  root.classList.add("dark");
}

themeToggle.textContent = root.classList.contains("dark") ? "🌙" : "☀️";

themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  const isDark = root.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

yearEl.textContent = String(new Date().getFullYear());
