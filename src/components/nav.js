import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* <div className="container"> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav">
        <Link to="/home" className="navbar-brand space" href="1">
          CINEMA-CAT
        </Link>
        <img
          src="https://st3.depositphotos.com/4089777/13501/v/600/depositphotos_135014060-stock-illustration-vector-illustration-with-sketch-popcorn.jpg"
          className="card-img-top"
          style={{ width: "1.8rem" }}
          alt="Movies Logo"
        />

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav space2 ">
            <li className="nav-item active">
              <Link
                to="/movies"
                className="nav-link text-white bg-dark"
                href="2"
              >
                Movies
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/programas-tv"
                className="nav-link text-white bg-dark"
                href="2"
              >
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/people"
                className="nav-link text-white bg-dark"
                href="3"
              >
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/more" className="nav-link text-white bg-dark" href="4">
                More
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div>  */}
    </>
  );
};

export default Nav;
