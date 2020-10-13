'use strict';
// pendiente de modificar

//fetch www....
//response.json()
//console.log(data)
//ordenar per rating
//fer un for amb els 10 primers
//anar creant lapartat de cada anime
const section = document.querySelector(".anime-list");

let getAnimes = async ()=>{
  let dbGeneral = [];
  let animeSet = [];
  for (let i=0; i< 10; i++){
    let response = await fetch(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${i*10}`)
    let responseJson = await response.json();
    // console.log(responseJson)
    animeSet = responseJson.data.map(anime => {
     // dbGeneral.push(anime)
    })
     return dbGeneral;
  
  }
  let result = dbGeneral.map(anime=>{
    let title = anime.attributes.titles.en_jp;
    let imagen = anime.attributes.posterImage.small;

    let objResult = {
      title: title,
      imagen: imagen
    }
    return objResult;
  })
   console.log(result)

  return result;
}
// getAnimes();


function listAnime() {
  const list = getAnimes(); 
  console.log(list);
  let div = document.querySelector(".Top10")
  // let child = document.createElement("div")
  
  let stringToPrint = "";

  // // let result = list.forEach(function(anime) {
  //   // if (anime.attributes.ratingRank <= 5000){
  //   //   console.log(anime.attributes.ratingRank)
  //     console.log(stringToPrint)
  //     console.log(anime)
  //     return stringToPrint += printAnime(anime)
  //     // console.log(div)
  //     // div.appendChild(child);
  //   // }
    
  // })
  div.innerHTML = stringToPrint;
}
listAnime();

function printAnime(anime){
  return `<p>${anime.attributes.titles.en_jp}</p>
  <img src="${anime.attributes.posterImage.small}"/>`
}




// cuando seleccionamos Films:
// let filmList = async () => {
//   const films = await filmList();
//   let div = document.querySelector(".Top10")
//   let child = document.createElement("div")
//   list.forEach(function(anime){
//     if(anime.attributes.subtype === movie){
//       console.log(anime.attributes.subtype)
//       child.innerHTML += `<p>${anime.attributes.titles.en_jp}</p>
//       <img src="${anime.attributes.posterImage.small}"/>`
//     }
//   })
// }
// filmList();
    
// seleccionamos One Anime:
// let oneAnime = async () => {
//   let div = document.querySelector(".oneAnime")
//   let child = document.createElement("div")
//   child.innerHTML += `<p>${anime.attributes.titles.en_jp}</p>
//   <img src="${anime.attributes.posterImage.small}"/>
//   <article>${anime.attributes.synopsis}</article>`
// }

// cada anime tiene toda la info necesaria
// tenemos que añadir el indice al fin de URL de la API
