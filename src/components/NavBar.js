import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-darkt">
  <div className="container-fluid">
    <Link to= "/"  className="navbar-brand" href="1">CINEMA-CAT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to= "/movies" className="nav-link active" aria-current="page" href="2">Movies</Link>
        </li>
        <li className="nav-item">
          <Link to="/series" className="nav-link active" href="#">Series</Link>
        </li>
        <li className="nav-item">
          <Link to="/people" className="nav-link active" href="#" tabIndex="-1" aria-disabled="true">People</Link>,
        </li>
        <li className="nav-item dropdown">
          <Link to="/more" className="nav-link dropdown-toggle active" href="3" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/more" className="nav-linkdropdown-item" href="5">Trending</Link></li>
            <li><a className="dropdown-item" href="6">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="7">Something else here</a></li>
          </ul>
        </li>
        
      </ul>

      <div>
          <Link to="/search" className="btn btn-outline-success"> + Add </Link>
        
          <Link to= "/favourites" className="btn">❤️</Link>
      </div>
      
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Link to='/search'><button className="btn btn-outline-success" type="submit">Search</button></Link>
        <button className="btn " type="text">❤️</button>
      </form> */}
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;