// require axios
var axios = require("axios");
// require dotenv
require("dotenv").config();
// require my key.js file
var keys = require("./keys.js");
//create a variable for using spotify api
// var spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// create a variable for when the user enters commands
var concert = (process.argv[2] == "concert-this");
var artist = (process.argv[2] == "spotify-this-song");

if (concert === process.argv[2]) {
    // send a request to axios to get venue, location, and date of the event
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (responce) {
        console.log(response);

    });
    // send a request to get the spotify information about a artist
    if (artist = process.argv[2]) {
        axios.get("https:api.spotify.com/trilogy" + artist).then(function (response)) {
            console.log(response);
        }
    }
};