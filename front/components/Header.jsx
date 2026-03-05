import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const name = useSelector((state) => state.user.name);

  return (
    <header>

      <nav>

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink to="/movies">Movies</NavLink>

        <NavLink to="/profile">Profile</NavLink>

      </nav>

      <div>
        User: {name}
      </div>

    </header>
  );
}

export default Header;