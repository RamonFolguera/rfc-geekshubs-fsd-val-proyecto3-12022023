//Adding drums sound effect from Jumanji when hovering over the boardgame

const audioDiv = document.getElementById("drums-sound");
const boardGameBox = document.querySelectorAll(".box-flap");

let withMusicAnch = document.querySelector(".with-music");
let withoutMusicAnch = document.querySelector(".without-music");

const playSound = () => audioDiv.play();
const stopSound = () => audioDiv.pause();

const musicOn = () => {
console.log("music on");
    for(const boxFlap of boardGameBox) {
        boxFlap.addEventListener("mouseover", playSound);
        boxFlap.addEventListener("mouseout", stopSound);
    }
};

const musicOff = () => {
    console.log("music off");

    window.location.href = "./index.html";

};

withMusicAnch.addEventListener("click", musicOn);
withoutMusicAnch.addEventListener("click", musicOff);

