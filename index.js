const axios = require('axios').default;
const https = require('https');
const url = "https://api.spotify.com/artists/v1/";
var artistID;

var artistIDs = ["4NOFcRCgjvnRy8nKVGUM0L"] // steveruu artist URI
artistID = artistIDs[0]

var fullURL = url + artistID;
const token = '81622b79b05140edb4ae346de740b27c';

const options = {
  headers: {
    "Authorization": 'Bearer' + token
  }
};

async function request(){
  try {
    const res = await axios.get(fullURL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }});} 
    catch(err) {
      console.log(err);
  }
  console.log(this.res);
}


request();