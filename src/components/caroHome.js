const CaroHome = (props) => {
    console.log(props)
    return ( 
        // <div className="cards-container">
        // <div className="card cardsP shadow p-3 mb-5 bg-white rounded">
          <>
  {/* carousel */}
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    {/* <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> */}
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={'https://image.tmdb.org/t/p/w500'+props.image} className="d-block w-100 image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{props.title}</h5>
        <h5>{props.name}</h5>
      </div>
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div> */}
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div> */}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
{/* carousel */}
</>
// </div>
// </div>
     );
}
 
export default CaroHome;