import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";

import { Container } from "@mui/material";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Container sx={{ marginTop: 4 }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </Container>

    </BrowserRouter>
  );
}

export default App;