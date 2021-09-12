import React, { useState, useEffect } from 'react';
import CardPop from '../components/cardPop';

const Popular = () => {
    const [pop, setPop] = useState([]);
    console.log(pop)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setPop(data.results);
    });
    } ,[]);

    return ( 
        <>
         <h1 style={{textAlign: 'center', marginTop: "4rem", color: "white"}}>Most Popular</h1>
         <div className="popular">
    <div className="all-container">
        <ul>{pop.map(item => <CardPop image={item.poster_path} title={item.original_title}  date={item.release_date} type={item.media_type}/>)}</ul>
        </div>
        </div>
        </>
     );
}
 
export default Popular;




    

    

 

