import React from 'react';
import { Link} from 'react-router-dom';

const CardPeople = (props) => {
    console.log(props)
    return ( 
        <div className="cards-container" style={{width: "18rem"}}>
        <div className="card cardsP shadow p-3 mb-5 bg-white rounded">
  <img src={'https://image.tmdb.org/t/p/w500'+props.image} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
  <Link to={"/people/" + props.id}><h5 className="card-title">{props.name}</h5></Link>
    <p className="card-text color">{props.country}</p>
  </div>
</div>
</div>
     );
}
 
export default CardPeople;