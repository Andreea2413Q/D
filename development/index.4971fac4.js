document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.getElementById("filtre");
    const filterMenu = document.getElementById("filter-menu");
    filterButton.addEventListener("click", function() {
        if (filterMenu.classList.contains("show")) {
            filterMenu.classList.remove("show");
            setTimeout(function() {
                filterMenu.classList.add("hidden");
            }, 1);
        } else {
            filterMenu.classList.remove("hidden");
            setTimeout(function() {
                filterMenu.classList.add("show");
            }, 1);
        }
    });
});

//# sourceMappingURL=index.4971fac4.js.map
