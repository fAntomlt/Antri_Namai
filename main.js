// Funkcija, rodanti pasirinkto mygtuko turinį ir slepianti kitą
function showContent(id) {
    document.querySelectorAll('.content').forEach(div => div.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Funkcija, kuri pašalina foną iš turinio blokų
function removeBg() {
    document.querySelectorAll('.content').forEach(div => div.style.background = 'none');
}