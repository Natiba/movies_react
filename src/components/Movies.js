import React, { useState, useEffect } from 'react';
import Card from './card';

const Movies = () => {

    const [film, setFilm] = useState([]);
    console.log(film)
    

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=68b1c5e0c1c1ecb622b735be7a577ddf')
    .then(response => response.json())
    .then((data) => {setFilm(data.results);
    });
    } ,[]);


    return ( 
        <>
        <div className="all-container">
        <ul>{film.map(item => <Card image={item.poster_path} title={item.original_title} date={item.release_date}/>)}</ul>
        </div>
        </>
     );
}
 
export default Movies; 

// {item.(https://image.tmdb.org/t/p/w500/{poster_path})}