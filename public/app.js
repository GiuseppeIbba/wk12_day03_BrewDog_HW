


const app = function () {
  const url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();  //am I sending the request or the server is sending me the request back?
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  populatingBeerList(beers);
}



const populatingBeerList = function(beers){
  const beer_Ul = document.createElement('ul');
  document.body.appendChild(beer_Ul);
  beers.forEach(function(beer){
    displayBeerName(beer, beer_Ul);
    displayBeerImg(beer, beer_Ul);
    displayBeerYeast(beer, beer_Ul);
    displayBeerMalt(beer, beer_Ul);
  })
}


const displayBeerName = function(beer, beer_Ul){
  const beer_Li = document.createElement('li');
  beer_Li.innerText = beer.name;
  beer_Ul.appendChild(beer_Li);
}


const displayBeerImg = function(beer, beer_Ul){
  const beer_img = document.createElement('img');
  const beer_img_p = document.createElement('p');
  beer_img.src = beer.image_url;
  beer_img.style.width = "80px";
  beer_img_p.appendChild(beer_img);
  beer_Ul.appendChild(beer_img_p);
}

const displayBeerYeast = function(beer, beer_Ul){
    const yeast_Li = document.createElement('li');
    yeast_Li.innerText = beer.ingredients.yeast;
    beer_Ul.appendChild(yeast_Li);
}











document.addEventListener('DOMContentLoaded', app);
