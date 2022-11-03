const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

const url = "https://api.spotify.com/v1/artists/?ids="

var artistIDs = ["4NOFcRCgjvnRy8nKVGUM0L", // steveruu
                "1NspLfgAsucc39MeTipXNy", // car
                "3GuGHOzPZ0AhH9hK8LqCsK", // pepap
                "2aZD8xH5DKRUwAR6mXAifV", // hakaslakas
                "3xVvsXvpURgj3zeTYiBtCv", // valian
                "2b5QC4KWCMRKdD7LiqvfMQ", // faon
                "50ENuvgRkFZ5hMA0BFEeAM", // helena
                "2qSLwqeQFUHWEzC86u3vRM", // awoken
                "6kEMNp6TPPl70gOicGT0uN", // děcko acid
                "3D57Cu0cu9caAvtl41xUx6", // samzel
                "5QvicxsGxXNicXu1f9guia", // yui paly
                "70Cg3NKGzk0G16trbrfYE5", // maria
                "1HbkAuG6cZndTXlORaQgOq", // ubránek
                "3tjBt96Yk1zS14xc8wldlT", // fembo ypl a
                "5NTcWbyHYQjA20voWilXeG", // kila asky
                "7h22ZneYwwRyOwlgnMd8So", // akarlos
                "5PNDGjJ1e6Tdr8LWmZDqPO", // ne duch
                "0IM0lwjzI0BYaayMweraKT", // matmej
                "34YDbjVGCySBRPAS19xl1L", // paply adomi
                "2IIf5hkbIzh1dqhG1T132E", // krobra08
                "3TTWuZxamiQERzR42VNMS5", // sopka
                "6UIdgISBaIHMOvWwz4nfP1", // prasak
                "569eihmWcdg4HvSPDnjlPn" // ondredaj
                ]

var artists = artistIDs.toString();

var fullURL = url + artists;
var token = 'BQC964hWY2DoOwrz9PXFn2-LdyZ83c-FOmH3nTQCC1Hi2ihYrBTO--YMi8CxSKBaIXJ7HTJn695ujW6oP8TGxLHlGT8upCFl1rUmDs9iDW-CNYmjt3imIDFnIcW7IqOfc01RfUXiZLZ-VrfJdxOGCx0dYjZsAozTzXHBpehmSi9uPR5emWCMiBMw-wmJhkRc2FHqwko-PIGdv7Y9GCI';

function requestArtists() {    // tohle celý by se později mohlo zautomatizovat nějakým použitím array.forEach, kde to vezme všechny artisty z arraye
  xhr.open("GET", fullURL, true);   // a udělá tenhle celej process pro každýho z nich 
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', `Bearer ${token}`);

  xhr.onreadystatechange = function () {        // a nebo request GET SEVERAL ARTISTS
    if (xhr.readyState === 4) {                 // další varianta
        console.log(xhr.status);
        if (xhr.status != 200) {return;}
        var result = JSON.parse(xhr.responseText);
        
        let posluchaciInteger = result.artists.map(function(x){
          return x.popularity;
        });
        
        let artistNames = result.artists.map(function(y){
          return y.name;
        });

          var ready_artist = [];

          for (var k = 0; k < 23; k++) {
              ready_artist[k] = ["", 0];
              ready_artist[k][0] = artistNames[k]; // sem misto 0 dat k; k = (1-23); jak udelat aby to precetlo jako var, ne jako array
              ready_artist[k][1] = posluchaciInteger[k]; // -//- ->
          }

          var sortedList = ready_artist.sort(function(a,b){return b[1] - a[1]})
          console.log(sortedList);
          
    }
  }
  
  xhr.send();
  xhr.onload;
    return;
};

function swapToken() {
  xhr.open("POST", "https://api.spotify.com/v1/swap")
  xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded')
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

xhr.send();
} 

function reqUA() {
  var client_id = 'af1a22f02ecc4371bec205f62966ebb9';
  var redirect_uri = 'https://steveruu.github.io';

  var state = 'aBcDEFghIjklM4OP';

  //localStorage.setItem(stateKey, state); --- není potřeba
  var scope = 'user-read-private user-read-email';

  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(client_id);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);

  console.log(url) 

// uwu program 
readline.question('\nEnter callback URL: ', name => {
  var trimmedToken = name.slice(41,252)
  if((name.startsWith("https"))) {
    console.log(`\nYour token is: ${trimmedToken}`);
    console.log(`\nPlease update var token on line 39.`);
    readline.close();
  } else {
  console.log(`\nPlease enter a valid URL.`);
  readline.close();
    return;
}});

} 

readline.question("1: request artists, 2: token change. ", name => {
  if(name == "1") {
      console.log()  
      requestArtists();
  } else if(name == "2") {
      console.log() 
      reqUA();
  } else {
    return;
  }
});


