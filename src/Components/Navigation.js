import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <nav>
        <div className="navigation">
          <ul>
            <NavLink to="/" activeClassName="nav-active">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/projects" activeClassName="nav-active">
              <li>Projets</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
