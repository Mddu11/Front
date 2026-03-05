import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../redux/userSlice";

function Profile() {

  const [name, setUserName] = useState("");

  const dispatch = useDispatch();

  const saveName = () => {
    dispatch(setName(name));
  };

  return (
    <div>

      <h2>Enter your name</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setUserName(e.target.value)}
      />

      <button onClick={saveName}>
        Save
      </button>

    </div>
  );
}

export default Profile;