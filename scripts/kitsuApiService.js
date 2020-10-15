'use strict';


//ordenar per rating
//anar creant lapartat de cada anime
const section = document.querySelector(".anime-list");

let getAnimes = async ()=>{
  let dbGeneral = [];
  let animeSet = [];
  for (let i=0; i< 10; i++){
    let response = await fetch(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${i*10}`)
    let responseJson = await response.json();
    dbGeneral.push(responseJson.data)
    // console.log(responseJson.data)
    
    
    // console.log(animeSet)
  }

  for (let i=0; i < 10; i++){
    for (let j=0; j<10; j++){
      const animeObj = dbGeneral[i][j]
      animeSet.push(animeObj) 
    }
  }

  // console.log(animeSet)

  return animeSet;
  
}
// getAnimes();


async function listAnime() {
  const list = await getAnimes(); 
  console.log(list);
  let div = document.querySelector(".Top10")
  
  let result = list.forEach(function(anime){
    if(anime.attributes.ratingRank < 800){
      let child = document.createElement("div")
      child.innerHTML = `<p>${anime.attributes.titles.en_jp}</p>
    <img src="${anime.attributes.posterImage.small}"/>`
    div.appendChild(child)
    } 
  })
   
}
listAnime();




// cuando seleccionamos Films:
// let div = document.querySelector(".Top10")
// // let (anime.attributes.showType === "movie" || anime.attributes.showType === "TV") 
//   if (movieInput.checked == true) {
//    //aquí el codig
//     let child = document.createElement("div")
//     return child.innerHTML = `<p>${anime.attributes.titles.en_jp}</p>
//      <img src="${anime.attributes.posterImage.small}"/>`
//     div.appendChild(child)
//   } else if (serieInput.checked == true) {
//     //aquí el codig
//     let child = document.createElement("div")
//     child.innerHTML = `<p>${anime.attributes.titles.en_jp}</p>
//      <img src="${anime.attributes.posterImage.small}"/>`
//     div.appendChild(child)
//   }


//else if(anime.attributes.showType === "movie"){
    //   let child = document.createElement("div")
    //   child.innerHTML = `<p>${anime.attributes.titles.en_jp}</p>
    // <img src="${anime.attributes.posterImage.small}"/>`
    // div.appendChild(child)
    // }

// seleccionamos One Anime:
async function oneAnime() {
  const list = await getAnimes(); 
  console.log(list);
  let div = document.querySelector(".oneAnime")
  
  let result = list.forEach(function(anime){
    if(anime.attributes.posterImage === "click"){
      let child = document.createElement("div")
      child.innerHTML = `<p>${anime.attributes.titles.en_jp}</p>
    <img src="${anime.attributes.posterImage.small}"/>
    <article>${anime.attributes.synopsis}</article>`
    div.appendChild(child)
    } 
  })
}

// cada anime tiene toda la info necesaria
// tenemos que añadir el indice al fin de URL de la API
