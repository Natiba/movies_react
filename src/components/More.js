import React, { useState, useEffect } from 'react';
import CardMore from './cardMore';

const More = () => {

    const [more, setMore] = useState([]);
    console.log(more)
    

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=68b1c5e0c1c1ecb622b735be7a577ddf')
    .then(response => response.json())
    .then((data) => {setMore(data.results);
    });
    } ,[]);

    return ( 
    <>
    <h1 style={{textAlign: 'center', marginTop: "4rem"}}>Trending</h1>
    <div className="all-container">
        <ul>{more.map(item => <CardMore image={item.poster_path} title={item.original_title} name={item.name} type={item.media_type}/>)}</ul>
        </div>
    </>
     );
}
 
export default More;