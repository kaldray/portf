import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <nav>
        <div className="navigation">
          <ul>
            <NavLink to="/" exact activeClassName="nav-active" className="li">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/projects" activeClassName="nav-active" className="li">
              <li>Projets</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
