import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary pt-3 pb-3">
        <div className="container-xxl">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Product"/>
          </a>
          <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link me-4" aria-current="page" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#">Our strategies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#">Reviews</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;