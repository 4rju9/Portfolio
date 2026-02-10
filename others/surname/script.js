function toggleLanguage(language) {
            
    document.querySelector('.english').classList.remove('active');
    document.querySelector('.hindi').classList.remove('active');
    document.querySelector(`.${language}`).classList.add('active');
}
function navigateToDetailed() {
    window.location.href = "index.html";
}
function navigateToSummary() {
    window.location.href = "summary.html";
}