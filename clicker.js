// Initial number of cookies
var num = 0;

// Prompt for bakery name and set it
window.onload = function () {
    var name = prompt("What is your name?");
    var space = document.getElementById("space");
    space.innerHTML = name + "'s Bakery";
};

// Cookie click logic
function cookieClick() {
    num++;

    var numbers = document.getElementById("numbers");
    var upgradeLevel = document.getElementById("upgradeLevel");

    numbers.innerHTML = num;

    // Automatic upgrades
    if (num >= 30 && num < 500) {
        num += 2;
        upgradeLevel.innerHTML = "Granny Level";
    } else if (num >= 500 && num < 1000) {
        num += 10;
        upgradeLevel.innerHTML = "Factory Level";
    } else if (num >= 1000 && num < 100000) {
        num += 30;
        upgradeLevel.innerHTML = "Plant Level";
    } else if (num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Super-Plant Level";
    }
}
cookieButton.addEventListener('click', function() {
  score++;  // Increment score by 1
  scoreDisplay.textContent = score;  // Update the score on the screen
});