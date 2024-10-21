import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-6">
      <nav className="navbar navbar-expand-md bg-body-tertiary pt-3 pb-3">
        <div className="container-xxl">
          <a className="navbar-brand" href={"/aboutUs"}>
            <img src={logo} alt="Product" />
          </a>
          <div
            className="collapse navbar-collapse justify-content-end me-3"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to={"/aboutUs"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/ourStrategies"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Our Strategies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/reviews"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
