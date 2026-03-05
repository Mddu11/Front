import { useState } from "react";

function Search({ movies }) {

  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.name?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredMovies.map(movie => (
        <p key={movie.id}>{movie.name}</p>
      ))}

    </div>
  );
}

export default Search;