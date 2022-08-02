  const cargarPeliculas =  async()  => {
  try {
    
  const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e0e0e7523b32d12b84bbc3c3761d885b');

  console.log(respuesta);

  if(respuesta.status === 200){
  const datos = await respuesta.json();
 
  let peliculas = ``;
  datos.results.forEach(pelicula => {
  peliculas += `

  <div class= "pelicula">
  
  <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
  </div>
  
  
   <h3 class="titulo">${pelicula.title}</h3>`;

   });
    
    
  


  

document.getElementById('contenedor').innerHTML = peliculas;

 

    
}else if(respuesta.status === 401){
  console.log('API key is wrong');
}else if(respuesta.status === 404){
  console.log('the title is broken')
}else {
    ('Has been');

}
} catch (error) {
   
}
}

cargarPeliculas();

