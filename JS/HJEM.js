 
  
 
 // Get the video element and the control buttons
 const video = document.getElementById("videoPlayer");
 const playBtn = document.getElementById("playBtn");
 const pauseBtn = document.getElementById("pauseBtn");
 const skipBtn = document.getElementById("skipBtn");

 // Add event listeners to the buttons
 playBtn.addEventListener("click", () => {
   if (video.paused) {
     video.play();
   }
 });

 pauseBtn.addEventListener("click", () => {
   video.pause();
 });

 skipBtn.addEventListener("click", () => {
   video.currentTime += 10; // Skip 10 seconds, adjust as needed
 });

 // Add event listener to check if the video is loaded
 video.addEventListener("loadedmetadata", () => {
   playBtn.disabled = false; // Enable the play button
 });
  