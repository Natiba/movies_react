const cardTrends = (props) => {
    return ( 
        <>
         <div className="cards-container row">
        <div className="card cards shadow p-3 mb-5 bg-white rounded">
  <img src={'https://image.tmdb.org/t/p/w500'+props.image} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
      <h4 className="card-text">{props.title}{props.name}</h4>
    {/* <Link to={"/movies/" + props.id}><h5 className="card-title">{props.title}</h5></Link> */}
    <p className="card-text">{props.date}</p>
  </div>
</div>
</div>
        </>
     );
}
 
export default cardTrends;