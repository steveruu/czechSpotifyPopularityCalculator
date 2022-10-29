const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const axios = require('axios').default;
const XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
const https = require('https');

const url = "https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2Fid%2F";
var artistID;

const refreshToken = "AQCysJzq9qXoarN2MSGsRLbkd76hDhMknH3E2L2A-_Qhdloa5jKVeISQjdjLeU7y0uc0QZTbgNt2KB5Lr9ty2zUZugLwQIBbd1vdjF8Bj4VljaqnCOiES1uiF_zZBHuqUh8dEP4-0_sqg4-IoFRD9_Q86w75JjicJPWOSl-KgaVNkP7IfbfXzJsGm00kHDHTBTWuR2whU1iT9K7GrmjfmI_J2AiMreFqmUzNH8FocnIK523ztECx9_eOFlSa-kFIbpXdUuZwPlmKNzFezwRcz7gKeCmon_xTOz2Ya3aoCXHMT7ZAiDz1k5MNCA5c0leljeu_BbCeunTtJ2RfCU5bUU5ZiG-c5532Tv9MVC4Bl0Ezyml5gDgCGJgh15sjAtDbAOZSrhIs6jyFBX6HtbEoiqvCFnC-ZrXVLaUBR_2FVAN0i4CpF2EMNfRe8GMWRKkWzs0PUt0EVejxoqaTOiC8WW8WzlQf1TqvM3V5cvMGUIDoxZeIPo95T9xuafQVVE3eAWWHFdANpKzZ6YNlF_rTTPyzVvtX2Yt-ssqC95y3-51oe9HYIQwf6MU82Qw54TQIqDKtBO3j5TpsP4DDfngZE11owirESehw30lG-u4DUUHT8QMxnjLTDWH4PfvZlW_jWFaBopPIsmxREnbk7ankN0BfNU1PtWFL0xsZkjzZfoGlaJHTmJ0yf1Qc0RTU5ffPTZCFa4H9pYCJrEiSRXuww_dQTmfKUod8X0jnPv_uV0qz427yl53qr04";

var artistIDs = ["4NOFcRCgjvnRy8nKVGUM0L"] // steveruu artist URI
artistID = artistIDs[0]

var fullURL = url + artistID;
var token = 'BQCBuvkGdReJnwOy4pbDF_z6U16Exm3rrSzWOl0cC0ELZvvnwtpWWBo4nw0pr3ksVYB876IHIB12V4ZeBdiFMN5QAp_pqOjlqNNSpb9WWrg220v0HeqgUWj-J-88BCnkgd3Krm0q9USuFHc_Kuix8Zyb9dNAOsHLMzKPciKoIn6SMyrwnI7t-R8346oJYoh6Vj0AeDlMOjaRR8_5bd0';

function requestArtist() {    // tohle celý by se později mohlo zautomatizovat nějakým použitím array.forEach, kde to vezme všechny artisty z arraye
  xhr.open("GET", fullURL);   // a udělá tenhle celej process pro každýho z nich 
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.onreadystatechange = function () {        // a nebo request GET SEVERAL ARTISTS
    if (xhr.readyState === 4) {                 // další varianta
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

  xhr.send(xhr.responseText);
}

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
    readline.close();
  } else {
  console.log(`Please enter a valid URL`);
  readline.close();
}});

} 

requestArtist();


