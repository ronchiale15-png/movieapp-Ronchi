
console.log("Il file main.js è stato caricato e collegato con successo!");
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".movie-card");
    
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            alert(`Hai cliccato sul rettangolo del Film ${index + 1}!`);
        });
    });
});
