import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const MovieDetails = (props) => {
  console.log(props);

const {id} = useParams();
const[movieDetails, setMovieDetails] = useState({});

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
.then((response) => response.json())
.then((data)=>setMovieDetails(data));
}, ) //tuve que sacar el array vacio, me tiraba que no estaba en uso?

console.log(movieDetails)


    return ( 

<div className="card" style={{width: "20rem", margin: "4rem auto"}}>
  <img src="{'https://image.tmdb.org/t/p/w500'+props.image}" className="imgcard-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{movieDetails.title}</h5>
    <p className="card-text">{movieDetails.overview}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{movieDetails.homepage}</li>
    <li className="list-group-item">Original language: <b>{movieDetails.original_language}</b></li>
    <li className="list-group-item">Id: <b>{movieDetails.id}</b></li>
  </ul>
  <div className="card-body">
    <Link to="/movies" className="card-link">Go back Movies</Link>
    <Link to="/" className="card-link">Go back Home</Link>
  </div>
</div>


 
     );
}
 
export default MovieDetails;