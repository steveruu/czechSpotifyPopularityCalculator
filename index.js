const axios = require('axios').default;
const XMLHttpRequest = require('xhr2');
const https = require('https');

const url = "https://api.spotify.com/artists/v1/";
var artistID;
var xhr = new XMLHttpRequest();
const refreshToken = "AQCysJzq9qXoarN2MSGsRLbkd76hDhMknH3E2L2A-_Qhdloa5jKVeISQjdjLeU7y0uc0QZTbgNt2KB5Lr9ty2zUZugLwQIBbd1vdjF8Bj4VljaqnCOiES1uiF_zZBHuqUh8dEP4-0_sqg4-IoFRD9_Q86w75JjicJPWOSl-KgaVNkP7IfbfXzJsGm00kHDHTBTWuR2whU1iT9K7GrmjfmI_J2AiMreFqmUzNH8FocnIK523ztECx9_eOFlSa-kFIbpXdUuZwPlmKNzFezwRcz7gKeCmon_xTOz2Ya3aoCXHMT7ZAiDz1k5MNCA5c0leljeu_BbCeunTtJ2RfCU5bUU5ZiG-c5532Tv9MVC4Bl0Ezyml5gDgCGJgh15sjAtDbAOZSrhIs6jyFBX6HtbEoiqvCFnC-ZrXVLaUBR_2FVAN0i4CpF2EMNfRe8GMWRKkWzs0PUt0EVejxoqaTOiC8WW8WzlQf1TqvM3V5cvMGUIDoxZeIPo95T9xuafQVVE3eAWWHFdANpKzZ6YNlF_rTTPyzVvtX2Yt-ssqC95y3-51oe9HYIQwf6MU82Qw54TQIqDKtBO3j5TpsP4DDfngZE11owirESehw30lG-u4DUUHT8QMxnjLTDWH4PfvZlW_jWFaBopPIsmxREnbk7ankN0BfNU1PtWFL0xsZkjzZfoGlaJHTmJ0yf1Qc0RTU5ffPTZCFa4H9pYCJrEiSRXuww_dQTmfKUod8X0jnPv_uV0qz427yl53qr04";

var artistIDs = ["4NOFcRCgjvnRy8nKVGUM0L"] // steveruu artist URI
artistID = artistIDs[0]

var fullURL = url + artistID;
const token = 'af1a22f02ecc4371bec205f62966ebb9';

function requestArtist() {
  xhr.open("GET", url);
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

  xhr.send();
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


swapToken();

