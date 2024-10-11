// BakeryGame class to manage the game state
class BakeryGame {
    constructor() {
        this.num = 0;  // Total number of cookies
        this.clickBonus = 0;  // Total bonus from upgrades
        this.upgrades = {};  // Store for all upgrade instances
    }

    // Method to handle cookies clicks
    cookieClick() {
        this.num += 1 + this.clickBonus;  // Add base 1 cookie + bonuses
        this.updateUI();
        this.enableUpgradeButtons();
    }

    // Method to update the UI with the current cookie count
    updateUI() {
        document.getElementById("numbers").innerHTML = this.num;
    }

    // Enable upgrade buttons based on current cookie count
    enableUpgradeButtons() {
        for (let key in this.upgrades) {
            const upgrade = this.upgrades[key];
            const button = document.getElementById(upgrade.buttonId);
            button.disabled = this.num < upgrade.cost;
        }
    }

    // Add upgrade to the game
    addUpgrade(upgrade) {
        this.upgrades[upgrade.name] = upgrade;
    }
}

// Upgrade class to manage each upgrade's properties and methods
class Upgrade {
    constructor(name, cost, bonus, costIncreaseFactor, buttonId, displayCountId) {
        this.name = name;  // Upgrade name
        this.count = 0;  // Number of times upgrade purchased
        this.cost = cost;  // Initial cost of the upgrade
        this.bonus = bonus;  // Cookies per click bonus for this upgrade
        this.costIncreaseFactor = costIncreaseFactor;  // Cost multiplier for each purchase
        this.buttonId = buttonId;  // The ID of the button in the HTML
        this.displayCountId = displayCountId;  // The ID to display the count in the UI
    }

    // Method to activate the upgrade and increase the bonus
    activate(game) {
        if (game.num >= this.cost) {
            game.num -= this.cost;  // Deduct cost from total cookies
            this.count++;  // Increase upgrade count
            this.cost = Math.floor(this.cost * this.costIncreaseFactor);  // Increase cost

            // Add the bonus from this upgrade to the total click bonus
            game.clickBonus += this.bonus;

            // Update the UI
            game.updateUI();
            document.getElementById(this.displayCountId).innerHTML = this.count;
            document.getElementById(this.buttonId).innerHTML = `${this.name} Upgrade (${this.cost} Cookies)`;
        }
    }
}

// Initialize the game
const game = new BakeryGame();

// Set up all upgrades
const grannyUpgrade = new Upgrade('Granny', 30, 3, 1.2, 'grannyUpgrade', 'grannyCount');
const factoryUpgrade = new Upgrade('Factory', 100, 10, 1.3, 'factoryUpgrade', 'factoryCount');
const farmUpgrade = new Upgrade('Farm', 200, 30, 1.4, 'farmUpgrade', 'farmCount');
const robotUpgrade = new Upgrade('Robot', 500, 100, 1.5, 'robotUpgrade', 'robotCount');
const cosmischeUpgrade = new Upgrade('Cosmische', 1000, 200, 1.6, 'cosmischeUpgrade', 'cosmischeCount');

// Add upgrades to the game
game.addUpgrade(grannyUpgrade);
game.addUpgrade(factoryUpgrade);
game.addUpgrade(farmUpgrade);
game.addUpgrade(robotUpgrade);
game.addUpgrade(cosmischeUpgrade);

// Function for setting bakery name on load
window.onload = function () {
    const name = prompt("What is your name?");
    document.getElementById("space").innerHTML = `${name}'s Bakery`;
};

// Attach upgrade activation to buttons
document.getElementById("grannyUpgrade").onclick = function () {
    grannyUpgrade.activate(game);
};

document.getElementById("factoryUpgrade").onclick = function () {
    factoryUpgrade.activate(game);
};

document.getElementById("farmUpgrade").onclick = function () {
    farmUpgrade.activate(game);
};

document.getElementById("robotUpgrade").onclick = function () {
    robotUpgrade.activate(game);
};

document.getElementById("cosmischeUpgrade").onclick = function () {
    cosmischeUpgrade.activate(game);
};

// Attach cookie click to main cookie button
document.getElementById("cookie").onclick = function () {
    game.cookieClick();
};