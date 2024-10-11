class BakeryGame {
    constructor() {
        this.num = 0;
        this.clickBonus = 0;
        this.upgrades = {};
    }

    cookieClick() {
        this.num += 1 + this.clickBonus;
        this.updateUI();
        this.enableUpgradeButtons();
    }

    updateUI() {
        document.getElementById("numbers").innerHTML = this.num;
    }

    enableUpgradeButtons() {
        for (let key in this.upgrades) {
            const upgrade = this.upgrades[key];
            const button = document.getElementById(upgrade.buttonId);
            button.disabled = this.num < upgrade.cost;
        }
    }

    addUpgrade(upgrade) {
        this.upgrades[upgrade.name] = upgrade;
    }
}

class Upgrade {
    constructor(name, cost, bonus, costIncreaseFactor, buttonId, displayCountId) {
        this.name = name;
        this.count = 0;
        this.cost = cost;
        this.bonus = bonus;
        this.costIncreaseFactor = costIncreaseFactor;
        this.buttonId = buttonId;
        this.displayCountId = displayCountId;
    }

    activate(game) {
        if (game.num >= this.cost) {
            game.num -= this.cost;
            this.count++;
            this.cost = Math.floor(this.cost * this.costIncreaseFactor);
            game.clickBonus += this.bonus;
            game.updateUI();
            document.getElementById(this.displayCountId).innerHTML = this.count;
            document.getElementById(this.buttonId).innerHTML = `${this.name} Upgrade (${this.cost} Cookies)`;
        }
    }
}

const game = new BakeryGame();

const grannyUpgrade = new Upgrade('Granny', 30, 3, 1.2, 'grannyUpgrade', 'grannyCount');
const factoryUpgrade = new Upgrade('Factory', 100, 10, 1.3, 'factoryUpgrade', 'factoryCount');
const farmUpgrade = new Upgrade('Farm', 200, 30, 1.4, 'farmUpgrade', 'farmCount');
const robotUpgrade = new Upgrade('Robot', 500, 100, 1.5, 'robotUpgrade', 'robotCount');
const cosmischeUpgrade = new Upgrade('Cosmische', 1000, 200, 1.6, 'cosmischeUpgrade', 'cosmischeCount');

game.addUpgrade(grannyUpgrade);
game.addUpgrade(factoryUpgrade);
game.addUpgrade(farmUpgrade);
game.addUpgrade(robotUpgrade);
game.addUpgrade(cosmischeUpgrade);

window.onload = function () {
    const name = prompt("What is your name?");
    document.getElementById("space").innerHTML = `${name}'s Bakery`;
};

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

document.getElementById("cookie").onclick = function () {
    game.cookieClick();
};
