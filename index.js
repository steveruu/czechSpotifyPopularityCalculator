const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const axios = require('axios').default;

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
const https = require('https');

const url = "https://api.spotify.com/v1/artists/?ids="
const halfURL = "/v1/artists/id/"; 
var artistID;

const refreshToken = "AQCysJzq9qXoarN2MSGsRLbkd76hDhMknH3E2L2A-_Qhdloa5jKVeISQjdjLeU7y0uc0QZTbgNt2KB5Lr9ty2zUZugLwQIBbd1vdjF8Bj4VljaqnCOiES1uiF_zZBHuqUh8dEP4-0_sqg4-IoFRD9_Q86w75JjicJPWOSl-KgaVNkP7IfbfXzJsGm00kHDHTBTWuR2whU1iT9K7GrmjfmI_J2AiMreFqmUzNH8FocnIK523ztECx9_eOFlSa-kFIbpXdUuZwPlmKNzFezwRcz7gKeCmon_xTOz2Ya3aoCXHMT7ZAiDz1k5MNCA5c0leljeu_BbCeunTtJ2RfCU5bUU5ZiG-c5532Tv9MVC4Bl0Ezyml5gDgCGJgh15sjAtDbAOZSrhIs6jyFBX6HtbEoiqvCFnC-ZrXVLaUBR_2FVAN0i4CpF2EMNfRe8GMWRKkWzs0PUt0EVejxoqaTOiC8WW8WzlQf1TqvM3V5cvMGUIDoxZeIPo95T9xuafQVVE3eAWWHFdANpKzZ6YNlF_rTTPyzVvtX2Yt-ssqC95y3-51oe9HYIQwf6MU82Qw54TQIqDKtBO3j5TpsP4DDfngZE11owirESehw30lG-u4DUUHT8QMxnjLTDWH4PfvZlW_jWFaBopPIsmxREnbk7ankN0BfNU1PtWFL0xsZkjzZfoGlaJHTmJ0yf1Qc0RTU5ffPTZCFa4H9pYCJrEiSRXuww_dQTmfKUod8X0jnPv_uV0qz427yl53qr04";

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
artistID = artistIDs[0]

var artists = artistIDs.toString();

var halfFullURL = halfURL + artistID;
var fullURL = url + artists;
var token = 'BQAQY4Y5bGP58zQ4eiZTm1kl9GyVf00ncx7aQj-3kVWFGW4puLDWaQg2eBdk8fAmxiBihGSpBi9N5WSTkuCAXtRhM3d7f8l8pYFAhmw_CkdaxqwykHZGJtGjvdF7unVKm_0D9oc57lRnM9QXQ9wXR4SK2e6MVvjciJucYJCtfFhyq9_hlRd0BLu7IkKiZS82q0T3eJCl2CTdth8tNIA';

function requestArtists() {    // tohle celý by se později mohlo zautomatizovat nějakým použitím array.forEach, kde to vezme všechny artisty z arraye
  xhr.open("GET", fullURL, true);   // a udělá tenhle celej process pro každýho z nich 
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', `Bearer ${token}`);

  xhr.onreadystatechange = function () {        // a nebo request GET SEVERAL ARTISTS
    if (xhr.readyState === 4) {                 // další varianta
        console.log(xhr.status);
        
        var result = JSON.parse(xhr.responseText);
        
        var posluchaciInteger = result.artists.map(function(x){
          return x.popularity;
        });
        
        var artistNames = result.artists.map(function(y){
          return y.name;
        });
              

        for (let i = 0; i < artistNames.length; i++){
          console.log(artistNames[i], posluchaciInteger[i]);
        }
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
    console.log(`\nPlease update var token on line 48.`);
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


