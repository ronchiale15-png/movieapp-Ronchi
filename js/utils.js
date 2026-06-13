
console.log("Il file utils.js è stato caricato correttamente!");

function getPosterUrl(posterPath) {
    if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
    return "https://via.placeholder.com/500x750?text=Nessuna+Immagine";
}

function getReleaseYear(dateString) {
    if (!dateString) return "N/A";
    return dateString.split("-")[0];
}