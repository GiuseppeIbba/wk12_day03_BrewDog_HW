

// const beer_Ul = document.createElement('ul');
// document.body.appendChild(beer_Ul);


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





document.addEventListener('DOMContentLoaded', app);
