import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <sectrion class = "NavSection">
      <nav>
        <NavLink to="/"> Rocket </NavLink>
        <NavLink to="">Missions</NavLink>
        <NavLink to="">Profile</NavLink>
      </nav>
      <div class="logo">Logo</div>
    </sectrion>
  )
}

export defautl Nav