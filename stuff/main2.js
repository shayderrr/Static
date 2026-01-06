/* 
if you are gonna skid this please credit me! - frogiee1
*/

let titleText = "frogiee.one";
let opacity = 0;
let fadeIn = true;
let delay = 0.007;

function updateTitle() {
    let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
    document.title = displayText;

    if (fadeIn) {
        opacity += delay;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= delay;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }

    requestAnimationFrame(updateTitle);
}

document.getElementById('enter-popup').addEventListener('click', function() {
    let enterPopup = document.getElementById('enter-popup');
    let enterSound = document.getElementById('enter-sound');

    enterSound.play();
    enterPopup.style.transition = 'all 0.3s ease';
    enterPopup.style.opacity = '0';
    setTimeout(() => {
        enterPopup.style.display = 'none';
    }, 500); 

    requestAnimationFrame(updateTitle);
});

const textElement = document.getElementById("text");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("enter-sound");
const phrases = [
    "",
    "ummmmm", 
    "ummmmm well", 
    "ummmmm well you", 
    "ummmmm well you shouldn't", 
    "ummmmm well you shouldn't say", 
    "ummmmm well you shouldn't say that"
];
const delays = [0, 0.4, 0.2, 0.2, 0.3, 0.3, 0.01];

audio.addEventListener("play", () => {
    let i = 0;
    overlay.style.opacity = "1";
    function updateText() {
        if (i < phrases.length) {
            textElement.textContent = phrases[i];
            setTimeout(updateText, delays[i] * 1000);
            i++;
        } else {
            setTimeout(() => {
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = 'none';
                    }, 500); 
            }, 500);
        }
    }
    updateText();
});



























/* 
if you are gonna skid this please credit me! - frogiee1
*/