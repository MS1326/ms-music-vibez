



// Create a variable to track the currently playing song


let currentSong = null;
let currentIcon = null;

// Function to handle the play/pause logic for a song
function handlePlayPause(song, icon) {
    if (currentSong && currentSong !== song) {
        // Pause the currently playing song and reset its icon to play
        currentSong.pause();
        currentIcon.src = "image/play.png";
    }

    // Play or pause the selected song based on its current state
    if (song.paused) {
        song.play();
        icon.src = "image/pause.webp";
    } else {
        song.pause();
        icon.src = "image/play.png";
    }

    // Update the current song and icon
    currentSong = song;
    currentIcon = icon;
}

// Assign event listeners for all the songs and their respective icons
document.getElementById("icon1").onclick = function () { handlePlayPause(mysong1, icon1); };
document.getElementById("icon2").onclick = function () { handlePlayPause(mysong2, icon2); };
document.getElementById("icon3").onclick = function () { handlePlayPause(mysong3, icon3); };
document.getElementById("icon4").onclick = function () { handlePlayPause(mysong4, icon4); };
document.getElementById("icon5").onclick = function () { handlePlayPause(mysong5, icon5); };
document.getElementById("icon6").onclick = function () { handlePlayPause(mysong6, icon6); };
document.getElementById("icon7").onclick = function () { handlePlayPause(mysong7, icon7); };
document.getElementById("icon8").onclick = function () { handlePlayPause(mysong8, icon8); };
document.getElementById("icon9").onclick = function () { handlePlayPause(mysong9, icon9); };
document.getElementById("icon10").onclick = function () { handlePlayPause(mysong10, icon10); };
document.getElementById("icon11").onclick = function () { handlePlayPause(mysong11, icon11); };
document.getElementById("icon12").onclick = function () { handlePlayPause(mysong12, icon12); };
document.getElementById("icon13").onclick = function () { handlePlayPause(mysong13, icon13); };
document.getElementById("icon14").onclick = function () { handlePlayPause(mysong14, icon14); };
document.getElementById("icon15").onclick = function () { handlePlayPause(mysong15, icon15); };
document.getElementById("icon16").onclick = function () { handlePlayPause(mysong16, icon16); };
document.getElementById("icon17").onclick = function () { handlePlayPause(mysong17, icon17); };
document.getElementById("icon18").onclick = function () { handlePlayPause(mysong18, icon18); };
document.getElementById("icon19").onclick = function () { handlePlayPause(mysong19, icon19); };
document.getElementById("icon20").onclick = function () { handlePlayPause(mysong20, icon20); };
document.getElementById("icon21").onclick = function () { handlePlayPause(mysong21, icon21); };

