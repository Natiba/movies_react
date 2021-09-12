import React, { useState, useEffect } from 'react';
import CardPeople from '../components/cardPeople';

const People = () => {

    const [people, setPeople] = useState([]);
    console.log(people)
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setPeople(data.results);
    });
    } ,[]);

    return ( 
    <>
    <h1 style={{textAlign: 'center', marginTop: "4rem", color: "white"}}>People</h1>
    <div className="all-container">
        <ul>{people.map(item => 
        <CardPeople 
        image={item.profile_path} 
        name={item.name} 
        homepage={item.homepage}
        id={item.id}
        birthday={item.birthday}
        known={item.also_known_as}
        biography={item.biography}
        />)}</ul>
        </div>
    </>
     );
}
 
export default People;