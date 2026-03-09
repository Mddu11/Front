import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../redux/userSlice";

import { Container, TextField, Button, Typography } from "@mui/material";

function Profile() {
  const [name, setUserName] = useState("");

  const dispatch = useDispatch();

  const saveName = () => {
    dispatch(setName(name));
  };

  return (
    <Container sx={{ marginTop: 4 }}>

      <Typography variant="h5" gutterBottom>
        Enter your name
      </Typography>

      <TextField
        label="Your name"
        variant="outlined"
        value={name}
        onChange={(e) => setUserName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <br />

      <Button
        variant="contained"
        onClick={saveName}
      >
        Save
      </Button>

    </Container>
  );
}

export default Profile;