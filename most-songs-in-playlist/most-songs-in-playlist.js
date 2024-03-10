// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let sum = 0;
  let songs = []
  let max = 60;
  
  arr.sort((a,b) => a-b);
  for (var i =0;i<arr.length;i++) {
    sum += arr[i];
    if (sum < max) {
      songs.push(arr[i])
    }
  }
  return songs.length;
};
