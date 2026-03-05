// 🌗 Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Save preference
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 🧠 Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Optional: Load saved language
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        document.getElementById('language-select').value = savedLang;
    }
});

// 🌍 Language selection redirect
function handleLanguageChange() {
    const lang = document.getElementById('language-select').value;
    localStorage.setItem('preferredLang', lang); // Save preference

    // Redirect to corresponding language file
    switch (lang) {
        case 'en': window.location.href = 'home_english.html'; break;
        case 'hi': window.location.href = 'home_hindi.html'; break;
        case 'ta': window.location.href = 'home_tamil.html'; break;
        case 'te': window.location.href = 'home_telugu.html'; break;
        case 'mr': window.location.href = 'home_marathi.html'; break;
        case 'gu': window.location.href = 'home_gujarati.html'; break;
        default: window.location.href = 'home_english.html'; break;
    }
}
