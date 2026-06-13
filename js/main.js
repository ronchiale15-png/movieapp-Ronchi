document.addEventListener("DOMContentLoaded", async () => {
    const movieGrid = document.getElementById("movieGrid");
    if (!movieGrid) return;

    movieGrid.innerHTML = "<p class='loading'>Caricamento in corso...</p>";

    try {
        // Chiamata API sicura
        const movies = await fetchFromTMDB("trending/movie/day");
        movieGrid.innerHTML = "";

        if (!movies || movies.length === 0) {
            movieGrid.innerHTML = "<p class='error'>Nessun film trovato. Controlla la configurazione.</p>";
            return;
        }

        // Generazione delle tessere dei film
        movies.forEach((movie) => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const posterUrl = movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                : "https://via.placeholder.com/500x750?text=Nessuna+Immagine";

            const releaseYear = movie.release_date 
                ? movie.release_date.split("-")[0] 
                : "N/A";

            card.innerHTML = `
                <img src="${posterUrl}" alt="Locandina di ${movie.title}">
                <div class="card-info">
                    <span class="card-title">${movie.title}</span>
                    <span class="card-year">${releaseYear}</span>
                </div>
            `;

            card.addEventListener("click", () => {
                alert(`Hai cliccato sul film: ${movie.title}`);
            });

            movieGrid.appendChild(card);
        });

    } catch (error) {
        console.error("Errore critico durante il fetch:", error);
        movieGrid.innerHTML = "<p class='error'>Errore di rete o API Key non valida. Impossibile caricare i film.</p>";
    }
});