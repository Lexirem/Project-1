'use strict';
// pendiente de modificar

//fetch www....
//response.json()
//console.log(data)
//ordenar per rating
//fer un for amb els 10 primers
//anar creant lapartat de cada anime
const section = document.querySelector(".anime-list");

for (let i = 0; i <= 10; i++){
  let getAnimes = async (searchString)=>{
    const response = await fetch(`https://kitsu.io/api/edge/anime/${i + 1}`)
    const data = await response.json();
    console.log(data)
  }
  getAnimes()
}

  // for (let i = 0; i <= 10; i++) {
  //   try{
  //     const response = await fetch(`https://kitsu.io/api/edge/anime/${i + 1}`);
  //     const data = await response.json();
  //     console.log(data)
  //   } catch (err){
      
  //   }
    

// cada anime tiene toda la info necesaria
// tenemos que añadir el indice al fin de URL de la API
