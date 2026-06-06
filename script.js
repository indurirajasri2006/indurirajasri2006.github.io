// Grab the toggle button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Listen for a user click event
themeToggleBtn.addEventListener('click', () => {
    // Check current active data-theme attribute value
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
