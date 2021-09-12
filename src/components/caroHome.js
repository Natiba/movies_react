const CaroHome = (props) => {
  const{home} = props;
    console.log(props)
    return ( 
       
          <>
  {/* carousel */}
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    {/* <div className="carousel-item active">
      <img src={'https://image.tmdb.org/t/p/w500' + home.backdrop_path} class="d-block w-300" alt="..."/>
    </div> */}
    {home.map((item => 
    <div class="carousel-item active">
      <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} class="d-block w-100" alt="..."/>
    </div>
    ))} 
    {home.map((item => 
    <div class="carousel-item">
      <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} class="d-block w-100" alt="..."/>
    </div>
    ))} 
     {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div> */}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
{/* carousel */}

 
</>
     );
     
}
 
export default CaroHome;