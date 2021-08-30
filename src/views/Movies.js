import React, { useState, useEffect } from "react";
import Card from "../components/card";
// import {Link} from 'react-router-dom'

const Movies = () => {
  const [film, setFilm] = useState([]);
  console.log(film);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilm(data.results);
      });
  }, []);

  return (
    <>
      <div className="all-container">
        <ul>
          {film.map((item) => (
            <Card key = {item.id}
              image={item.poster_path}
              title={item.original_title}
              date={item.release_date}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      
    </>
  );
};

export default Movies;

// {item.(https://image.tmdb.org/t/p/w500/{poster_path})}
