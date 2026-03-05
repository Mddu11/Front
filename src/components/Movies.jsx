import { useEffect, useState } from "react";

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10", {
      headers: {
        "X-API-KEY": "ВАШ_API_КЛЮЧ"
      }
    })
      .then(res => res.json())
      .then(data => setMovies(data.docs));

  }, []);

  return (
    <div>

      <h2>Movies</h2>

      {movies.map(movie => (

        <div key={movie.id} className="movie">

          <h3>{movie.name}</h3>

        </div>

      ))}

    </div>
  );
}

export default Movies;