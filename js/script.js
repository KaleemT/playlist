/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["SAD", "1400/900 Freestyle", "A Lot", "Nonstop"];
var images = [
    "https://images.genius.com/cefcf70065cf258281a354367542be42.1000x1000x1.jpg",
    "https://images.genius.com/32e26bc4b852d45f2563e7928686843f.1000x1000x1.jpg",
    "https://images.genius.com/fdf55cd3f0aaf3b48e1437d99bdfbcd1.1000x1000x1.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Scorpion_by_Drake.jpg/220px-Scorpion_by_Drake.jpg"];
var artists = [



    
]

// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
