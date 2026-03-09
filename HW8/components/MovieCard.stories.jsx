import MovieCard from "./MovieCard";

export default {
  title: "Components/MovieCard",
  component: MovieCard
};

const movie = {
  id: 1,
  title: "Avatar",
  poster: "https://via.placeholder.com/300x450"
};

export const Default = () => <MovieCard movie={movie} />;