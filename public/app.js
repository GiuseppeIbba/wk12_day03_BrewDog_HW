

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
    request.send();
    console.log(request);
  }

  const requestComplete = function(){
    console.log("requestComplete is working");
  }




document.addEventListener('DOMContentLoaded', app);
