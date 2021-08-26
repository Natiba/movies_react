import React, { useState, useEffect } from 'react';
import CaroHome from './caroHome';
// import Carousel from 'react-bootstrap/Carousel'

const Home = () => {

    const [home, setHome] = useState([]);
    console.log(home)
    

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=68b1c5e0c1c1ecb622b735be7a577ddf')
    .then(response => response.json())
    .then((data) => {setHome(data.results);
    });
    } ,[]);


    return ( 
        <>
        <div className="all-container">
        <ul>{home.map(item => <CaroHome image={item.poster_path} title={item.original_title} name={item.name}/>)}</ul>
        </div>
        </>
     );
}
 
export default Home; 