// Grab the button once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('header-button');
  const root = document.documentElement; // <html>

  // Helper: read/write the current theme
  const getTheme = () => root.dataset.theme || 'light';
  const setTheme = (t) => {
    if (t === 'dark') {
      root.dataset.theme = 'dark';
    } else {
      delete root.dataset.theme;   // falls back to the default :root values
    }
    // Persist choice across page loads
    localStorage.setItem('theme', t);
    // Optional: update button label/icon
    btn.textContent = t === 'dark' ? '🌲' : '🌙';
  };

  // Load saved preference (if any)
  const saved = localStorage.getItem('theme');
  if (saved) setTheme(saved);

  // Click handler
  btn.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
});