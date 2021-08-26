import React, { useState, useEffect } from 'react';
import CardTv from './cardTv';

const TvProgram = () => {

    const [tv, setTv] = useState([]);
    console.log(tv)
    

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=68b1c5e0c1c1ecb622b735be7a577ddf')
    .then(response => response.json())
    .then((data) => {setTv(data.results);
    });
    } ,[]);

    return ( 
    <>
    <div className="all-container">
        <ul>{tv.map(item => <CardTv image={item.poster_path} title={item.name} country={item.origin_country}/>)}</ul>
        </div>
    </>
     );
}
 
export default TvProgram;

// https://api.themoviedb.org/3/tv/popular?api_key=68b1c5e0c1c1ecb622b735be7a577ddf  //para tv