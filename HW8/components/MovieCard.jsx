import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.movies);

  const isFavorite = favorites.includes(movie.id);

  const handleClick = () => {
    dispatch(toggleFavorite(movie.id));
  };

  return (
    <Card sx={{ width: 250, margin: 2 }}>

      <CardMedia
        component="img"
        height="350"
        image={movie.poster}
        alt={movie.title}
      />

      <CardContent>

        <Typography variant="h6">
          {movie.title}
        </Typography>

        <Button
          variant="contained"
          color={isFavorite ? "secondary" : "primary"}
          onClick={handleClick}
        >
          {isFavorite ? "❤️ Remove" : "🤍 Add"}
        </Button>

      </CardContent>

    </Card>
  );
}

export default MovieCard;