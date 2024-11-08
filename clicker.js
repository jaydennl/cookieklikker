class BakeryGame {
    constructor() {
        this.num = 0; // Totaal aantal koekjes
        this.clickBonus = 0; // Totaal bonus van upgrades
        this.totalCPS = 0; // Koekjes per seconde van auto-clickers
        this.upgrades = {}; // Opslag voor alle upgrades
        this.autoClickerCounts = Array(8).fill(0); // Aantal per auto-clicker
        this.autoClickerCosts = [100, 500, 1000, 2000, 5000, 10000, 20000, 50000];
        this.autoClickerCPS = [1, 5, 10, 20, 50, 100, 200, 500]; // CPS voor elke auto-clicker

        // Start automatische koekjesgeneratie per seconde
        setInterval(() => this.generateAutoCookies(), 1000);
    }

    // Koekje klikken
    cookieClick() {
        this.num += 1 + this.clickBonus;
        this.updateUI();
        this.enableUpgradeButtons();
    }

    // Update de weergave van het aantal koekjes
    updateUI() {
        document.getElementById("numbers").innerHTML = this.num;
    }

    // Schakel upgrade-knoppen in op basis van het huidige aantal koekjes
    enableUpgradeButtons() {
        for (let key in this.upgrades) {
            const upgrade = this.upgrades[key];
            const button = document.getElementById(upgrade.buttonId);
            button.disabled = this.num < upgrade.cost;
        }
    }

    // Voeg upgrade toe aan het spel
    addUpgrade(upgrade) {
        this.upgrades[upgrade.name] = upgrade;
    }

    // Automatisch koekjes genereren op basis van CPS
    generateAutoCookies() {
        this.num += this.totalCPS;
        this.updateUI();
    }

    // Auto-clicker aanschaffen
    buyAutoClicker(clickerNumber) {
        const index = clickerNumber - 1;
        if (this.num >= this.autoClickerCosts[index]) {
            this.num -= this.autoClickerCosts[index];
            this.autoClickerCounts[index]++;
            this.totalCPS += this.autoClickerCPS[index];
            this.autoClickerCosts[index] = Math.floor(this.autoClickerCosts[index] * 1.5);
            this.updateUI();
            document.getElementById(`autoClicker${clickerNumber}Count`).innerHTML = this.autoClickerCounts[index];
            document.getElementById(`autoClicker${clickerNumber}`).innerHTML = `Auto Clicker ${clickerNumber} (${this.autoClickerCosts[index]} Cookies)`;
        }
    }
}

// Upgrade class voor upgrades
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

    // Upgrade activeren en bonus verhogen
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

// Initialiseer het spel
const game = new BakeryGame();

// Stel alle upgrades in
const grannyUpgrade = new Upgrade('Granny', 30, 3, 1.2, 'grannyUpgrade', 'grannyCount');
const factoryUpgrade = new Upgrade('Factory', 100, 10, 1.3, 'factoryUpgrade', 'factoryCount');
const farmUpgrade = new Upgrade('Farm', 200, 30, 1.4, 'farmUpgrade', 'farmCount');
const robotUpgrade = new Upgrade('Robot', 500, 100, 1.5, 'robotUpgrade', 'robotCount');
const cosmischeUpgrade = new Upgrade('Cosmische', 1000, 200, 1.6, 'cosmischeUpgrade', 'cosmischeCount');

// Voeg upgrades toe aan het spel
game.addUpgrade(grannyUpgrade);
game.addUpgrade(factoryUpgrade);
game.addUpgrade(farmUpgrade);
game.addUpgrade(robotUpgrade);
game.addUpgrade(cosmischeUpgrade);

// Functie voor het instellen van de naam van de bakkerij en het starten van het spel
window.onload = function () {
    const name = prompt("What is your name?");
    document.getElementById("space").innerHTML = `${name}'s Bakery`;

    // Bind evenementen aan upgrades en auto-clickers
    document.getElementById("grannyUpgrade").onclick = () => grannyUpgrade.activate(game);
    document.getElementById("factoryUpgrade").onclick = () => factoryUpgrade.activate(game);
    document.getElementById("farmUpgrade").onclick = () => farmUpgrade.activate(game);
    document.getElementById("robotUpgrade").onclick = () => robotUpgrade.activate(game);
    document.getElementById("cosmischeUpgrade").onclick = () => cosmischeUpgrade.activate(game);

    for (let i = 1; i <= 8; i++) {
        document.getElementById(`autoClicker${i}`).onclick = () => game.buyAutoClicker(i);
    }

    // Bind de klikactie aan het cookie-element
    document.getElementById("cookie").onclick = () => game.cookieClick();
};

// Initial aantal cookies
let cookies = 0;

// Aantal voor verschillende upgrades
let grannyCount = 0;
let factoryCount = 0;
let farmCount = 0;
let robotCount = 0;
let cosmischeCount = 0;

let autoClicker1Count = 0;
let autoClicker2Count = 0;
// Voeg meer auto-clicker counts toe als nodig

// Update de Modes-tekst
function updateModeText(upgradeName) {
    const modeElement = document.getElementById("modes");
    modeElement.innerText = upgradeName;
}

// Voorbeeld functies om upgrades te kopen
function buyGrannyUpgrade() {
    if (cookies >= 30) {
        cookies -= 30;
        grannyCount++;
        document.getElementById("grannyCount").innerText = grannyCount;
        updateModeText("Granny Upgrade");
    }
}

function buyFactoryUpgrade() {
    if (cookies >= 100) {
        cookies -= 100;
        factoryCount++;
        document.getElementById("factoryCount").innerText = factoryCount;
        updateModeText("Factory Upgrade");
    }
}

// Auto-clicker voorbeeld
function buyAutoClicker(level) {
    let cost;
    let countElement;
    let newText;

    switch (level) {
        case 1:
            cost = 100;
            countElement = document.getElementById("autoClicker1Count");
            newText = "Auto Clicker 1";
            break;
        case 2:
            cost = 500;
            countElement = document.getElementById("autoClicker2Count");
            newText = "Auto Clicker 2";
            break;
        // Voeg meer cases toe voor andere auto-clicker levels
    }

    if (cookies >= cost) {
        cookies -= cost;
        if (level === 1) autoClicker1Count++;
        if (level === 2) autoClicker2Count++;
        countElement.innerText = (level === 1 ? autoClicker1Count : autoClicker2Count);
        updateModeText(newText);
    }
}

// Reset of fallback naar standaard tekst als alle upgrades weg zijn
function resetModeText() {
    const modeElement = document.getElementById("modes");
    modeElement.innerText = "Modes";
}
