import { NavLink } from 'react-router-dom';
import '../style/nav.css';

function Nav() {
  return (
    <section className="NavSection">
      <div className="header">
        <img style={{ width: '10%' }} src="images/planet.png" alt="brand logo" />
        <h1>Space Travelers Hub</h1>
      </div>

      <nav className="nav">
        <NavLink to="/"> Rocket </NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <p>|</p>
        <NavLink to="/profiles">Profile</NavLink>
      </nav>
    </section>
  );
}

export default Nav;
