import React, { useState, useEffect } from 'react';
import CaroHome from '../components/caroHome';
// import Carousel from 'react-bootstrap/Carousel'

const Home = () => {

    const [home, setHome] = useState([]);
    console.log(home)
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setHome(data.results);
    });
    } ,[]);


    return ( 
        <>
        <div className="all-container">
        <CaroHome 
        image={'https://image.tmdb.org/t/p/w500' + home.poster_path}
        />
        </div>
        </>
     );
}
 
export default Home; 