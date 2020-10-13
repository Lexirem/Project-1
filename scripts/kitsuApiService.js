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
    const response = await fetch(`https://kitsu.io/api/edge/anime`)
    const responseJson = await response.json();
    //console.log(responseJson.data)
  return responseJson.data;
}


let listAnime = async () => {
  const list = await getAnimes(); 
  let div = document.querySelector(".Top10")
  let child = document.createElement("div")
  let counter = 0

  list.forEach(function(anime) {
    if (anime.attributes.ratingRank <= 5000){
      console.log(anime.attributes.ratingRank)
      
      child.innerHTML += `<p>${anime.attributes.titles.en_jp}</p>
      <img src="${anime.attributes.posterImage.small}"/>`
      console.log(div)
    }
    
  })
  
}
listAnime();

// cuando seleccionamos Films:
let filmList = async () => {
  const films = await filmList();
  let div = document.querySelector(".Top10")
  let child = document.createElement("div")
  list.forEach(function(anime){
    if(anime.attributes.subtype === movie){
      console.log(anime.attributes.subtype)
      child.innerHTML += `<p>${anime.attributes.titles.en_jp}</p>
      <img src="${anime.attributes.posterImage.small}"/>`
    }
  })
}
filmList();
    
// seleccionamos One Anime:
let oneAnime = async () => {
  let div = document.querySelector(".oneAnime")
  let child = document.createElement("div")
  child.innerHTML += `<p>${anime.attributes.titles.en_jp}</p>
  <img src="${anime.attributes.posterImage.small}"/>
  <article>${anime.attributes.synopsis}</article>`
}

// cada anime tiene toda la info necesaria
// tenemos que añadir el indice al fin de URL de la API
