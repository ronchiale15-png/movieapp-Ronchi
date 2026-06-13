
const TMDB_BASE = 'https://api.themoviedb.org/3/';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';


async function fetchFromTMDB(endpoint) {
    const url = TMDB_BASE + endpoint + '?api_key=' + API_KEY + '&language=it-IT';
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Risposta del server non valida');
        }
        
        const data = await response.json();
        
        return data.results || data;

    } catch (error) {
        console.error('Errore durante la chiamata API:', error);
        return [];
    }
}