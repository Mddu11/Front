import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  const name = useSelector((state) => state.user.name);

  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>

          <Button
            color="inherit"
            component={NavLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/movies"
            startIcon={<MovieIcon />}
          >
            Movies
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/profile"
            startIcon={<PersonIcon />}
          >
            Profile
          </Button>

        </Box>

        <Box sx={{ marginLeft: 3 }}>
          User: {name || "Guest"}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;