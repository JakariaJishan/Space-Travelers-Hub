import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <section className="NavSection">
      <div>
        <img style={{width:'50px'}} src="images/planet.png" />
      </div>
      <nav>
        <NavLink to="/"> Rocket </NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/profiles">Profile</NavLink>
      </nav>
    </section>
  );
}

export default Nav;
