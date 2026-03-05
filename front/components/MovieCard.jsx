import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

function MovieCard({ movie }) {

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.movies);

  const isFavorite = favorites.includes(movie.id);

  const handleClick = () => {
    dispatch(toggleFavorite(movie.id));
  };

  return (
    <div className="movie-card">

      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>

      <button onClick={handleClick}>
        {isFavorite ? "❤️ Remove" : "🤍 Add"}
      </button>

    </div>
  );
}

export default MovieCard;