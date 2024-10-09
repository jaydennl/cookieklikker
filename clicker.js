// Initial nummer van cookies
var num = 0;

// Prompt for bakkerij naam and set it
window.onload = function () {
    var name = prompt("Welkom bij je eerste cookie bakkreij wat is je naam?");
    var space = document.getElementById("space");
    space.innerHTML = name + "'s Bakery";
};

// Cookie click logic
function cookieClick() {
    num++;

    var numbers = document.getElementById("numbers");
    var upgradeLevel = document.getElementById("upgradeLevel");

    numbers.innerHTML = num;

    // Automatische upgrades
    if (num >= 30 && num < 500) {
        num += 2;
        upgradeLevel.innerHTML = "Granny Level";
    } else if (num >= 200 && num < 1000) {
        num += 10;
        upgradeLevel.innerHTML = "fabriek Level";
    } else if (num >= 1150 && num < 100000) {
        num += 50;
        upgradeLevel.innerHTML = "boerderij Level";
    } else if (num >= 2500) {
        num += 150;
        upgradeLevel.innerHTML = "Robot Level";
    } else if (num >= 5000 && num < 1000000) {
        num += 1250;
        upgradeLevel.innerHTML = "Alien Cookies Level";
    } else if (num >= 10000 && num < 5000000) {
        num += 2250;
        upgradeLevel.innerHTML = "Intergalactic Bakery";
    } else if (num >= 25000 && num < 10000000) {
        num += 4500;
        upgradeLevel.innerHTML = "Dimensional Cookies";
    } else if (num >= 100000) {
        num += 10000;
        upgradeLevel.innerHTML = "Cosmic Cookie God";
    }
}

cookieButton.addEventListener('click', function () {
    score++; // verhoog score met 1
    scoreDisplay.textContent = score; // Update de score op het scherm
});