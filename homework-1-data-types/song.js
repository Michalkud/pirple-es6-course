/**
 * Title: This file holds informations in variables of different types, about my favorite song
 * 
 * Author: Michal Kudrnac
 */

// Name of artist
var artist = "Jimi Hendrix Experience";
// Genre of the song
var genre = "Rock";
// Duration of the song in seconds
var durationInSeconds = 400;
var isArtistAlive = false;
// Song name
var songName = "All along the watchtower";
// Band members
var bandMembers = ["Mitch Mitchell", "Noel Redding", "Billy Cox", "The Jimi Hendrix"];

/**
 * Meta informations about song */
var songMetaInformations = {
  originalArtist: "Bob Dylan",
  released: 1968,
  recorded: "November 6, 1967",
  tellMeMoreInfo: function() {
    console.log(songName + " was released at " + this.released + " and written and recorded by American singer-songwriter " + this.originalArtist);
  }
}



// Console logs of variables which contains informations about my favorite song
console.log(artist);
console.log(genre);
console.log(durationInSeconds);
console.log(isArtistAlive);
console.log(bandMembers);
console.log(songMetaInformations);

// Call function stored in songMetaInformations object key
songMetaInformations.tellMeMoreInfo();



