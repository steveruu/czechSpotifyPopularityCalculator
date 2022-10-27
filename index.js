const axios = require('axios').default;
const XMLHttpRequest = require('xhr2');
const https = require('https');
const url = "https://api.spotify.com/artists/v1/";
var artistID;
var xhr = new XMLHttpRequest();

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

