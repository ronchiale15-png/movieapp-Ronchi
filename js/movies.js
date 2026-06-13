
console.log("Il file movies.js è stato caricato e collegato con successo!");

document.addEventListener("DOMContentLoaded", async () => {
    const movieGrid = document.getElementById("movieGrid");

    if (!movieGrid) return;


    movieGrid.innerHTML = "<p class='loading'>Caricamento film in sala...</p>";

    const movies = await fetchFromTMDB("movie/now_playing");

    movieGrid.innerHTML = "";

    if (!movies || movies.length === 0) {
        movieGrid.innerHTML = "<p class='error'>Impossibile caricare i film. Verifica la connessione.</p>";
        return;
    }

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
            alert(`Dettagli film: ${movie.title}`);
        });

        movieGrid.appendChild(card);
    });
});