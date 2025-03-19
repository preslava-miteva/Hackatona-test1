document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-button");
    const searchBar = document.querySelector(".search-bar");

    searchButton.addEventListener("click", function () {
        performSearch();
    });

    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchBar.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search query!");
        }
    }
});