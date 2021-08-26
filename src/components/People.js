import React, { useState, useEffect } from 'react';
import CardPeople from './cardPeople';

const People = () => {

    const [people, setPeople] = useState([]);
    console.log(people)
    

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/person/popular?api_key=68b1c5e0c1c1ecb622b735be7a577ddf')
    .then(response => response.json())
    .then((data) => {setPeople(data.results);
    });
    } ,[]);

    return ( 
    <>
    <div className="all-container">
        <ul>{people.map(item => <CardPeople image={item.profile_path} title={item.name} country={item.origin_country}/>)}</ul>
        </div>
    </>
     );
}
 
export default People;