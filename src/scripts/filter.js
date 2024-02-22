document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filtre');
    const filterMenu = document.getElementById('filter-menu');

    filterButton.addEventListener('click', function() {
        // Verifică dacă meniul este deja afișat
        if (filterMenu.classList.contains('show')) {
            filterMenu.classList.remove('show'); // Ascunde meniul imediat dacă este afișat
            setTimeout(function() {
                filterMenu.classList.add('hidden');
            }, 1); // Readaugă clasa 'hidden' după o scurtă întârziere pentru a permite animația de ascundere
        } else {
            filterMenu.classList.remove('hidden'); // Înlătură clasa 'hidden' pentru a pregăti afișarea
            setTimeout(function() {
                filterMenu.classList.add('show'); // Adaugă clasa 'show' pentru a afișa meniul
            }, 1); // Adaugă o scurtă întârziere pentru a permite browser-ului să aplice modificările de stil
        }
    });
});
