const API_KEY = "33e94ed2"; 

function chercherFilm() {
  const titre = document.getElementById("search").value.trim();
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(titre)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const conteneur = document.getElementById("resultat");

      if (data.Response === "True") {
        conteneur.innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <img src="${data.Poster !== "N/A" ? data.Poster : ''}" alt="Affiche">
          <div class="info"><strong>Réalisateur :</strong> ${data.Director}</div>
          <div class="info"><strong>Genre :</strong> ${data.Genre}</div>
          <div class="info"><strong>Résumé :</strong> ${data.Plot}</div>
          <div class="info"><strong>Note IMDb :</strong> ${data.imdbRating}</div>
        `;
      } else {
        conteneur.innerHTML = `<p>❌ Film non trouvé.</p>`;
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("resultat").innerHTML = `<p>Erreur lors de la requête.</p>`;
    });
}
