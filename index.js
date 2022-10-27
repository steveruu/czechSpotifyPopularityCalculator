const https = require('https');
const url = "https://api.spotify.com/artists/v1/";
var artistID;

var artistIDs = ["4NOFcRCgjvnRy8nKVGUM0L"] // steveruu artist URI
artistID = artistIDs[0]

var fullURL = url + artistID;
const token = 'af1a22f02ecc4371bec205f62966ebb9';

var options = {
    url: fullURL,
    method: 'GET',
    dataType: 'json',
    headers: {
        "Authorization": 'Bearer' + token // JÁ NEVIM JESTLI TO CHCE CLIENT ID NEBO CLIENT SECRET
    }   
};

https.get(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
