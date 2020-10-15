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
  
  list.map(anime =>{
    let div = document.querySelector(".Top10")
    let oneAnimeDiv = document.querySelector(".oneAnime")
    let img = document.createElement("img")
    div.appendChild(img);
    img.setAttribute("src", `${anime.attributes.posterImage.small}`)
    img.setAttribute("class", "images");

    // let result = list.forEach(function(anime){
    //   if(anime.attributes.ratingRank < 1000){
    //     let child = document.createElement("div")
    //     child.innerHTML = `<p>${anime.attributes.titles.en_jp}</p>
    //   <img src="${anime.attributes.posterImage.small}"/>`
    //   div.appendChild(child)
    //   } 
    // })


    img.addEventListener("click", function(){
      let divMaked = document.createElement("div");
      let h3 = document.createElement("h3")
      h3.innerHTML = `${anime.attributes.titles.en_jp}`
      divMaked.appendChild(h3);

      let article = document.createElement("article")
      article.innerHTML =  `${anime.attributes.synopsis}`
      divMaked.appendChild(article);
      oneAnimeDiv.innerHTML = "";
      oneAnimeDiv.appendChild(divMaked);
    })

  })
  
  
   
}
listAnime();


// <a href="oneAnime.html" ><img src="${anime.attributes.posterImage.small/a>

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
/*async function oneAnime() {
  const list = await getAnimes();
  list.map(anime =>{
    console.log(anime.attributes.synopsis)
    let imgSearched = document.querySelector(".secAnime");
      let h3 = document.createElement("h3")
      let img = document.createElement("img")
      let article = document.createElement("article")
      article.innerHTML =  `${anime.attributes.synopsis}`
      h3.innerHTML = `${anime.attributes.titles.en_jp}`
      img.setAttribute("src", `${anime.attributes.posterImage.small}`)
    
      imgSearched.appendChild(h3);
      imgSearched.appendChild(img);
      imgSearched.appendChild(article);
    
    
  })
}*/
// let imgSearched = document.querySelector(".oneAnime");
// imgSearched.addEventListener("click", oneAnime)
// const list = await getAnimes();


// cada anime tiene toda la info necesaria
// tenemos que añadir el indice al fin de URL de la API



