import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const MovieDetails = () => {

const {id} = useParams();
const[movieDetails, setMovieDetails] = useState({});

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
.then((response) => response.json())
.then((data)=>setMovieDetails(data));
}, [])

console.log(movieDetails)


    return ( 
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{movieDetails.title}</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <Link to="/movies" className="btn bg-primary" target="_blank">
        Go back
      </Link>
  </div>
</div>
     );
}
 
export default MovieDetails;