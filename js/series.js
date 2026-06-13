
console.log("Il file series.js è stato caricato correttamente!");

document.addEventListener("DOMContentLoaded", async () => {
    const seriesGrid = document.getElementById("seriesGrid");

    if (!seriesGrid) return;

    seriesGrid.innerHTML = "<p class='loading'>Caricamento Serie TV in tendenza...</p>";

    const seriesList = await fetchFromTMDB("trending/tv/week");

    seriesGrid.innerHTML = "";

    if (!seriesList || seriesList.length === 0) {
        seriesGrid.innerHTML = "<p class='error'>Impossibile caricare le serie TV. Verifica la connessione.</p>";
        return;
    }

    seriesList.forEach((tvShow) => {
        const card = document.createElement("div");
        card.classList.add("movie-card"); 

        // Controllo validità immagine di copertina
        const posterUrl = tvShow.poster_path 
            ? `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`
            : "https://via.placeholder.com/500x750?text=Nessuna+Immagine";

        const airYear = tvShow.first_air_date 
            ? tvShow.first_air_date.split("-")[0] 
            : "N/A";

        card.innerHTML = `
            <img src="${posterUrl}" alt="Locandina di ${tvShow.name}">
            <div class="card-info">
                <span class="card-title">${tvShow.name}</span>
                <span class="card-year">${airYear}</span>
            </div>
        `;

        card.addEventListener("click", () => {
            alert(`Hai selezionato la serie TV: ${tvShow.name}\nValutazione media: ${tvShow.vote_average.toFixed(1)}/10`);
        });

        seriesGrid.appendChild(card);
    });
});